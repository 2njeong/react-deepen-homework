import styled from "styled-components";

export const NewFanLetterStContainer = styled.div`
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;

  width: 600px;
  height: 200px;
  margin: 50px auto 10px auto;
  padding: 10px;
  border-radius: 10px;
`;

export const NewFanletterStBox = styled.div`
  /* background-color: aquamarine; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30px;
  margin: 5px auto 5px auto;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
`;

export const InputStBox = styled.input`
  width: 500px;
  height: 20px;
  border-radius: 5px;
`;

export const WhoStBox = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20px;
  width: 590px;
  font-weight: bold;
  font-size: 15px;
  margin: 10px;
  /* padding-left: 15px; */
`;

export const SelectStBox = styled.select`
  width: 300px;
  height: 25px;
`;

export const SubmitBtn = styled.button`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  margin: 10px 10px 10px auto;
`;
