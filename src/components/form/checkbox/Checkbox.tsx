// lib
import React from "react";

// style
import styled from "styled-components";

interface CheckboxProps {
  // 클래스명
  className?: string;
  // 아이디
  id?: string;
  // 선택값 반환 함수
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // 선택 여부 판단
  checked?: boolean;
  // 활성화 여부
  disabled?: boolean;
  // 클릭시 호출할 함수
  onClick?: undefined | any;
  // 라벨의 내용
  label?: undefined | any;
}
export const Checkbox = ({
  className,
  id,
  onChange,
  checked,
  disabled,
  onClick,
  label,
}: CheckboxProps) => {
  return (
    <CheckboxForm className={className}>
      <CheckboxInput
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        onClick={onClick}
      />
      {label && <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>}
    </CheckboxForm>
  );
};

const CheckboxForm = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const CheckboxInput = styled.input`
  position: relative;
  appearance: none;
  padding: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  border-radius: 2px;
  flex: 0 0 auto;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg stroke='%23fff' fill='%23fff' stroke-width='0' viewBox='0 0 20 20' aria-hidden='true' height='16px' width='16px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.color.primary};
  }

  &:disabled {
    cursor: not-allowed;

    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      left: 48%;
      top: -2px;
      width: 1px;
      height: 19px;
      background: ${({ theme }) => theme.color.gray200};
      transform: rotate(45deg) translateX(-50%);
    }

    &:checked {
      background-color: ${({ theme }) => theme.color.gray300};
    }
  }
`;
const CheckboxLabel = styled.label`
  cursor: pointer;
`;
