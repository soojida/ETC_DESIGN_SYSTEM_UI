// style
import { ButtonProps } from "src/components/button/Button";
import { css } from "styled-components";

// 아이콘 단독 사용시, 버튼 사이즈
export const getIconSizeStyle = (size: ButtonProps["size"]) => {
  switch (size) {
    case "xsmall":
      return css`
        width: 24px;
        height: 24px;
        padding: 0;
      `;
    case "small":
      return css`
        width: 30px;
        height: 30px;
        padding: 0;
      `;
    case "medium":
      return css`
        width: 34px;
        height: 34px;
        padding: 0;
      `;
    case "large":
      return css`
        width: 38px;
        height: 38px;
        padding: 0;
      `;
    default:
      return css`
        padding: 0;
      `;
  }
};
