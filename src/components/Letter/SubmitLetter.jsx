import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { SubmitBtnSt } from "../../style/LetterStyle";
import { FamilyContext } from "../../context/FamilyContext";

function SubmitLetter() {
  const allData = useContext(FamilyContext);

  const makeLetterHandeler = () => {
    return {
      createdAt: String(new Date()),
      nickname: allData.nickName,
      avatar: "/img/pngwing.com.png",
      content: allData.content,
      writedTo: allData.option,
      id: uuidv4(),
    };
  };
  const resultLetter = makeLetterHandeler();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!allData.nickName || allData.nickName.length > 20) {
      alert("닉네임을 입력해주세요. 닉네임은 20자 이하여야 합니다.");
    }
    if (
      !allData.content ||
      allData.content.length < 5 ||
      allData.content.length > 100
    ) {
      alert("내용을 입력해주세요. 내용은 10자 이상, 100자 이하여야 합니다.");
    }
    if (allData.option.length === 0) {
      alert("당신의 최애는?!");
    }
    if (
      allData.nickName.length <= 20 &&
      allData.content.length >= 5 &&
      allData.option.length > 0
    ) {
      allData.setLetterList([...allData.letterList, resultLetter]);
      alert("최애에게 전달 중...><");
      allData.setNicKName("");
      allData.setContent("");
      // 얘는 한번의 렌더링으로 다 업데이트 되는데 왜 LetterList는...?
    }
  };

  return <SubmitBtnSt onClick={submitHandler}>펜레터 등록</SubmitBtnSt>;
}

export default SubmitLetter;
