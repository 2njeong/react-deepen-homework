import React from "react";
import { data } from "../shared/data";
import { useNavigate } from "react-router-dom";
import {
  FanLetterStContainer,
  AvatarSt,
  FanLetterStBox,
  LetterUlSt,
  LiStyle,
} from "../style/LetterListStyle";

function LetterList({ selectedBtn, letterList }) {
  const navigate = useNavigate();
  const goToDetailPage = (id) => {
    navigate(`/letterList/${id}`);
  };

  const selectedLetterList = letterList.filter(
    (letter) => letter.writedTo === data[selectedBtn - 1].name
  );

  return (
    <FanLetterStContainer backgroundcolor={selectedBtn}>
      {selectedBtn !== null ? (
        selectedLetterList ? (
          selectedLetterList.map((letter) => {
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
            {data[selectedBtn - 1].name}에게 남겨진 펜레터가 없습니다. 당신의
            최애를 구해주세요!
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
