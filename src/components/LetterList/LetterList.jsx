import Fan from "./Fan";
import HerLetterList from "./HerLetterList";
import OurLetterList from "./OurLetterList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import { FanLetterDivSt } from "../../style/LetterListStyle";

function LetterList() {
  const letterList = useSelector((state) => state.letterListSlice.letterList);
  const selectedBtn = useSelector(
    (state) => state.selectedBtnSlice.selectedBtn
  );

  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/letterList/${id}`);
  };

  const [clickedFanId, setClickedFanId] = useState(null);
  const [fanClick, setFanClick] = useState(true);
  const imgRef = useRef(null);

  const theVeryFan = letterList.find((letter) => letter.id === clickedFanId);

  const seeFanData = () => {
    theVeryFan && setFanClick(true);
  };

  return (
    <>
      <FanLetterDivSt>
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
      {/* ---------------모달창 구현--------------- */}
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
