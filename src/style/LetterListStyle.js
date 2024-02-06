import styled from "styled-components";

export const FanLetterDivSt = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;

  width: 600px;
  padding: 5px;
  border-radius: 10px;
  margin: 10px auto 10px auto;
`;

export const FanLetterStBox = styled.div`
  height: 100px;
  margin: 5px 0 5px 0;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 3px solid lightgray;
  opacity: ${({ selectedBtn }) => (selectedBtn ? 0.9 : 0.8)};
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const FanLetterDiv = styled.div`
  display: flex;
`;

export const AvatarStImg = styled.img`
  width: 85px;
  height: 85px;
  margin: 7px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 70%;

  cursor: pointer;
`;

export const LetterContentSt = styled.div`
  width: 460px;
  height: 100px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LetterLiBtnContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailBtn = styled.button`
  opacity: 1;
  width: 100px;
  height: 30px;
  padding: 0 4px 0 4px;
  border-radius: 5px;
  border: 3px solid gray;
  margin: 0px 7px 20px 0;

  cursor: pointer;
`;

export const LiStyle = styled.li`
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const NoLetterDiv = styled.div`
  height: 60px;
  opacity: 0.7;
  text-align: center;
  padding: 10px 0 10px 0;
  border-radius: 7px;
  background-color: #eeeeee;
  border: 3px solid lightgray;
`;
