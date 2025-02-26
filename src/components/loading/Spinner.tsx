// lib
import React from "react";
import { transparentize } from "polished";

// style
import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  // 스피너 크기
  size?: number;
  // 선 두께
  thickness?: number;
  // 선 색상
  color?: string;
  // 선 배경 색상
  background?: string;
  // 부가 내용
  children?: React.ReactNode | string;
}

export const Spinner = ({
  size = 32,
  thickness = 4,
  color,
  background,
  children,
}: SpinnerProps) => {
  return (
    <SpinnerContainer>
      <SpinnerFrame size={size}>
        <SpinnerStyle
          size={size}
          thickness={thickness}
          color={color}
          background={background}
        />
      </SpinnerFrame>
      {children && <SpinnerContent>{children}</SpinnerContent>}
    </SpinnerContainer>
  );
};

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SpinnerFrame = styled.div<{ size: number }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const SpinnerStyle = styled.div<{
  size: number;
  thickness: number;
  color?: string;
  background?: string;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ thickness }) => thickness}px solid
    ${({ theme, background }) => background || theme.color.gray200};
  border-radius: 50%;
  border-right-color: ${({ theme, color }) =>
    transparentize(0.2, color || theme.color.primary)};
  animation: ${SpinnerAnimation} 1s linear infinite;
`;

const SpinnerContent = styled.div`
  margin-top: 12px;
  text-align: center;
  line-height: 1.4;
`;
