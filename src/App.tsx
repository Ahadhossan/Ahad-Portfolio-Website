import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Toaster } from "react-hot-toast";
import About from "./Pages/About/About";
import { Skills } from "./Skills/Skills";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/contact";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
