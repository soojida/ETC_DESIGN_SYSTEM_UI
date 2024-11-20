// style
import { ButtonProps } from "src/components/button/Button";
import { css } from "styled-components";

// 버튼 모양
export const getShapeStyle = (shape: ButtonProps["shape"]) => {
  switch (shape) {
    case "round50":
      return css`
        border-radius: 50%;
      `;
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
