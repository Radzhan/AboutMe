import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={(
          <Home />
        )} />
        <Route path='/about-us' element={(<p>About ussdsdsds</p>)} />
        <Route path='/contacts' element={(<p>contacts</p>)} />
      </Routes>
    </div>
  );
}

export default App;
