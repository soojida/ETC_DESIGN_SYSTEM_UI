// lib
import { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

// components
import { Tab } from "./Tab";

/**
 * 탭(Tab)은 페이지 내 유사한 컨텐츠를 그룹화하여 섹션 간 이동 시 사용하는 요소입니다.
 * 작업(사용자가 위치하는) 페이지를 벗어나지 않고 섹션별 컨텐츠를 둘러볼 수 있습니다.
 *
 * 총 두 가지 탭의 스타일을 제공하며, 활성화 시 적용됩니다.
 * - `background` : 활성화 된 탭의 전체 배경색상 반영 시 사용됩니다.
 * - `border` : 활성화 된 탭의 하단 외곽선 반영 시 사용됩니다. (권장 : shape 옵션이 square 인 경우)
 */
export default {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    componentSubtitle: "탭 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    onClick: { active: "onClick" },
  },
  args: {
    onClick: fn(),
    shape: "square",
    tabItems: [
      { tabItem: "주소", content: "주소 탭 영역" },
      { tabItem: "장소", content: "장소 탭 영역" },
    ],
  },
} as Meta;

export const BaseTab = (args: any) => <Tab {...args} />;
