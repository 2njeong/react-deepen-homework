import styled from "styled-components";

export const NewFanLetterStContainer = styled.form`
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

export const NickNameStBox = styled.div`
  /* background-color: aquamarine; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  margin: 5px auto 10px auto;
  padding: 5px;
  font-size: 17px;
  font-weight: bold;
`;

export const ContentStBox = styled.div`
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  margin: 5px auto 10px auto;
  padding: 5px;
  font-size: 17px;
  font-weight: bold;
`;

export const NickInputStBox = styled.input`
  width: 500px;
  height: 35px;
  border-radius: 5px;
`;

export const ContentInputStBox = styled.input`
  width: 500px;
  height: 120px;
  border-radius: 5px;
`;

export const WhoStBox = styled.div`
  /* background-color: pink; */
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
