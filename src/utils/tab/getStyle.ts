// style
import { TabProps } from "src/components/tab/Tab";
import { css } from "styled-components";

// 버튼 모양
export const getStyle = (tabStyle: TabProps["tabStyle"]) => {
  switch (tabStyle) {
    case "background":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.primary};
      `;
    case "border":
      return css`
        color: ${({ theme }) => theme.color.primary};
        border-bottom: 3px solid ${({ theme }) => theme.color.primary};

        &:not(:first-child) {
          border-left: 1px solid ${({ theme }) => theme.color.blueGray100};
        }
      `;
    default:
      return css`
        border-bottom: 3px solid transparent;
      `;
  }
};
