import React from "react";
import { useParams } from "react-router-dom";
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
} from "../style/DetailStyle";

function Detail({ letterList }) {
  const params = useParams();
  console.log(params); // {id:1}
  console.log(params.id); // "1"
  console.log(letterList);

  let foundLetter = letterList.find((letter) => letter.id === params.id);

  return (
    <>
      <DetailImgStBox key={foundLetter.id}>
        <DetailStBox>
          <DetailHeader>
            <DetailHeaderInsideDiv1>
              <DetailAvatarImg src={foundLetter.avatar} alt="avartar" />
              <DetailNicknameP>{foundLetter.nickname}</DetailNicknameP>
            </DetailHeaderInsideDiv1>
            <DetailHeaderInsideDiv2>
              <DetailBtnDiv>
                <DetailBtn>수정</DetailBtn>
                <DetailBtn>삭제</DetailBtn>
              </DetailBtnDiv>
              <DetailP>{foundLetter.createdAt}</DetailP>
            </DetailHeaderInsideDiv2>
          </DetailHeader>

          <DetailWriteToP>To : {foundLetter.writedTo}</DetailWriteToP>
          <DetailContentP>{foundLetter.content}</DetailContentP>
        </DetailStBox>
      </DetailImgStBox>
    </>
  );
}

export default Detail;
