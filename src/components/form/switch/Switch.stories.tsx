// lib
import { Meta } from "@storybook/react/*";

// components
import { Switch } from "./Switch";

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
  component: Switch,
  parameters: {
    componentSubtitle: "폼 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: { type: "boolean" } },
    checked: { control: { type: "boolean" } },

    children: { control: "text" },
  },
  args: {
    children: "스위치",
    id: "switch",
  },
} as Meta;

/**
 * 기본 switch, on/off 용도로 사용되며, 미선택을 기본값으로 합니다.
 */
export const BaseSwitch = (args: any) => {
  return <Switch {...args} />;
};
