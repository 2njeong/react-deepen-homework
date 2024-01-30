import React from "react";
import GlobalStyle from "../GlobalStyle";
import { useNavigate } from "react-router-dom";
import { data } from "../shared/data";
import { Title, NavBtn, navName } from "../components/LayoutStyle";

function Layout() {
  const navigate = useNavigate();

  const goDetailPage = (id) => {
    return navigate(`/detail/${id}`);
  };
  return (
    <>
      <GlobalStyle />
      <header>
        <Title>BLACK PINK IN YOUR AREA</Title>
        <nav>
          {data.map((idol) => {
            return (
              <NavBtn
                key={idol.id}
                backgroundcolor={navName(idol.name)}
                color={idol.id}
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
