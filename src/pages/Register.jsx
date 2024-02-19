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

function Register() {
  const navigate = useNavigate();

  return (
    <LoginBackDiv>
      <LoginForm onSubmit={(e) => e.preventDefault()}>
        <LoginPDiv>회원가입</LoginPDiv>
        <LoginInputDiv>
          <LoginInput placeholder="아이디 (4 ~ 10 글자)"></LoginInput>
          <LoginInput placeholder="비밀번호 (4 ~ 15 글자)"></LoginInput>
          <LoginInput placeholder="닉네임 (1 ~ 10 글자)"></LoginInput>
        </LoginInputDiv>
        <LoginBtnBox>
          <RegisterBtn text="회원가입">회원가입</RegisterBtn>
          <LoginBtn text="회원가입" onClick={() => navigate("/")}>
            로그인
          </LoginBtn>
        </LoginBtnBox>
      </LoginForm>
    </LoginBackDiv>
  );
}

export default Register;
