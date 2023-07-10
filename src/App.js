import React, { useState, useEffect } from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/services";
import Navbar from "./components/navbar";

export const DarkModeContext = React.createContext();


//this stops the page router opening up half way down the page, which happens for some reason.
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}



function App() {

  

  return (
    <div>
    
      
        <Router>
          <Navbar />
          <ScrollToTop />
          <div className="mt-16"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
    </div>
  );

};

export default App;
