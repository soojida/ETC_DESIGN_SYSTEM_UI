// lib
import { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

// components
import { HorizontalTable } from "./HorizontalTable";
import {
  horizontalTableBody,
  horizontalTableChilrenHeader,
  horizontalTableGrandHeader,
  horizontalTableHeader,
} from "src/constants/table/horizontalTableConst";
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
  component: HorizontalTable,
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
    checkbox: true,
    onClickHeader: fn(),
    onClickRow: fn(),
    headerAlign: "center",
    contentsAlign: "center",
  },
} as Meta;

/**
 * 1단계(2depth) 기본 테이블이 필요한 경우 사용합니다.
 */
export const BaseHorizontalTable = (args: any) => (
  <HorizontalTable
    headers={horizontalTableHeader}
    items={horizontalTableBody}
    {...args}
  />
);

/**
 * 데이터가 없이 표출되는 테이블의 경우 사용합니다.
 */
export const NoDataHorizontalTable = (args: any) => (
  <HorizontalTable headers={horizontalTableHeader} items={""} {...args} />
);

/**
 * 2단계(2depth) 확장 셀의이 필요한 경우 사용하며, renderBodyRows를 props를 사용하여 셀의 커스텀이 가능합니다.
 */
export const CustomHorizontalTable = (args: any) => {
  const renderBodyRows = (item: any, key: any) => {
    if (key === "first_children") {
      // key 값이 "first_children" 인 경우, 버튼 삽입
      return (
        <Button variant="primary" size="xsmall" style={{ margin: "0 auto" }}>
          1-1
        </Button>
      );
    }
    return item;
  };
  return (
    <HorizontalTable
      colgroup={
        <>
          <col width="30%" />
          <col />
          <col />
          <col />
        </>
      }
      headers={horizontalTableChilrenHeader}
      items={horizontalTableBody}
      renderBodyRows={renderBodyRows}
      {...args}
    />
  );
};

/**
 * 3단계(3depth) 확장 셀이 필요한 경우 사용합니다.
 */
export const DeepHorizontalTable = (args: any) => {
  return (
    <HorizontalTable
      colgroup={
        <>
          <col width="30%" />
          <col />
          <col />
          <col />
        </>
      }
      headers={horizontalTableGrandHeader}
      items={horizontalTableBody}
      {...args}
    />
  );
};
