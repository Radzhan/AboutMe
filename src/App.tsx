import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import Contacts from './containers/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={(
          <Home />
        )} />
        <Route path='/about-us' element={(<AboutUs/>)} />
        <Route path='/contacts' element={(<Contacts/>)} />
      </Routes>
    </div>
  );
}

export default App;
