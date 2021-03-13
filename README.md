# Neutrino Storybook Emotion

Configuration that tries to tie in Neutrino, Storybook, and Emotion while preserving the example files as much as possible.

The `<Button>` example from Storybook was used to test integration, and underwent the most change. See Steps to create this repo, below.

**Note on esList:** Linting was disabled because the out-of-box Storybook example stories did not conform to linting, resulting in build errors.


# Development

## Steps to create this repo

1. Installed a new [NeutrinoJS Project][1]: `yarn create @neutrinojs/project neutrino-storybook-emotion`
   1. Chose `Components`, `Jest`, `StandardJS rules`
2. Install [Storybook][2]: `npx sb init`
3. Follow instructions on how to install [Neutrino preset for Storybook with React][3]
   1. `yarn add -D neutrino-preset-storybook-react`
   2. Move `.storybook/main.js` configuration to `.neutrinorc.js`, and add `require(neutrino-preset-storybook-react)`
4. Run `yarn list --pattern "@storybook/react"` to make sure dependency versions match between current project and `neutrino-preset-storybook-react`. Added `resolution` in `package.json`. (Flushed `node_modules` and `yarn.lock` just in case.)
5. Example Adaptation focused on `<Button>`
   1. In `src/components/Example`, refer to the Storybook example component `<Button>` rather than plain `<button>`
   2. Update `<Button>` styling to come through emotion rather than css.




[1]: https://neutrinojs.org/packages/react-components/
[2]: https://storybook.js.org/docs/react/get-started/install
[3]: https://www.npmjs.com/package/neutrino-preset-storybook-react


## Notes on Dependencies

### Node v14


warning @storybook/react > webpack > watchpack > watchpack-chokidar2 > chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.

warning @storybook/react > webpack > watchpack > watchpack-chokidar2 > chokidar > fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.