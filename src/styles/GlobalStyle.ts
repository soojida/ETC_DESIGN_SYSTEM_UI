import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-weight: 400;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,"Pretendard","Apple SD Gothic Neo",sans-serif;
  }
  body {
    font-size: 14px;
    font-weight: 400;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,"Pretendard","Apple SD Gothic Neo",sans-serif;
  }
  button {
    border: 0;
    outline: 0;
  }
`;
