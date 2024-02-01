import React from "react";
import GlobalStyle from "../GlobalStyle";
import { useState } from "react";
import Title from "./Title";
import Letter from "./Letter";

function Layout({ letterList, setLetterList }) {
  const [selectedBtn, setSelectedBtn] = useState(null);
  return (
    <>
      <GlobalStyle />

      <Title selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />

      <Letter
        selectedBtn={selectedBtn}
        letterList={letterList}
        setLetterList={setLetterList}
      />
    </>
  );
}
export default Layout;
