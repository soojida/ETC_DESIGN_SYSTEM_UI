// common
import React from "react";

// style
import styled from "styled-components";

// icon
import { SlArrowDown } from "react-icons/sl";

// components
import Button from "../button/Button";
import { useAccordion } from "src/hooks/accordion/useAccordion";

export interface AccordionLists {
  items?: string[] | any;
  list?: string;
  header?: React.ReactNode | string;
}
export interface AccordionItems {
  items?: string;
}

export interface AccordionProps {
  lists?: AccordionLists[];
  expand?: "number" | "array";
}

export const Accordion = ({ lists, expand = "number" }: AccordionProps) => {
  const { isExpand, onClickToggle } = useAccordion(expand);

  return (
    <AccordionContainer>
      {lists?.map((listObj, listIdx) => {
        return (
          <AccordionListItem key={listIdx}>
            {/* accordion 헤더 영역 */}
            <AccordionHeader onClick={() => onClickToggle(listIdx, expand)}>
              <HeaderInner>{listObj.header}</HeaderInner>
              <ExpandButton
                isExpand={isExpand(listIdx)}
                icon={<SlArrowDown style={{ fontSize: "11px" }} />}
              />
            </AccordionHeader>
            {/* accordion 컨텐츠 영역 */}
            <AccordionContents>
              {isExpand(listIdx) &&
                (Array.isArray(listObj.items) ? (
                  // items가 배열인 경우
                  listObj.items.map((item, itemIdx) => (
                    <AccordionItem key={itemIdx}>{item}</AccordionItem>
                  ))
                ) : typeof listObj.items === "string" ? (
                  // items가 단일 문자열인 경우
                  <AccordionItem>{listObj.items}</AccordionItem>
                ) : // 이 외의 값 null 반환
                null)}
            </AccordionContents>
          </AccordionListItem>
        );
      })}
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div``;
const AccordionListItem = styled.div`
  border: 1px solid ${({ theme }) => theme.color.blueGray100};

  &:not(:last-child) {
    border-bottom: 0;
  }
`;
const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: ${({ theme }) => theme.color.gray100};
`;
const HeaderInner = styled.div``;
const ExpandButton = styled(Button)<{ isExpand: boolean }>`
  padding: 0;
  transform: ${({ isExpand }) =>
    isExpand ? "rotate(180deg)" : "rotate(0deg)"};
  background: none;
`;
const AccordionContents = styled.div``;
export const AccordionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px solid ${({ theme }) => theme.color.blueGray100};
`;
