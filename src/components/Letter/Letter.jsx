import React, { useContext, useRef } from "react";
import { FamilyContext } from "../../context/FamilyContext";
import Input from "./Input";
import Select from "./Select";
import SubmitLetter from "./SubmitLetter";
import LetterList from "../LetterList/LetterList";
import { NewFanLetterFormSt } from "../../style/LetterStyle";

function Letter() {
  const allData = useContext(FamilyContext);

  const height = 1;
  const nicknameOrcontent = true;

  const selectRef = useRef(null);

  return (
    <>
      <NewFanLetterFormSt>
        <Input height={height} nicknameOrcontent={nicknameOrcontent} />
        <Input />
        {/* --------------------------------------------------------- */}
        <Select setOption={allData.setOption} selectRef={selectRef} />
        {/* --------------------------------------------------------- */}
        <SubmitLetter />
      </NewFanLetterFormSt>
      {/* ----------------------------------------------------------- */}
      <LetterList />
    </>
  );
}
export default Letter;
