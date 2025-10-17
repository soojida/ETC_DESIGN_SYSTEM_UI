// lib
import React from "react";

// hooks
import { useTable } from "src/hooks/table/useTable";

// style
import styled from "styled-components";

interface HeaderItem {
  grandChild?: HeaderItem[];
  key: any | string[];
  value: React.ReactNode;
  colspan?: number;
  children?: HeaderItem[];
}
interface DataItem {
  [key: string]: React.ReactNode | any;
}
export interface HorizontalTableProps {
  // 클래스명
  className?: string;
  // 테이블 푸터 내용
  footer?: React.ReactNode;
  // 테이블 헤더 데이터
  headers: HeaderItem[] | undefined;
  // 테이블 바디 데이터
  items: DataItem[] | any;
  // 테이블 바디 데이터 커스텀
  renderBodyRows?: (item?: any, key?: any) => React.ReactNode;
  // 테이블 헤더 클릭 이벤트
  onClickHeader?: (header?: HeaderItem) => void;
  // 테이블 바디 클릭 이벤트
  onClickRow?: (item?: DataItem) => void;
  // 테이블 너비값 설정
  colgroup?: React.ReactNode;
  // 테이블 데이터가 없는 경우 메세지
  noDataMessage?: string | React.ReactNode;
  // 테이블 헤더 정렬
  headerAlign?: "left" | "center" | "right";
  // 테이블 바디 정렬
  contentsAlign?: "left" | "center" | "right";
}
export const HorizontalTable = ({
  className,
  footer,
  headers = [],
  items,
  renderBodyRows,
  onClickHeader,
  onClickRow,
  colgroup,
  noDataMessage = "결과가 없습니다.",
  headerAlign = "center",
  contentsAlign = "center",
}: HorizontalTableProps) => {
  const { headerKeys, childrenCells, grandChildCells, childrenCount } =
    useTable({
      headers,
    });

  const renderHorizontalHeader = (headers: HeaderItem[]) => {
    return (
      <>
        {/* 첫번째(1depth) 단계 헤더 셀 */}
        <tr>
          {headers.map((header, index) => {
            return header.children ? (
              // 1) 헤더 영역의 하위 자식 요소가 있는 경우
              <th
                key={`${header.key}-${index}`}
                align={headerAlign}
                colSpan={header.children ? childrenCount || 1 : undefined}
                onClick={() => onClickHeader && onClickHeader(header)}
              >
                {header.value}
              </th>
            ) : (
              // 2) 헤더 영역의 하위 자식 요소가 없는 경우
              <th
                key={`${header.key}-${index}`}
                align={headerAlign}
                rowSpan={3}
                onClick={() => onClickHeader && onClickHeader(header)}
              >
                {header.value}
              </th>
            );
          })}
        </tr>
        {/* 두번째(2epth) 단계(children) 헤더 셀 */}
        <tr>
          {headers.flatMap((header) =>
            header.children
              ? header.children.map((child, idx) =>
                  child.grandChild ? (
                    // 1) 두번째 헤더 영역의 하위 자식 요소가 있는 경우
                    <th
                      key={`${child.key}-${idx}`}
                      colSpan={grandChildCells[child.key] || 1}
                    >
                      {child.value}
                    </th>
                  ) : (
                    // 2) 두번째 헤더 영역의 하위 자식 요소가 없는 경우
                    <th
                      key={`${child.key}-${idx}`}
                      rowSpan={childrenCells[header.key]}
                    >
                      {child.value}
                    </th>
                  )
                )
              : []
          )}
        </tr>
        {/* 세번째(3depth) 단계(grandchild) 헤더 셀 */}
        <tr className="grand">
          {headers.flatMap((header) =>
            header.children
              ? header.children.map((child) =>
                  child.grandChild
                    ? child.grandChild.map((grand: any, i) => (
                        <th key={`${grand.key}-${i}`}>{grand.value}</th>
                      ))
                    : []
                )
              : []
          )}
        </tr>
      </>
    );
  };
  const renderHorizontalContents = (items: DataItem[]) => {
    return items.length !== 0 ? (
      // 1) 컨텐츠(데이터)가 있는 경우
      items.map((item, index) => (
        <tr key={`${item.key}-${index}`}>
          {headerKeys.map((key: any, idx) => {
            return (
              <td
                key={`${key}-${idx}`}
                align={contentsAlign}
                onClick={() => onClickRow && onClickRow(item)}
              >
                {renderBodyRows ? renderBodyRows(item[key], key) : item[key]}
              </td>
            );
          })}
        </tr>
      ))
    ) : (
      // 2) 컨텐츠(데이터)가 없는 경우
      <tr>
        <td align="center" colSpan={headerKeys.length}>
          {noDataMessage}
        </td>
      </tr>
    );
  };
  return (
    <HorizontalTableScroll>
      <HorizontalTableForm className={className}>
        {colgroup && <colgroup>{colgroup}</colgroup>}
        <Thead align={headerAlign}>{renderHorizontalHeader(headers)}</Thead>
        <Tbody align={contentsAlign}>{renderHorizontalContents(items)}</Tbody>
        {footer && <Tfoot>{footer}</Tfoot>}
      </HorizontalTableForm>
    </HorizontalTableScroll>
  );
};
const HorizontalTableScroll = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
const HorizontalTableForm = styled.table`
  width: -webkit-fill-available;
  height: auto;
  border-collapse: separate;
  table-layout: fixed;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-top: 0;

  th,
  td {
    padding: 6px 8px;
    height: 38px;
    vertical-align: middle;
    line-height: 1.2;
    font-size: 13px;
  }
`;
const Thead = styled.thead<{ align: string }>`
  position: sticky;
  top: 0;
  z-index: 99;
  background: ${({ theme }) => theme.color.gray100};

  tr {
    th {
      text-align: ${(props) =>
        props.align === "center"
          ? "center"
          : props.align === "left"
            ? "left"
            : "right"};
      border-top: 1px solid ${({ theme }) => theme.color.gray200};

      &:not(:first-child) {
        border-left: 1px solid ${({ theme }) => theme.color.gray200};
      }
    }
    /* 세번째 단계(grand)가 있는 경우의 스타일 */
    &.grand {
      th {
        border-left: 1px solid ${({ theme }) => theme.color.gray200};
      }
    }
  }
`;
const Tbody = styled.tbody<{ align: string }>`
  position: relative;
  background: ${({ theme }) => theme.color.white};

  tr {
    border-top: 1px solid ${({ theme }) => theme.color.gray200};

    td {
      text-align: ${(props) =>
        props.align === "center"
          ? "center"
          : props.align === "left"
            ? "left"
            : "right"};
      border-top: 1px solid ${({ theme }) => theme.color.gray200};

      &:not(:first-child) {
        border-left: 1px solid ${({ theme }) => theme.color.gray200};
      }
    }

    &.active {
      background: ${({ theme }) => theme.color.primary};
    }
  }
`;
const Tfoot = styled.tfoot``;
