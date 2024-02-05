import React, { forwardRef } from "react";
import styled from "styled-components";

export const WholeDetailbackground = styled.div`
  background-color: #eaeaea;
`;
export const DetailImgStBox = styled.div`
  height: 700px;
  background: url("/img/pinkbox.png");
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailStBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 460px;
  width: 630px;
  margin: 10px 0 0 45px;
`;

export const GoBackToListBtn = styled.button`
  height: 26px;
  width: 520px;
  margin: 0 auto 0 60px;
  border: 2px solid #eeeeee;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
`;

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 630px;
  height: 115px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const DetailInsideDiv1 = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailInsideDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
`;

export const DetailAvatarImg = styled.img`
  width: 90px;
  height: 90px;
  border: 3px solid #eeeeee;
  border-radius: 70%;
  object-fit: cover;
  margin: 7px 7px 7px 10px;
`;

export const DetailNicknameP = styled.p`
  margin-left: 8px;
  font-weight: 700;
  font-size: 30px;
`;

export const DetailWriteToP = styled.p`
  margin: 10px 0 20px 0;
  font-size: 26px;
  font-weight: 700;
`;

export const DetailP = styled.p`
  margin: 1px 0 1px 0;
  font-size: 15px;
  font-weight: 700;
`;

export const DetailContentP = styled.p`
  /* background-color: aqua; */
  border: 3px solid #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  font-size: 24px;
  line-height: 45px;
  margin: 3px 0 0 22.5px;
  width: 580px;
  height: 185px;
`;

const StyledTextArea = styled.textarea`
  border: 3px solid #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  font-size: 24px;
  line-height: 45px;
  margin: 3px 0 0 22.5px;
  width: 580px;
  height: 185px;
`;

export const DetailEditArea = forwardRef((props, ref) => (
  <StyledTextArea ref={ref} {...props} />
));
