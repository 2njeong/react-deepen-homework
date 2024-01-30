import React from "react";
import { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import { useNavigate } from "react-router-dom";
import { data } from "../shared/data";
import { Title, NavBtn, navName } from "../components/LayoutStyle";

function Layout() {
  const [selectedBtn, setSelectedBtn] = useState(null);

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
      <GlobalStyle />
      <header>
        <Title onClick={titleBtn}>BLACK PINK IN YOUR AREA</Title>
        <nav>
          {data.map((idol) => {
            return (
              <NavBtn
                key={idol.id}
                backgroundcolor={navName(idol.name)}
                color={idol.id}
                isselected={selectedBtn === idol.id}
                onClick={() => goDetailPage(idol.id)}
              >
                {idol.name}
              </NavBtn>
            );
          })}
        </nav>
      </header>
    </>
  );
}
export default Layout;
