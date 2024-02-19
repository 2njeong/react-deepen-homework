import React from "react";
import { useNavigate } from "react-router-dom";
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

function Login() {
  const navigate = useNavigate();
  return (
    <LoginBackDiv>
      <LoginForm onSubmit={(e) => e.preventDefault()}>
        <LoginPDiv>로그인</LoginPDiv>
        <LoginInputDiv>
          <LoginInput placeholder="아이디 (4 ~ 10 글자)"></LoginInput>
          <LoginInput placeholder="비밀번호 (4 ~ 15 글자)"></LoginInput>
        </LoginInputDiv>
        <LoginBtnBox>
          <LoginBtn text="로그인">로그인</LoginBtn>
          <RegisterBtn text="로그인" onClick={() => navigate("/register")}>
            회원가입
          </RegisterBtn>
        </LoginBtnBox>
      </LoginForm>
    </LoginBackDiv>
  );
}

export default Login;
