// style
import styled from "styled-components";
import { getSizeStyle } from "src/utils/button/getSizeStyle";
import { getIconSizeStyle } from "src/utils/button/getIconSizeStyle";
import { getVariantStyle } from "src/utils/button/getVariantStyle";
import { getShapeStyle } from "src/utils/button/getShapeStyle";

// components
import { ButtonProps } from "./Button";
import { getPositionStyle } from "src/utils/button/getPositionStyle";

export const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 4px;
  ${({ size }) => getSizeStyle(size)}
  ${({ variant }) => getVariantStyle(variant)}
  ${({ shape }) => getShapeStyle(shape)}
  ${({ position }) => getPositionStyle(position)}
  cursor: pointer;

  /* 포커싱 */
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
 
  &.icon {
    ${({ size }) => getIconSizeStyle(size)}
  }
`;

export const IconButton = styled(ButtonStyle)`
  padding: 0;
  font-size: 18px;
`;
