// import { Route, Routes } from "react-router-dom";
// import Navbar from "./common/Header/Navbar";
// import { Toaster } from "react-hot-toast";
// import About from "./components/AboutComponents/About";
// import Home from "./components/HomeComponents/Home";
// import Footer from "./common/Footer/Footer";
// import Contact from "./components/ContactComponents/contact";
// import Experience from "./components/ExperienceComponents/Experience";
// import WorkWithMeButton from "./features/workwithme/WorkWithMeButton";
// import HireMe from "./features/hireme/HireMe";
// import WorkWithMe from "./features/workwithme/WorkWithMe";
// import Skills from "./components/SkillsComponents/Skills";
// // import LetsTalk from "./Sections/LetsTalk";

// function App() {
//   return (
//     <div>
//       {/* Shows on every page */}
//       <WorkWithMeButton />
//       <Toaster position="top-right" reverseOrder={false} />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* Other */}
//         <Route path="/workwithme" element={<WorkWithMe />} />
//       </Routes>
//       {/* <LetsTalk /> */}
//       <HireMe />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Layout common
import Navbar from "./common/Header/Navbar";
import Footer from "./common/Footer/Footer";

// Page components
import Home from "./components/HomeComponents/Home";
import About from "./components/AboutComponents/About";
import Experience from "./components/ExperienceComponents/Experience";
import Skills from "./components/SkillsComponents/Skills";
import Contact from "./components/ContactComponents/contact";

// Feature Components
import WorkWithMeButton from "./features/workwithme/WorkWithMeButton";
import HireMe from "./features/hireme/HireMe";
import WorkWithMe from "./features/workwithme/WorkWithMe";

function App() {
  return (
    <div>
      {/* Floating button visible across the application */}
      <WorkWithMeButton />

      {/* Global toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Global navigation */}
      <Navbar />

      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workwithme" element={<WorkWithMe />} />
      </Routes>

      {/* Global hire modal */}
      <HireMe />

      {/* Global footer */}
      <Footer />
    </div>
  );
}

export default App;
