import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        {/* <Route path="/home" element={<div>Home Page</div>} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
