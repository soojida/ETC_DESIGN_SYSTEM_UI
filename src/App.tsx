// lib
import React from "react";

// style
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";

// components
import { HorizontalTableSelf } from "./components/table/HorizontalTableSelf";
import { HorizontalTable } from "./components/table/HorizontalTable";

// constant
import {
  horizontalTableBody,
  horizontalTableHeader,
} from "./constants/table/horizontalTableConst";
import {
  horizontalTableSelfBody,
  horizontalTableSelfHeader,
} from "./constants/table/horizontalTableConstSelf";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HorizonGroup>
        <GroupItem>
          <h1>
            테이블 colspan, rowspan <strong>(객체 내 number 직접 입력)</strong>
          </h1>
          <HorizontalTableSelf
            headers={horizontalTableSelfHeader}
            items={horizontalTableSelfBody}
          />
        </GroupItem>
        <GroupItem>
          <h1>
            테이블 colspan, rowspan <strong>(map() 함수 사용)</strong>
          </h1>
          <HorizontalTable
            headers={horizontalTableHeader}
            items={horizontalTableBody}
          />
        </GroupItem>
      </HorizonGroup>
    </ThemeProvider>
  );
}

export default App;

const HorizonGroup = styled.div`
  display: flex;
  padding: 20px;
  gap: 24px;
`;
const GroupItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  strong {
    font-weight: 600;
  }
`;
