import axios from "axios";

export const loginApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  timeout: 2000,
});

loginApi.interceptors.response.use(
  // 응답에 대한..
  (response) => {
    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
  },
  (error) => {
    console.error("서버로부터 accessToken 받는 과정 중 오류 발생");
    return Promise.reject(error);
  }
);

export const lettersApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2000,
});

lettersApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      return config;
    } else {
      alert("로그인 후 이용해주세요");
    }
  },
  (error) => {
    console.error("인터셉터 요청 실패", error);
    return Promise.reject(error);
  }
);
