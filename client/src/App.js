import React from 'react'
import Navbar from './components/common/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import Events from './pages/Events';
import Footer from './components/common/Footer';
import './App.css';
import "./css/tabs/tab_group1.css";
import "./css/tabs/tab_group2.css";



function App() 
{
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/Sponsors' element={<Sponsors/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/Team' element={<Team/>}/>
      </Routes>
      <Footer/>
      </Router>
      

    
  );
}

export default App;
