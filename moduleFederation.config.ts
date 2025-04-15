let { dependencies } = require("./package.json");

module.exports = {
  name: "microFrontendBase",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./MicrofrontendRoutes": "./src/components/routes/MfaRouter.tsx",
    "./MicrofrontendReducers": "./src/store/slices",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: "react",
      shareScope: "default",
      requiredVersion: dependencies.react,
      eager: true,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "react-redux": {
      singleton: true,
      requiredVersion: dependencies["react-redux"],
      import: "react-redux",
      shareScope: "default",
    },
  },
};
