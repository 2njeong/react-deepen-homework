import React from "react";
import { data } from "../../shared/data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TitleSt, MemberBtnSt, navName } from "../../style/LayoutStyle";
import { selectClick, goHomeClick } from "../../redux/modules/selectedBtnSlice";

function Title() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const titleBtn = () => {
    dispatch(goHomeClick());
    navigate("/home");
  };

  const seletecBtnClickHandeler = (id) => {
    dispatch(selectClick(id));
  };

  const selectedBtn = useSelector(
    (state) => state.selectedBtnSlice.selectedBtn
  );

  return (
    <>
      <TitleSt onClick={titleBtn}>BLACK PINK IN YOUR AREA</TitleSt>
      <nav>
        {data.map((idol) => {
          return (
            <MemberBtnSt
              key={idol.id}
              onClick={() => seletecBtnClickHandeler(idol.id)}
              $isSelected={selectedBtn === idol.id ? "true" : "false"}
              $backgroundColor={navName(idol.name)}
              color={idol.id}
            >
              {idol.name}
            </MemberBtnSt>
          );
        })}
      </nav>
    </>
  );
}

export default Title;
