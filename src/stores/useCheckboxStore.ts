import { create } from "zustand";

interface CheckboxStore {
  checkedItems: any[]; // 공통 체크박스 동작 저장 변수
  setCheckedItems: (updateFn: (prev: any[]) => any[]) => void; // 체크박스 동작 설정 함수
  resetCheckedItems: () => void; // 체크박스 동작 초기화 함수
}

// 모달의 표출 여부 판단 및 동작 제어
export const useCheckboxStore = create<CheckboxStore>((set) => ({
  checkedItems: [],
  setCheckedItems: (updateFn) =>
    set((state) => ({
      checkedItems: [...updateFn(state.checkedItems)],
    })),

  resetCheckedItems: () => set({ checkedItems: [] }),
}));
