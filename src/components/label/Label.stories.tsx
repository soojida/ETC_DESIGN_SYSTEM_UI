// lib
import { Meta } from "@storybook/react/*";
import { Label } from "./Label";

/**
 * 라벨(Label)은 메타데이터(*) 를 활용하여 사용자가 정확한 정보 입력 또는 선택하도록 돕는 요소입니다.
 *
 * 메타데이터(*)란 대량의 정보 중 찾고 있는 정보를 효율적으로 찾아 이용하기 위해 일정한 규칙에 따라 부여되는 데이터 입니다.
 * 일종의 index 역할을 합니다.
 */
export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    componentSubTitle: "라벨 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "라벨",
  },
} as Meta;

export const BaseLabel = (args: any) => (
  <Label {...args}>
    <span className="meta highlight">*</span>
  </Label>
);
