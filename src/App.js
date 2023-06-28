import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Contact";
import PageNotFound from "./components/PageNotFound"
import Navbar from "./components/navbar";

function App() {
  
  
  return (
    <div>
    <Router>
    <Navbar />
    <div className="mt-16"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </div>
  );
}




export default App;
