import Nav from "components/Layout/Nav";
import EditProfile from "components/Mypage/EditProfile";
import MyProfile from "components/Mypage/MyProfile";
import React, { useState } from "react";
import styled from "styled-components";

function Mypage() {
  const [selected, setSelected] = useState(null);

  const selectHandler = () => {
    setSelected(!selected);
  };

  return (
    <>
      <Nav />
      <header>
        <MyPageTitle>Mypage</MyPageTitle>
        <nav>
          <MypageBtn
            $text="profile"
            onClick={selectHandler}
            selected={selected}
          >
            Edit Profile
          </MypageBtn>
          <MypageBtn>My fanLetter</MypageBtn>
        </nav>
      </header>
      <MyPageArea>
        <ProfileDiv $text="profile">
          <MyProfile />
        </ProfileDiv>
        <ProfileDiv>
          <EditProfile />
        </ProfileDiv>
      </MyPageArea>
    </>
  );
}

export default Mypage;

const MyPageTitle = styled.button`
  height: 70px;
  display: block;
  font-size: 3em;
  font-weight: bold;
  line-height: 80px;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  border-color: transparent;
  background-color: transparent;
`;

const MypageBtn = styled.button`
  background-color: ${({ $text }) =>
    $text === "profile" ? "#b2b7bc" : "#353E55"};
  color: ${({ $text }) => ($text === "profile" ? "#494d52" : "white")};
  height: 70px;
  width: 255px;
  font-size: 23px;
  font-weight: bold;
  line-height: 70px;
  text-align: center;
  border-radius: 3px;
  border: 0px solid black;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: lightgray;
    color: #494d52;
    opacity: 1;
    transform: scale(1.02);
  }
`;

const MyPageArea = styled.div`
  display: flex;
  width: 1200px;
  margin: 0px auto;
  gap: 50px;
`;

const ProfileDiv = styled.div`
  opacity: 0.8;
  width: ${({ $text }) => ($text === "profile" ? "450px" : "800px")};
  height: 650px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: stretch;
  align-items: center;
  justify-content: center;
  margin: 0px auto 10px auto;
  border-radius: 10px;
  background-color: #eeeeee;
`;
