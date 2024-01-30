import React from "react";
import { data } from "../shared/data";
import { TitleSt, NavBtnSt, navName } from "../style/TitleStyle";
import { useNavigate } from "react-router-dom";

function Title({ selectedBtn, setSelectedBtn }) {
  const navigate = useNavigate();

  const goDetailPage = (id) => {
    setSelectedBtn(id);
    navigate(`/detail/${id}`);
  };

  const titleBtn = () => {
    setSelectedBtn(null);
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
              backgroundcolor={navName(idol.name)}
              color={idol.id}
              isselected={selectedBtn === idol.id}
              onClick={() => goDetailPage(idol.id)}
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
