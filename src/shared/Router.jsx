import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import Register from "pages/Register.jsx";
import Login from "pages/Login.jsx";
import Profile from "pages/Profile.jsx";
import { useSelector } from "react-redux";

const Router = () => {
  const isLogin = useSelector((state) => state.authSlice.isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/letterList/:id" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
