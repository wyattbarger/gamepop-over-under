// Add the technologies necessary to make the Header component functional.
import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "@emotion/styled";
import headerLogo from "../assets/mvp-icon-png.png";
// * Need to add the auth information that will need to be created for the front end to work with the back end, which should be created in the utils directory to decode the JWT token *.

// Add the styled components for the Header component.
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 10px 10px 10px;
  margin-bottom: 5px;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 10px;
`;
const HeaderTitle = styled.h1`
  font-size: 50.5px;
  color: #008f11;
  text-shadow: 3px 4px 4px rgba(0, 255, 65, 1);
`;

const Navbar = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 5px 5px 5px 5px;
  border-top: 1px solid #008f11;
  border-bottom: 1px solid #008f11;
  border-left: 1px solid #008f11;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #008f11;
  padding: 10px 40px 10px 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeroContainer>
        <HeaderTitle>Game Pop</HeaderTitle>
      </HeroContainer>
      <Navbar>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/play">Play</NavbarLink>
        <NavbarLink to="/login">Login</NavbarLink>
        <NavbarLink to="/signup">Signup</NavbarLink>
      </Navbar>
    </HeaderContainer>
  );
}
