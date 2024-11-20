// lib
import React from "react";

// style
import styled from "styled-components";

// components
import Button, { ButtonProps } from "./Button";

interface ButtonGroupProps {
  buttons: ButtonProps & { text: string }[];
  className?: string;
}

export const ButtonGroup = ({ buttons, className }: ButtonGroupProps) => {
  return (
    <ButtonContainer
      className={
        className !== undefined ? `${className} btn__group` : "btn__group"
      }
    >
      {buttons.map(({ text, ...rest }, idx) => (
        <Button key={idx} {...rest}>
          {text} {/* text를 children으로 사용 */}
        </Button>
      ))}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;
