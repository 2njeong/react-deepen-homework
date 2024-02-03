import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import { fakeData } from "./data.js";
import GlobalStyle from "../GlobalStyle.jsx";
import { FamilyContext } from "../context/FamilyContext.jsx";

const Router = () => {
  const [letterList, setLetterList] = useState([...fakeData]);
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [nickName, setNicKName] = useState("");
  const [content, setContent] = useState("");
  const [option, setOption] = useState("");

  return (
    <FamilyContext.Provider
      value={{
        letterList: letterList,
        setLetterList,
        selectedBtn,
        setSelectedBtn,
        nickName,
        setNicKName,
        content,
        setContent,
        option,
        setOption,
      }}
    >
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letterList/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </FamilyContext.Provider>
  );
};

export default Router;
