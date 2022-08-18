import React from "react";
import "./style.css";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <div className="layout_container">
      <Header />
      {props.children}
    </div>
  );
};
export default Layout;
