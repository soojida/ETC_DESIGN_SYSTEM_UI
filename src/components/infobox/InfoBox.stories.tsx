// lib
import { Meta } from "@storybook/react/*";

// components
import { InfoBox } from "./InfoBox";

/**
 * 정보창(InfoBox)은 본문 외 정보 또는 주의, 강조형 정보 표시 시 사용되며, 상시 노출되는 요소입니다.
 */
export default {
  title: "Components/InfoBox",
  components: InfoBox,
  parameters: {
    componentSubTitle: "정보창 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    color: {
      control: { type: "color" },
    },
    background: {
      control: { type: "color" },
    },
    width: {
      control: { type: "range", max: 1000, min: 0, step: 1 },
    },
  },
  args: {
    children: (
      <>
        워크스페이스는{" "}
        <strong>스타일을 편집하고 공유에서 배포까지 연결되는 공간</strong>
        입니다.
        <br />
        워크스페이스를 만들고 지도를 편집 해 보세요.
      </>
    ),
  },
} as Meta;

export const BaseInfoBox = (args: any) => <InfoBox {...args}></InfoBox>;
