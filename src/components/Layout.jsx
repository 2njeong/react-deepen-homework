import React from "react";
import GlobalStyle from "../GlobalStyle";
import Title from "./Title";
import Letter from "./Letter";

function Layout({ selectedBtn, setSelectedBtn, letterList, setLetterList }) {
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
