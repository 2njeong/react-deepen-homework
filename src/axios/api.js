import axios from "axios";
import { useDispatch } from "react-redux";
import { authLoginChange } from "../redux/modules/authSlice";

const instance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  timeout: 2000,
});

instance.interceptors.response.use(
  (response) => {
    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    const dispatch = useDispatch();
    dispatch(authLoginChange(true));
  },
  (error) => {
    console.error("서버로부터 응답을 받는 과정 중 오류 발생");
    return Promise.reject(error);
  }
);

export default instance;
