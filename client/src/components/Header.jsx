// Add the technologies necessary to make the Header component functional.
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import styled from "@emotion/styled";
 // * Need to add the auth information that will need to be created for the front end to work with the back end, which should be created in the utils directory to decode the JWT token *.

// Add the styled components for the Header component.
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderLogo = styled.img``;

const HeaderTitle = styled.h1``;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const HeaderLink = styled(Link)``;

export default function Header() {
    return (
        <HeaderContainer>
            <HeroContainer>
                <HeaderLogo src="" alt="logo" />
                <HeaderTitle>React Trivia</HeaderTitle>
            </HeroContainer>
            <Navbar>
                <HeaderLink href="/">Home</HeaderLink>
                <HeaderLink href="/play">Play</HeaderLink>
                <HeaderLink href="/login">Login</HeaderLink>
                <HeaderLink href="/signup">Signup</HeaderLink>
            </Navbar>
        </HeaderContainer>
    );
};
