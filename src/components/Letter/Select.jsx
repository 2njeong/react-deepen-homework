import React from "react";
import { useDispatch } from "react-redux";
import { WhoStBox, SelectStBox } from "../../style/LetterStyle";
import {
  toWhomHandelr,
  selectNoOneHandler,
} from "../../redux/modules/letterSlice";

function Select() {
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    if (e) {
      dispatch(
        toWhomHandelr(e.target.options[e.target.options.selectedIndex].value)
      );
    } else {
      dispatch(selectNoOneHandler());
    }
  };

  return (
    <WhoStBox>
      <label>누구에게 보내실 건가요?</label>
      <SelectStBox onChange={(e) => selectHandler(e)}>
        <option defaultValue>최애를 골라주세요</option>
        <option value="지수 - Jisoo">지수 - Jisoo</option>
        <option value="제니 - Jennie">제니 - Jennie</option>
        <option value="로제 - ROSÉ">로제 - ROSÉ</option>
        <option value="리사 - Lisa">리사 - Lisa</option>
      </SelectStBox>
    </WhoStBox>
  );
}

export default Select;
