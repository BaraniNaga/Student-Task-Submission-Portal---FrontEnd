import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Switch } from 'react-router-dom';

import './App1.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../login';
// import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';

// --------------------------------------------------

// function App1() {

//   const { token, setToken } = useToken();

//   if(!token) {
//     return <Login setToken={setToken} />
//   }

// ----------------------------------

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

// function App1() {
//   const token = getToken();

//   if(!token) {
//     return <Login setToken={setToken} />
//   }

  // --------------------------------

function App1() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Navigate>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Navigate>
      </BrowserRouter>
    </div>
  );
}

export default App1;