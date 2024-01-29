import React from "react";
import styled from "styled-components";
// import GlobalStyle from "";

const navIdol = [
  { id: 1, name: "지수 - Jisoo" },
  { id: 2, name: "제니 - Jennie" },
  { id: 3, name: "로제 - ROSÉ" },
  { id: 4, name: "리사 - Lisa" },
];

const StContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  display: block;
  font-size: 3em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
  /* background-color: aqua; */
`;

const NavBox = styled.nav`
  display: flex;
`;

const NavItem = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => (props.color % 2 === 0 ? "white" : "black")};
  height: 70px;
  width: 255px;
  text-align: center;
  line-height: 70px;
  border-radius: 3px;
  font-size: 23px;
  font-weight: bold;
`;

const navName = (name) => {
  switch (name) {
    case "지수 - Jisoo":
      return "pink";
    case "제니 - Jennie":
      return "black";
    case "로제 - ROSÉ":
      return "pink";
    case "리사 - Lisa":
      return "black";
    default:
      return "red";
  }
};

function Home() {
  return (
    <>
      <StContainer>
        <Title>BLACK PINK IN YOUR AREA</Title>
        <NavBox>
          {navIdol.map((idol) => {
            return (
              <NavItem
                key={idol.id}
                backgroundcolor={navName(idol.name)}
                color={idol.id}
              >
                {idol.name}
              </NavItem>
            );
          })}
        </NavBox>
      </StContainer>
    </>
  );
}

export default Home;
