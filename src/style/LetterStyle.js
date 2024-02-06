import styled from "styled-components";
import { data } from "../shared/data";

export const LetterWholeDiv = styled.div`
  height: 3000px;
  background-size: contain;
  background-repeat: repeat-y;
  background-position: center top;
  background-image: url(${({ $backImg }) => $backImg});
`;

export const backImgMaker = (selecedBtn) => {
  switch (selecedBtn) {
    case data[0].id:
      return "/img/jisoo.jpg";
    case data[1].id:
      return "/img/jennie2.jpg";
    case data[2].id:
      return "/img/rose.jpg";
    case data[3].id:
      return "img/lisa2.jpg";
    default:
      return "/img/blackpinkfamily.webp";
  }
};

export const NewFanLetterFormSt = styled.form`
  opacity: 0.8;
  width: 600px;
  height: 350px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: stretch;
  justify-content: center;
  margin: 20px auto 10px auto;
  border-radius: 10px;
  background-color: lightgray;
`;

export const LetterDivSt = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding: 5px;
  margin: 5px auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${({ height }) => (height === 1 ? "45px" : "120px")};
`;

export const InputStBox = styled.input`
  width: 500px;
  height: ${({ height }) => (height === 1 ? "35px" : "120px")};
  border-radius: 5px;
  border: 3px solid lightgray;
  margin-left: ${({ $marginLeft }) => ($marginLeft === 2 ? "10px" : "25px")};
`;

export const WhoStBox = styled.div`
  margin: 5px;
  height: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectStBox = styled.select`
  width: 300px;
  height: 30px;
  border-radius: 4px;
  border: 3px solid lightgray;
`;

export const SubmitBtnSt = styled.button`
  width: 150px;
  height: 38px;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 3px solid gray;
  margin: 15px 5px 0px auto;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;
