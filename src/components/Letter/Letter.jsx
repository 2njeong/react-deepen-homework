import Title from "../Letter/Title";
import Input from "./Input";
import Select from "./Select";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import SubmitLetter from "./SubmitLetter";
import LetterList from "../LetterList/LetterList";
import {
  LetterWholeDiv,
  backImgMaker,
  NewFanLetterFormSt,
} from "../../style/LetterStyle";

function Letter() {
  const selectedBtn = useSelector(
    (state) => state.selectedBtnSlice.selectedBtn
  );

  const selectRef = useRef(null);

  return (
    <>
      <header>
        <Title />
      </header>
      <LetterWholeDiv $backImg={backImgMaker(selectedBtn)}>
        <NewFanLetterFormSt>
          <Input />
          {/* --------------------------------------------------------- */}
          <Select selectRef={selectRef} />
          {/* --------------------------------------------------------- */}
          <SubmitLetter />
        </NewFanLetterFormSt>
        {/* ----------------------------------------------------------- */}
        <LetterList />
      </LetterWholeDiv>
    </>
  );
}
export default Letter;
