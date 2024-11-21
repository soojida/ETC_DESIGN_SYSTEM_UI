// common
import React from "react";

// style
import styled from "styled-components";
import { getShapeStyle } from "src/utils/tab/getShapeStyle";
import { getStyle } from "src/utils/tab/getStyle";

// hook
import { useTab } from "src/hooks/tab/useTab";

// 인터페이스
export interface TabProps {
  // 탭을 클릭했을 때 호출할 함수
  onClick?: () => void;
  // 클래스명
  className?: string;
  // 탭의 모양 설정
  shape?: "square" | "round";
  // 탭의 스타일 설정
  tabStyle?: "background" | "border";
  // 외부에서 활성화된 탭 인덱스 전달
  isActive?: number;
  // 패널에 출력할 Item
  tabItems?: { tabItem: React.ReactNode | string; content: React.ReactNode }[];
}

/**
 * @desc 탭 컴포넌트
 * @returns {JSX.Element} 탭 컴포넌트 반환
 */
export const Tab = ({
  tabItems = [],
  onClick,
  className,
  shape = "square",
  tabStyle = "background",
  isActive = 0,
}: TabProps): JSX.Element => {
  const { activeTab, onHandleTabClick } = useTab({
    isActive,
    onClick,
  });

  return (
    <TabForm className="tab__form">
      <TabList shape={shape} className="tab__list">
        {tabItems.map(({ tabItem }, idx) => (
          <TabItem
            key={idx}
            shape={shape}
            tabStyle={activeTab === idx ? tabStyle : undefined}
            className={activeTab === idx ? `active ${className}` : className}
            onClick={() => onHandleTabClick(idx)}
          >
            {tabItem}
          </TabItem>
        ))}
      </TabList>
      <TabContents className="tab__content">
        {tabItems[activeTab].content}
      </TabContents>
    </TabForm>
  );
};

const TabForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
`;

// 탭 아이템 스타일 영역
const TabList = styled.div<TabProps>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  ${({ shape }) => getShapeStyle(shape)}
`;

const TabItem = styled.div<TabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 38px;
  flex: 1;
  cursor: pointer;
  ${({ shape }) => getShapeStyle(shape)}
  ${({ tabStyle }) => getStyle(tabStyle)}

  &:not(:first-child) {
    border-left: 1px solid ${({ theme }) => theme.color.blueGray100};
  }
`;

export const TabTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 100%;
  font-size: 14px;
`;

const TabContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  overflow: auto;
`;
