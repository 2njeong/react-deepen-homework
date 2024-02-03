import React, { useContext } from "react";
import { FamilyContext } from "../../context/FamilyContext";
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
  const allData = useContext(FamilyContext);

  return allData.letterList.map((letter) => {
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
