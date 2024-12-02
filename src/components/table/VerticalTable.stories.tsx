// lib
import { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

// components
import { VerticalTable } from "./VerticalTable";
import {
  verticalTablChildrenHeader,
  verticalTableBody,
  verticalTableHeader,
  verticalTablGrandHeader,
} from "src/constants/table/verticalTableConst";
import Button from "../button/Button";

/**
 * 테이블(Table)은 행과 열로 구성된 구조화된 데이터 집합으로, 여러 종류의 데이터(data)를 보기 좋게 정리하여 보여주는 표 입니다.
 *
 * 총 두 가지 테이블 형태를 제공하며, 객체는 최대 2단계(depth)의 사용을 권장합니다.
 * - `vertical` : 데이터를 행(row) 기준으로 배열하는 방식입니다. (각 항목의 속성을 세로로 나열)
 * - `horizontal` : 데이터를 열(column) 기준으로 배열하는 방식입니다. (각 항목을 가로로 나열)
 */
export default {
  title: "Components/Table",
  component: VerticalTable,
  parameters: {
    componentSubtitle: "테이블 컴포넌트",
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    onClickHeader: { action: "onClickHeader" },
    onClickRow: { action: "onClickRow" },
  },
  args: {
    onClickHeader: fn(),
    onClickRow: fn(),
    headerAlign: "center",
    contentsAlign: "center",
  },
} as Meta;

/**
 * 1단계(2depth) 기본 테이블이 필요한 경우 사용합니다.
 */
export const BaseVerticalTable = (args: any) => (
  <VerticalTable
    colgroup={
      <>
        <col width="15%" />
        <col width="15%" />
        <col width="25%" />
      </>
    }
    headers={verticalTableHeader}
    items={verticalTableBody}
    {...args}
  />
);

/**
 * 2단계(2depth) 확장 셀의이 필요한 경우 사용하며, renderBodyRows를 props를 사용하여 셀의 커스텀이 가능합니다.
 */
export const CustomVerticalTable = (args: any) => {
  const renderBodyRows = (item: any, key: any) => {
    if (key === "first_children") {
      // key 값이 "first_children" 인 경우, 버튼 삽입
      return (
        <Button variant="primary" size="xsmall" style={{ margin: "0 auto" }}>
          1-1
        </Button>
      );
    }
    // 그 외 데이터 반환
    return item;
  };
  return (
    <VerticalTable
      colgroup={
        <>
          <col width="15%" />
          <col width="15%" />
          <col width="25%" />
        </>
      }
      headers={verticalTablChildrenHeader}
      items={verticalTableBody}
      renderBodyRows={renderBodyRows}
      {...args}
    />
  );
};

/**
 * 3단계(3depth) 확장 셀이 필요한 경우 사용합니다.
 */
export const DeepVerticalTable = (args: any) => {
  return (
    <VerticalTable
      colgroup={
        <>
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="35%" />
        </>
      }
      headers={verticalTablGrandHeader}
      items={verticalTableBody}
      {...args}
    />
  );
};
