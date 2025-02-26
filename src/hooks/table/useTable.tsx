// lib
import { useEffect, useState } from "react";

export const useTable = ({ headers }: any) => {
  const [headerCells, setHeaderCells] = useState<{ [key: string]: number }>({}); // 각 헤더의 colspan
  const [childrenCells, setChildrenCells] = useState<{ [key: string]: number }>(
    {}
  ); // 각 children의 rowspan
  const [grandChildCells, setGrandChildCells] = useState<{
    [key: string]: number;
  }>({}); // 각 grandchild의 rowspan

  // grandChildCount 및 childrenCount 상태
  const [grandChildCount, setGrandChildCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  useEffect(() => {
    const headerMap: { [key: string]: number } = {};
    const childrenMap: { [key: string]: number } = {};
    const grandChildMap: { [key: string]: number } = {};
    let totalGrandChildCount = 0; // grandChild의 총 개수
    let totalChildrenCount = 0; // children의 총 개수

    headers.forEach((header: any) => {
      const childrenCount = header.children ? header.children.length : 0;
      totalChildrenCount += childrenCount; // children 개수 누적
      let totalGrandChildren = 0;

      if (header.children) {
        header.children.forEach((child: any) => {
          const grandChildCount = child.grandChild
            ? child.grandChild.length
            : 0;
          totalGrandChildren += grandChildCount;
          totalGrandChildCount += grandChildCount; // grandChild 개수 누적
          grandChildMap[child.key] = grandChildCount || 1;
        });

        childrenMap[header.key] =
          totalGrandChildren > 0 ? totalGrandChildren + 1 : childrenCount || 1;
      }
      headerMap[header.key] =
        totalGrandChildren > 0 ? totalGrandChildren : childrenCount || 1;
    });

    setHeaderCells(headerMap);
    setChildrenCells(childrenMap);
    setGrandChildCells(grandChildMap);

    // 상태 업데이트
    setGrandChildCount(totalGrandChildCount);
    setChildrenCount(totalChildrenCount);
  }, [headers]); // headers가 변경될 때마다 재계산

  // 헤더 key 추출
  const headerKeys: string[] = headers.flatMap((header: any) =>
    header.children
      ? header.children.flatMap((child: any) =>
          child.grandChild
            ? child.grandChild.map((grand: any) => grand.key)
            : child.key
        )
      : header.key
  );

  return {
    headerCells,
    childrenCells,
    grandChildCells,
    headerKeys,
    grandChildCount, // 추가
    childrenCount, // 추가
  };
};
