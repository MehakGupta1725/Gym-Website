import React from 'react';
import Login from './Login';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Login />}></Route>
<Route path='/signup' element={<Signup />}></Route>
<Route path='/home' element={<Home />}></Route>
</Routes>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
