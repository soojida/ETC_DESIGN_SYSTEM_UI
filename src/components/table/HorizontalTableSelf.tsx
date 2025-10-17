// lib
import React from "react";

// hooks
import { useTableSelf } from "src/hooks/table/useTableSelf";

// style
import styled from "styled-components";

interface HeaderItem {
  grandChild?: HeaderItem[];
  key: any | string[];
  value: React.ReactNode;
  colspan?: number;
  rowspan?: number;
  children?: HeaderItem[];
}
interface DataItem {
  [key: string]: React.ReactNode | any;
}
interface HorizontalTableProps {
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
export const HorizontalTableSelf = ({
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
  const { childrenCell, headerKeys } = useTableSelf({ headers });

  const renderHorizontalHeader = (headers: HeaderItem[]) => {
    return (
      <>
        {/* 첫번째(1depth) 단계 헤더 셀 */}
        <tr>
          {headers.map((header, index) =>
            header.children ? (
              // 1) 헤더 영역의 하위 자식 요소가 있는 경우
              <th
                key={`${header.key}-${index}`}
                align={headerAlign}
                colSpan={header.colspan || 1}
                onClick={() => onClickHeader && onClickHeader(header)}
              >
                {header.value}
              </th>
            ) : (
              // 2) 헤더 영역의 하위 자식 요소가 없는 경우
              <th
                key={`${header.key}-${index}`}
                align={headerAlign}
                rowSpan={header.rowspan || 1}
                onClick={() => onClickHeader && onClickHeader(header)}
              >
                {header.value}
              </th>
            )
          )}
        </tr>
        {/* 두번째(2epth) 단계(children) 헤더 셀 */}
        <tr>
          {headers.flatMap((header) =>
            header.children
              ? header.children.map((child, idx) =>
                  child.grandChild ? (
                    // 1) 두번째 헤더 영역의 하위 자식 요소가 있는 경우
                    <th key={`child-${idx}`} colSpan={child.colspan || 1}>
                      {child.value}
                    </th>
                  ) : (
                    // 2) 두번째 헤더 영역의 하위 자식 요소가 없는 경우
                    <th key={`child-${idx}`} rowSpan={child.rowspan || 1}>
                      {child.value}
                    </th>
                  )
                )
              : []
          )}
        </tr>
        {/* 세번째(3depth) 단계(grandChild) 헤더 셀 */}
        <tr>
          {headers.flatMap((header) =>
            header.children
              ? header.children.map((child) => {
                  // console.log(child.grandChild, "child");
                  return child.grandChild
                    ? child.grandChild.map((grand, i) => (
                        <th key={`grand-child-${i}`} className="grand-th">
                          {grand.value}
                        </th>
                      ))
                    : [];
                })
              : []
          )}
        </tr>
      </>
    );
  };
  const renderHorizontalContents = (items: DataItem[]) => {
    return items.length !== 0 ? (
      // 1) 컨텐츠(데이터)가 있는 경우
      items.map((item) => (
        <tr key={`item-${item.key}`}>
          {headerKeys.map((key: any) => {
            // console.log(item, "item", key, "key");
            return (
              <td
                key={`cell-${key}-${item.key}`}
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
        <td align="center" colSpan={childrenCell.cell}>
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

      &.grand-th {
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
