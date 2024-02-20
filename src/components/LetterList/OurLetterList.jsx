import React from "react";
import { useSelector } from "react-redux";
import { getformattedDate } from "util/date";
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
  const profile = useSelector((state) => state.profileSlice.profile);
  const letterList = useSelector((state) => state.letterListSlice.letterList);

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
              <li>{getformattedDate(letter.createdAt)}</li>
              <li>To : {letter.writedTo}</li>
            </div>
            {profile.id === letter.userId ? (
              <DetailBtn onClick={() => goToDetailPage(letter.id)}>
                Edit N Delete
              </DetailBtn>
            ) : (
              <></>
            )}
          </LetterLiBtnContainerDiv>
          <LiStyle>{letter.content}</LiStyle>
        </LetterContentSt>
      </FanLetterStBox>
    );
  });
}

export default OurLetterList;
