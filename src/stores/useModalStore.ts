import { create } from "zustand";

interface ModalStore {
  isVisible: boolean; // 모달 표출 여부 판단
  onOpenModal: () => void; // 모달 열기 실행
  onCloseModal: () => void; // 모달 닫기 실행
}

// 모달의 표출 여부 판단 및 동작 제어
export const useModalStore = create<ModalStore>((set) => ({
  isVisible: false, // 기본값 닫힘
  onOpenModal: () => set({ isVisible: true }),
  onCloseModal: () => set({ isVisible: false }),
}));
