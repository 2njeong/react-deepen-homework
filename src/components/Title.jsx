import React from "react";
import { data } from "../shared/data";
import { TitleSt, NavBtnSt, navName } from "../style/TitleStyle";
import { useNavigate } from "react-router-dom";

function Title({ selectedBtn, setSelectedBtn }) {
  const navigate = useNavigate();

  const seletecBtnClick = (id) => {
    setSelectedBtn(id);
    // console.log(selectedBtn);
    // navigate(`/title/${selectedBtn}`);
  };

  const titleBtn = () => {
    setSelectedBtn(null);
    navigate("/");
  };

  return (
    <header>
      <TitleSt onClick={titleBtn}>BLACK PINK IN YOUR AREA</TitleSt>
      <nav>
        {data.map((idol) => {
          return (
            <NavBtnSt
              key={idol.id}
              onClick={() => seletecBtnClick(idol.id)}
              isselected={selectedBtn === idol.id ? "true" : "false"}
              backgroundcolor={navName(idol.name)}
              color={idol.id}
            >
              {idol.name}
            </NavBtnSt>
          );
        })}
      </nav>
    </header>
  );
}

export default Title;
