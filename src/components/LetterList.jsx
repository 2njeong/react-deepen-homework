import React from "react";
import { data } from "../shared/data";

import {
  FanLetterStContainer,
  AvatarSt,
  FanLetterStBox,
  LetterUlSt,
  LiStyle,
} from "../style/LetterListStyle";
import { useNavigate } from "react-router-dom";

function LetterList({ selectedBtn, letterList }) {
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/letterList/${id}`);
  };

  console.log(letterList);

  return (
    <FanLetterStContainer backgroundcolor={selectedBtn}>
      {selectedBtn !== null ? (
        letterList.filter(
          (letter) => letter.writedTo === data[selectedBtn - 1].name
        ).length > 0 ? (
          letterList
            .filter((letter) => letter.writedTo === data[selectedBtn - 1].name)
            .map((letter) => {
              return (
                <FanLetterStBox
                  key={letter.id}
                  onClick={() => goToDetailPage(letter.id)}
                >
                  <AvatarSt src={letter.avatar} alt="avatar"></AvatarSt>

                  <LetterUlSt>
                    <li>{letter.nickname}</li>
                    <li>{letter.createdAt}</li>
                    <li>To : {letter.writedTo}</li>
                    <LiStyle>{letter.content}</LiStyle>
                  </LetterUlSt>
                </FanLetterStBox>
              );
            })
        ) : (
          <div>
            아직 🩷{data[selectedBtn - 1].name}🩷 에게 남겨진 팬레터가 없습니다.
            펜레터를 작성해주세요. 성덕으로 가는 지름길..!
          </div>
        )
      ) : (
        letterList.map((letter) => {
          return (
            <FanLetterStBox
              key={letter.id}
              onClick={() => goToDetailPage(letter.id)}
            >
              <AvatarSt src={letter.avatar} alt="avatar"></AvatarSt>

              <LetterUlSt>
                <li>{letter.nickname}</li>
                <li>{letter.createdAt}</li>
                <li>To : {letter.writedTo}</li>
                <LiStyle>{letter.content}</LiStyle>
              </LetterUlSt>
            </FanLetterStBox>
          );
        })
      )}
    </FanLetterStContainer>
  );
}

export default LetterList;
