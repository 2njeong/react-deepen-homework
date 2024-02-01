import React from "react";
import GlobalStyle from "../GlobalStyle";
import { useState } from "react";
import Title from "./Title";
import Letter from "./Letter";

function Layout() {
  const [selectedBtn, setSelectedBtn] = useState(null);
  return (
    <>
      <GlobalStyle />

      <Title selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />

      <Letter selectedBtn={selectedBtn} />
    </>
  );
}
export default Layout;
