import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import GlobalStyle from "../GlobalStyle.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letterList/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
