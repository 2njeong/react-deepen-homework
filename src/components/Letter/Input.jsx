import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LetterDivSt,
  Div,
  NicknameDiv,
  InputStBox,
} from "../../style/LetterStyle";
import { contentHandler } from "../../redux/modules/letterSlice";

function Input() {
  const dispatch = useDispatch();
  const { nickname } = useSelector((state) => state.profileSlice.profile);
  const content = useSelector((state) => state.letterSlice.content);
  const contentHandeler = (e) => dispatch(contentHandler(e.target.value));

  return (
    <LetterDivSt>
      <Div>
        닉네임
        <NicknameDiv>{nickname}</NicknameDiv>
      </Div>

      <div>
        내용
        <InputStBox
          value={content}
          onChange={contentHandeler}
          placeholder={" 내용을 입력해주세요"}
          autoFocus
        />
      </div>
    </LetterDivSt>
  );
}

export default Input;
