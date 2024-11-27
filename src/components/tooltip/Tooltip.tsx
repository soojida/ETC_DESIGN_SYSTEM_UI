// lib
import React from "react";

// style
import styled from "styled-components";
import { getBackgroundStyle } from "src/utils/tooltip/getBackgroundStyle";
import { getDirectionStyle } from "src/utils/tooltip/getDirectionStyle";
import { getShapeStyle } from "src/utils/tooltip/getShapeStyle";

export interface TooltipProps {
  // 툴팁 타겟안의 내용
  children?: string | React.ReactNode;
  // 툴팁의 화살표 여부
  isArrow?: boolean;
  // 툴팁의 화살표 표출 방향
  direction?: "left" | "top" | "right" | "bottom";
  // 툴팁의 모양
  shape?: "square" | "round" | "round20";
  // 툴팁의 배경색상 설정
  background?: "white" | "black";
  // 툴팁 안의 내용
  message?: string | React.ReactNode;
  // 툴팁의 너비값 설정 (단위 : px)
  width?: string;
  // 툴팁의 투명도 설정 (범위 : 0 ~ 1)
  opacity?: number;
}

export const Tooltip = ({
  children,
  isArrow = false,
  direction = "top",
  shape = "round",
  background = "black",
  width = "max-content",
  message,
  opacity = 1,
}: TooltipProps) => {
  return (
    <TooltipForm className="tooltip__form">
      <TooltipTarget className="tooltip__target">{children}</TooltipTarget>
      <TooltipMessage
        isArrow={isArrow}
        direction={direction}
        shape={shape}
        background={background}
        width={width}
        opacity={opacity}
        className="tooltip__message"
      >
        {message}
      </TooltipMessage>
    </TooltipForm>
  );
};

export const TooltipForm = styled.div<TooltipProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  font-size: 14px;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
  }

  &:hover {
    .tooltip__message {
      display: inline-block;
    }
  }
`;
const TooltipTarget = styled.div`
  cursor: pointer;
`;
const TooltipMessage = styled.div<TooltipProps>`
  position: absolute;
  display: none;
  padding: 6px 8px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.25px;
  z-index: 100;
  transform-origin: center center;
  transition: transform 0.1s ease;

  height: auto;
  width: ${({ width }) =>
    width === (undefined || "") ? "max-content" : width};
  ${({ direction }) => getDirectionStyle(direction)};
  ${({ shape }) => getShapeStyle(shape)};
  ${({ background }) => getBackgroundStyle(background)};

  line-height: 1.6;
  word-break: break-all;

  &:after {
    content: "";
    display: ${(props) => (props.isArrow ? "inline-block" : "none")};
    position: absolute;
    width: 0;
    height: 0;
  }
`;
