import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Header/Navbar";
import { Toaster } from "react-hot-toast";
import About from "./components/AboutComponents/About";
import { Skills } from "./Pages/Skills/Skills";
import Home from "./components/HomeComponents/Home";
import Footer from "./common/Footer/Footer";
import Contact from "./components/ContactComponents/contact";
import Experience from "./components/ExperienceComponents/Experience";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
