// lib
import React from "react";
import type { Preview } from "@storybook/react";

// style
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import theme from "../src/styles/theme";

// font
import { GlobalFont } from "../src/styles/GlobalFont";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFont />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
