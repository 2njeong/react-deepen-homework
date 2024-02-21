import styled from "styled-components";

export const WholeDetailbackground = styled.div`
  background-color: #eeeeee;
`;
export const DetailImgStBox = styled.div`
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background: url("/img/pinkbox.png");
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center center;
`;

export const DetailStBox = styled.div`
  width: 630px;
  height: 460px;
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 45px;
`;

export const GoBackToListBtn = styled.button`
  height: 26px;
  width: 520px;
  font-size: 15px;
  margin: 0 53px 0 auto;
  border-radius: 5px;
  border: 2px solid #eeeeee;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.04);
  }
`;

export const DetailDiv = styled.div`
  width: 630px;
  height: 115px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const DetailInsideDiv1 = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailInsideDiv2 = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const DetailBtnDiv = styled.div`
  width: 165px;
  height: 100px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DetailBtn = styled.button`
  width: 75px;
  height: 40px;
  border-radius: 8px;
  border: 3px solid #eeeeee;
  background-color: #eeeeee;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.06);
  }
`;

export const DetailAvatarImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 70%;
  border: 3px solid #eeeeee;
  margin: 7px 7px 7px 10px;
`;

export const DetailNicknameP = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-left: 8px;
`;

export const DetailWriteToP = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin: 10px 0 20px 0;
`;

export const DetailP = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin: 1px 0 1px 0;
`;

export const DetailEditArea = styled.textarea`
  width: 580px;
  height: 185px;
  padding: 10px;
  font-size: 24px;
  line-height: 45px;
  margin: 3px 0 0 22.5px;
  border-radius: 10px;
  border: 3px solid #f9f9f9;
  resize: none;
`;

export const DetailEditPArea = styled.p`
  width: 580px;
  height: 185px;
  padding: 10px;
  font-size: 24px;
  line-height: 45px;
  margin: 3px 0 0 22.5px;
  border-radius: 10px;
  border: 4px solid #f9f9f9;
`;
