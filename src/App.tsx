import { useRef, type CSSProperties, type JSX } from "react";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Navbar from "./common/Header/Navbar";
import Footer from "./common/Footer/Footer";

import { LoaderLayout } from "./TestFile/PageLoader";

import Home from "./components/HomeComponents/Home";
import About from "./components/AboutComponents/About";
import Experience from "./components/ExperienceComponents/Experience";
import Skills from "./components/SkillsComponents/Skills";
import Contact from "./components/ContactComponents/contact";

import WorkWithMeButton from "./features/workwithme/WorkWithMeButton";
import HireMe from "./features/hireme/HireMe";
import WorkWithMe from "./features/workwithme/WorkWithMe";

import { useNavHeight } from "./hooks/useNavHeight";

import NotFound from "./TestFile/NotFound";
import UnderDevelopment from "./TestFile/UnderDevelopment";

/* ========================================
   MAIN LAYOUT
   Header + Footer + Floating Components
======================================== */

const MainLayout = (): JSX.Element => (
  <>
    <WorkWithMeButton />
    <Navbar />

    <Outlet />
    <HireMe />
    <Footer />
  </>
);

/* ========================================
   UNDER DEVELOPMENT LAYOUT
======================================== */

const UnderDevelopmentLayout = (): JSX.Element => (
  <>
    <Navbar />

    <Outlet />

    <Footer />
  </>
);

/* ========================================
   NOT FOUND LAYOUT
======================================== */

interface NavStyle extends CSSProperties {
  "--nav-h": string;
}

const NotFoundLayout = (): JSX.Element => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const nav = useNavHeight(navRef);

  const navStyle: NavStyle = {
    "--nav-h": `${nav.height}px`,
    paddingTop: nav.floating ? nav.height : 0,
  };

  return (
    <div style={navStyle}>
      <div ref={navRef}>
        <Navbar />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

/* ========================================
   APP
======================================== */

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        {/* Redirect /home to the homepage */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* =================================
            NORMAL PAGES
            Header + Footer Enabled
        ================================= */}

        <Route element={<LoaderLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workwithme" element={<WorkWithMe />} />
          </Route>
        </Route>

        {/* =================================
            UNDER DEVELOPMENT PAGES
        ================================= */}

        <Route element={<UnderDevelopmentLayout />}>
          <Route path="/projects" element={<UnderDevelopment />} />
          <Route path="/articles" element={<UnderDevelopment />} />
        </Route>

        {/* =================================
            404 NOT FOUND
        ================================= */}

        <Route element={<NotFoundLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
