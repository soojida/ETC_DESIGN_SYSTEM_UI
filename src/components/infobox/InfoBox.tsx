// lib
import React from "react";

// style
import styled from "styled-components";
import { transparentize } from "polished";
import { getShapeStyle } from "src/utils/infobox/getShapeStyle";

export interface InfoBoxProps {
  // 본문 내용
  children: React.ReactNode;
  // 클래스명
  className?: string;
  // 본문 정렬
  align: "left" | "center" | "right";
  // 정보창 모양 설정
  shape: "square" | "round";
  // 본문 색상 설정
  color: string;
  // 정보창 배경색상 설정
  background?: string;
  // 정보창 너비값 설정
  width?: string;
}

export const InfoBox = ({
  children,
  className,
  align = "center",
  shape,
  color,
  background,
  width,
}: InfoBoxProps) => {
  return (
    <InfoBoxStyle
      className={className}
      align={align}
      shape={shape}
      color={color}
      background={background}
      width={width}
    >
      {children}
    </InfoBoxStyle>
  );
};

const InfoBoxStyle = styled.div<InfoBoxProps>`
  width: ${({ width }) => (width ? width + "px" : "max-content")};
  padding: 12px 16px;
  color: ${({ color }) => color};
  text-align: ${({ align }) =>
    align === "left" ? "left" : align === "center" ? "center" : "right"};
  ${({ shape }) => getShapeStyle(shape)}
  line-height: 1.4;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  background: ${({ background, theme }) =>
    background ? transparentize(0.5, background) : theme.color.white};

  strong {
    font-weight: 600;
  }
`;
