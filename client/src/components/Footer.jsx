// Add the necessary technologies and for the Footer component.
import React, { useState } from "react";
import styled from "@emotion/styled";

// Add the styled components for the Footer component.
// Add the FooterContainer which handles the parent styling of the footer icon elements.   
const FooterContainer = styled.footer`
border-top: 1px solid #1a1a1a;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
bottom: 0;
left: 0;
width: 100%;
padding: 10px;
border-top: 1px solid #000;
background-color: #f5f5f5;
`;

// Add a Copyright styled component for the respective line in the 'Footer' exported component, add margin: 0 to remove default browser <p> styling.
const Copyright = styled.p`
  margin: 0;
  font-size: 12px;
  color: #1a1a1a;
`;


// Add the Footer component as the default export for the file.
export default function Footer() {
    return (
        <FooterContainer>
            <Copyright>© 2023 Wyatt Barger, Andrew Mell, and Alex Blaylock. This project is licensed under the MIT License. Designed and developed in Novemeber 2023. </Copyright>
        </FooterContainer>
    );
};
