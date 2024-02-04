import React from "react";
import { useSelector } from "react-redux";
import {
  FanLetterStBox,
  AvatarStImg,
  LetterContentSt,
  LetterLiBtnContainerDiv,
  BriefNDetailBtn,
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
              <li>{letter.createdAt}</li>
              <li>To : {letter.writedTo}</li>
            </div>

            <BriefNDetailBtn onClick={() => goToDetailPage(letter.id)}>
              Edit N Delete
            </BriefNDetailBtn>
          </LetterLiBtnContainerDiv>
          <LiStyle>{letter.content}</LiStyle>
        </LetterContentSt>
      </FanLetterStBox>
    );
  });
}

export default OurLetterList;
