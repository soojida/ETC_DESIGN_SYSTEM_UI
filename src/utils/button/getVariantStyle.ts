// style
import { ButtonProps } from "src/components/button/Button";
import { css } from "styled-components";

// 버튼 색상
export const getVariantStyle = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.primary};
      `;
    case "secondary":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.primary};
      `;
    case "tertiary":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.primary};
      `;
    case "primary-outline":
      return css`
        color: ${({ theme }) => theme.color.primary};
        background: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.primary};
      `;
    default:
      return css`
        color: ${({ theme }) => theme.color.dark};
        background: ${({ theme }) => theme.color.white};
      `;
  }
};
