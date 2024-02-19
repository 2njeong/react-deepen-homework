import styled from "styled-components";

export const LoginBackDiv = styled.div`
  background-color: lightgray;
  display: flex;
  height: 100vh;
`;
export const LoginForm = styled.form`
  width: 500px;
  height: 450px;
  margin: 150px auto;
  display: flex;
  padding: 10px;
  gap: 20px;

  flex-wrap: wrap;
  flex-direction: column;

  justify-content: center;
  border-radius: 10px;
  background-color: white;
`;
export const LoginPDiv = styled.div`
  font-size: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
`;
export const LoginInputDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 30px;
`;
export const LoginInput = styled.input`
  width: 450px;
  height: 30px;
  font-size: 15px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid lightgray;
`;
export const LoginBtnBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
export const LoginBtn = styled.button`
  width: 450px;
  height: ${({ $text }) => ($text === "로그인" ? "60px" : "40px")};
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
    background-color: gray;
  }
`;

export const RegisterBtn = styled.button`
  width: 450px;
  height: ${({ $text }) => ($text === "회원가입" ? "60px" : "40px")};
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
    background-color: gray;
  }
`;
