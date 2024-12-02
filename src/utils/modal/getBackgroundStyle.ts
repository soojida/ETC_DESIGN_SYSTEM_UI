// style
import { ModalProps } from "src/components/modal/Modal";
import { css } from "styled-components";

export const getBackgroundStyle = (background: ModalProps["background"]) => {
  switch (background) {
    case "dimmed":
      return css`
        &::before,
        &:after {
          background: rgba(0, 0, 0, 0.15);
        }
        background: rgba(0, 0, 0, 0.15);
      `;
    default:
      return css`
        &::before,
        &:after {
          background: none;
        }
        background: none;
      `;
  }
};
