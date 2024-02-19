import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginChange } from "../redux/modules/authSlice";
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
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const users = useSelector((state) => state.profileSlice.user);

  const idHandler = (e) => setId(e.target.value);
  const pwHandler = (e) => setPw(e.target.value);

  const tryLogin = (id, pw) => {
    const foundUser = users.find((user) => user.id === id);
    if (foundUser) {
      if (foundUser.pw === pw) {
        dispatch(loginChange(foundUser));
        navigate("/home");
      } else {
        alert("패스워드를 잘못 입력하셨습니다.");
      }
    } else {
      alert("일치하는 아이디의 회원이 없습니다.");
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
