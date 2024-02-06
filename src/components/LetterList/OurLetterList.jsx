import React from "react";
import { useSelector } from "react-redux";
import {
  FanLetterStBox,
  AvatarStImg,
  LetterContentSt,
  LetterLiBtnContainerDiv,
  DetailBtn,
  LiStyle,
} from "../../style/LetterListStyle";

function OurLetterList({
  setClickedFanId,
  imgRef,
  seeFanData,
  goToDetailPage,
}) {
  const letterList = useSelector((state) => state.letterListReducer.letterList);

  return letterList.map((letter) => {
    const formattedDate = new Date(letter.createdAt).toLocaleDateString("ko", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return (
      <FanLetterStBox key={letter.id}>
        <AvatarStImg
          src={letter.avatar}
          alt="avatar"
          ref={imgRef}
          onClick={() => {
            setClickedFanId(letter.id);
            seeFanData();
          }}
        ></AvatarStImg>
        <LetterContentSt>
          <LetterLiBtnContainerDiv>
            <div>
              <li>{letter.nickname}</li>
              <li>{formattedDate}</li>
              <li>To : {letter.writedTo}</li>
            </div>

            <DetailBtn onClick={() => goToDetailPage(letter.id)}>
              Edit N Delete
            </DetailBtn>
          </LetterLiBtnContainerDiv>
          <LiStyle>{letter.content}</LiStyle>
        </LetterContentSt>
      </FanLetterStBox>
    );
  });
}

export default OurLetterList;
