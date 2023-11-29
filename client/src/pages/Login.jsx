// Add the necessary technologies and components for the Signup page.
import React, { useState } from "react";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import AuthService from "../utils/auth";

// Add the styled components for the Login page. * These were copied from Signup.jsx and refractored slightly to reach a functional mvp quickly. *
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LoginCard = styled.div`
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
  font-size: 6rem;
  white-space: nowrap;
  
  text-shadow: 2px 5px 3px rgba(112, 255, 225, 1),
               2px 5px 3px rgba(255, 255, 255, 1);
`;

const LoginForm = styled.form`
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
  font-family: "Press Start 2P";
  height: 45px;
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
  font-family: "Press Start 2P";
  height: 45px;
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
    border-color: #008f11;
    outline: none;
  }
`;

const LoginButton = styled.button`
  font-family: "Press Start 2P";
  background-color: #ff4df0;
  color: #f5f5f5;
  text-align: center;
  font-size: 18px;
  margin: 10px 10px;
  padding: 50px 20px;
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

function Login() {
  const [username, setUsername] = useState(""); // Add the state to update the value of the username.
  const [password, setPassword] = useState(""); // Add the state to update the value of the password.
  const [login, { error, data }] = useMutation(LOGIN_USER); // Add the login mutation to the Login page.

  const usernameInputChange = (event) => {
    // Add the function to update the value of the username state.
    setUsername(event.target.value);
  };

  const passwordInputChange = (event) => {
    // Add the function to update the value of the password state.
    setPassword(event.target.value);
  };

  const loginFormSubmit = async (event) => {
    // Add the function to handle the form submission when the 'Log In' button is clicked.
    event.preventDefault();
    console.log("✅ loginFormSubmit triggered."); // * Remove when mvp is complete. (Input fields also will not clear as intended until addUser mutation is linked.) *
    try {
      const { data } = await login({ variables: { username, password } }); // Add a response variable using line 77 of server/resolvers.js to see what the variables should be set to.
      setUsername("");
      setPassword("");
      AuthService.login(data.login.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Header />
      <LoginCard>
        <CardTitle>Log In to Game Pop</CardTitle>
        <LoginForm onSubmit={loginFormSubmit}>
          <UsernameLabel htmlFor="username">Enter your Username</UsernameLabel>
          <UsernameInput
            type="text"
            id="username"
            value={username}
            onChange={usernameInputChange}
          />
          <PasswordLabel htmlFor="password">Enter your Password</PasswordLabel>
          <PasswordInput
            type="password"
            id="password"
            value={password}
            onChange={passwordInputChange}
          />
          <LoginButton type="submit">Log In</LoginButton>
        </LoginForm>
      </LoginCard>
      <Footer />
    </Container>
  );
}

// self explanitory, need to do something here to authenticate.
export default Login;
