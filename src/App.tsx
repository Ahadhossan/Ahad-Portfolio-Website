import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
