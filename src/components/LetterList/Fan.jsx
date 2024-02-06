import React, { useEffect, useRef } from "react";
import {
  FanDivSt,
  FanBtnSt,
  FanImgSt,
  FanNicknameP,
  FanDetailDataDiv,
  FanP,
} from "../../style/FanStyle";

function Fan({ fanClick, setFanClick, theVeryFan, imgRef }) {
  const favorite = 1;
  const fanArea = useRef(null);

  const goBack = (e) => {
    return fanArea.current &&
      !fanArea.current.contains(e.target) &&
      !imgRef.current.contains(e.target)
      ? setFanClick(false)
      : null;
  };

  useEffect(() => {
    document.addEventListener("click", goBack);
    return () => {
      document.removeEventListener("click", goBack);
    };
  });

  const xBtn = () => {
    setFanClick(false);
  };

  const formattedDate = theVeryFan
    ? new Date(theVeryFan.createdAt).toLocaleDateString("ko", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "";

  return (
    <>
      {fanClick && theVeryFan ? (
        <FanDivSt ref={fanArea}>
          <FanBtnSt onClick={xBtn}>x</FanBtnSt>
          <div>
            <FanImgSt src={theVeryFan.avatar} alt="fan"></FanImgSt>
          </div>
          <FanNicknameP>{theVeryFan.nickname}</FanNicknameP>
          <FanDetailDataDiv $favorite={favorite}>
            <p>최애</p>
            <FanP>{theVeryFan.writedTo}</FanP>
          </FanDetailDataDiv>
          <FanDetailDataDiv>
            <p>최근수정</p>

            <FanP>{formattedDate}</FanP>
          </FanDetailDataDiv>
        </FanDivSt>
      ) : null}
    </>
  );
}

export default Fan;
