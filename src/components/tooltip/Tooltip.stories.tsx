// lib
import { Meta } from "@storybook/react/*";

// components
import { Tooltip } from "./Tooltip";

// icon
import { BsInfoCircleFill } from "react-icons/bs";

// style
import styled, { useTheme } from "styled-components";

/**
 * 툴팁(Tooltip)은 부가 정보 요소에 사용자의 동작(마우스 인/아웃) 시, 노출되는 요소입니다.
 *
 */

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    componentSubtitle: "툴팁 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
    isArrow: { control: "boolean" },
    width: { control: "text" },
    opacity: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
  args: {
    message: "기본 위치로 설정하기",
    isArrow: false,
    direction: "top",
    shape: "round",
    background: "black",
  },
} as Meta;

/**
 * 기본 Tooltip, 사용자의 기능 인지를 위한 보조 설명 필요 시, 사용됩니다.
 */
export const BaseTooltip = (args: any) => {
  const theme = useTheme();
  return (
    <TooltipWrap>
      <Tooltip {...args}>
        <BsInfoCircleFill
          style={{ fontSize: "20px", fill: theme.color.gray400 }}
        />
      </Tooltip>
    </TooltipWrap>
  );
};

const TooltipWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;
