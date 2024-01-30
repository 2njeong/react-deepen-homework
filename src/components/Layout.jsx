import React from "react";
import GlobalStyle from "../GlobalStyle";
import { useState } from "react";
import Title from "./Title";
import LetterList from "./LetterList";
import Letter from "./Letter";

function Layout() {
  const [selectedBtn, setSelectedBtn] = useState(null);
  return (
    <>
      <GlobalStyle />
      <header>
        <Title selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />
      </header>
      <body>
        <Letter />
      </body>
      <footer>
        <LetterList selectedBtn={selectedBtn} />
      </footer>
    </>
  );
}
export default Layout;
