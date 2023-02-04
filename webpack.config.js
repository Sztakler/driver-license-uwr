const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const { createAllLoaders } = require("@expo/webpack-config/loaders");

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules = [
    // Enable svgr in web build.
    {
      oneOf: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "@svgr/webpack",
            },
          ],
        },
      ].concat(createAllLoaders(env)),
    },
  ];

  // Finally return the new config for the CLI to use.
  return config;
};