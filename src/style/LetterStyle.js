import styled from "styled-components";

export const NewFanLetterFormSt = styled.form`
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;

  width: 600px;
  height: 350px;
  margin: 50px auto 10px auto;
  padding: 10px;
  border-radius: 10px;
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
  margin-left: 15px;
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
  height: 25px;
`;

export const SubmitBtnSt = styled.button`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  margin: 5px 5px 5px auto;
`;
