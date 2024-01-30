import React from "react";
import { useState } from "react";
import {
  NewFanLetterStContainer,
  NewFanletterStBox,
  InputStBox,
  WhoStBox,
  SelectStBox,
  SubmitBtnSt,
} from "../style/LetterStyle";

function Letter() {
  const [nickName, setNicname] = useState("");
  const [content, setContent] = useState("");

  const nickNameHandeler = (e) => setNicname(e.target.value);
  const contentHandeler = (e) => setContent(e.target.value);

  return (
    <>
      <NewFanLetterStContainer>
        <NewFanletterStBox>
          닉네임 :&nbsp;
          <InputStBox value={nickName} onChange={nickNameHandeler}></InputStBox>
        </NewFanletterStBox>
        <NewFanletterStBox>
          &nbsp; 내용 : &nbsp;{" "}
          <InputStBox value={content} onChange={contentHandeler}></InputStBox>
        </NewFanletterStBox>
        <WhoStBox>
          누구에게 보내실 건가요?{" "}
          <SelectStBox>
            <option defaultValue>최애를 골라주세요</option>
            <option>지수 - Jisoo</option>
            <option>제니 - Jennie</option>
            <option>로제 - ROSÉ</option>
            <option>리사 - Lisa</option>
          </SelectStBox>
        </WhoStBox>
        <SubmitBtnSt>펜레터 등록</SubmitBtnSt>
      </NewFanLetterStContainer>
    </>
  );
}
export default Letter;
