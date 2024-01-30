import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>변경되지 않는 헤더 부분</header>

      {/* 바뀌어야 하는 영역 */}
      {children}

      <footer>변경되지 않는 푸터 부분</footer>
    </div>
  );
};

export default Layout;
