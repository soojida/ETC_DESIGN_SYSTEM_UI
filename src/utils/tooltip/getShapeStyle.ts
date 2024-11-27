import { TooltipProps } from "src/components/tooltip/Tooltip";
import { css } from "styled-components";

export const getShapeStyle = (shape: TooltipProps["shape"]) => {
  switch (shape) {
    case "square":
      return css`
        border-radius: 0;
      `;
    case "round20":
      return css`
        padding: 6px 12px;
        border-radius: 20px;
      `;
    default:
      return css`
        border-radius: 4px;
      `;
  }
};
