import styled from "styled-components";

export const FanLetterStContainer = styled.div`
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;

  width: 600px;
  margin: 10px auto 10px auto;
  padding: 10px;
  border-radius: 10px;
`;

export const FanLetterStBox = styled.div`
  /* background-color: bisque; */
  display: flex;
  width: 600px;
  height: 120px;
  margin: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarSt = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
`;

export const LetterUlSt = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  width: 480px;
  height: 120px;
`;
