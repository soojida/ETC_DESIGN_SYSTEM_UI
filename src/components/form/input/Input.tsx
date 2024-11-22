// lib
import { transparentize } from "polished";
import React, { useState } from "react";

// hook
import { useInput } from "src/hooks/input/useInput";

// style
import styled from "styled-components";

interface InputProps {
  // input type 설정 (HTML의 input type 속성에 있는 값들로 제한)
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  // placeholder
  placeholder?: string;
  // input 외부의 요소 설정 (ex. 버튼)
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
  // 에러메세지
  errorMessage?: string;
  // 글자수 입력값 제한
  maxLength?: number;
  // isMaxLength?: boolean;
  // 글자수 입력 최소값
  min?: number;
  /// 글자수 입력 최고값
  max?: number;
}

export const Input = ({
  type = "text",
  placeholder,
  children,
  className,
  disabled = false,
  onChange,
  onKeyDown,
  icon,
  errorMessage,
  maxLength,
  min,
  max,
}: InputProps) => {
  const [dynamicMin] = useState(min ?? 0);
  const { dynamicValue, onHandleInputChange } = useInput({
    min,
    max,
    onChange,
  });

  return (
    <InputForm className={className}>
      <InputField
        type={type}
        placeholder={placeholder}
        defaultValue={dynamicValue}
        disabled={disabled}
        onChange={onHandleInputChange}
        onKeyDown={onKeyDown}
        icon={icon}
        min={dynamicMin}
        max={max}
        maxLength={max}
        className={errorMessage ? "error" : ""}
      />
      {/* 내부 아이콘 */}
      {icon && <Icon>{icon}</Icon>}
      {/* 내부 글자수 제한 */}
      {maxLength && (
        <MaxLength>
          ({dynamicValue.length}/{max})
        </MaxLength>
      )}
      {/* 에러 메시지 */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* 외부 버튼 */}
      {children}
    </InputForm>
  );
};

const InputForm = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
`;

const InputField = styled.input<{ icon: any; maxLength: any }>`
  width: 100%;
  height: 38px;
  padding: ${({ icon, maxLength }) =>
    icon
      ? "0 42px 0 12px"
      : "0 12px" || maxLength
      ? "0 62px 0 12px"
      : "0 12px"};
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  border-radius: 4px;

  &:focus,
  &.focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 3px 0
      ${({ theme }) => transparentize(0.5, theme.color.primary)};
  }
  &.error {
    border: 1px solid ${({ theme }) => theme.color.error};
    box-shadow: 0 0 3px 0
      ${({ theme }) => transparentize(0.5, theme.color.error)};
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.gray300};
`;

const MaxLength = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.gray400};
  font-size: 12px;
`;

const ErrorMessage = styled.span`
  position: absolute;
  bottom: -18px;
  padding-left: 10px;
  padding-right: 5px;
  color: ${({ theme }) => theme.color.error};
  font-size: 13px;
  letter-spacing: 0.3px;
  font-weight: 400;
`;
