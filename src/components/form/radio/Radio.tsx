// lib
import React from "react";

// style
import styled from "styled-components";

interface RadioProps {
  // 클래스명
  className?: string;
  // 아이디
  id?: string;
  value?: string;
  // 라벨의 내용
  label?: string;
  // 선택값 반환 함수
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // 선택 여부 판단
  checked?: boolean;
  // 활성화 여부
  disabled?: boolean;
}

export const Radio = ({
  className,
  id,
  value,
  label,
  onChange,
  checked,
  disabled,
}: RadioProps) => {
  return (
    <RadioForm
      className={
        className === ("" || undefined)
          ? "radio__form"
          : `${className} radio__form`
      }
    >
      <label htmlFor={id}>
        <input
          type="radio"
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        ></input>
        <span>{label}</span>
      </label>
    </RadioForm>
  );
};

const RadioForm = styled.div`
  display: flex;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    cursor: pointer;
  }

  input[type="radio"] {
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.gray200};

    &:disabled {
      border-color: ${({ theme }) => theme.color.gray200};
    }

    &:checked {
      border: none;
      background: url("data:image/svg+xml,%3Csvg stroke='%23029cfd' fill='%23029cfd' stroke-width='0' viewBox='0 0 24 24' height='22px' width='22px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='5'%3E%3C/circle%3E%3C/svg%3E")
        no-repeat center center;

      &:disabled {
        border-color: ${({ theme }) => theme.color.gray200};
        background: url("data:image/svg+xml,%3Csvg stroke='%23c8cce5' fill='%23c8cce5' stroke-width='0' viewBox='0 0 24 24' height='22px' width='22px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='5'%3E%3C/circle%3E%3C/svg%3E")
          no-repeat center center;
      }
    }
  }
`;
