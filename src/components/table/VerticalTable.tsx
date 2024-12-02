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
  const { childrenCell, grandChildCell, headerKeys } = useTable({
    headers,
  });

  const renderVerticalContents = (headers: HeaderItem[]) => {
    return (
      <>
        {headers.map((header, idx) => {
          return header.children !== undefined ? (
            // 1) 헤더 영역의 하위 자식 요소가 있는 경우
            <React.Fragment key={idx}>
              {/* 첫번째(1depth) 단계 셀 */}
              <tr>
                <th
                  align={headerAlign}
                  className="main"
                  rowSpan={
                    grandChildCell.isGrand
                      ? grandChildCell.cell + 3
                      : childrenCell.cell + 1
                  }
                  onClick={() => onClickHeader && onClickHeader(header)}
                >
                  {header.value}
                </th>
              </tr>
              {/* 두번째(2epth) 단계(children) 헤더 셀 */}
              {header.children.map((child) => (
                <tr key={child.key}>
                  <th
                    align={headerAlign}
                    onClick={() => onClickHeader && onClickHeader(child)}
                    rowSpan={
                      child.grandChild
                        ? grandChildCell.cell + 1
                        : childrenCell.cell - 1
                    }
                    colSpan={
                      child.grandChild === undefined ? childrenCell.cell : 1
                    }
                  >
                    {child.value}
                  </th>
                  {items?.map((item) => {
                    return headerKeys.map(
                      (key: any) =>
                        child.key === key && (
                          <td
                            align={contentsAlign}
                            key={key}
                            onClick={() => onClickRow && onClickRow(item)}
                          >
                            {renderBodyRows
                              ? renderBodyRows(item[key], key)
                              : item[key]}
                          </td>
                        )
                    );
                  })}
                </tr>
              ))}
              {/* 세번째(3depth) 단계(grandchild) 헤더 셀 */}
              {headers.flatMap((header) =>
                header.children
                  ? header.children.map((child) =>
                      child.grandChild
                        ? child.grandChild.map((grand: any) => {
                            return (
                              <tr key={grand.key}>
                                <th>{grand.value}</th>
                                <td>{grand.value}</td>
                              </tr>
                            );
                          })
                        : []
                    )
                  : []
              )}
            </React.Fragment>
          ) : (
            // 2) 헤더 영역의 하위 자식 요소가 없는 경우
            <tr key={idx}>
              <th
                align={headerAlign}
                colSpan={
                  grandChildCell.isGrand
                    ? grandChildCell.cell + 1
                    : childrenCell.cell + 1
                }
                className="main"
                onClick={() => onClickHeader && onClickHeader(header)}
              >
                {header.value}
              </th>
              {items?.map((item) => {
                return headerKeys.map(
                  (key: any) =>
                    header.key === key && (
                      <td
                        align={contentsAlign}
                        key={key}
                        onClick={() => onClickRow && onClickRow(key)}
                      >
                        {renderBodyRows
                          ? renderBodyRows(item[key], key)
                          : item[key]}
                      </td>
                    )
                );
              })}
            </tr>
          );
        })}
      </>
    );
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
