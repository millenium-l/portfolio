import "./App.scss";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import About from "./containers/about";
import Contact from "./containers/contact";
import Home from "./containers/home";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
