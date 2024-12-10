// lib
import { Meta } from "@storybook/react/*";

// components
import { Accordion } from "./Accordion";

// style
import styled from "styled-components";

/**
 * 아코디언(Accordion)은 기본 정보를 초기 상태로 표시하고,
 * 사용자가 상호작용함에 따라 세부 정보를 점진적으로 공개하는 UI 컴포넌트입니다.
 *
 * 총 세 가지 유형의 버튼을 제공합니다.
 * - `base accordion` : 일반적인 단일 작업에 사용되는 기본형 아코디언입니다.
 * - `multi accordion` : 다중 리스트를 동시에 표시하거나 확장하는 작업에 사용됩니다.
 * - `custom button` : 타이틀과 내용을 커스터마이징(ReactElement 사용) 하는 작업에 사용됩니다.
 */
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ItemsInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 0;

  p {
    font-size: 13px;

    strong {
      font-weight: 500;
    }

    span {
      &:not(:first-child) {
        margin-left: 4px;

        &:before {
          content: "";
          display: inline-block;
          width: 1px;
          height: 12px;
          margin-right: 4px;
          vertical-align: bottom;
          background: ${({ theme }) => theme.color.gray400};
        }
      }
    }
  }
`;

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    componentSubTitle: "아코디언 컴포넌트", // 서브 타이틀
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {},
  args: {
    expand: "number",
    baseLists: [{ header: "메뉴", items: "하위 메뉴" }],
    multipleLists: [
      { header: "메뉴1", items: "하위 메뉴" },
      {
        header: "메뉴2",
        items: ["하위 메뉴1", "하위 메뉴2"],
      },
    ],
    customAccordion: [
      {
        header: <Header>최적 경로</Header>,
        items: [
          <ItemsInner>
            <p>
              도착 시간 <strong>오늘 14:40</strong>
            </p>
            <p>
              <span>통행 요금 0원</span>
              <span>택시요금 5,600원</span>
              <span>연료비 149원</span>
            </p>
          </ItemsInner>,
        ],
      },
    ],
  },
} as Meta;

/**
 * 기본 아코디언, 일반적인 단일 작업에 사용되는 기본형 아코디언입니다.
 */
export const BaseAccordion = (args: any) => {
  return <Accordion {...args} lists={args.baseLists}></Accordion>;
};

/**
 * 다중 아코디언, 다중 리스트를 동시에 표시하거나 확장하는 작업에 사용됩니다.
 */
export const MultipleAccordion = (args: any) => {
  return <Accordion {...args} lists={args.multipleLists}></Accordion>;
};

/**
 * 커스텀 아코디언, 타이틀과 내용을 커스터마이징(ReactElement 사용) 하는 작업에 사용됩니다.
 */
export const CustomAccordion = (args: any) => {
  return <Accordion {...args} lists={args.customAccordion}></Accordion>;
};
