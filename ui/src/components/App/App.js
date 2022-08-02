import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from '../Home/Home';
import Loading from '../Loading/Loading'
import SignIn from '../SignIn/SignIn';
import CoverGrid from '../CoverGrid/CoverGrid';
import './App.css';

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get('/auth/current-session').then(({data}) => {
      setAuth(data);
    });
  }, [])

  // if not logged in, ask to login
  if (auth === null) {
    return <Loading />
  }
  // if logged in, show canvas page
  if (auth) {
    return (
      <BrowserRouter>
        <Routes>
          <Route 
                path="/"
                element={
                  <Home auth={ auth } />
                } 
          />
          <Route
                path='/covers'
                element={
                  <CoverGrid auth={ auth } />
                }
          />
          <Route />
        </Routes>
      </BrowserRouter>
    )
  }
  // else ask user to sign in
  return <SignIn />
}

export default App;
