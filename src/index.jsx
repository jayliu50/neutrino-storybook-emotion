import React from "react";
import { render } from "react-dom";
import Example from "./components/Example";
import EmotionGlobal from "./EmotionGlobal";

render(
  <>
    <EmotionGlobal></EmotionGlobal>
    <Example />
  </>,
  document.getElementById("root")
);
