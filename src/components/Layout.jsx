import React from "react";
import Title from "./Title";
import Letter from "./Letter";

function Layout({ selectedBtn, setSelectedBtn, letterList, setLetterList }) {
  return (
    <>
      <header>
        <Title selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />
      </header>
      <div>
        <Letter
          selectedBtn={selectedBtn}
          letterList={letterList}
          setLetterList={setLetterList}
        />
      </div>
    </>
  );
}
export default Layout;
