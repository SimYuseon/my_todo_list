import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffdee9;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <p>My Todo List</p>
      <p>React</p>
    </HeaderContainer>
  );
};
export default Header;
