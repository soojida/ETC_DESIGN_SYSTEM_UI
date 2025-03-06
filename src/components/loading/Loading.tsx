// lib
import React from "react";

// style
import styled from "styled-components";

// utils
import { getAnimation } from "src/utils/loading/getAnimation";

export interface LoadingProps {
  animation?: "spin" | "pulse" | "wave" | "load";
}
export const Loading = ({ animation = "spin" }: LoadingProps) => {
  return (
    <LoadingForm>
      <LoadingInner animation={animation}>
        <LoadingCircle />
        <LoadingCircle />
        <LoadingCircle />
        <LoadingCircle />
      </LoadingInner>
    </LoadingForm>
  );
};

const LoadingForm = styled.div`
  position: relative;
  width: 100%;
  /* height: 100vh; */
`;

const LoadingInner = styled.div<LoadingProps>`
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ animation }) => getAnimation(animation)}
`;

export const LoadingCircle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
`;
