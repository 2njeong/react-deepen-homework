import React from "react";
import { SubmitBtnSt } from "../../style/LetterStyle";
import { useDispatch, useSelector } from "react-redux";
import { renewContent } from "../../redux/modules/letterSlice";
import { __getLetters } from "../../redux/modules/letterListSlice";
import { lettersApi } from "../../axios/api";

function SubmitLetter() {
  const dispatch = useDispatch();
  const { nickname, id, avatar } = useSelector(
    (state) => state.profileSlice.profile
  );
  const { content, option } = useSelector((state) => state.letterSlice);

  const makeLetterHandeler = () => {
    return {
      createdAt: String(new Date()),
      nickname: nickname,
      avatar: avatar,
      content: content,
      writedTo: option,
      userId: id,
    };
  };
  const resultLetter = makeLetterHandeler();

  const submitLetterToServer = async () => {
    try {
      await lettersApi.post(`/letters`, resultLetter);
    } catch (error) {
      console.error("서버에 newLetter 저장 실패", error);
      alert("서버와의 통신에 오류가 있습니다.");
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!content || content.length < 5 || content.length > 100) {
      alert("내용을 입력해주세요. 내용은 10자 이상, 100자 이하여야 합니다.");
    }
    if (option.length === 0) {
      alert("당신의 최애는?!");
    }
    if (content.length >= 5 && option.length > 0) {
      await submitLetterToServer();
      dispatch(__getLetters());
      alert("최애에게 전달 중...><");
      dispatch(renewContent());
    }
  };

  return <SubmitBtnSt onClick={submitHandler}>펜레터 등록</SubmitBtnSt>;
}

export default SubmitLetter;
