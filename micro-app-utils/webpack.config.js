const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "test",
    projectName: "micro-app-utils",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
