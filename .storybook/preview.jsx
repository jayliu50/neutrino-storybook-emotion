import EmotionGlobal from "../src/EmotionGlobal";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <>
      <EmotionGlobal />
      <Story />
    </>
  ),
];
