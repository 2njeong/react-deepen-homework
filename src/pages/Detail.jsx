import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

function Detail({ letterList, setLetterList }) {
  const navigate = useNavigate();
  const params = useParams();

  const [click, setClick] = useState(false);
  const [editContent, setEditContent] = useState("");

  const foundLetter = letterList.find((letter) => letter.id === params.id);

  let restLetterList = foundLetter
    ? letterList.filter((letter) => letter.id !== foundLetter.id)
    : letterList;

  const editHandeler = () => {
    alert("수정이 완료되었습니다.");
    setClick(false);
    foundLetter.content = editContent;
    setLetterList([...restLetterList, foundLetter]);
  };

  const deleteHandeler = () => {
    window.confirm(
      `${foundLetter.writedTo}에게 쓰신 펜레터를 정말 삭제하시겠습니까?`
    );
    setClick(false);
    setLetterList([...restLetterList]);
    alert("삭제되었습니다.");
    navigate("/");
  };

  return (
    <>
      <DetailImgStBox key={foundLetter.id}>
        {foundLetter ? (
          click ? (
            <DetailStBox>
              <DetailHeader>
                <DetailHeaderInsideDiv1>
                  <DetailAvatarImg src={foundLetter.avatar} alt="avartar" />
                  <DetailNicknameP>{foundLetter.nickname}</DetailNicknameP>
                </DetailHeaderInsideDiv1>
                <DetailHeaderInsideDiv2>
                  <DetailBtnDiv>
                    <DetailBtn onClick={editHandeler}>수정완료</DetailBtn>
                    <DetailBtn onClick={deleteHandeler}>삭제</DetailBtn>
                  </DetailBtnDiv>
                  <DetailP>{foundLetter.createdAt}</DetailP>
                </DetailHeaderInsideDiv2>
              </DetailHeader>
              <DetailWriteToP>To : {foundLetter.writedTo}</DetailWriteToP>
              <DetailEditArea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              >
                {foundLetter.content}
              </DetailEditArea>
            </DetailStBox>
          ) : (
            <DetailStBox>
              <DetailHeader>
                <DetailHeaderInsideDiv1>
                  <DetailAvatarImg src={foundLetter.avatar} alt="avartar" />
                  <DetailNicknameP>{foundLetter.nickname}</DetailNicknameP>
                </DetailHeaderInsideDiv1>
                <DetailHeaderInsideDiv2>
                  <DetailBtnDiv>
                    <DetailBtn
                      onClick={() => {
                        alert("수정하시겠습니까?");
                        setClick(true);
                        // setEditContent(`${foundLetter.content}`);
                      }}
                    >
                      수정
                    </DetailBtn>
                    <DetailBtn onClick={deleteHandeler}>삭제</DetailBtn>
                  </DetailBtnDiv>
                  <DetailP>{foundLetter.createdAt}</DetailP>
                </DetailHeaderInsideDiv2>
              </DetailHeader>
              <DetailWriteToP>To : {foundLetter.writedTo}</DetailWriteToP>
              <DetailContentP>{foundLetter.content}</DetailContentP>
            </DetailStBox>
          )
        ) : (
          <div>메롱</div>
        )}
      </DetailImgStBox>
    </>
  );
}

export default Detail;
