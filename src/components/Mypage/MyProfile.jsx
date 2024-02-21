import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function MyProfile() {
  const profile = useSelector((state) => state.profileSlice.profile);
  console.log(profile);
  return (
    <>
      <MyProfileImgDiv>
        <MyImg src={profile.avatar} alt="회원이미지" />
      </MyProfileImgDiv>
      <MyPDiv>
        <MyNickname>{profile.nickname}</MyNickname>
        <MyId>{profile.id}</MyId>
      </MyPDiv>
      <IntroDiv>
        <IntroP>{profile.intro}</IntroP>
      </IntroDiv>
    </>
  );
}

export default MyProfile;

const MyProfileImgDiv = styled.div`
  height: 310px;
`;

const MyImg = styled.img`
  width: 270px;
  height: 270px;
  margin: 7px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 70%;
`;

const MyPDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MyNickname = styled.p`
  font-weight: 550;
  font-size: 32px;
`;

const MyId = styled.p`
  font-size: 28px;
`;

const IntroDiv = styled.div`
  margin-top: 20px;
  border: 3px solid white;
  border-radius: 10px;
`;

const IntroP = styled.p`
  padding-top: 20px;
  width: 320px;
  height: 160px;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
