import axios from "axios";
import Fan from "./Fan";
import HerLetterList from "./HerLetterList";
import OurLetterList from "./OurLetterList";
import { useDispatch, useSelector } from "react-redux";
import {
  __getLetters,
  addLetterList,
} from "../../redux/modules/letterListSlice";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { FanLetterDivSt } from "../../style/LetterListStyle";

function LetterList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getLetters());
  }, []);

  // const fetchLetter = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/letters?_sort=-createdAt`
  //     );
  //     console.log(data);
  //     dispatch(addLetterList(data));
  //   } catch (error) {
  //     console.error("서버에 letterList 불러오기 실패", error);
  //     alert("서버에서 팬레터를 불러오지 못했습니다.");
  //   }
  // };

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
