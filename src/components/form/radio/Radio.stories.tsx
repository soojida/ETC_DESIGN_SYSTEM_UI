// lib
import { fn } from "@storybook/test";
import { Meta } from "@storybook/react/*";

// components
import { Radio } from "./Radio";

/**
 * 폼(Form)은 Checkbox, Radio, Switch와 같이 선택 옵션들을 제어할 수 있도록 돕는 요소 입니다.
 *
 * 총 세 가지 유형의 폼을 제공합니다.
 * - `base checkbox` : 단일 또는 다중 옵션을 선택할 경우 사용되며, 단일의 경우 on/off 작업에 사용됩니다.
 * - `base radio` : 단일 옵션을 선택할 경우 사용되며, 미선택을 기본값으로 합니다.
 * - `base switch` : on/off 용도로 사용되며, 미선택을 기본값으로 합니다.
 */

export default {
  title: "Components/Form",
  component: Radio,
  parameters: {
    componentSubtitle: "폼 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: { type: "boolean" } },
    checked: { control: { type: "boolean" } },
    onClick: { action: "onClick" },
    onChange: { action: "onChange" },
    label: { control: "text" },
  },
  args: {
    disabled: false,
    onClick: fn(),
    onChange: fn(),
    label: "라디오",
    id: "radio",
  },
} as Meta;

/**
 * 기본 radio, 단일 옵션을 선택할 경우 사용되며, 미선택을 기본값으로 합니다.
 */
export const BaseRadio = (args: any) => {
  return <Radio {...args} />;
};
