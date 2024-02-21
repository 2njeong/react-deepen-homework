import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLoginChange } from "../../redux/modules/authSlice";
import { NavDiv, NavBtn, MyNavBtnDiv } from "style/LayoutStyle";
import { goHomeClick } from "../../redux/modules/selectedBtnSlice";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    goHomeClick();
    navigate("/");
  };

  const goMypage = () => {
    navigate("/mypage");
  };

  const logOut = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("accessToken");
      dispatch(authLoginChange(false));
      navigate("/");
    }
  };

  return (
    <NavDiv>
      <div>
        <NavBtn onClick={goHome}>Home</NavBtn>
      </div>

      <MyNavBtnDiv>
        <NavBtn onClick={goMypage}>MyPage</NavBtn>
        <NavBtn onClick={logOut}>LogOut</NavBtn>
      </MyNavBtnDiv>
      {/* <Outlet /> */}
    </NavDiv>
  );
}

export default Layout;
