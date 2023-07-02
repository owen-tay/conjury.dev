import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./ThemeContext";

export const DarkModeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateVideoSource = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode, updateVideoSource }}>
        <Router>
          <Navbar />
          <div className="mt-16"></div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
