import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  font-family: "Protest Riot", sans-serif;
  font-weight: 400;
  font-style: normal;
}


header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEEEEE;

}

nav {
    display: flex;
}

`;

export default GlobalStyle;
