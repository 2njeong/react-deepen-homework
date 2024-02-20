import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import Register from "pages/Register.jsx";
import Login from "pages/Login.jsx";
import Mypage from "pages/Mypage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authLoginChange } from "../redux/modules/authSlice.js";
import { getProfile } from "../redux/modules/profileSlice.js";
import axios from "axios";

const Router = () => {
  const isLogin = useSelector((state) => state.authSlice.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  //새로고침 시에도 로그인 상태라면 유저정보를 가져와서 store에 넣기
  const getData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const response = await axios.get(
          "https://moneyfulpublicpolicy.co.kr/user",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data);
        dispatch(authLoginChange(true));
        dispatch(getProfile(response.data));
      } catch (error) {
        console.error("error", "로그인이 필요한 상태");
      }
    } else {
      localStorage.removeItem("accessToken");
      alert("로그인 시간이 만료되었습니다.");
    }
  };

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
