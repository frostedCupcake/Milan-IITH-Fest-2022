import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Events from "./components/Events";
import "./css/tabs/tab_group1.css";
import "./css/tabs/tab_group2.css";
import "./css/tabs/race.css";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
