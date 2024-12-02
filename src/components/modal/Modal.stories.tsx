// lib
import { fn } from "@storybook/test";
import { Meta } from "@storybook/react/*";

// stores
import { useModalStore } from "src/stores/useModalStore";

// components
import { Modal } from "./Modal";
import Button from "../button/Button";
import { ButtonGroup } from "../button/ButtonGroup";
import { SystemModal } from "./SystemModal";

/**
 * 모달(Modal)은 사용자 경험의 흐름을 막고 꼭 필요한 것을 결정하게 하거나 되돌릴 수 없는 결정을 확인 할 때 사용하는 요소입니다.
 * Dialog의 상위 개념으로, 모달(Modal)로 통용하여 사용합니다.
 *
 * - `base modal` : 일반적인 작업에 주로 사용됩니다.
 * - `system modal` : 상단에서 노출되는 모달로, 알림 및 공지 작업에 주로 사용됩니다.
 */

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    componentSubtitle: "모달 컴포넌트", // 서브 타이틀
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"], // 문서 자동 생성
  argTypes: {
    children: { control: "text" },
    title: { control: "text" },
    isHeader: { control: "boolean" },
    onClick: { active: "onClick" },
    closeButton: { control: "text" },
    confirmButton: { control: "text" },
  },
  args: {
    children: "모달 컨텐츠",
    title: "모달 타이틀",
    isHeader: true,
    onClick: fn(),
    closeButton: "취소",
    confirmButton: "확인",
    background: "dimmed",
  },
} as Meta;

/**
 * 기본 모달(Modal), 결정 및 확인 작업에 주로 사용됩니다.
 */
export const BaseModal = (args: any) => {
  const { isVisible, onCloseModal, onOpenModal } = useModalStore();

  return (
    <>
      {/* 버튼 클릭 시 모달을 열도록 설정 */}
      <Button variant="primary" onClick={onOpenModal}>
        모달 열기
      </Button>

      {/* 모달이 열렸을 때만 보여짐 */}
      {isVisible && (
        <Modal
          {...args}
          footer={
            <ButtonGroup
              buttons={[
                {
                  ...args,
                  text: args.closeButton,
                  variant: "primary-outline",
                  onClick: () => onCloseModal(),
                },
                {
                  ...args,
                  text: args.confirmButton,
                  variant: "primary",
                  onClick: () => alert("데이터 전송"),
                },
              ]}
            />
          }
        />
      )}
    </>
  );
};

/**
 * 시스템 모달(System Modal), 알림 및 공지 작업에 주로 사용됩니다.
 */
export const BaseSystemModal = (args: any) => {
  const { isVisible, onCloseModal, onOpenModal } = useModalStore();

  return (
    <>
      {/* 버튼 클릭 시 모달을 열도록 설정 */}
      <Button variant="primary" onClick={onOpenModal}>
        시스템 모달 열기
      </Button>
      {isVisible && (
        <SystemModal
          {...args}
          footer={
            <ButtonGroup
              buttons={[
                {
                  ...args,
                  text: args.closeButton,
                  variant: "primary-outline",
                  onClick: () => onCloseModal(),
                },
                {
                  ...args,
                  text: args.confirmButton,
                  variant: "primary",
                  onClick: () => alert("데이터 전송"),
                },
              ]}
            />
          }
        />
      )}
    </>
  );
};
