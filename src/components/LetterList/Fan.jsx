import React, { useEffect, useRef } from "react";
import { FanDivSt, FanBtnSt } from "../../style/FanStyle";

function Fan({ fanClick, setFanClick, theVeryFan, imgRef }) {
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

  return (
    <>
      {fanClick && theVeryFan ? (
        <FanDivSt ref={fanArea}>
          <FanBtnSt onClick={xBtn}>x</FanBtnSt>
          <div>
            <img src={theVeryFan.avatar} alt="fan"></img>
          </div>
          <div>Nickname : {theVeryFan.nickname}</div>
          <div>
            <p>최애 :{theVeryFan.writedTo}</p>
          </div>
          <div>최근 수정날짜 : {theVeryFan.createdAt} </div>
        </FanDivSt>
      ) : null}
    </>
  );
}

export default Fan;
