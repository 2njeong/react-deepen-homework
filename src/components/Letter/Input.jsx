import React, { useContext } from "react";
import { LetterDivSt, InputStBox } from "../../style/LetterStyle";
import { FamilyContext } from "../../context/FamilyContext";

function Input({ height, nicknameOrcontent }) {
  const allData = useContext(FamilyContext);
  const nickNameHandeler = (e) => allData.setNicKName(e.target.value);
  const contentHandeler = (e) => allData.setContent(e.target.value);

  return (
    <LetterDivSt height={height}>
      {nicknameOrcontent ? "닉네임" : "내용"}
      <InputStBox
        height={height}
        value={nicknameOrcontent ? allData.nickName : allData.content}
        onChange={nicknameOrcontent ? nickNameHandeler : contentHandeler}
        placeholder={
          nicknameOrcontent ? " 닉네임을 입력해주세요" : " 내용을 입력해주세요"
        }
        autoFocus
      ></InputStBox>
    </LetterDivSt>
  );
}

export default Input;
