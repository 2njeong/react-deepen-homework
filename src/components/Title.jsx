import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../shared/data";
import { TitleSt, NavBtnSt, navName } from "../style/TitleStyle";
import { useNavigate } from "react-router-dom";
import { selectClick, goHomeClick } from "../redux/modules/selectedBtnReducer";

function Title() {
  const dispatch = useDispatch();
  const selectedBtn = useSelector(
    (state) => state.selectedBtnReducer.selectedBtn
  );
  console.log(selectedBtn);

  const navigate = useNavigate();

  const seletecBtnClickHandeler = (id) => {
    dispatch(selectClick(id));
  };

  const titleBtn = () => {
    dispatch(goHomeClick());
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
              isselected={selectedBtn === idol.id ? "true" : "false"}
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
