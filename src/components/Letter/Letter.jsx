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
    (state) => state.selectedBtnReducer.selectedBtn
  );

  const height = 1;
  const marginleft = 2;
  const nicknameOrcontent = true;

  const selectRef = useRef(null);

  return (
    <LetterWholeDiv backimg={backImgMaker(selectedBtn)}>
      <NewFanLetterFormSt>
        <Input
          height={height}
          marginleft={marginleft}
          nicknameOrcontent={nicknameOrcontent}
        />
        <Input />
        {/* --------------------------------------------------------- */}
        <Select selectRef={selectRef} />
        {/* --------------------------------------------------------- */}
        <SubmitLetter />
      </NewFanLetterFormSt>
      {/* ----------------------------------------------------------- */}
      <LetterList />
    </LetterWholeDiv>
  );
}
export default Letter;
