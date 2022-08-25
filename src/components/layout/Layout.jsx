import React from "react";
import Header from "../header/Header";
import styled from "styled-components";

const LayoutStyle = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

const Layout = (props) => {
  return (
    <LayoutStyle>
      <Header />
      {props.children}
    </LayoutStyle>
  );
};
export default Layout;
