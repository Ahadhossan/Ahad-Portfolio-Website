import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Header/Navbar";
import { Toaster } from "react-hot-toast";
import About from "./components/AboutComponents/About";
import Home from "./components/HomeComponents/Home";
import Footer from "./common/Footer/Footer";
import Contact from "./components/ContactComponents/contact";
import Experience from "./components/ExperienceComponents/Experience";
import WorkWithMeButton from "./features/work-with-me/WorkWithMeButton";
import HireMe from "./features/hire-me/HireMe";
import WorkWithMe from "./features/work-with-me/WorkWithMe";
import Skills from "./components/SkillsComponents/Skills";
// import LetsTalk from "./Sections/LetsTalk";

function App() {
  return (
    <div>
      {/* Shows on every page */}
      <WorkWithMeButton />
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

        {/* Other */}
        <Route path="/workwithme" element={<WorkWithMe />} />
      </Routes>
      {/* <LetsTalk /> */}
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
