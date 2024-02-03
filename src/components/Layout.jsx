import React from "react";
import Title from "./Title";
import Letter from "./Letter/Letter";

function Layout() {
  return (
    <>
      <header>
        <Title />
      </header>
      <div>
        <Letter />
      </div>
    </>
  );
}
export default Layout;
