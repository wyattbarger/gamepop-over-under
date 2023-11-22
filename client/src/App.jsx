import { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home.jsx";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// page import
import StartMenu from "./pages/StartMenu";
import PlayGame from "./pages/PlayGame";
import Login from "./pages/Login";
import EndMenu from "./pages/EndMenu";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
