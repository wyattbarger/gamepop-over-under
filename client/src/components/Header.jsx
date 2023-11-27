// Add the technologies necessary to make the Header component functional.
import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import styled from "@emotion/styled";
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
  font-size: 38.5px;
  color: #008f11;
  text-shadow: 3px 4px 4px rgba(0, 255, 65, 1);
`;

const Navbar = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  border-top: 1px solid #008f11;
  border-bottom: 1px solid #008f11;
  border-left: 1px solid #008f11;
`;

// Add the active prop to the NavbarLink that will style according to the active route in react-router-dom. This was changed from the original code to use NavLink instead of Link, as this is the proper way to use active stylings with react-router-dom in a Navbar component.
const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #008f11;
  padding: 10px 40px 10px 10px;
  transition: color 0.3s ease-in-out, background-color 0.6s ease-in-out;

  &.active {
    color: #0d0d0d;
    background-color: #008f11;
  }

  &:hover {
    color: #0d0d0d;
    background-color: #008f11;
  }
`;

// Add the Header component as the default export for the file.
export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <HeaderContainer>
      <HeroContainer>
        <HeaderTitle>Game Pop</HeaderTitle>
      </HeroContainer>
      <Navbar>
        <NavbarLink to="/" exact activeClassName="active">
          Home
        </NavbarLink>
        <NavbarLink to="/play" activeClassName="active">
          Play
        </NavbarLink>
        <NavbarLink to="/login" activeClassName="active">
          Log In
        </NavbarLink>
        <NavbarLink to="/signup" activeClassName="active">
          Sign Up
        </NavbarLink>
      </Navbar>
    </HeaderContainer>
  );
}
