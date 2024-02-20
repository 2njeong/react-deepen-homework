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
import { useInput } from "util/hooks/useInput";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, idHandler] = useInput();
  const [password, pwHandler] = useInput();

  const loginProfile = (id, password) => {
    return {
      id,
      password,
    };
  };

  // 로그인
  const tryLogin = async () => {
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login?expiresIn=3h",
        loginProfile(id, password)
      );
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      dispatch(authLoginChange(true));
      getData();
      renewInput();
      alert("로그인 완료! 나중에 지우기!");
    } catch (error) {
      console.error("error", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
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
