import React from "react";
import { SelectStBox } from "../style/LetterStyle";

function Select({ setOption, selectRef }) {
  const selectHandler = (e) => {
    if (e) {
      console.log(e.target.options[e.target.options.selectedIndex].value);
      return setOption(e.target.options[e.target.options.selectedIndex].value);
    } else {
      return setOption("");
    }
  };

  return (
    <SelectStBox onChange={(e) => selectHandler(e)} ref={selectRef}>
      <option defaultValue>최애를 골라주세요</option>
      <option value="지수 - Jisoo">지수 - Jisoo</option>
      <option value="제니 - Jennie">제니 - Jennie</option>
      <option value="로제 - ROSÉ">로제 - ROSÉ</option>
      <option value="리사 - Lisa">리사 - Lisa</option>
    </SelectStBox>
  );
}

export default Select;
