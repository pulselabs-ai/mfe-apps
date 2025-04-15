const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
require("dotenv").config();

const filesToExclude = ["react-app-env.d.ts", "index.tsx", "bootstrap.tsx"]; // Add any files you want to exclude from the check

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (
        (file.endsWith(".jsx") ||
          file.endsWith(".tsx") ||
          file.endsWith(".js") ||
          file.endsWith(".ts") ||
          file.endsWith(".css") ||
          file.endsWith(".scss")) &&
        !filesToExclude.includes(file)
      ) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

function checkComponentPrefix(directoryPath, expectedPrefix) {
  try {
    const componentFiles = getAllFiles(directoryPath);

    if (componentFiles.length === 0) {
      console.log("No React component files found.");
      return;
    }

    const fileNames = componentFiles.map((file) => path.parse(file).name);

    console.clear();
    console.log("\n=== Component Prefix Check ===\n");

    const invalidFiles = fileNames.filter(
      (name) => !name.startsWith(expectedPrefix),
    );

    if (invalidFiles.length === 0) {
      console.log(
        "\x1b[32m%s\x1b[0m",
        `✓ All components have the correct prefix: "${expectedPrefix}"`,
      );
      console.log("\nFiles with correct prefix:");
      componentFiles.forEach((file) => {
        const relativePath = path.relative(directoryPath, file);
        console.log(`- ${relativePath}`);
      });
    } else {
      console.log("\x1b[41m%s\x1b[0m", " ERROR: PREFIX MISMATCH ");
      console.log(
        "\x1b[31m%s\x1b[0m",
        "\n⚠️  The following files need to be fixed:",
      );
      componentFiles.forEach((file) => {
        const fileName = path.parse(file).name;
        if (invalidFiles.includes(fileName)) {
          const relativePath = path.relative(directoryPath, file);
          console.log("\x1b[31m%s\x1b[0m", `- ${relativePath}`);
        }
      });
      throw new Error(
        `Components must share a common prefix i.e. "${expectedPrefix}"`,
      );
    }
  } catch (error) {
    console.error("\nError:", error.message);
    process.exit(1); // Exit with error code
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const watchMode = args.includes("--watch");
const expectedPrefix = process.env.REACT_APP_COMPONENT_PREFIX;

if (!expectedPrefix) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    "Error: REACT_APP_COMPONENT_PREFIX environment variable is not set",
  );
  process.exit(1);
}

const directoryPath =
  args.filter((arg) => !arg.startsWith("--"))[0] || "./src/";

if (watchMode) {
  console.log(`Watching for changes in: ${directoryPath}`);

  let isValid = checkComponentPrefix(directoryPath, expectedPrefix);

  setInterval(() => {
    if (!isValid) {
      console.log(
        "\n\x1b[41m%s\x1b[0m",
        ` WARNING: Components must start with "${expectedPrefix}" `,
      );
    }
  }, 10000);

  const watcher = chokidar.watch(directoryPath, {
    ignored: /(^|[\\/\\])\../,
    persistent: true,
  });

  watcher
    .on("add", () => {
      isValid = checkComponentPrefix(directoryPath, expectedPrefix);
    })
    .on("unlink", () => {
      isValid = checkComponentPrefix(directoryPath, expectedPrefix);
    })
    .on("change", () => {
      isValid = checkComponentPrefix(directoryPath, expectedPrefix);
    });
} else {
  checkComponentPrefix(directoryPath, expectedPrefix);
}
