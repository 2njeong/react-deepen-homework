import React from "react";
import { fakeData } from "../shared/data";
import {
  FanLetterStContainer,
  Avatar,
  FanLetterStBox,
  LetterUl,
} from "./LayoutStyle";

function LetterList() {
  return (
    <FanLetterStContainer>
      {fakeData.map((data) => {
        return (
          <FanLetterStBox key={data.id}>
            <Avatar src={data.avatar} alt="avatar"></Avatar>

            <LetterUl>
              <li>닉네임 : {data.nickname}</li>
              <li>날짜 : {data.createdAt}</li>
              <li>To : {data.writedTo}</li>
              <li>{data.content}</li>
            </LetterUl>
          </FanLetterStBox>
        );
      })}
    </FanLetterStContainer>
  );
}

export default LetterList;
