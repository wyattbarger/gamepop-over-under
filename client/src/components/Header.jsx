// Add the technologies necessary to make the Header component functional.
import { Link, useMatch } from "react-router-dom";
import React, { useState } from "react";
import styled from "@emotion/styled";
import AuthService from "../utils/auth";

// Add the styled components for the Header component.
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 75px;
  width: 100%;
  position: fixed;
  top: 2%;
  right: 2%;
`;
// const HeroContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 10px 10px 10px 10px;
// `;
// const HeaderTitle = styled.h1`
//   font-size: 38.5px;
//   color: #008f11;
//   text-shadow: 3px 4px 4px rgba(0, 255, 65, 1);
// `;

const Navbar = styled.nav`
  display: flex;
  border: 1px solid #70ffdf;
  
`;

// Add the active prop to the NavbarLink that will style according to the active route in react-router-dom. This was changed from the original code to use NavLink instead of Link, as this is the proper way to use active stylings with react-router-dom in a Navbar component.
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #008f11;
  padding: 20px 30px 20px 20px;
  align-items: center;
  transition: color 0.3s ease-in-out, background-color 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    color: #0d0d0d;
    background-color: #008f11;
  }

  &:hover {
    color: #0d0d0d;
    background-color: #008f11;
  }
`;

// Add the LogoutButton styled component that will be used to handle the logout functionality, which will display conditionally based on the loginStatus state variable.
const LogoutButton = styled.button`
  color: #008f11;
  background-color: #0d0d0d;
  height: 38.5px;
  border: none;
  padding: 10px 40px 10px 10px;
  transition: color 0.3s ease-in-out, background-color 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #0d0d0d;
    background-color: #008f11;
  }
`;

// Add the ReactiveLink component that will use the useMatch hook to determine if the route is active and style accordingly, fixing our console error when loading Signup.jsx with the current rendition of the Header component.
function ReactiveLink({ to, children }) {
  const match = useMatch(to);
  return (
    <NavbarLink to={to} className={match ? "active" : ""}>
      {children}
    </NavbarLink>
  );
}

// Add the Header component as the default export for the file.
export default function Header() {
  const [loginStatus, setLoginStatus] = useState(AuthService.loggedIn())
  // Add a function that calls the AuthService logout method to handle the logout functionality.
  function initLogout() {
    AuthService.logout();
  }
  return (
    <HeaderContainer>
      {/* <HeroContainer> */}
        {/* <HeaderTitle></HeaderTitle> */}
      {/* </HeroContainer> */}
      <Navbar>
        <ReactiveLink to="/">Home</ReactiveLink>
        {loginStatus ? (
          <LogoutButton onClick={initLogout}>Log Out</LogoutButton>
        ) : (
          <>
            <ReactiveLink to="/login">Log In</ReactiveLink>
            <ReactiveLink to="/signup">Sign Up</ReactiveLink>
          </>
        )}
      </Navbar>
    </HeaderContainer>
  );
}
