import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
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
  .placeholer, ::placeholder {
    color: ${({ theme }) => theme.color.gray300};
  }
   /* 비활성화 */
  .disabled,
  :disabled {
    color: ${({ theme }) => theme.color.gray400};
    background: ${({ theme }) => theme.color.gray100};
    border-color: ${({ theme }) => theme.color.gray200};
    cursor: not-allowed;

    svg {
      fill: #98a2b3;
    }
    &:hover {
      color: ${({ theme }) => theme.color.gray400};
      background: ${({ theme }) => theme.color.gray100};
      border-color: ${({ theme }) => theme.color.gray200};
      cursor: not-allowed;
    }
  }

input {
  &:focus-visible {
    outline: 0;
  }
}
`;
