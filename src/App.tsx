import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<div>Home Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
