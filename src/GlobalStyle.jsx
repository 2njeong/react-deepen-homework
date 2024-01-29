import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    display: block;
  font-size: 3em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
}

nav {
    display: flex;
}

button {

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
}
`;

export default GlobalStyle;
