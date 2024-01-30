import React from "react";
import { data, fakeData } from "../shared/data";
import {
  FanLetterStContainer,
  AvatarSt,
  FanLetterStBox,
  LetterUlSt,
} from "../style/LetterListStyle";

function LetterList({ selectedBtn }) {
  return (
    <FanLetterStContainer>
      {selectedBtn !== null &&
        fakeData
          .filter((fake) => fake.writedTo === data[selectedBtn - 1].name)
          .map((fake) => {
            return (
              <FanLetterStBox key={fake.id}>
                <AvatarSt src={fake.avatar} alt="avatar"></AvatarSt>

                <LetterUlSt>
                  <li>닉네임 : {fake.nickname}</li>
                  <li>날짜 : {fake.createdAt}</li>
                  <li>To : {fake.writedTo}</li>
                  <li>{fake.content}</li>
                </LetterUlSt>
              </FanLetterStBox>
            );
          })}
    </FanLetterStContainer>
  );
}

export default LetterList;
