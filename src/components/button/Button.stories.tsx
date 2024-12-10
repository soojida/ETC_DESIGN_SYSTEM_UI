// lib
import { fn } from "@storybook/test";
import { Meta } from "@storybook/react/*";

// style
import styled from "styled-components";

// icons
import { MdModeEditOutline } from "react-icons/md";

// components
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

/**
 * 버튼(Button)은 동작(또는 일련의 동작)을 의미합니다. 버튼을 클릭하면 해당 비즈니스 로직이 트리거됩니다.
 *
 * 총 세 가지 유형의 버튼을 제공합니다.
 * - `base button` : 일반적인 작업에 주로 사용됩니다.
 * - `icon button` : 아이콘 단일 작업에 사용됩니다.
 * - `with icon button` : 아이콘이 포함된 버튼 작업에 사용됩니다.
 */

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    componentSubtitle: "버튼 컴포넌트", // 서브 타이틀
  },
  decorators: [(Story) => <Story />],
  // decorators: [withKnobs],
  tags: ["autodocs"], // 문서 자동 생성
  argTypes: {
    children: { control: "text" }, // label props를 텍스트로 제어 가능하도록 설정
    disabled: { control: { type: "boolean" } }, // disabled props를 boolean으로 제어 가능하도록 설정
    onClick: { action: "onClick" }, // onClick props에 액션을 추가하여 클릭 이벤트를 추적
  },
  args: {
    children: "Button",
    disabled: false,
    onClick: fn(),
    icon: <MdModeEditOutline style={{ fontSize: "16px" }} />,
    size: "medium",
  },
} as Meta;

/**
 * 기본 버튼, 일반적인 작업에 주로 사용됩니다.
 */
export const BaseButton = (args: any) => {
  return (
    <ButtonGroup
      buttons={[
        {
          text: args.children,
          variant: "primary",
          ...args,
          icon: args.icon && null,
        },
        {
          text: args.children,
          variant: "primary-outline",
          ...args,
          icon: args.icon && null,
        },
      ]}
    />
  );
};
/**
 * 아이콘 단일 작업에 사용됩니다.
 */
export const IconButton = (args: any) => (
  <ButtonAlign>
    <ButtonGroup
      buttons={[
        {
          className: "icon",
          variant: "primary",
          shape: "square",
          ...args,
          text: "",
        },
        {
          className: "icon",
          variant: "primary-outline",
          shape: "square",
          ...args,
          text: "",
        },
      ]}
    />
    <ButtonGroup
      buttons={[
        {
          className: "icon",
          variant: "primary",
          shape: "round",
          ...args,
          text: "",
        },
        {
          className: "icon",
          variant: "primary-outline",
          shape: "round",
          ...args,
          text: "",
        },
      ]}
    />
    <ButtonGroup
      buttons={[
        {
          className: "icon",
          variant: "primary",
          shape: "round50",
          ...args,
          text: "",
        },
        {
          className: "icon",
          variant: "primary-outline",
          shape: "round50",
          ...args,
          text: "",
        },
      ]}
    />
  </ButtonAlign>
);
/**
 * 아이콘이 포함된 버튼 작업에 사용됩니다.
 */
export const WithIcon = (args: any) => (
  <ButtonAlign>
    <ButtonGroup
      buttons={[
        {
          text: "Button",
          variant: "primary",
          ...args,
        },
        { text: "Button", variant: "primary-outline", ...args },
      ]}
    />
    <ButtonGroup
      buttons={[
        {
          text: "Button",
          variant: "primary",
          position: "right",
          ...args,
        },
        {
          text: "Button",
          variant: "primary-outline",
          position: "right",
          ...args,
        },
      ]}
    />
  </ButtonAlign>
);

// 버튼 정렬을 위한 story 내 단독 사용 스타일
const ButtonAlign = styled.div`
  display: flex;
  gap: 8px;
`;
