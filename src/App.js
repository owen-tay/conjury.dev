import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound"
import Navbar from "./components/navbar";

function App() {
  
  
  return (
    <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </div>
  );
}




export default App;
