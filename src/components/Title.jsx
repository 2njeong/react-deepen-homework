import React from "react";
import { data } from "../shared/data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TitleSt, NavBtnSt, navName } from "../style/TitleStyle";
import { selectClick, goHomeClick } from "../redux/modules/selectedBtnReducer";

function Title() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const titleBtn = () => {
    dispatch(goHomeClick());
    navigate("/");
  };

  const seletecBtnClickHandeler = (id) => {
    dispatch(selectClick(id));
  };

  const selectedBtn = useSelector(
    (state) => state.selectedBtnReducer.selectedBtn
  );

  return (
    <>
      <TitleSt onClick={titleBtn}>BLACK PINK IN YOUR AREA</TitleSt>
      <nav>
        {data.map((idol) => {
          return (
            <NavBtnSt
              key={idol.id}
              onClick={() => seletecBtnClickHandeler(idol.id)}
              $isSelected={selectedBtn === idol.id ? "true" : "false"}
              $backgroundColor={navName(idol.name)}
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
