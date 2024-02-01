import styled from "styled-components";

export const FanLetterStContainer = styled.div`
  background-color: ${({ backgroundcolor }) =>
    backgroundcolor === null ? "tranparent" : "beige"};
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
  height: 100px;
  margin: 5px 0 5px 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 2px solid gray;
  border-radius: 5px;
`;

export const AvatarSt = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
  margin: 7px;
`;

export const LetterUlSt = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  width: 460px;
  height: 120px;
`;

export const LiStyle = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
