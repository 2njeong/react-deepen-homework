import { useEffect, useRef } from "react";
import { getformattedDate } from "util/date";
import { useNavigate } from "react-router-dom";
import {
  FanDivSt,
  BtnBox,
  FanBtnSt,
  FanImgSt,
  FanNicknameP,
  FanDetailDataDiv,
  FanP,
} from "../../style/FanStyle";

function Fan({ fanClick, setFanClick, theVeryFan, imgRef }) {
  const favorite = 1;
  const fanArea = useRef(null);
  const navigate = useNavigate();

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

  const goMypage = () => {
    navigate("/mypage");
  };

  return (
    <>
      {fanClick && theVeryFan ? (
        <FanDivSt ref={fanArea}>
          <BtnBox>
            <FanBtnSt onClick={goMypage}>My page</FanBtnSt>
            <FanBtnSt $text="x" onClick={xBtn}>
              x
            </FanBtnSt>
          </BtnBox>
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
            <FanP>
              {theVeryFan ? getformattedDate(theVeryFan.createdAt) : ""}
            </FanP>
          </FanDetailDataDiv>
        </FanDivSt>
      ) : null}
    </>
  );
}

export default Fan;
