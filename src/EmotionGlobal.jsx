import React from "react";
import { Global, css } from "@emotion/react";

// NOTE: the following to illustrate usage of Global, and not necessarily to illustrate good CSS practice.
const EmotionGlobal = ({}) => (
  <Global
    styles={css`
      .storybook-button--primary {
        color: white;
        background-color: #1ea7fd;
      }
      .storybook-button--secondary {
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      }
      .storybook-button--small {
        font-size: 12px;
        padding: 10px 16px;
      }
      .storybook-button--medium {
        font-size: 14px;
        padding: 11px 20px;
      }
      .storybook-button--large {
        font-size: 16px;
        padding: 12px 24px;
      }
    `}
  ></Global>
);

export default EmotionGlobal;
