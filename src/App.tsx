// // import { Route, Routes } from "react-router-dom";
// // import { Toaster } from "react-hot-toast";

// // // Layout common
// // import Navbar from "./common/Header/Navbar";
// // import Footer from "./common/Footer/Footer";

// // // Page components
// // import Home from "./components/HomeComponents/Home";
// // import About from "./components/AboutComponents/About";
// // import Experience from "./components/ExperienceComponents/Experience";
// // import Skills from "./components/SkillsComponents/Skills";
// // import Contact from "./components/ContactComponents/contact";

// // // Feature Components
// // import WorkWithMeButton from "./features/workwithme/WorkWithMeButton";
// // import HireMe from "./features/hireme/HireMe";
// // import WorkWithMe from "./features/workwithme/WorkWithMe";
// // import NotFound from "./TestFile/NotFound";

// // function App() {
// //   return (
// //     <div>
// //       {/* Floating button visible across the application */}
// //       <WorkWithMeButton />

// //       {/* Global toast notifications */}
// //       <Toaster position="top-right" reverseOrder={false} />

// //       {/* Global navigation */}
// //       <Navbar />

// //       {/* Application routes */}
// //       <Routes>
// //         <Route path="*" element={<NotFound />} />
// //         <Route path="/" element={<Home />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/experience" element={<Experience />} />
// //         <Route path="/skills" element={<Skills />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/workwithme" element={<WorkWithMe />} />
// //       </Routes>

// //       {/* Global hire modal */}
// //       <HireMe />

// //       {/* Global footer */}
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;

// import { useLayoutEffect, useRef, useState } from "react";
// import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// // Layout common
// import Navbar from "./common/Header/Navbar";
// import Footer from "./common/Footer/Footer";
// import { LoaderLayout } from "./TestFile/PageLoader";

// // Page components
// import Home from "./components/HomeComponents/Home";
// import About from "./components/AboutComponents/About";
// import Experience from "./components/ExperienceComponents/Experience";
// import Skills from "./components/SkillsComponents/Skills";
// import Contact from "./components/ContactComponents/contact";

// // Feature components
// import WorkWithMeButton from "./features/workwithme/WorkWithMeButton";
// import HireMe from "./features/hireme/HireMe";
// import WorkWithMe from "./features/workwithme/WorkWithMe";
// import NotFound from "./TestFile/NotFound";

// /**
//  * Shared shell for every normal page:
//  * navbar, floating button, hire modal and footer.
//  */
// const MainLayout = () => (
//   <>
//     <WorkWithMeButton />
//     <Navbar />
//     <Outlet />
//     <HireMe />
//     <Footer />
//   </>
// );

// /**
//  * NotFound shell: Navbar + Footer (no floating button, no hire modal).
//  *
//  * The Navbar height and position are measured automatically:
//  *  - Navbar in normal flow (static/sticky): it simply pushes the page down.
//  *  - Navbar floating (fixed/absolute): the page gets padding-top equal to
//  *    the Navbar height, so it never hides underneath it.
//  * The page gets `--nav-h` so NotFound can fill exactly the remaining height.
//  */
// const FALLBACK_NAV_HEIGHT = 80; // only used for the first paint, before measuring

// const NotFoundLayout = () => {
//   const navRef = useRef(null);
//   const [nav, setNav] = useState({
//     height: FALLBACK_NAV_HEIGHT,
//     floating: false,
//   });

//   useLayoutEffect(() => {
//     const wrapper = navRef.current;
//     if (!wrapper) return;

//     const measure = () => {
//       // Navbar takes space in the layout (static / sticky)
//       if (wrapper.offsetHeight > 0) {
//         setNav({ height: Math.round(wrapper.offsetHeight), floating: false });
//         return;
//       }

//       // Wrapper has no height -> Navbar is floating (fixed / absolute)
//       let bar = 0;
//       Array.from(wrapper.children).forEach((el) => {
//         const pos = getComputedStyle(el).position;
//         const r = el.getBoundingClientRect();
//         const looksLikeBar =
//           (pos === "fixed" || pos === "absolute") &&
//           r.height > 0 &&
//           r.height < window.innerHeight * 0.4; // ignore full-screen mobile menus
//         if (looksLikeBar) bar = Math.max(bar, r.bottom);
//       });
//       setNav({
//         height: Math.round(bar) || FALLBACK_NAV_HEIGHT,
//         floating: true,
//       });
//     };

//     measure();
//     const t = setTimeout(measure, 300); // fonts / images may change the height
//     window.addEventListener("resize", measure);
//     return () => {
//       clearTimeout(t);
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         "--nav-h": `${nav.height}px`,
//         paddingTop: nav.floating ? nav.height : 0,
//       }}
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
//       {/* Global toast notifications */}
//       <Toaster position="top-right" reverseOrder={false} />

//       <Routes>
//         {/* Redirect BEFORE the loader, otherwise /home would load twice */}
//         <Route path="/home" element={<Navigate to="/" replace />} />

//         {/* Normal pages: terminal loader -> Navbar + page + Footer */}
//         <Route element={<LoaderLayout />}>
//           <Route element={<MainLayout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/workwithme" element={<WorkWithMe />} />
//           </Route>
//         </Route>

//         {/* NotFound + coming-soon pages: Navbar + Footer stay */}
//         <Route element={<NotFoundLayout />}>
//           {/* Pages that are not ready yet (optional), example: */}
//           <Route
//             path="*"
//             element={
//               <NotFound mode="coming-soon" title="Case Studies" progress={40} />
//             }
//           />

//           {/* Any unknown URL */}
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

const MainLayout = () => (
  <>
    <WorkWithMeButton />
    <Navbar />
    <Outlet />
    <HireMe />
    <Footer />
  </>
);

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

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />

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

        {/* Coming Soon and 404 are handled inside NotFound.tsx */}
        <Route element={<NotFoundLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
