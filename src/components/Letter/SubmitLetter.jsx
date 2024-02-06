import React from "react";
import { v4 as uuidv4 } from "uuid";
import { SubmitBtnSt } from "../../style/LetterStyle";
import { useDispatch, useSelector } from "react-redux";
import { renewNickname, renewContent } from "../../redux/modules/letterReducer";
import { addLetterList } from "../../redux/modules/letterListReducer";

function SubmitLetter() {
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.letterReducer.nickname);
  const content = useSelector((state) => state.letterReducer.content);
  const option = useSelector((state) => state.letterReducer.option);

  const makeLetterHandeler = () => {
    return {
      createdAt: String(new Date()),
      nickname: nickname,
      avatar: "/img/pngwing.com.png",
      content: content,
      writedTo: option,
      id: uuidv4(),
    };
  };
  const resultLetter = makeLetterHandeler();

  const submitHandler = (event) => {
    event.preventDefault();
    if (nickname.length === 0 || nickname.length > 20) {
      alert("닉네임을 입력해주세요. 닉네임은 20자 이하여야 합니다.");
    }
    if (!content || content.length < 5 || content.length > 100) {
      alert("내용을 입력해주세요. 내용은 10자 이상, 100자 이하여야 합니다.");
    }
    if (option.length === 0) {
      alert("당신의 최애는?!");
    }
    if (nickname.length <= 20 && content.length >= 5 && option.length > 0) {
      dispatch(addLetterList(resultLetter));
      alert("최애에게 전달 중...><");
      dispatch(renewNickname());
      dispatch(renewContent());
      // 얘는 한번의 렌더링으로 다 업데이트 되는데 왜 LetterList는...?
    }
  };

  return <SubmitBtnSt onClick={submitHandler}>펜레터 등록</SubmitBtnSt>;
}

export default SubmitLetter;
