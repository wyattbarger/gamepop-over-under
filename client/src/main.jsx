import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Home from './pages/home.jsx'
import Login from './pages/Login.jsx'
import PlayGame from './pages/PlayGame.jsx'
import EndMenu from './pages/EndMenu.jsx'
// import SignUp from './pages/Signup.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/play',
        element: <PlayGame />
      }, {
        path: '/end',
        element: <EndMenu />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
