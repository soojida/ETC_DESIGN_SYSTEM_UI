// lib
import React from "react";

// hooks
import { useTable } from "src/hooks/table/useTable";

// style
import styled from "styled-components";

export interface HeaderItem {
  grandChild: any;
  key: any | string[];
  value: React.ReactNode;
  colspan?: number;
  children?: HeaderItem[];
}
interface DataItem {
  [key: string]: React.ReactNode | any;
}
interface VerticalTableProps {
  // 클래스명
  className?: string;
  // 테이블 푸터 내용
  footer?: React.ReactNode;
  // 테이블 헤더 데이터
  headers: HeaderItem[] | undefined;
  // 테이블 바디 데이터
  items: DataItem[];
  // 테이블 바디 데이터 커스텀
  renderBodyRows?: (item?: any, key?: any) => React.ReactNode;
  // 테이블 헤더 클릭 이벤트
  onClickHeader?: (header?: HeaderItem) => void;
  // 테이블 바디 클릭 이벤트
  onClickRow?: (item?: DataItem) => void;
  // 테이블 너비값 설정
  colgroup?: React.ReactNode;
  // 테이블 헤더 정렬
  headerAlign?: "left" | "center" | "right";
  // 테이블 바디 정렬
  contentsAlign?: "left" | "center" | "right";
}
export const VerticalTable = ({
  className,
  footer,
  headers = [],
  items,
  renderBodyRows,
  onClickHeader,
  onClickRow,
  colgroup,
  headerAlign = "center",
  contentsAlign = "center",
}: VerticalTableProps) => {
  const {
    headerCells,
    childrenCells,
    grandChildCells,
    headerKeys,
    grandChildCount,
    childrenCount,
  } = useTable({
    headers,
  });

  console.log(
    grandChildCount,
    "grandChildCount",
    childrenCount,
    "childrenCount"
  );

  const renderVerticalContents = (headers: HeaderItem[]) => {
    return headers.map((header: any) => (
      <React.Fragment key={header.key}>
        {/* 첫번째(1depth) 단계 헤더 셀 */}
        <tr>
          <th
            align={headerAlign}
            rowSpan={
              header.children ? childrenCount + grandChildCount + 1 : undefined
            }
            colSpan={!header.children ? childrenCount + 1 : undefined}
            onClick={() => onClickHeader?.(header)}
          >
            {header.value}
          </th>
          {header.children
            ? null
            : items.map((item) => (
                <td
                  key={header.key}
                  align={contentsAlign}
                  onClick={() => onClickRow?.(item)}
                >
                  {renderBodyRows
                    ? renderBodyRows(item[header.key], header.key)
                    : item[header.key]}
                </td>
              ))}
        </tr>
        {/* 두번째(2epth) 단계(children) 헤더 셀 */}
        {header.children?.map((child: any) => (
          <tr key={child.key}>
            <th
              align={headerAlign}
              className={child.grandChild ? "tomato" : "noneTomato"}
              rowSpan={child.grandChild ? childrenCount + 1 : undefined}
              colSpan={!child.grandChild ? childrenCount : undefined}
              onClick={() => onClickHeader?.(child)}
            >
              {console.log(child.grandChild, "child.grandChild")}
              {child.value}
            </th>
            {child.grandChild
              ? null
              : items.map((item) => (
                  <td
                    key={child.key}
                    align={contentsAlign}
                    onClick={() => onClickRow?.(item)}
                  >
                    {renderBodyRows
                      ? renderBodyRows(item[child.key], child.key)
                      : item[child.key]}
                  </td>
                ))}
          </tr>
        ))}
        {/* 세번째(3depth) 단계(grandchild) 헤더 셀 */}
        {header.children?.flatMap((child: any) =>
          child.grandChild?.map((grand: any) => (
            <tr key={grand.key}>
              <th align={headerAlign} className="grandTomato">
                {grand.value}
              </th>
              {items.map((item) => (
                <td
                  key={grand.key}
                  align={contentsAlign}
                  onClick={() => onClickRow?.(item)}
                >
                  {renderBodyRows
                    ? renderBodyRows(item[grand.key], grand.key)
                    : item[grand.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </React.Fragment>
    ));
  };
  return (
    <VerticalTableScroll>
      <VerticalTableForm className={className}>
        {colgroup && <colgroup>{colgroup}</colgroup>}
        <Tbody headerAlign={headerAlign} contentsAlign={contentsAlign}>
          {renderVerticalContents(headers)}
        </Tbody>
        {footer && <Tfoot>{footer}</Tfoot>}
      </VerticalTableForm>
    </VerticalTableScroll>
  );
};
const VerticalTableScroll = styled.div`
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
  }
`;
const VerticalTableForm = styled.table`
  width: -webkit-fill-available;
`;
const Tbody = styled.tbody<{ headerAlign: string; contentsAlign: string }>`
  tr {
    border: 1px solid ${({ theme }) => theme.color.gray200};
    border-bottom: 0;

    th {
      width: 80px;
      text-align: ${(props) =>
        props.headerAlign === "center"
          ? "center"
          : props.headerAlign === "left"
            ? "left"
            : "right"};
      background: ${({ theme }) => theme.color.gray100};
      border-right: 1px solid ${({ theme }) => theme.color.gray200};
    }
    td {
      width: 200px;
      text-align: ${(props) =>
        props.contentsAlign === "center"
          ? "center"
          : props.contentsAlign === "left"
            ? "left"
            : "right"};
    }

    th,
    td {
      padding: 6px 8px;
      height: 38px;
      vertical-align: middle;
      line-height: 1.2;
      font-size: 13px;
      word-break: break-all;
    }
  }
`;
const Tfoot = styled.tfoot``;
