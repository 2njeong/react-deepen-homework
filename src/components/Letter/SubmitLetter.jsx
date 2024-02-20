import React from "react";
import { v4 as uuidv4 } from "uuid";
import { SubmitBtnSt } from "../../style/LetterStyle";
import { useDispatch, useSelector } from "react-redux";
import { renewContent } from "../../redux/modules/letterSlice";
import { addLetterList } from "../../redux/modules/letterListSlice";
import axios from "axios";

function SubmitLetter() {
  const dispatch = useDispatch();
  const { nickname } = useSelector((state) => state.profileSlice.profile);
  const { content, option } = useSelector((state) => state.letterSlice);

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

  const submitLetterToServer = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/letters`,
        resultLetter
      );
    } catch (error) {
      console.error("서버에 newLetter 저장 실패", error);
      alert("서버와의 통신에 오류가 있습니다.");
    }
  };

  const fetchLetter = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/letters`
      );
      console.log(data);
      dispatch(addLetterList(data));
    } catch (error) {
      console.error("서버에 letterList 불러오기 실패", error);
      alert("서버에서 팬레터를 불러오지 못했습니다.");
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
      await fetchLetter();
      alert("최애에게 전달 중...><");
      dispatch(renewContent());
      // 얘는 한번의 렌더링으로 다 업데이트 되는데 왜 LetterList는...?
    }
  };

  return <SubmitBtnSt onClick={submitHandler}>펜레터 등록</SubmitBtnSt>;
}

export default SubmitLetter;
