import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLoginChange } from "../redux/modules/authSlice";
import { __getProfile } from "../redux/modules/profileSlice";
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
import { loginApi } from "../axios/api";
import { useInput } from "shared/useInput";
import { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, idHandler] = useInput();
  const [password, pwHandler] = useInput();
  const [isBtnAbled, setIsBtnAbled] = useState(true);
  const idRef = useRef(null);
  const pwRef = useRef(null);

  useEffect(() => {
    ableBtn();
  }, [id, password]);

  const ableBtn = () => {
    if (
      idRef.current.value.trim() !== "" &&
      pwRef.current.value.trim() !== ""
    ) {
      setIsBtnAbled(false);
    } else {
      setIsBtnAbled(true);
    }
  };

  const loginProfile = (id, password) => {
    return {
      id,
      password,
    };
  };

  const login = async () => {
    if (
      id.length < 4 ||
      id.length > 10 ||
      password.length < 4 ||
      password.length > 15
    ) {
      alert("아이디는 4 ~ 10 글자, 비밀번호는 4 ~ 15 글자여야 합니다.");
    } else {
      await tryLogin();
    }
  };

  // 로그인
  const tryLogin = async () => {
    try {
      await loginApi.post(
        "https://moneyfulpublicpolicy.co.kr/login?expiresIn=3h",
        loginProfile(id, password)
      );
      dispatch(authLoginChange(true));
      dispatch(__getProfile());
      renewInput();
      toast.success("로그인 성공!");
    } catch (error) {
      console.error("error", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  // 유저정보 가져오기
  // const getData = async () => {
  //   try {
  //     const accessToken = localStorage.getItem("accessToken");
  //     const response = await axios.get(
  //       "https://moneyfulpublicpolicy.co.kr/user",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     dispatch(getProfile(response.data));
  //   } catch (error) {
  //     console.error("error", error);
  //     alert("유저정보를 불러오는 데에 오류가 발생했습니다.");
  //   }
  // };

  const renewInput = () => {
    idHandler();
    pwHandler();
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
            ref={idRef}
          ></LoginInput>
          <LoginInput
            type="password"
            placeholder="비밀번호 (4 ~ 15 글자)"
            onChange={pwHandler}
            ref={pwRef}
          ></LoginInput>
        </LoginInputDiv>
        <LoginBtnBox>
          <LoginBtn disabled={isBtnAbled} $text="로그인" onClick={login}>
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
