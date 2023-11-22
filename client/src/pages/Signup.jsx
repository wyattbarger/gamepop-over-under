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
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
`;

const CardTitle = styled.h1`
  color: #008f11;
  font-size: 8rem;
  white-space: nowrap;
  padding: 0 20px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsernameLabel = styled.label`
  color: #008f11;
  font-size: 16px;
  white-space: nowrap;
`;

const UsernameInput = styled.input`
  color: #008f11;
  font-size: 20px;
`;

const PasswordLabel = styled.label`
  color: #008f11;
  font-size: 16px;
  white-space: nowrap;
`;

const PasswordInput = styled.input`
  color: #008f11;
  font-size: 20px;
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
