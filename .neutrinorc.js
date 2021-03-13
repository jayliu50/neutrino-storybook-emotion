const standardjs = require('@neutrinojs/standardjs');
const reactComponents = require('@neutrinojs/react-components');
const jest = require('@neutrinojs/jest');
const storybook = require("neutrino-preset-storybook-react");

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    // standardjs(), // enable if you want linting
    reactComponents(),
    jest(),
    storybook(
      ({
        stories: [
          "../src/**/*.stories.mdx",
          "../src/**/*.stories.@(js|jsx|ts|tsx)",
        ],
        addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
      })
    ),
  ],
};
