// lib
import { useEffect, useState } from "react";

// components
import { HeaderItem } from "src/components/table/VerticalTable";

export const useTable = ({ headers }: any) => {
  const [headerCell, setHeaderCell] = useState<number>(0); // 첫번째 헤더 병합
  const [childrenCell, setChildrenCell] = useState<{
    isChild: boolean;
    cell: number;
  }>({
    isChild: false,
    cell: 1,
  }); // 두번째 헤더 병합
  const [grandChildCell, setGrandChildrenCell] = useState<{
    isGrand: boolean;
    cell: number;
  }>({
    isGrand: false,
    cell: 1,
  }); // 세번째 헤더 병합

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

    headers.forEach((header: HeaderItem) => {
      if (header.children) {
        let totalChildrenCell = 1;
        totalChildrenCell = header.children.length;

        // children (2depth) 객체가 있는 경우 개수 저장
        setChildrenCell((prev) => ({
          ...prev,
          isChild: true,
          cell: totalChildrenCell,
        }));
        // grandChild (3depth) 객체 판단 여부 저장
        setGrandChildrenCell((prev) => ({
          ...prev,
          isGrand: false,
        }));

        header.children.forEach((child) => {
          if (child.grandChild) {
            let totalGrandChildCell = 1;
            totalGrandChildCell = child.grandChild.length;

            // grandChild (3depth) 객체가 있는 경우 개수 저장
            setGrandChildrenCell((prev) => ({
              ...prev,
              isGrand: true,
              cell: totalGrandChildCell,
            }));
            // children (2depth) 객체 판단 여부 저장
            setChildrenCell((prev) => ({
              ...prev,
              isChild: false,
            }));
          }
        });
      }
    });
  }, [headers]); // headers가 변경될 때마다 재계산

  // 헤더 key 추출
  const headerKeys = headers.flatMap((header: any) =>
    header.children
      ? header.children.flatMap((child: any) =>
          child.grandChild
            ? child.grandChild.map((grand: any) => grand.key)
            : child.key
        )
      : header.key
  );

  return {
    headerCell,
    childrenCell,
    grandChildCell,
    headerKeys,
  };
};
