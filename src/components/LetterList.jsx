import React, { useEffect, useRef, useState } from "react";
import { data } from "../shared/data";
import { useNavigate } from "react-router-dom";
import Fan from "./Fan";
import {
  FanLetterDivSt,
  FanLetterStBox,
  AvatarStImg,
  LetterContentSt,
  LetterLiBtnContainerDiv,
  BriefNDetailBtn,
  LiStyle,
} from "../style/LetterListStyle";

function LetterList({ selectedBtn, letterList }) {
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/letterList/${id}`);
  };
  const [clickedFanId, setClickedFanId] = useState(null);
  const [fanClick, setFanClick] = useState(false);

  const imgRef = useRef(null);

  const theVeryFan = letterList.find((letter) => letter.id === clickedFanId);

  const seeFanData = () => {
    theVeryFan && setFanClick(true);
  };

  useEffect(() => {
    console.log(theVeryFan);
    console.log(fanClick);
    console.log(clickedFanId);
  });

  return (
    <>
      <FanLetterDivSt backgroundcolor={selectedBtn}>
        {selectedBtn !== null ? (
          letterList.filter(
            (letter) => letter.writedTo === data[selectedBtn - 1].name
          ).length > 0 ? (
            // 위에 블핑멤버 버튼 클릭 + 맴버에 대한 letter가 있는 경우
            letterList
              .filter(
                (letter) => letter.writedTo === data[selectedBtn - 1].name
              )
              .map((letter) => {
                return (
                  <FanLetterStBox key={letter.id}>
                    <AvatarStImg
                      src={letter.avatar}
                      alt="avatar"
                      onClick={() => {
                        setClickedFanId(letter.id);
                        seeFanData();
                        // setClickedFanId(letter.id);
                        // seeFanData(); 얘는 왜 한번의 렌더링으로 업데이트가 되지 않는지 꼭 튜터님께 물어보기
                      }}
                      ref={imgRef}
                    ></AvatarStImg>
                    <LetterContentSt>
                      <LetterLiBtnContainerDiv>
                        <div>
                          <li>{letter.nickname}</li>
                          <li>{letter.createdAt}</li>
                          <li>To : {letter.writedTo}</li>
                        </div>

                        <BriefNDetailBtn
                          onClick={() => goToDetailPage(letter.id)}
                        >
                          Edit N Delete
                        </BriefNDetailBtn>
                      </LetterLiBtnContainerDiv>

                      <LiStyle>{letter.content}</LiStyle>
                    </LetterContentSt>
                  </FanLetterStBox>
                );
              })
          ) : (
            // 맴버 버튼은 클릭되었으나 해당 맴버에게 레더가 없는 경우
            <div>
              아직 🩷{data[selectedBtn - 1].name}🩷 에게 남겨진 팬레터가 없습니다.
              펜레터를 작성해주세요. 성덕으로 가는 지름길..!
            </div>
          )
        ) : (
          letterList.map((letter) => {
            return (
              // 맴버버튼이 클릭되지 않은 경우
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
          })
        )}
      </FanLetterDivSt>
      <Fan
        fanClick={fanClick}
        setFanClick={setFanClick}
        theVeryFan={theVeryFan}
        imgRef={imgRef}
      />
    </>
  );
}

export default LetterList;
