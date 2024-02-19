import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LetterDivSt, InputStBox } from "../../style/LetterStyle";
import {
  nicknameHandler,
  contentHandler,
} from "../../redux/modules/letterSlice";

function Input({ height, marginLeft, nicknameOrcontent }) {
  const dispatch = useDispatch();
  const nickNameHandeler = (e) => dispatch(nicknameHandler(e.target.value));
  const contentHandeler = (e) => dispatch(contentHandler(e.target.value));

  const nickname = useSelector((state) => state.letterSlice.nickname);
  const content = useSelector((state) => state.letterSlice.content);

  return (
    <LetterDivSt height={height}>
      {nicknameOrcontent ? "닉네임" : "내용"}
      <InputStBox
        height={height}
        $marginLeft={marginLeft}
        value={nicknameOrcontent ? nickname : content}
        onChange={nicknameOrcontent ? nickNameHandeler : contentHandeler}
        placeholder={
          nicknameOrcontent ? " 닉네임을 입력해주세요" : " 내용을 입력해주세요"
        }
        maxLength={nicknameOrcontent ? 20 : 100}
        autoFocus
      ></InputStBox>
    </LetterDivSt>
  );
}

export default Input;
