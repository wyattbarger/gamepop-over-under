// Add the necessary technologies and for the Footer component.
import React, { useState } from "react";
import styled from "@emotion/styled";

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
  padding: 10px;
  background-color: #0d0d0d;
  transition: border-top-color 0.7s ease, color 0.7s ease, box-shadow 0.7s ease;

  &:hover {
    border-top-color: #005f0c;
    color: #005f0c;
    box-shadow: 0 0 15px #005f0c;
  }
`;

// Add a Copyright styled component for the respective line in the 'Footer' exported component, add margin: 0 to remove default browser <p> styling.
const Copyright = styled.p`
  margin: 0;
  font-size: 12px;
  color: #444;
  transition: color 0.7s ease;

  &:hover {
    color: #005f0c;
  }
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
    </FooterContainer>
  );
}
