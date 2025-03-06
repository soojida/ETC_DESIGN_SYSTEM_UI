// lib
import { Meta } from "@storybook/react/*";
import { Loading } from "./Loading";

/**
 * 로딩(Loading)는 실행 중인 프로세스의 현재 상태와 완료까지 남은 시간을 정확히 알 수 없는 경우에 사용됩니다.
 * 진행 중인 프로세스가 완료되면 로딩 UI가 사라집니다.
 */
export default {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    componentSubTitle: "로딩 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  args: {
    animation: "spin",
  },
} as Meta;

export const BaseLoading = (args: any) => {
  return <Loading {...args} />;
};
