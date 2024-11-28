// lib
import { useEffect, useState } from "react";

// components
import { HeaderItem } from "src/components/table/VerticalTable";

export const useTable = ({ headers }: any) => {
  const [headerCell, setHeaderCell] = useState<number>(0); // 병합
  const [contentsCell, setContentsCell] = useState<number>(0);

  useEffect(() => {
    // 헤더의 자식 항목 개수를 모두 합산하는 함수
    const calcRowLength = (headers: HeaderItem[]) => {
      return headers.reduce((acc, header) => {
        if (header.children) {
          return acc + header.children.length; // 자식 항목의 개수 더하기
        }
        return acc;
      }, 0);
    };

    // 상태 업데이트
    const totalRowLength = calcRowLength(headers);
    setHeaderCell(totalRowLength); // 총 자식 항목 개수를 상태로 저장
    setContentsCell(headerKeys.length); // 데이터가 없을 경우, 자식 및 메인 셀 항목 개수를 상태로 저장
  }, [headers]); // headers가 변경될 때마다 재계산

  // 헤더 key 추출
  const headerKeys = headers.flatMap((header: any) =>
    header.children
      ? header.children.map((child: any) => child.key)
      : header.key
  );

  return { headerCell, contentsCell, headerKeys };
};
