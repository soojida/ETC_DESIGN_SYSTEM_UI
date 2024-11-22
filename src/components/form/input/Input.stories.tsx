// lib
import { fn } from "@storybook/test";
import { Meta } from "@storybook/react/*";

// icons
import { TbSearch } from "react-icons/tb";

// components
import { Input } from "./Input";
import Button from "src/components/button/Button";

/**
 * 인풋(Input)은 사용자 데이터를 입력할 수 있는 공간을 제공해주는 요소입니다. 버튼 클릭 또는 키보드 엔터 액션을 통해 해당 비즈니스 로직을 호출됩니다.
 *
 * 총 세 가지 유형의 인풋을 제공합니다.
 * - `base input` : 일반적인 작업에 주로 사용됩니다.
 * - `with button input` : 인풋 외부에 버튼이 포함되는 작업에 사용됩니다.
 * - `with icon input` : 인풋 내부에 아이콘이 포함되는 작업에 사용됩니다.
 * - `with max length input` : 인풋 내부에 글자수 제한이 포함되는 작업에 사용됩니다.
 * - `error message input` : 입력값이 잘못 된 경우 사용됩니다.
 */

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    componentSubtitle: "입력창 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: { type: "boolean" } },
    onClick: { action: "onClick" },
    onChange: { action: "onChange" },
    onKeyDown: { action: "onKeyDown" },
    errorMessage: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    placeholder: { control: "text" },
  },
  args: {
    disabled: false,
    onClick: fn(),
    onChange: fn(),
    onKeyDown: fn(),
    icon: <TbSearch style={{ fontSize: "20px" }} />,
    size: "medium",
  },
} as Meta;

/**
 * 기본 input, 일반적인 작업에 주로 사용됩니다.
 */
export const BaseInput = (args: any) => {
  return (
    <Input
      placeholder="검색어를 입력해주세요."
      {...args}
      icon={null}
      children={null}
    />
  );
};

/**
 * input 외부에 버튼이 포함되는 작업에 사용됩니다.
 */
export const WithButtonInput = (args: any) => {
  return (
    <Input placeholder="검색어를 입력해주세요." {...args} icon={null}>
      <Button className="icon" variant="primary" size="large">
        <TbSearch style={{ fontSize: "20px" }} />
      </Button>
    </Input>
  );
};

/**
 * input 내부에 아이콘이 포함되는 작업에 사용됩니다.
 */
export const WithIconInput = (args: any) => {
  return (
    <Input placeholder="검색어를 입력해주세요." {...args} children={null} />
  );
};

/**
 * input 내부에 글자수 제한이 포함되는 작업에 사용됩니다.
 */
export const WithMaxLengthInput = (args: any) => {
  return (
    <Input
      placeholder="아이디 입력"
      maxLength={20}
      max={20}
      {...args}
      children={null}
      icon={null}
    />
  );
};

/**
 * 입력값이 잘못 된 경우 사용됩니다.
 */
export const ErrorMessageInput = (args: any) => {
  return (
    <Input
      placeholder="비밀번호 입력"
      errorMessage="비밀번호를 다시 입력해주세요."
      {...args}
      children={null}
      icon={null}
    />
  );
};
