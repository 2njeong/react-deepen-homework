import React from "react";
import { useState } from "react";
import {
  FanLetterStContainer,
  FanletterStBox,
  InputStBox,
  WhoStBox,
  SelectStBox,
  SubmitBtn,
} from "../components/HomeStyle";

function Home() {
  const [nickName, setNicname] = useState("");

  return (
    <>
      <FanLetterStContainer>
        <FanletterStBox>
          닉네임 :&nbsp;
          <InputStBox
            value={nickName}
            onChange={(e) => {
              // console.log(e.target.value);
              setNicname(e.target.value);
            }}
          ></InputStBox>
        </FanletterStBox>
        <FanletterStBox>
          &nbsp; 내용 : &nbsp; <InputStBox></InputStBox>
        </FanletterStBox>
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
        <SubmitBtn>펜레터 등록</SubmitBtn>
      </FanLetterStContainer>
      <div>
        <img></img>
        <ul>
          <li>닉네임</li>
          <li>날짜</li>
          <ul>내용</ul>
        </ul>
      </div>
    </>
  );
}

export default Home;
