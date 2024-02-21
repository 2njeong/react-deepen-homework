import Title from "../Letter/Title";
import Input from "./Input";
import Select from "./Select";
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

  return (
    <>
      <header>
        <Title />
      </header>
      <LetterWholeDiv $backImg={backImgMaker(selectedBtn)}>
        <NewFanLetterFormSt>
          <Input />
          {/* --------------------------------------------------------- */}
          <Select />
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
