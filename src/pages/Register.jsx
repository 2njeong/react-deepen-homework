import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProfile } from "../redux/modules/profileSlice";
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
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");

  const idHandler = (e) => setId(e.target.value);
  const pwHandler = (e) => setPw(e.target.value);
  const nicknameHandler = (e) => setNickname(e.target.value);

  const registerProfile = (id, pw, nickname) => {
    return {
      id,
      pw,
      nickname,
      isLogin: false,
    };
  };

  const submitRegisteredProfile = () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4 ~ 10 글자여야 합니다.");
    }
    if (pw.length < 4 || pw.length > 10) {
      alert("비밀번호는 4 ~ 15 글자여야 합니다.");
    }
    if (nickname.length < 4 || nickname.length > 10) {
      alert("닉네임은 1 ~ 10 글자여야 합니다.");
    }
    dispatch(addProfile(registerProfile(id, pw, nickname)));
  };

  return (
    <LoginBackDiv>
      <LoginForm onSubmit={(e) => e.preventDefault()}>
        <LoginPDiv>회원가입</LoginPDiv>
        <LoginInputDiv>
          <LoginInput
            placeholder="아이디 (4 ~ 10 글자)"
            onChange={idHandler}
          ></LoginInput>
          <LoginInput
            placeholder="비밀번호 (4 ~ 15 글자)"
            onChange={pwHandler}
          ></LoginInput>
          <LoginInput
            placeholder="닉네임 (1 ~ 10 글자)"
            onChange={nicknameHandler}
          ></LoginInput>
        </LoginInputDiv>
        <LoginBtnBox>
          <RegisterBtn $text="회원가입" onClick={submitRegisteredProfile}>
            회원가입
          </RegisterBtn>
          <LoginBtn $text="회원가입" onClick={() => navigate("/")}>
            로그인
          </LoginBtn>
        </LoginBtnBox>
      </LoginForm>
    </LoginBackDiv>
  );
}

export default Register;
