import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useInput } from "shared/useInput";
import { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
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
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [id, idHandler] = useInput();
  const [password, pwHandler] = useInput();
  const [nickname, nicknameHandler] = useInput();
  const [isRegisterBtnAbled, setIsRegisterBtnAbled] = useState(false);
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nicknameRef = useRef(null);

  useEffect(() => {
    ableBtn();
  }, [id, password, nickname]);

  const ableBtn = () => {
    if (
      idRef.current.value.trim() !== "" &&
      pwRef.current.value.trim() !== "" &&
      nicknameRef.current.value.trim() !== ""
    ) {
      setIsRegisterBtnAbled(false);
    } else {
      setIsRegisterBtnAbled(true);
    }
  };

  const registerProfile = (id, password, nickname) => {
    return {
      id,
      password,
      nickname,
    };
  };

  const registerToServer = async (id, password, nickname) => {
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        registerProfile(id, password, nickname)
      );
      if (response.data.success) {
        toast.success("회원가입 완료!");
        navigate("/");
      } else {
        toast.error("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("error", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  const submitRegisteredProfile = () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4 ~ 10 글자여야 합니다.");
    }
    if (password.length < 4 || password.length > 10) {
      alert("비밀번호는 4 ~ 15 글자여야 합니다.");
    }
    if (nickname.length < 4 || nickname.length > 10) {
      alert("닉네임은 4 ~ 10 글자여야 합니다.");
    } else {
      registerToServer(id, password, nickname);
      renewInput();
    }
  };

  const renewInput = () => {
    idHandler();
    pwHandler();
    nicknameHandler();
  };

  return (
    <LoginBackDiv>
      <LoginForm onSubmit={(e) => e.preventDefault()}>
        <LoginPDiv>회원가입</LoginPDiv>
        <LoginInputDiv>
          <LoginInput
            value={id}
            placeholder="아이디 (4 ~ 10 글자)"
            onChange={idHandler}
            ref={idRef}
          ></LoginInput>
          <LoginInput
            type="password"
            value={password}
            placeholder="비밀번호 (4 ~ 15 글자)"
            onChange={pwHandler}
            ref={pwRef}
          ></LoginInput>
          <LoginInput
            value={nickname}
            placeholder="닉네임 (1 ~ 10 글자)"
            onChange={nicknameHandler}
            ref={nicknameRef}
          ></LoginInput>
        </LoginInputDiv>
        <LoginBtnBox>
          <RegisterBtn
            disabled={isRegisterBtnAbled}
            $text="회원가입"
            onClick={submitRegisteredProfile}
          >
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
