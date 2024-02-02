import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../shared/data";
import {
  DetailImgStBox,
  DetailStBox,
  DetailHeader,
  DetailHeaderInsideDiv1,
  DetailHeaderInsideDiv2,
  DetailBtnDiv,
  DetailBtn,
  DetailAvatarImg,
  DetailNicknameP,
  DetailWriteToP,
  DetailP,
  DetailContentP,
  DetailEditArea,
} from "../style/DetailStyle";

function EditNDelete({ setSelectedBtn, letterList, setLetterList }) {
  const params = useParams();
  const navigate = useNavigate();

  const foundLetter = letterList.find((letter) => letter.id === params.id);

  const [click, setClick] = useState(false);
  const [editContent, setEditContent] = useState(foundLetter.content);

  let restLetterList = letterList.filter(
    (letter) => letter.id !== foundLetter.id
  );

  const goBackBtndata = data.find((d) => d.name === foundLetter.writedTo);

  const askEditHandelert = () => {
    alert("수정하시겠습니까?");
    setClick(true);
  };

  const renewContent = (e) => {
    setEditContent(e.target.value);
  };

  const editHandeler = () => {
    if (editContent === foundLetter.content) {
      alert("수정된 내용이 없습니다.");
      setClick(true);
    } else {
      alert("수정이 완료되었습니다.");
      setClick(false);
      foundLetter.content = editContent;
      setLetterList([...restLetterList, foundLetter]);
    }
  };

  const deleteHandeler = () => {
    if (
      window.confirm(
        `${foundLetter.writedTo}에게 쓰신 펜레터를 정말 삭제하시겠습니까?`
      )
    ) {
      setClick(false);
      setLetterList([...restLetterList]);
      alert("삭제되었습니다.");
      setSelectedBtn(goBackBtndata.id);
      navigate("/");
    }
  };

  const goBackToLetterList = () => {
    setSelectedBtn(goBackBtndata.id);
    navigate("/");
  };

  return (
    <DetailImgStBox key={foundLetter.id}>
      <DetailStBox>
        <button
          style={{
            height: "24px",
            width: "520px",
            margin: "0 auto 0 60px",
            border: "3px solid #f9f9f9",
            cursor: "pointer",
            fontSize: "15px",
          }}
          onClick={goBackToLetterList}
        >
          🩶팬레터 목록으로 돌아가고 싶다면 여기를 클릭해주세요🖤
        </button>
        <DetailHeader>
          <DetailHeaderInsideDiv1>
            <DetailAvatarImg src={foundLetter.avatar} alt="avartar" />
            <DetailNicknameP>{foundLetter.nickname}</DetailNicknameP>
          </DetailHeaderInsideDiv1>
          <DetailHeaderInsideDiv2>
            <DetailBtnDiv>
              <DetailBtn onClick={click ? editHandeler : askEditHandelert}>
                {click ? "수정완료" : "수정"}
              </DetailBtn>
              <DetailBtn onClick={deleteHandeler}>삭제</DetailBtn>
            </DetailBtnDiv>
            <DetailP>{foundLetter.createdAt}</DetailP>
          </DetailHeaderInsideDiv2>
        </DetailHeader>
        <DetailWriteToP>To : {foundLetter.writedTo}</DetailWriteToP>
        {click ? (
          <DetailEditArea value={editContent} onChange={renewContent}>
            {foundLetter.content}
          </DetailEditArea>
        ) : (
          <DetailContentP>{foundLetter.content}</DetailContentP>
        )}
      </DetailStBox>
    </DetailImgStBox>
  );
}

export default EditNDelete;
