// lib
import React from "react";

// style
import styled from "styled-components";

interface SwitchProps {
  // 아이디
  id?: string;
  // 활성화 여부
  disabled?: boolean;
  // 클래스명
  className?: string;
  // 스위치의 내용
  children?: React.ReactNode;
}

export const Switch = ({ id, disabled, className, children }: SwitchProps) => {
  return (
    <SwitchForm className={className}>
      <SwitchInput id={id} type="checkbox" disabled={disabled} />
      <SwitchLabel htmlFor={id} className="switch__label">
        <SwitchCircle className="switch__circle" />
      </SwitchLabel>
      {children && children}
    </SwitchForm>
  );
};

const SwitchForm = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
const SwitchInput = styled.input`
  position: absolute;
  visibility: hidden;
  transition: all 0.25s ease-in-out;

  &:checked ~ .switch__label {
    background: ${({ theme }) => theme.color.primary};
  }
  &:checked ~ .switch__label .switch__circle {
    left: calc(100% - 16px);
    background: ${({ theme }) => theme.color.white};
  }
  &:disabled ~ .switch__label {
    background: ${({ theme }) => theme.color.gray200};
  }
`;

const SwitchLabel = styled.label`
  width: 32px;
  height: 18px;
  display: block;
  position: relative;
  border-radius: 30px;
  background: ${({ theme }) => theme.color.gray200};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;
const SwitchCircle = styled.div`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${({ theme }) => theme.color.white};
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0 0 0 / 10%);
  }
`;
