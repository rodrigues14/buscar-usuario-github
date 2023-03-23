import { createGlobalStyle } from "styled-components";
import { fontColor, fontRoboto } from "./style/variables";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${fontRoboto};
    color: ${fontColor};
  }
`;