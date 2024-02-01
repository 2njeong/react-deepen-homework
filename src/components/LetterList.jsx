import React from "react";
import { data } from "../shared/data";
import { useNavigate } from "react-router-dom";
import Detail from "../pages/Detail";
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

  return (
    <FanLetterStContainer backgroundcolor={selectedBtn}>
      {selectedBtn !== null
        ? letterList
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
        : letterList.map((letter) => {
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
          })}
      <Detail selectedBtn={selectedBtn} letterList={letterList} />
    </FanLetterStContainer>
  );
}

export default LetterList;
