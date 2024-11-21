// style
import { TabProps } from "src/components/tab/Tab";
import { css } from "styled-components";

// 버튼 모양
export const getShapeStyle = (shape: TabProps["shape"]) => {
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
