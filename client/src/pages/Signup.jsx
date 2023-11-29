// Add the necessary technologies and components for the Signup page.
import React, { useState } from "react";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Header from '../components/Header';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import AuthService from '../utils/auth';


// Add the styled components for the Signup page.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const SignupCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 10px;
  padding: 20px;
`;

const CardTitle = styled.h1`
color: #ff4df0;
font-size: 8rem;
white-space: nowrap;

text-shadow: 1px 3px 3px rgba(112, 255, 225, 1),
             1px 3px 3px rgba(255, 255, 255, 1);
`;

const SignupForm = styled.form`
color: #008f11;
font-size: 1rem;
display: flex;
flex-direction: column;
align-items: center;
`;

const UsernameLabel = styled.label`
padding: 10px;
font-size: 20px;
white-space: nowrap;
color: #70ffdf;
`;

const UsernameInput = styled.input`
background-color: #0d0d0d;
font-size: 24px;
color: #70ffdf;
border: 1px solid #70ffdf;
border-radius: 5px;
box-sizing: border-box;
padding: 5px;
transition: background-color 0.3s ease-in-out;

&:focus {
  background-color: #2d2d2d;
  border-color: #70ffdf;
  outline: none;
}
`;

const PasswordLabel = styled.label`
padding: 10px 0;
font-size: 20px;
white-space: nowrap;
color: #70ffdf;
`;

const PasswordInput = styled.input`
  background-color: #0d0d0d;
  font-size: 24px;
  color: #70ffdf;
  border-radius: 5px;
  border: 1px solid #70ffdf;
  box-sizing: border-box;
  padding: 5px;
  transition: background-color 0.3s ease-in-out;

  &:focus {
    background-color: #2d2d2d;
    border-color: #70ffdf;
    outline: none;
  }
`;

const SignupButton = styled.button`
  background-color: #ff4df0;
  color: #f5f5f5;
  text-align: center;
  font-size: 22px;
  margin: 10px 10px;
  padding: 24px 15px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #70ffdf;
  transition: all 0.1s ease-in-out;

:active {
background-color: #ff4df0;
box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
transform: scale(0.97);
}
`;

// Add the function which builds out our Signup page with styled components.
function Signup() {
  const [username, setUsername] = useState(""); // Add the state to update the value of the username.
  const [password, setPassword] = useState(""); // Add the state to update the value of the password.
  const [addUser, { error, data }] = useMutation(ADD_USER); // Add the addUser mutation to the Signup page.

  const usernameInputChange = (event) => {
    // Add the function to update the value of the username state.
    setUsername(event.target.value);
  };

  const passwordInputChange = (event) => {
    // Add the function to update the value of the password state.
    setPassword(event.target.value);
  };

  const signupFormSubmit = async (event) => {
    // Add the function to handle the form submission when the 'Join button is clicked.
    event.preventDefault();
    console.log("✅ signupFormSubmit triggered."); // * Remove when mvp is complete. (Input fields also will not clear as intended until addUser mutation is linked.) *
    try {
      const { data } = await addUser({ variables: { username, password } }); // Add a response variable that will await the addUser mutation, and pass in the username and password variables as defined in server/schemas/resolvers.js.
      setUsername("");
      setPassword("");
      AuthService.login(data.addUser.token); // Add the AuthService.login function to the signupFormSubmit function and pass the token returned from the addUser mutation, as an arguement, as specified in auth.js.
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header />
      <SignupCard>
        <CardTitle>Join Game Pop</CardTitle>
        <SignupForm onSubmit={signupFormSubmit}>
          <UsernameLabel htmlFor="username">Choose a Username</UsernameLabel>
          <UsernameInput
            type="text"
            id="username"
            value={username}
            onChange={usernameInputChange}
          />
          <PasswordLabel htmlFor="password">Choose a Password</PasswordLabel>
          <PasswordInput
            type="text"
            id="password"
            value={password}
            onChange={passwordInputChange}
          />
          <SignupButton type="submit">Join</SignupButton>
        </SignupForm>
      </SignupCard>
      <Footer />
    </Container>
  );
}

export default Signup;
