// Add the necessary technologies and for the Footer component.
import React, { useState } from "react";
import styled from "@emotion/styled";
import githubIcon from '../assets/github-icon-png.png';
import issuesIcon from '../assets/issues-icon-png.png';

// Add the styled components for the Footer component.
// Add the FooterContainer which handles the parent styling of the footer icon elements.
const FooterContainer = styled.footer`
  border-top: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
    padding: 10px 40px 10px 10px; 
  background-color: #0d0d0d;
  transition: border-top-color 0.7s ease, color 0.7s ease, box-shadow 0.7s ease;

  &:hover {
    border-top-color: #70ffdf;
    color: #70ffdf;
    box-shadow: 0 0 7px #70ffdf;
  }
`;

// Add a Copyright styled component for the respective line in the 'Footer' exported component, add margin: 0 to remove default browser <p> styling.
const Copyright = styled.p`
  margin: 0;
  font-size: 12px;
  color: #444;
  transition: color 0.7s ease;

  &:hover {
    color: #70ffdf;
  }
`;

// Add a FooterIcon styled component for the Github and Issues icons that will display at the 'end' of the footer.
const GithubIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  transition: filter 1.7s ease;
  filter: invert(22%) sepia(17%) saturate(9%) hue-rotate(315deg) brightness(100%) contrast(87%);

  &:hover {
    filter: brightness(0) saturate(100%) invert(27%) sepia(9%) saturate(748%) hue-rotate(158deg) brightness(89%) contrast(88%) drop-shadow(0 0 3px #008f11);
  }
`;

// Add a FooterIcon styled component for the Github and Issues icons that will display at the 'end' of the footer.
const IssuesIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: filter 1.7s ease;
  filter: invert(22%) sepia(17%) saturate(9%) hue-rotate(315deg) brightness(100%) contrast(87%);

  &:hover {
    filter: brightness(0) saturate(100%) invert(27%) sepia(9%) saturate(748%) hue-rotate(158deg) brightness(89%) contrast(88%) drop-shadow(0 0 3px #FF073A);
  }
`;

// Add a IconContainer styled component for the Github and Issues icons that will display at the 'end' of the footer.
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 15px;
`;

// Add the Footer component as the default export for the file.
export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        © 2023 Wyatt Barger, Andrew Mell, and Alex Blaylock. This project is
        licensed under the MIT License. Designed and developed in Novemeber
        2023.
      </Copyright>
      <IconContainer> 
        {/* Add target="_blank" to open the links in a new tab and rel="noopener noreferrer" to prevent the new page from accessing the previous page's window object for security reasons. */}
        <a href="https://github.com/wyattbarger/gamepop-over-under" target="_blank" rel="noopener noreferrer">
            <GithubIcon src={githubIcon} title="View the repo"/>
        </a>
        <a href="https://github.com/wyattbarger/gamepop-over-under/issues" target="_blank" rel="noopener noreferrer">
            <IssuesIcon src={issuesIcon} title="Add an issue"/>
        </a>
      </IconContainer>
    </FooterContainer>
  );
}
