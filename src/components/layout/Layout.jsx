import React from "react";
import Header from "../header/Header";
import styled from "styled-components";

const LayoutSt = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

const Layout = (props) => {
  return (
    <LayoutSt>
      <Header />
      {props.children}
    </LayoutSt>
  );
};
export default Layout;
