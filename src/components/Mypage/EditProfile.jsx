import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function EditProfile() {
  const profile = useSelector((state) => state.profileSlice.profile);

  return (
    <EditProfileDiv>
      <BasicDataP>기본정보</BasicDataP>
      <ImgNNicknameDiv>
        <MiniImg src={profile.avartar} alt="회원 이미지" />
        <NicknameP>{profile.nickname}</NicknameP>
        <EditBtnDiv>
          <EditBtn>수정</EditBtn>
        </EditBtnDiv>
      </ImgNNicknameDiv>
      <PDiv>
        <p>email ✉️</p>
        <P>{profile.email}</P>
      </PDiv>
      <PDiv>
        <p>HP 📱</p>
        <P>{profile.Hp}</P>
      </PDiv>
      <PDiv $text="intro">
        <p>intro</p>
        <P $text="intro">{profile.intro}</P>
      </PDiv>
    </EditProfileDiv>
  );
}

export default EditProfile;

const EditProfileDiv = styled.div`
  height: 550px;
  width: 600px;
  border: 3px solid white;
  border-radius: 10px;
  padding: 20px 10px;
`;

const BasicDataP = styled.p`
  font-weight: 550;
  font-size: 15px;
  margin-bottom: 10px;
  color: #353e55;
`;

const ImgNNicknameDiv = styled.div`
  height: 120px;
  width: 570px;
  border-bottom: 3px solid white;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 10px;
`;

const MiniImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 7px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 70%;
`;

const NicknameP = styled.p`
  display: flex;
  height: 80px;
  font-weight: 550;
  font-size: 22px;
  width: 450px;
  padding: 20px;
`;

const EditBtnDiv = styled.div`
  display: flex;
  height: 120px;
  padding: 40px 10px 0 0;
`;

const EditBtn = styled.button`
  width: 50px;
  height: 28px;
  border: 1px solid #353e55;
  border-radius: 3px;
  &:hover {
    background-color: lightgray;
    color: #494d52;
    opacity: 1;
  }
`;

const PDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: ${({ $text }) =>
    $text === "intro" ? null : "3px solid white"};
`;

const P = styled.p`
  height: ${({ $text }) => ($text === "intro" ? "120px" : "70px")};
  width: 570px;
  display: flex;
  align-items: ${({ $text }) => ($text === "intro" ? "center" : "flex-end")};
  padding: 10px;
  font-size: 16px;
`;
