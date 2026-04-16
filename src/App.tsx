import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/home" element={<div>Home Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
