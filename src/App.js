import React, { useState, useEffect } from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/services";
import Navbar from "./components/navbar";

export const DarkModeContext = React.createContext();

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateVideoSource = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <DarkModeContext.Provider
        value={{ isDarkMode, setIsDarkMode, updateVideoSource }}
      >
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
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
