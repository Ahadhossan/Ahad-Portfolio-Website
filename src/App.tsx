// import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
// import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import Navbar from "./common/Header/Navbar";
// import Footer from "./common/Footer/Footer";
// import { LoaderLayout } from "./TestFile/PageLoader";

// import Home from "./components/HomeComponents/Home";
// import About from "./components/AboutComponents/About";
// import Experience from "./components/ExperienceComponents/Experience";
// import Skills from "./components/SkillsComponents/Skills";
// import Contact from "./components/ContactComponents/contact";

// import WorkWithMeButton from "./features/workwithme/WorkWithMeButton";
// import HireMe from "./features/hireme/HireMe";
// import WorkWithMe from "./features/workwithme/WorkWithMe";
// import NotFound from "./TestFile/NotFound";
// import UnderDevelopment from "./TestFile/UnderDevelopment";

// const MainLayout = () => (
//   <>
//     <WorkWithMeButton />
//     <Navbar />
//     <Outlet />
//     <HireMe />
//     <Footer />
//   </>
// );

// const FALLBACK_NAV_HEIGHT = 80;

// const NotFoundLayout = () => {
//   const navRef = useRef<HTMLDivElement | null>(null);

//   const [nav, setNav] = useState({
//     height: FALLBACK_NAV_HEIGHT,
//     floating: false,
//   });

//   useLayoutEffect(() => {
//     const wrapper = navRef.current;
//     if (!wrapper) return;

//     const measure = () => {
//       if (wrapper.offsetHeight > 0) {
//         setNav({
//           height: Math.round(wrapper.offsetHeight),
//           floating: false,
//         });
//         return;
//       }

//       let bar = 0;

//       Array.from(wrapper.children).forEach((element) => {
//         const position = getComputedStyle(element).position;
//         const rect = element.getBoundingClientRect();

//         const looksLikeBar =
//           (position === "fixed" || position === "absolute") &&
//           rect.height > 0 &&
//           rect.height < window.innerHeight * 0.4;

//         if (looksLikeBar) {
//           bar = Math.max(bar, rect.bottom);
//         }
//       });

//       setNav({
//         height: Math.round(bar) || FALLBACK_NAV_HEIGHT,
//         floating: true,
//       });
//     };

//     measure();

//     const timeout = window.setTimeout(measure, 300);
//     window.addEventListener("resize", measure);

//     return () => {
//       window.clearTimeout(timeout);
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   return (
//     <div
//       style={
//         {
//           "--nav-h": `${nav.height}px`,
//           paddingTop: nav.floating ? nav.height : 0,
//         } as CSSProperties
//       }
//     >
//       <div ref={navRef}>
//         <Navbar />
//       </div>

//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />

//       <Routes>
//         <Route path="/home" element={<Navigate to="/" replace />} />

//         <Route element={<LoaderLayout />}>
//           <Route element={<MainLayout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/workwithme" element={<WorkWithMe />} />
//             <Route path="/under-development" element={<UnderDevelopment />} />
//           </Route>
//         </Route>

//         {/* Unknown routes display the 404 page */}
//         <Route element={<NotFoundLayout />}>
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

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

import NotFound from "./TestFile/NotFound";
import UnderDevelopment from "./TestFile/UnderDevelopment";

/* ========================================
   MAIN LAYOUT
   Header + Footer + Floating Components
======================================== */

const MainLayout = () => (
  <>
    <Navbar />

    <Outlet />

    <Footer />
  </>
);

/* ========================================
   UNDER DEVELOPMENT LAYOUT
======================================== */

const UnderDevelopmentLayout = () => (
  <>
    <Navbar />

    <Outlet />

    <Footer />
  </>
);

/* ========================================
   NOT FOUND LAYOUT
======================================== */

const FALLBACK_NAV_HEIGHT = 80;

const NotFoundLayout = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const [nav, setNav] = useState({
    height: FALLBACK_NAV_HEIGHT,
    floating: false,
  });

  useLayoutEffect(() => {
    const wrapper = navRef.current;

    if (!wrapper) return;

    const measure = () => {
      if (wrapper.offsetHeight > 0) {
        setNav({
          height: Math.round(wrapper.offsetHeight),
          floating: false,
        });

        return;
      }

      let bar = 0;

      Array.from(wrapper.children).forEach((element) => {
        const position = getComputedStyle(element).position;

        const rect = element.getBoundingClientRect();

        const looksLikeBar =
          (position === "fixed" || position === "absolute") &&
          rect.height > 0 &&
          rect.height < window.innerHeight * 0.4;

        if (looksLikeBar) {
          bar = Math.max(bar, rect.bottom);
        }
      });

      setNav({
        height: Math.round(bar) || FALLBACK_NAV_HEIGHT,
        floating: true,
      });
    };

    measure();

    const timeout = window.setTimeout(measure, 300);

    window.addEventListener("resize", measure);

    return () => {
      window.clearTimeout(timeout);

      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      style={
        {
          "--nav-h": `${nav.height}px`,
          paddingTop: nav.floating ? nav.height : 0,
        } as CSSProperties
      }
    >
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
