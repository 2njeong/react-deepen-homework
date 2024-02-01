import React, { useRef } from "react";
import { useState } from "react";
import { fakeData } from "../shared/data";
import {
  NewFanLetterStContainer,
  NickNameStBox,
  ContentStBox,
  NickInputStBox,
  ContentInputStBox,
  WhoStBox,
  SubmitBtnSt,
} from "../style/LetterStyle";
import { v4 as uuidv4 } from "uuid";
import LetterList from "./LetterList";
import Select from "./Select";

function Letter({ selectedBtn }) {
  const [nickName, setNicKName] = useState("");
  const [content, setContent] = useState("");
  const [option, setOption] = useState("");

  const [letterList, setLetterList] = useState([...fakeData]);

  const nickNameHandeler = (e) => setNicKName(e.target.value);
  const contentHandeler = (e) => setContent(e.target.value);

  const makeLetterHandeler = () => {
    return {
      createdAt: String(new Date()),
      nickname: `${nickName}`,
      avatar: "img/pngwing.com.png",
      content: `${content}`,
      writedTo: option,
      id: uuidv4(),
    };
  };
  const selectRef = useRef(null);

  const onClearSelect = () => {
    if (selectRef.current) {
      selectRef.current.clearValue();
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nickName || nickName.length > 20) {
      alert("닉네임을 입력해주세요. 닉네임은 20자 이하여야 합니다.");
    }
    if (!content || content.length < 5 || content.length > 100) {
      alert("내용을 입력해주세요. 내용은 10자 이상, 100자 이하여야 합니다.");
    }
    if (option.length === 0) {
      alert("당신의 최애는?!");
    }
    if (nickName.length <= 20 && content.length >= 5 && option.length > 0) {
      setLetterList([...letterList, makeLetterHandeler()]);
      alert("최애에게 전달 중...><");
      setNicKName("");
      setContent("");
      onClearSelect();
    }
  };
  return (
    <>
      <NewFanLetterStContainer>
        <NickNameStBox>
          닉네임 &nbsp;
          <NickInputStBox
            value={nickName}
            onChange={nickNameHandeler}
            placeholder=" 닉네임을 입력해주세요"
            autoFocus
          ></NickInputStBox>
        </NickNameStBox>
        <ContentStBox>
          내용 &nbsp;
          <ContentInputStBox
            value={content}
            onChange={contentHandeler}
            placeholder=" 내용을 입력해주세요"
          ></ContentInputStBox>
        </ContentStBox>
        <WhoStBox>
          누구에게 보내실 건가요?{" "}
          <Select setOption={setOption} selectRef={selectRef} />
        </WhoStBox>
        <SubmitBtnSt onClick={submitHandler}>펜레터 등록</SubmitBtnSt>
      </NewFanLetterStContainer>
      <LetterList selectedBtn={selectedBtn} letterList={letterList} />
    </>
  );
}
export default Letter;
