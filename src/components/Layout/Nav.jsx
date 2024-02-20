import React from "react";
import { useNavigate } from "react-router-dom";
import { NavDiv, NavBtn, MyNavBtnDiv } from "style/LayoutStyle";

function Nav() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goMypage = () => {
    navigate("/mypage");
  };

  return (
    <NavDiv>
      <div>
        <NavBtn onClick={goHome}>Home</NavBtn>
      </div>

      <MyNavBtnDiv>
        <NavBtn onClick={goMypage}>MyPage</NavBtn>
        <NavBtn>LogOut</NavBtn>
      </MyNavBtnDiv>
    </NavDiv>
  );
}

export default Nav;
