// style
import { ButtonProps } from "src/components/button/Button";
import { css } from "styled-components";

// 아이콘 혼합 사용 시, 아이콘 위치
export const getPositionStyle = (position: ButtonProps["position"]) => {
  switch (position) {
    case "right":
      return css`
        flex-direction: row-reverse;
      `;
    default:
      return css`
        flex-direction: row;
      `;
  }
};
