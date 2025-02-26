// lib
import { Meta } from "@storybook/react/*";
import { Spinner } from "./Spinner";

/**
 * 스피너(Spinner)는 실행 중인 프로세스의 현재 상태와 완료까지 남은 시간을 정확히 알 수 없는 경우에 사용됩니다.
 * 진행 중인 프로세스가 완료되면 스피너가 사라집니다.
 */
export default {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    componentSubTitle: "로딩 스피너 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "",
  },
} as Meta;

export const BaseSpinner = (args: any) => {
  return <Spinner {...args} />;
};

export const CustomSpinner = (args: any) => {
  return (
    <Spinner {...args}>
      데이터를 불러오는 중입니다. <br />
      잠시만 기다려 주세요.
    </Spinner>
  );
};
