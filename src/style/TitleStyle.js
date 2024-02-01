import styled from "styled-components";
import { data } from "../shared/data";

export const TitleSt = styled.button`
  display: block;
  font-size: 3em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
  background-color: transparent;
  border-color: transparent;
`;
export const NavBtnSt = styled.button`
  background-color: ${({ backgroundcolor, isselected }) =>
    isselected === "true" ? "#b2b7bc" : backgroundcolor};
  color: ${({ color, isSelected }) =>
    color % 2 === 0 || isSelected === "true" ? "white" : "black"};
  height: 70px;
  width: 255px;
  text-align: center;
  line-height: 70px;
  border-radius: 3px;
  font-size: 23px;
  font-weight: bold;

  &:hover {
    background-color: #b2b7bc;
    color: #494d52;
    opacity: 1;
  }
`;
export const navName = (name) => {
  switch (name) {
    case data[0].name:
      return "pink";
    case data[1].name:
      return "black";
    case data[2].name:
      return "pink";
    case data[3].name:
      return "black";
    default:
      return "red";
  }
};
