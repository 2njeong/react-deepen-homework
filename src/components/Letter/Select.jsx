import React, { useContext } from "react";
import { WhoStBox, SelectStBox } from "../../style/LetterStyle";
import { FamilyContext } from "../../context/FamilyContext";

function Select({ selectRef }) {
  const allData = useContext(FamilyContext);

  const selectHandler = (e) => {
    if (e) {
      return allData.setOption(
        e.target.options[e.target.options.selectedIndex].value
      );
    } else {
      return allData.setOption("");
    }
  };

  return (
    <WhoStBox>
      누구에게 보내실 건가요?{" "}
      <SelectStBox onChange={(e) => selectHandler(e)} ref={selectRef}>
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
