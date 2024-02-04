import styled from "styled-components";

export const FanLetterDivSt = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;

  width: 600px;
  margin: 10px auto 10px auto;
  padding: 5px;
  border-radius: 10px;
`;

export const FanLetterStBox = styled.div`
  background-color: #eeeeee;
  opacity: ${({ selectedBtn }) => (selectedBtn ? 0.9 : 0.8)};
  display: flex;
  height: 100px;
  margin: 5px 0 5px 0;
  justify-content: space-between;
  align-items: center;
  border: 3px solid lightgray;
  border-radius: 5px;
`;

export const FanLetterDiv = styled.div`
  display: flex;
`;

export const AvatarStImg = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
  margin: 7px;
  cursor: pointer;
`;

export const LetterContentSt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  width: 460px;
  height: 100px;
`;

export const LetterLiBtnContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailBtn = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  padding: 0 4px 0 4px;
  border: 3px solid gray;
  border-radius: 5px;
  margin: 0px 7px 20px 0;
  opacity: 1;
`;

export const LiStyle = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
`;
