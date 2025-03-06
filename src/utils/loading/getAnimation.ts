import { LoadingCircle, LoadingProps } from "src/components/loading/Loading";
import { css, keyframes } from "styled-components";

const circleSpin = keyframes`
  0% {
    transform: scale(1) rotate(0);
  }
  20%, 25% {
    transform: scale(1.3) rotate(90deg);
  }
  45%, 50% {
    transform: scale(1) rotate(180deg);
  }
  70%, 75% {
    transform: scale(1.3) rotate(270deg);
  }
  95%, 100% {
    transform: scale(1) rotate(360deg);
  }
`;

const circlePulse = keyframes`
  100% {
    transform: scale(1.5);
  }
`;

const circleWave = keyframes`
  0%, 100% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const circleLoad = keyframes`
  0%,80%,100%{
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

/**
 *
 * @param animation 애니메이션 이름 / 지속시간(duration) / 타이밍 함수(time-function) / 재생 방향(direction) / 지연 시간(delay) / 반복 횟수(iteration-count)
 * @returns
 */
export const getAnimation = (animation: LoadingProps["animation"]) => {
  switch (animation) {
    case "spin":
      return css`
        animation: ${circleSpin} 2s linear infinite;
        width: 28px;
        height: 28px;

        ${LoadingCircle} {
          &:nth-child(1),
          &:nth-child(4) {
            background-color: ${({ theme }) => theme.color.tertiary};
          }

          &:nth-child(1) {
            top: 0;
            left: 0;
          }
          &:nth-child(2) {
            bottom: 0;
            left: 0;
          }
          &:nth-child(3) {
            top: 0;
            right: 0;
          }
          &:nth-child(4) {
            bottom: 0;
            right: 0;
          }
        }
      `;
    case "pulse":
      return css`
        ${LoadingCircle} {
          position: initial;
          margin: 8px;
          animation: ${circlePulse} 0.6s ease-in-out alternate infinite;

          &:nth-child(1),
          &:nth-child(3) {
            background-color: ${({ theme }) => theme.color.tertiary};
          }
          &:nth-child(1) {
            animation-delay: -0.25s;
          }
          &:nth-child(2) {
            animation-delay: -0.5s;
          }
          &:nth-child(3) {
            animation-delay: -0.75s;
          }
          &:nth-child(4) {
            animation-delay: -1s;
          }
        }
      `;
    case "wave":
      return css`
        ${LoadingCircle} {
          position: initial;
          margin: 8px;
          width: 10px;
          height: 10px;
          animation: ${circleWave} 1s ease-in-out infinite;

          &:nth-child(1),
          &:nth-child(3) {
            background-color: ${({ theme }) => theme.color.tertiary};
          }
          &:nth-child(1) {
            animation-delay: -0.2s;
          }
          &:nth-child(2) {
            animation-delay: -0.4s;
          }
          &:nth-child(3) {
            animation-delay: -0.6s;
          }
          &:nth-child(4) {
            animation-delay: -0.8s;
          }
        }
      `;
    case "load":
      return css`
        ${LoadingCircle} {
          position: initial;
          margin: 8px;
          width: 10px;
          height: 10px;
          animation: ${circleLoad} 1.2s ease-in-out infinite;

          &:nth-child(1),
          &:nth-child(3) {
            background-color: ${({ theme }) => theme.color.tertiary};
          }
          &:nth-child(1) {
            animation-delay: -0.48s;
          }
          &:nth-child(2) {
            animation-delay: -0.32s;
          }
          &:nth-child(3) {
            animation-delay: -0.16s;
          }
          &:nth-child(4) {
            animation-delay: 0s;
          }
        }
      `;
    default:
      return css``;
  }
};
