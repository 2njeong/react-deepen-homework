import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavDiv>
      <div>
        <NavBtn>Home</NavBtn>
      </div>

      <MyNavBtnDiv>
        <NavBtn>MyPage</NavBtn>
        <NavBtn>LogOut</NavBtn>
      </MyNavBtnDiv>
    </NavDiv>
  );
}

export default Nav;

const NavDiv = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 0 0px;
  background-color: #eeeeee;
`;

const NavBtn = styled.button`
  width: 90px;
  height: 25px;
  border: none;
  font-size: 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #b2b7bc;
  }
`;

const MyNavBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 250px;
  gap: 5px;
`;
