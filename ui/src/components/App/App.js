import React, { useState } from 'react';
import Home from '../Home/Home';
import Loading from '../Loading/Loading'
import SignIn from '../SignIn/SignIn';
import './App.css';

function App() {
  const [auth, setAuth] = useState(null);
  // if not logged in, ask to login
  if (auth === null) {
    return <Loading />
  }
  // if logged in, show canvas page
  if (auth) {
    return <Home />
  }
  // else ask user to sign in
  return <SignIn />
}

export default App;
