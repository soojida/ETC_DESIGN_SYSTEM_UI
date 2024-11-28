// lib
import React from "react";
// style
import styled from "styled-components";

interface LableProps {
  // 라벨의 내용
  label: React.ReactNode;
  // 라벨의 부가 내용
  children?: React.ReactNode;
  // input 요소와 연동 시 사용
  htmlFor?: string;
  // 클래스명
  className?: string;
  // 인라인 스타일 커스텀
  style?: React.CSSProperties;
}

/**
 * @desc 라벨 컴포넌트
 * @returns {JSX.Element} 라벨 컴포넌트 반환
 */
export const Label = ({
  label,
  children,
  htmlFor,
  className,
  style,
}: LableProps): JSX.Element => {
  return (
    <LabelStyle htmlFor={htmlFor} className={className} style={style}>
      {label} {children && children}
    </LabelStyle>
  );
};
const LabelStyle = styled.label`
  font-weight: 500;

  .meta.highlight {
    color: ${({ theme }) => theme.color.primary};
  }
`;
