# Neutrino Storybook Emotion

STATUS: BROKEN / WIP

Configuration that tries to tie in Neutrino, Storybook, and Emotion while preserving the example files as much as possible.

Note: The `<Button>` example from Storybook was used to test integration, and underwent the most change. See Steps to create this repo, below.

Emotion has been configured both to have global and local styles.

**Note on esList:** Linting was disabled because the out-of-box Storybook example stories did not conform to linting, resulting in build errors. You might want to consider re-enabling the linting in `.neutrinorc.js` after clearing out the example files.

# Development

## Steps to create this repo

1. Installed a new [NeutrinoJS Project][1]: `yarn create @neutrinojs/project neutrino-storybook-emotion`
   1. Chose `Components`, `Jest`, `StandardJS rules`
2. Install [Storybook][2]: `npx sb init`
3. Follow instructions on how to install [Neutrino preset for Storybook with React][3]
   1. `yarn add -D neutrino-preset-storybook-react`
   2. Move `.storybook/main.js` configuration to `.neutrinorc.js`, and add `require(neutrino-preset-storybook-react)`
4. Run `yarn list --pattern "@storybook/react"` to make sure dependency versions match between current project and `neutrino-preset-storybook-react`. Added `resolution` in `package.json`. (Flushed `node_modules` and `yarn.lock` just in case.)
5. Run `yarn add @emotion/react @emotion/styled` as per the [Emotion Docs][4]. `@emotion/styled` was added for flexibility in Emotion syntax.
6. Example adaptation focused on `<Button>`
   1. In `src/components/Example`, refer to the Storybook example component `<Button>` rather than plain `<button>`
   2. Update `<Button>` styling to come through emotion rather than css.
      1. Put part of the style definition in `<Button></Button>` inline
      2. Put the rest of the styling definition in `EmotionGlobal.jsx`. This is so that both Storybook and the app can have access to it.
      3. Added `<EmotionGlobal>` as [decorator][5] in `.storybook/preview.js`
7. Enable Emotion from within Storybook required doing manuall config (maybe in the future [neutrino-preset-emotion](https://github.com/nwaywood/neutrino-preset-emotion/issues/1) will update).
   1. `yarn add --dev @emotion/babel-plugin`
   2.
8. Install Prettier [according to their docs][99]:
   1. `yarn add --dev --exact prettier`

Unresolved
- Not sure why .storybook/preview.jsx doesn't compile to JSX. I thought storybook was working.
- do I use .babelrc? or should I be passing in something to the neutrino-storybook middleware?

Currently viewing
https://duncanleung.com/emotion-css-prop-jsx-pragma-storybook/



[1]: https://neutrinojs.org/packages/react-components/
[2]: https://storybook.js.org/docs/react/get-started/install
[3]: https://www.npmjs.com/package/neutrino-preset-storybook-react
[4]: https://emotion.sh/docs/install
[5]: https://storybook.js.org/docs/react/writing-stories/decorators
[6]: https://emotion.sh/docs/install#with-emotionbabel-plugin
[7]: https://storybook.js.org/docs/react/configure/webpack
[99]: https://prettier.io/docs/en/install.html

## Notes on Dependencies

### Node v14

warning @storybook/react > webpack > watchpack > watchpack-chokidar2 > chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.

warning @storybook/react > webpack > watchpack > watchpack-chokidar2 > chokidar > fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
