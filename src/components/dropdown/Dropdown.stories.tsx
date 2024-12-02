// lib
import { fn } from "@storybook/test";
import { Meta } from "@storybook/react/*";

// components
import { Dropdown } from "./Dropdown";

/**
 * 드롭다운(Dropdown)은 다중 옵션 중 하나의 옵션 선택 시 사용됩니다.
 *
 * 총 세 가지 유형의 버튼을 제공합니다.
 * - `base button` : 일반적인 작업에 주로 사용됩니다.
 * - `icon button` : 아이콘 단일 작업에 사용됩니다.
 * - `with icon button` : 아이콘이 포함된 버튼 작업에 사용됩니다.
 */

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    componentSubtitle: "드롭다운 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    onClick: { action: "onClick" },
    isDislabed: { control: "boolean" },
  },
  args: {
    placeholder: "선택해주세요.",
    onClick: fn(),
    items: ["전체 주소", "도로명"],
    isDislabed: true,
  },
} as Meta;

/**
 * 기본 드롭다운, 일반적인 작업에 주로 사용됩니다.
 */
export const BaseDropdown = (args: any) => {
  return <Dropdown id="baseDropdown" items={args.items} {...args} />;
};

/**
 * 기본 옵션(placeholder 없이)이 설정되어 있는 경우 사용됩니다.
 * */
export const AllDropdown = (args: any) => {
  return (
    <Dropdown
      id="baseDropdown"
      items={args.items}
      label={args.items[0]}
      {...args}
    />
  );
};
