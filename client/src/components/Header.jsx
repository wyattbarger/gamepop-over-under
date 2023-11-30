// Add the technologies necessary to make the Header component functional.
import { Link, useMatch } from "react-router-dom";
import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import AuthService from "../utils/auth";
import { ScoreContext } from "../utils/scoreContext";

// Add the styled components for the Header component.
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  width: 100%;
  position: fixed;
  top: 2%;
  left: 2%;
  padding: 10px 10px 10px 10px;
  margin-bottom: 5px;
`;

// const HeroContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 10px 10px 10px 10px;
// `;

const ScoreTracker = styled.h1`
  font-size: 2.5rem;
  color: #ff4df0;

  @media (max-width: 800px) {
    font-size: 1.2rem; 
    margin-bottom: 10px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: flex-end;

  
  border: 1px solid #70ffdf;

  position: fixed;
  top: 5%;
  right: 2%;
  margin-bottom: 5px;
`;

// Add the active prop to the NavbarLink that will style according to the active route in react-router-dom. This was changed from the original code to use NavLink instead of Link, as this is the proper way to use active stylings with react-router-dom in a Navbar component.
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #ff4df0;
  font-size: 1.6rem;
  padding: 10px;
  transition: color 0.3s ease-in-out, background-color 0.6s ease-in-out;
  

  &.active {
    color: #1d269b;
    background-color: #ff4df0;
  }

  &:hover {
    color: #70ffdf;
    background-color: #045ded;
  }

  @media (max-width: 800px) {
    font-size: .8rem;
    
  }
`;

// Add the LogoutButton styled component that will be used to handle the logout functionality, which will display conditionally based on the loginStatus state variable.
const LogoutButton = styled(Link)`
text-decoration: none;
color: #ff4df0;
font-size: 1.6rem;
padding: 10px;
transition: color 0.3s ease-in-out, background-color 0.6s ease-in-out;


&.active {
  color: #1d269b;
  background-color: #ff4df0;
}

&:hover {
  color: #70ffdf;
  background-color: #045ded;
}

@media (max-width: 800px) {
  font-size: .8rem;

}`;

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
  const score = useContext(ScoreContext);
  const [loginStatus, setLoginStatus] = useState(AuthService.loggedIn())
  // Add a function that calls the AuthService logout method to handle the logout functionality.
  function initLogout() {
    AuthService.logout();
  }
  return (
    <HeaderContainer>
      {/* <HeroContainer>
        {/* <HeaderTitle>Game Pop</HeaderTitle> *
      {/* </HeroContainer> */} 
      <ScoreTracker>Score: {score}</ScoreTracker>
      <Navbar>
        <ReactiveLink to="/">Home</ReactiveLink>
        {/* <ReactiveLink to="/play">Play</ReactiveLink> */}
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
