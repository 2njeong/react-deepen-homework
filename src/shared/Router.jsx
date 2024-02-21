import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import Register from "pages/Register.jsx";
import Login from "pages/Login.jsx";
import Mypage from "pages/Mypage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authLoginChange } from "../redux/modules/authSlice.js";
import { __getProfile } from "../redux/modules/profileSlice.js";
import { __getLetters } from "../redux/modules/letterListSlice.js";

const Router = () => {
  const isLogin = useSelector((state) => state.authSlice.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(authLoginChange(true));
      dispatch(__getProfile());
      dispatch(__getLetters());
    } else {
      dispatch(authLoginChange(false));
      alert("로그인 시간이 만료되었습니다.");
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/letterList/:id" element={<Detail />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
