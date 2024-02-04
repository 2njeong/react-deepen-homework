import styled from "styled-components";
import { data } from "../shared/data";

export const LetterWholeDiv = styled.div`
  background-image: url(${({ backimg }) => backimg});
  background-position: center top;
  background-size: contain;
  background-repeat: repeat-y;
  height: 3000px;
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;

  width: 600px;
  height: 350px;
  margin: 20px auto 10px auto;
  padding: 10px;
  border-radius: 10px;
  background-color: lightgray;
  opacity: 0.8;
`;

export const LetterDivSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${({ height }) => (height === 1 ? "45px" : "120px")};
  margin: 5px auto 10px auto;
  padding: 5px;
  font-size: 17px;
  font-weight: bold;
`;

export const InputStBox = styled.input`
  width: 500px;
  height: ${({ height }) => (height === 1 ? "35px" : "120px")};
  border-radius: 5px;
  margin-left: ${({ marginleft }) => (marginleft === 2 ? "10px" : "25px")};
  border: 3px solid lightgray;
`;

export const WhoStBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20px;
  font-weight: bold;
  font-size: 18px;
  margin: 5px;
`;

export const SelectStBox = styled.select`
  width: 300px;
  height: 30px;
  border: 3px solid lightgray;
  border-radius: 4px;
`;

export const SubmitBtnSt = styled.button`
  width: 150px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  margin: 15px 5px 0px auto;
  border: 3px solid gray;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
`;
