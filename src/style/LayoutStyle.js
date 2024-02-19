import styled from "styled-components";
import { data } from "../shared/data";

export const TitleSt = styled.button`
  height: 80px;
  display: block;
  font-size: 3em;
  font-weight: bold;
  line-height: 80px;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  border-color: transparent;
  background-color: transparent;

  cursor: pointer;
`;

export const MemberBtnSt = styled.button`
  background-color: ${({ $backgroundColor, $isSelected }) =>
    $isSelected === "true" ? "#b2b7bc" : $backgroundColor};
  color: ${({ color, isSelected }) =>
    color % 2 === 0 || isSelected === "true" ? "white" : "black"};
  height: 70px;
  width: 255px;
  font-size: 23px;
  font-weight: bold;
  line-height: 70px;
  text-align: center;
  border-radius: 3px;
  border: 0px solid black;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: lightgray;
    color: #494d52;
    opacity: 1;
    transform: scale(1.02);
  }
`;
export const navName = (name) => {
  switch (name) {
    case data[0].name:
      return "#F6D6D6";
    case data[1].name:
      return "#353E55";
    case data[2].name:
      return "#F6D6D6";
    case data[3].name:
      return "#353E55";
    default:
      return "red";
  }
};
