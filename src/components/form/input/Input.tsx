// lib
import { transparentize } from "polished";
import React from "react";

// style
import styled from "styled-components";

interface InputProps {
  // input type 설정 (HTML의 input type 속성에 있는 값들로 제한)
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  // placeholder
  placeholder?: string;
  // input 입력값
  value: string;
  // input 이외의 값
  children: React.ReactNode | string;
  // 클래스명
  className?: string;
  // 활성화 여부
  disabled?: boolean;
  // 입력값 반환 함수
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  // input 내부 아이콘 사용시
  icon?: React.ReactNode;
}

export const Input = ({
  type = "text",
  placeholder,
  value,
  children,
  className,
  disabled = false,
  onChange,
  onKeyDown,
  icon,
}: InputProps) => {
  return (
    <InputForm className={className}>
      <InputField
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={onKeyDown}
        icon={icon}
      />

      {icon && <span className="search__icon">{icon}</span>}
      {children}
    </InputForm>
  );
};

const InputForm = styled.div`
  position: relative;
  display: flex;
  gap: 4px;

  .search__icon {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.color.gray300};
  }
`;
const InputField = styled.input<{ icon: any }>`
  width: 100%;
  height: 38px;
  padding: ${({ icon }) => (icon ? "0 42px 0 12px" : "0 12px")};
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 3px 0
      ${({ theme }) => transparentize(0.5, theme.color.primary)};
  }
`;
