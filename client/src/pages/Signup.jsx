// Add the necessary technologies and components for the Signup page.
import React from "react";
import styled from "@emotion/styled";

// Add the styled components for the Signup page.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  border: 1px solid #008f11;
  margin: 10px;
  padding: 20px;
`;

const CardTitle = styled.h1`
  color: #008f11;
  font-size: 8rem;
  white-space: nowrap;
  padding: 0 20px;
  text-shadow: 3px 4px 4px rgba(0, 255, 65, 1);
`;

const SignupForm = styled.form`
  color: #008f11;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsernameLabel = styled.label`
  font-size: 16px;
  white-space: nowrap;
`;

const UsernameInput = styled.input`
  background-color: #0D0D0D;
  font-size: 20px;
  color: #008f11;
  border: 1px solid #1a1a1a;
  border-radius: 5px;
`;

const PasswordLabel = styled.label`
  font-size: 16px;
  white-space: nowrap;
`;

const PasswordInput = styled.input`
  background-color: #0D0D0D;
  font-size: 20px;
  color: #008f11;
  border: 1px solid #1a1a1a;
  border-radius: 5px;
`;

// Add the function which builds out our Signup page with styled components.
function Signup() {
  return (
    <Container>
      <SignupCard>
        <CardTitle>Join Game Pop</CardTitle>
        <SignupForm>
          <UsernameLabel htmlFor="username">Choose a Username</UsernameLabel>
          <UsernameInput type="text" id="username" />
          <PasswordLabel htmlFor="password">Enter a Password</PasswordLabel>
          <PasswordInput type="password" id="password" />
        </SignupForm>
      </SignupCard>
    </Container>
  );
}

export default Signup;
