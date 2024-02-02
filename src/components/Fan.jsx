import React, { useEffect, useRef } from "react";

function Fan({ fanClick, setFanClick, theVeryFan, imgRef }) {
  console.log(fanClick);

  const fanArea = useRef(null);
  console.log(fanArea);

  const goBack = (e) => {
    console.log("goBack이 실행은 됨!");

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
        <div
          ref={fanArea}
          style={{
            position: "fixed",
            backgroundColor: "#f3f3f3",
            top: "20%",
            left: "37%",
            width: "400px",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "15px",
            padding: "15px",
            border: "6px solid lightGray",
          }}
        >
          <button
            style={{ margin: "0 5px 0 auto", width: "20px", height: "20px" }}
            onClick={xBtn}
          >
            x
          </button>
          <div>
            <img src={theVeryFan.avatar} alt="fan"></img>
          </div>
          <div>Nickname : {theVeryFan.nickname}</div>
          <div>
            <p>최애 :{theVeryFan.writedTo}</p>
          </div>
          <div>최근 수정날짜 : {theVeryFan.createdAt} </div>
        </div>
      ) : null}
    </>
  );
}

export default Fan;
