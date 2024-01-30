import styled from "styled-components";
import { data } from "../shared/data";

export const Title = styled.h1`
  display: block;
  font-size: 3em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
`;
export const NavBtn = styled.button`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  color: ${({ color }) => (color % 2 === 0 ? "white" : "black")};
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
