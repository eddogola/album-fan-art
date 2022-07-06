import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/auth' element={ <SignIn /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
