import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLoginChange } from "../redux/modules/authSlice";
import { getProfile } from "../redux/modules/profileSlice";
import {
  LoginBackDiv,
  LoginForm,
  LoginPDiv,
  LoginInputDiv,
  LoginInput,
  LoginBtnBox,
  LoginBtn,
  RegisterBtn,
} from "style/LoginStyle";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");

  const idHandler = (e) => setId(e.target.value);
  const pwHandler = (e) => setPassWord(e.target.value);

  // 로그인
  const tryLogin = async () => {
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        loginProfile(id, password)
      );
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      dispatch(authLoginChange(true));
      getData();
      alert("로그인 완료! 나중에 지우기!");
    } catch (error) {
      console.error("error", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  const loginProfile = (id, password) => {
    return {
      id: id,
      password: password,
    };
  };

  // 유저정보 가져오기
  const getData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
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
      dispatch(getProfile(response.data));
    } catch (error) {
      console.error("error", error);
      alert("유저정보를 불러오는 데에 오류가 발생했습니다.");
    }
  };

  return (
    <LoginBackDiv>
      <LoginForm onSubmit={(e) => e.preventDefault()}>
        <LoginPDiv>로그인</LoginPDiv>
        <LoginInputDiv>
          <LoginInput
            type="text"
            placeholder="아이디 (4 ~ 10 글자)"
            onChange={idHandler}
          ></LoginInput>
          <LoginInput
            type="password"
            placeholder="비밀번호 (4 ~ 15 글자)"
            onChange={pwHandler}
          ></LoginInput>
        </LoginInputDiv>
        <LoginBtnBox>
          <LoginBtn $text="로그인" onClick={tryLogin}>
            로그인
          </LoginBtn>
          <RegisterBtn $text="로그인" onClick={() => navigate("/register")}>
            회원가입
          </RegisterBtn>
        </LoginBtnBox>
      </LoginForm>
    </LoginBackDiv>
  );
}

export default Login;
