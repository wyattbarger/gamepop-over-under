// Add the necessary technologies and components for the Signup page.
import React, { useState } from "react";
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
  padding: 10px;
  font-size: 16px;
  white-space: nowrap;
`;

const UsernameInput = styled.input`
  background-color: #0d0d0d;
  font-size: 20px;
  color: #008f11;
  border: 1px solid #1a1a1a;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px;
  transition: background-color 0.3s ease-in-out; 

  &:focus {
    background-color: #2D2D2D;
    border-color: #008f11;
    outline: none;
  }
`;

const PasswordLabel = styled.label`
  padding: 10px 0;
  font-size: 16px;
  white-space: nowrap;
`;

const PasswordInput = styled.input`
  background-color: #0d0d0d;
  font-size: 20px;
  color: #008f11;
  border: 1px solid #1a1a1a;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px;
  transition: background-color 0.3s ease-in-out; 

  &:focus {
    background-color: #2D2D2D;
    border-color: #008f11;
    outline: none;
  }
`;

const SignupButton = styled.button`
  background-color: #008f11;
  color: #f5f5f5;
  text-align: center;
  font-size: 20px;
  margin: 20px 10px;
  padding: 20px 12px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #005f0c;
  width: 75px;
  height: 75px;
  transition: all 0.1s ease-in-out;

  :active {
    background-color: #005f0c;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
    transform: scale(0.95);
  }
`;

// Add the function which builds out our Signup page with styled components.
function Signup() {
  const [username, setUsername] = useState(''); // Add the state to update the value of the username.
  const [password, setPassword] = useState(''); // Add the state to update the value of the password.

  const onUsernameInputChange = (event) => { // Add the function to update the value of the username state.
      setUsername(event.target.value);
    };

    const onPasswordInputChange = (event) => { // Add the function to update the value of the password state.
        setPassword(event.target.value);
    };

  return (
    <Container>
      <SignupCard>
        <CardTitle>Join Game Pop</CardTitle>
        <SignupForm>
          <UsernameLabel htmlFor="username">Choose a Username</UsernameLabel>
          <UsernameInput type="text" id="username" value={username} onChange={onUsernameInputChange}/>
          <PasswordLabel htmlFor="password">Enter a Password</PasswordLabel>
          <PasswordInput type="password" id="password" value={password} onChange={onPasswordInputChange}/>
          <SignupButton type="submit">Join</SignupButton>
        </SignupForm>
      </SignupCard>
    </Container>
  );
}

export default Signup;
