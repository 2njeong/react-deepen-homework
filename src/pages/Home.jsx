import React from "react";
import Layout from "../components/Layout";

function Home({ selectedBtn, setSelectedBtn, letterList, setLetterList }) {
  return (
    <>
      <Layout
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
        letterList={letterList}
        setLetterList={setLetterList}
      />
    </>
  );
}

export default Home;
