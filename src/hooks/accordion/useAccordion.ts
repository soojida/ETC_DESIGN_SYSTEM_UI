import { useState } from "react";

export const useAccordion = (expand: any) => {
  const [expandIdx, setExpandIdx] = useState<number | null>(null);
  const [expandArrIdx, setExpandArrIdx] = useState<number[]>([]);

  /**
   * @param listIdx 선택한 항목의 인덱스
   * @param expand 확장 방식을 결정하는 값 (number | array)
   * @returns 선택한 항목의 하위 영역을 확장하여 상세 내용을 표시합니다.
   */
  const onClickToggle = (listIdx: number, expand: any) => {
    // expand === "number": 선택한 값만 확장되며, 이전 확장 값 모두 축소
    // expand === "array" : 선택한 값이 확장되며, 이전 확장 상태 유지
    if (expand === "number") {
      setExpandIdx((prev) => (prev === listIdx ? null : listIdx));
    } else {
      setExpandArrIdx(
        (prev) =>
          prev.includes(listIdx)
            ? prev.filter((idx) => idx !== listIdx) // 이미 열려 있으면 닫기
            : [...prev, listIdx] // 닫혀 있으면 열기
      );
    }
  };

  let isExpand;
  if (expand === "number") {
    isExpand = (listIdx: number) => expandIdx === listIdx;
  } else {
    isExpand = (listIdx: number) => expandArrIdx.includes(listIdx);
  }

  return { isExpand, onClickToggle };
};
