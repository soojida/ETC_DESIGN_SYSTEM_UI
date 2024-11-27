// style
import { css } from "styled-components";
import { TooltipProps } from "src/components/tooltip/Tooltip";
import { transparentize } from "polished";

export const getBackgroundStyle = (background: TooltipProps["background"]) => {
  return css`
    ${({ theme, opacity }: any) => {
      const bgOpacity = 1 - opacity;
      const bgColor =
        background === "black"
          ? transparentize(bgOpacity, theme.color.gray900)
          : theme.color.white;
      const textColor = theme.color.white;

      switch (background) {
        case "white":
          return `
      background: ${bgColor};
      filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
    `;
        case "black":
          return `
      color: ${textColor};
      background: ${bgColor};
    `;
        default:
          return ``;
      }
    }}
  `;
};
