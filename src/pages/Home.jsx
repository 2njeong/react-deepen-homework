import React from "react";
import { useState } from "react";
import styled from "styled-components";

const FanLetterStContainer = styled.div`
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;

  width: 600px;
  height: 200px;
  margin: 50px auto 10px auto;
  padding: 10px;
  border-radius: 10px;
`;

const FanletterStBox = styled.div`
  /* background-color: aquamarine; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30px;
  margin: 5px auto 5px auto;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const InputStBox = styled.input`
  width: 500px;
  height: 20px;
  border-radius: 5px;
`;

const WhoStBox = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20px;
  width: 590px;
  font-weight: bold;
  font-size: 15px;
  margin: 10px;
  /* padding-left: 15px; */
`;

const SelectStBox = styled.select`
  width: 300px;
  height: 25px;
`;

const SubmitBtn = styled.button`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  margin: 10px 10px 10px auto;
`;

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
