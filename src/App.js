import React from "react";
import { createGlobalStyle } from "styled-components";
import { StyledPaper } from "./styles/Screen";

const GlobalStyle = createGlobalStyle`
  body {
    background: #efefef;
    text-align: center;
    margin: 0px;
    padding: 0px;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <StyledPaper>Hello</StyledPaper>
    </div>
  );
};

export default App;
