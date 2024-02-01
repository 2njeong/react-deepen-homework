import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import { fakeData } from "../shared/data";

const Router = () => {
  const [letterList, setLetterList] = useState([...fakeData]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home letterList={letterList} setLetterList={setLetterList} />
          }
        />
        <Route
          path="/letterList/:id"
          element={
            <Detail letterList={letterList} setLetterList={setLetterList} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
