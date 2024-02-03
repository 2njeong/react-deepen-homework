import React, { useContext } from "react";
import { data } from "../shared/data";
import { TitleSt, NavBtnSt, navName } from "../style/TitleStyle";
import { useNavigate } from "react-router-dom";
import { FamilyContext } from "../context/FamilyContext";

function Title() {
  const allData = useContext(FamilyContext);

  const navigate = useNavigate();

  const seletecBtnClickHandeler = (id) => {
    allData.setSelectedBtn(id);
  };

  const titleBtn = () => {
    allData.setSelectedBtn(null);
    navigate("/");
  };

  return (
    <>
      <TitleSt onClick={titleBtn}>BLACK PINK IN YOUR AREA</TitleSt>
      <nav>
        {data.map((idol) => {
          return (
            <NavBtnSt
              key={idol.id}
              onClick={() => seletecBtnClickHandeler(idol.id)}
              isselected={allData.selectedBtn === idol.id ? "true" : "false"}
              backgroundcolor={navName(idol.name)}
              color={idol.id}
            >
              {idol.name}
            </NavBtnSt>
          );
        })}
      </nav>
    </>
  );
}

export default Title;
