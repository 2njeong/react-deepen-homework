import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Letter";
import Detail from "../pages/Detail";
import Layout from "../pages/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
