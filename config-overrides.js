const { ModuleFederationPlugin } = require("webpack").container;
const fs = require("fs");
const path = require("path");

module.exports = function override(config) {
  const mfConfigPath = path.resolve(__dirname, "moduleFederation.config.ts");

  if (fs.existsSync(mfConfigPath)) {
    const mfConfig = require(mfConfigPath);
    config.plugins.push(new ModuleFederationPlugin(mfConfig));
    config.output.publicPath = "auto";
  }

  return config;
};
