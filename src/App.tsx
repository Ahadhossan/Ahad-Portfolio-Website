import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Skills } from "./Skills/Skills";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
