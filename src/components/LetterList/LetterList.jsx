import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HerLetterList from "./HerLetterList";
import OurLetterList from "./OurLetterList";
import Fan from "./Fan";
import { FanLetterDivSt } from "../../style/LetterListStyle";

function LetterList() {
  const letterList = useSelector((state) => state.letterListReducer.letterList);
  const selectedBtn = useSelector(
    (state) => state.selectedBtnReducer.selectedBtn
  );

  console.log(letterList);

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

  return (
    <>
      <FanLetterDivSt backgroundcolor={selectedBtn}>
        {selectedBtn ? (
          // 위에 블핑멤버 버튼 클릭 + 특정맴버에 대한 letter가 있는 경우
          <HerLetterList
            setClickedFanId={setClickedFanId}
            imgRef={imgRef}
            seeFanData={seeFanData}
            goToDetailPage={goToDetailPage}
          />
        ) : (
          // 맴버버튼이 클릭되지 않은 경우
          <OurLetterList
            setClickedFanId={setClickedFanId}
            imgRef={imgRef}
            seeFanData={seeFanData}
            goToDetailPage={goToDetailPage}
          />
        )}
      </FanLetterDivSt>
      {/* <FanContext.Provider
        value={{ fanClick, setFanClick, theVeryFan, imgRef }}
      > */}
      {/* </FanContext.Provider>
      // 이렇게 context 파일을 하나 더 만들어서 지엽적으로 쓰는 건 안되는지..? */}
      {/* ---------------------------------- */}
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
