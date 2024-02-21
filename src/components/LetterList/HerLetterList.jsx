import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { data } from "../../shared/data";
import { getformattedDate } from "../../shared/data";
import {
  FanLetterStBox,
  AvatarStImg,
  LetterContentSt,
  LetterLiBtnContainerDiv,
  DetailBtn,
  LiStyle,
  NoLetterDiv,
} from "../../style/LetterListStyle";

function HerLetterList({ setClickedFanId, seeFanData, goToDetailPage }) {
  const imgRef = useRef(null);
  const selectedBtn = useSelector(
    (state) => state.selectedBtnSlice.selectedBtn
  );
  const profile = useSelector((state) => state.profileSlice.profile);
  const letterList = useSelector((state) => state.letterListSlice.letterList);

  const herLetters = selectedBtn
    ? letterList.filter(
        (letter) => letter.writedTo === data[selectedBtn - 1].name
      )
    : null;

  return herLetters.length > 0 ? (
    herLetters.map((letter) => {
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
    })
  ) : (
    // 맴버 버튼은 클릭되었으나 해당 맴버에게 레더가 없는 경우
    <NoLetterDiv>
      아직 🩷{data[selectedBtn - 1].name}🩷 에게 남겨진 팬레터가 없습니다.
      <br />
      펜레터를 작성해주세요. 성덕으로 가는 지름길..!
    </NoLetterDiv>
  );
}

export default HerLetterList;
