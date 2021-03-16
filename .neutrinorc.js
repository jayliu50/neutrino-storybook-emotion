const standardjs = require("@neutrinojs/standardjs");
const reactComponents = require("@neutrinojs/react-components");
const jest = require("@neutrinojs/jest");
const storybook = require("neutrino-preset-storybook-react");

const thisWebpack = require('./webpack.config');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    // standardjs(), // TODO: uncomment if you want linting
    reactComponents(),
    jest(),
    storybook({
      babel: async (options) => ({
        plugins: [
          [
            "@emotion",
            {
              // sourceMap is on by default but source maps are dead code eliminated in production
              sourceMap: true,
              autoLabel: "dev-only",
              labelFormat: "[local]",
              cssPropOptimization: true,
            },
          ],
        ],
      }),
      stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
      ],
      addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
      webpackFinal: (config) => {
        return {...config, module: {...config.module, rules: thisWebpack.module.rules}}
      }
    }),
  ],
};
