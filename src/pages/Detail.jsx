import React from "react";
import EditNDelete from "../components/EditNDelete";

function Detail({ setSelectedBtn, letterList, setLetterList }) {
  return (
    <>
      <EditNDelete
        setSelectedBtn={setSelectedBtn}
        letterList={letterList}
        setLetterList={setLetterList}
      />
    </>
  );
}

export default Detail;
