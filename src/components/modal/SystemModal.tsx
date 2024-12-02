// lib
import React from "react";

// style
import styled from "styled-components";

// props
import { ModalContents, ModalFooter, ModalHeader, ModalProps } from "./Modal";

export const SystemModal = ({ id, title, children, footer }: ModalProps) => {
  return (
    <SystemModalContainer id={id}>
      <SystemModalFrame>
        <SystemModalInner>
          {title && (
            <SystemModalHeader className="modal__header">
              {title}
            </SystemModalHeader>
          )}
          <SystemModalContents className="modal__contents">
            {children}
          </SystemModalContents>
          {footer && (
            <SystemModalFooter className="modal__footer">
              {footer}
            </SystemModalFooter>
          )}
        </SystemModalInner>
      </SystemModalFrame>
    </SystemModalContainer>
  );
};

const SystemModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.15);
  transition: opacity 0.1s ease-in-out;
  z-index: 999;
`;
const SystemModalFrame = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 8px rgb(0 0 0/20%), 0 -1px 0 rgb(0 0 0/10%);
  background: ${({ theme }) => theme.color.white};
  transform: translateX(-50%);
`;
const SystemModalInner = styled.div`
  width: 100%;
  min-width: 280px;
  max-width: 280px;
  background: ${({ theme }) => theme.color.white};
`;
const SystemModalHeader = styled(ModalHeader)`
  justify-content: center;
  padding: 20px 20px 8px;

  h2 {
    font-size: 15px;
    text-align: center;
  }

  button.icon {
    width: 24px;
    height: 34px;
  }
`;
const SystemModalContents = styled(ModalContents)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  strong {
    font-size: 15px;
    font-weight: 500;
  }
  .message {
    font-size: 14px;
    text-align: center;
    line-height: 1.6;
    word-break: keep-all;
  }
`;
const SystemModalFooter = styled(ModalFooter)`
  padding: 16px 20px;

  button {
    width: 50%;
    height: 34px;
  }
`;
