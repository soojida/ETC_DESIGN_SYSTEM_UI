import { TooltipProps } from "src/components/tooltip/Tooltip";
import { css } from "styled-components";
import { transparentize } from "polished";

export const getDirectionStyle = (direction: TooltipProps["direction"]) => {
  return css`
    ${({ theme, background, shape, opacity }: any) => {
      const bgOpacity = 1 - opacity;
      const bgColor =
        background === "black"
          ? transparentize(bgOpacity, theme.color.gray900)
          : theme.color.white;
      // shape 이 round20 일 경우, arrow border-width 값 변경
      const width = shape === "round20" ? "6px" : "5px";

      switch (direction) {
        case "left":
          return `
            top: 50%;
            right: 100%; /* 툴팁이 타겟 왼쪽에 나타나도록 */
            transform: translateY(-50%) translateX(-10px);

            &:after {
              right: -5px;
              top: 50%;
              transform: translateY(-50%);
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              border-left: ${width} solid ${bgColor};
            }
          `;
        case "top":
          return `  
            bottom: 100%; /* 툴팁이 타겟 위에 나타나도록 */
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
            
            &:after {
              left: 50%;
              bottom: -5px;
              transform: translateX(-50%);
              border: 5px solid transparent;
              border-bottom: 0;
              border-top:  5px solid ${bgColor};
            }`;
        case "right":
          return `
            top: 50%;
            left: 100%; /* 툴팁이 타겟 오른쪽에 나타나도록 */
            transform: translateY(-50%) translateX(10px);
            
            &:after {
              left: -5px;
              top: 50%;
              transform: translateY(-50%);
              border-top: 5px solid transparent;
              border-bottom: 5px solid transparent;
              border-right: ${width} solid ${bgColor};
            }
          `;
        case "bottom":
          return `
            top: 100%; /* 툴팁이 타겟 아래에 나타나도록 */
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            
            &:after {
              left: 50%;
              top: -5px;
              transform: translateX(-50%);
              border: 5px solid transparent;
              border-top: 0;
              border-bottom:  5px solid ${bgColor};
            }`;
        default:
          return css`
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
          `;
      }
    }}
  `;
};
