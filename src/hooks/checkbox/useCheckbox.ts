// stores
import { useCheckboxStore } from "src/stores/useCheckboxStore";

const useCheckbox = () => {
  const { checkedItems, setCheckedItems, resetCheckedItems } =
    useCheckboxStore();

  // 개별 선택 핸들러
  const handleItemCheck = (id: any, isChecked: any) => {
    setCheckedItems((prev: any[]) => {
      if (isChecked) {
        return prev.includes(id) ? prev : [...prev, id]; // 중복 방지
      } else {
        return prev.filter((checkedId) => checkedId !== id); // 체크 해제
      }
    });
  };

  // 전체 선택 핸들러
  const handleAllCheck = (items: any[], isChecked: any) => {
    setCheckedItems(() => (isChecked ? items.map((item) => item.id) : []));
  };

  // 전체 선택 여부 판별
  const isAllChecked = (items: any[]) => {
    if (!items || items.length === 0) return false;
    return items.every((item) => checkedItems.includes(item.id));
  };

  return {
    checkedItems,
    isAllChecked,
    handleItemCheck,
    handleAllCheck,
    resetCheckedItems,
  };
};

export default useCheckbox;
