import React from "react";
import { useSelector } from "react-redux";
import { data } from "../../shared/data";
import {
  FanLetterStBox,
  AvatarStImg,
  LetterContentSt,
  LetterLiBtnContainerDiv,
  DetailBtn,
  LiStyle,
  NoLetterDiv,
} from "../../style/LetterListStyle";

function HerLetterList({
  setClickedFanId,
  imgRef,
  seeFanData,
  goToDetailPage,
}) {
  const selectedBtn = useSelector(
    (state) => state.selectedBtnReducer.selectedBtn
  );
  const letterList = useSelector((state) => state.letterListReducer.letterList);

  const herLetter = selectedBtn
    ? letterList.filter(
        (letter) => letter.writedTo === data[selectedBtn - 1].name
      )
    : null;

  return herLetter.length > 0 ? (
    herLetter.map((letter) => {
      const formattedDate = new Date(letter.createdAt).toLocaleDateString(
        "ko",
        {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }
      );
      return (
        <FanLetterStBox key={letter.id}>
          <AvatarStImg
            src={letter.avatar}
            alt="avatar"
            onClick={() => {
              setClickedFanId(letter.id);
              seeFanData();
            }}
            ref={imgRef}
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
