import { InfoBoxProps } from "src/components/infobox/InfoBox";
import { css } from "styled-components";

export const getShapeStyle = (shape: InfoBoxProps["shape"]) => {
  switch (shape) {
    case "square":
      return css`
        border-radius: 0;
      `;
    default:
      return css`
        border-radius: 4px;
      `;
  }
};
