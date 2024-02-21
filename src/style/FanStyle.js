import styled from "styled-components";

export const FanDivSt = styled.div`
  position: fixed;
  background-color: #f3f3f3;
  top: 20%;
  left: 37%;
  width: 380px;
  height: 470px;
  opacity: 0.95;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 15px;
  border: 4px solid lightgray;
  padding: 8px 15px 20px 15px;
`;

export const BtnBox = styled.div`
  display: flex;
  width: 340px;
  padding-bottom: 10px;
  justify-content: space-between;
`;

export const FanBtnSt = styled.button`
  height: 25px;
  border-radius: 4px;
  border: 2.5px solid #b2b7bc;
  width: ${({ $text }) => ($text === "x" ? "25px" : "65px")};
  margin-left: ${({ $text }) => ($text === "x" ? "10px" : 0)};
  &:hover {
    background-color: gray;
  }
`;

export const FanImgSt = styled.img`
  height: 200px;
  border-radius: 90%;
`;

export const FanNicknameP = styled.p`
  font-size: 30px;
  font-weight: 550;
`;

export const FanDetailDataDiv = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  padding: ${({ $favorite }) =>
    $favorite === 1 ? "0 40px 0 65px" : "0 20px 0 50px"};
  font-size: ${({ $favorite }) => ($favorite === 1 ? "20px" : "15px")};
`;

export const FanP = styled.p`
  display: contents;
`;
