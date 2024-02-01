import React from "react";
import Layout from "../components/Layout";

function Home({ letterList, setLetterList }) {
  return (
    <>
      <Layout letterList={letterList} setLetterList={setLetterList} />
    </>
  );
}

export default Home;
