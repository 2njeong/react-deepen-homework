import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LetterDivSt, InputStBox } from "../../style/LetterStyle";
import {
  nicknameHandler,
  contentHandler,
} from "../../redux/modules/letterReducer";

function Input({ height, marginleft, nicknameOrcontent }) {
  const dispatch = useDispatch();
  const nickNameHandeler = (e) => dispatch(nicknameHandler(e));
  const contentHandeler = (e) => dispatch(contentHandler(e));

  const nickname = useSelector((state) => state.letterReducer.nickname);
  const content = useSelector((state) => state.letterReducer.content);

  return (
    <LetterDivSt height={height}>
      {nicknameOrcontent ? "닉네임" : "내용"}
      <InputStBox
        height={height}
        marginleft={marginleft}
        value={nicknameOrcontent ? nickname : content}
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
