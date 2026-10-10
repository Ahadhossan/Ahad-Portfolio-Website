// import React from "react";
// import DesktopMenu from "./DesktopMenu";
// import { Menus } from "../../Data/utils";
// import { Link } from "react-router-dom";
// import MobMenu from "./MobMenu";
// import ThemeToggle from "../../TestFile/ThemeToggle";

// const Navbar: React.FC = () => {
//   return (
//     <header className="h-16 text-[15px] fixed top-0 left-0 right-0 flex items-center bg-white/95 border-b border-gray-200 z-50 shadow-lg">
//       <nav className=" flex items-center justify-between w-full max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className="flex items-center gap-x-3">
//           <Link
//             to="/home"
//             className="flex items-center text-xl font-extrabold tracking-wide
//     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
//     bg-clip-text text-transparent
//     animate-gradient-x"
//           >
//             <img
//               src="/src/assets/Black_Modern_A_letter_Logo-removebg-preview.png"
//               alt="SoftTech Logo"
//               className="w-32 h-32 object-contain rounded-md mr-3"
//             />
//             {/* Ahad.Dev */}
//             {/* <video
//               src="/src/assets/doodle-motif-270-arrow-right-hover-pointing.mp4"
//               className="w-8 h-8 object-contain rounded-md mr-3"
//               autoPlay
//               loop
//               muted
//               playsInline
//             /> */}
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-x-4 items-center">
//           {Menus.map((menu, index) => (
//             <DesktopMenu menu={menu} key={index} />
//           ))}
//         </ul>

//         {/* Right Section */}
//         <div className="flex items-center gap-x-4">
//           {/* ✅ Contact Button */}
//           <ThemeToggle />

//           <button
//             className="group w-full sm:w-auto bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white flex items-center justify-center gap-2
//   px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3
//   text-sm sm:text-base font-semibold rounded-full shadow-lg
//   hover:scale-105 active:scale-95 transition-all duration-300"
//           >
//             <span
//               className="absolute inset-0 -translate-x-full group-hover:translate-x-full
//       bg-gradient-to-r from-transparent via-white/25 to-transparent
//       transition-transform duration-700 ease-out skew-x-12"
//             />
//             <a href="/contact">Contact</a>
//           </button>

//           {/* Mobile Menu */}
//           <div className="lg:hidden">
//             <MobMenu Menus={Menus} />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import DesktopMenu from "./DesktopMenu";
import { Menus } from "../../Data/utils";
import { Link } from "react-router-dom";
import MobMenu from "./MobMenu";
import ThemeToggle from "../ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <header
      className="
        fixed left-0 right-0 top-0 z-50
        flex h-16 items-center
        border-b border-gray-200
        bg-white/95 text-[15px]
        shadow-lg backdrop-blur-xl
        transition-colors duration-300
        dark:border-slate-700
        dark:bg-black
        dark:shadow-black/75
      "
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 sm:px-4">
        {/* Logo */}
        <div className="flex items-center gap-x-3">
          <Link
            to="/home"
            aria-label="Ahad.Dev home"
            className="
              flex items-center text-xl font-extrabold tracking-wide
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              bg-clip-text text-transparent
              animate-gradient-x
            "
          >
            <img
              src="/src/assets/Black_Modern_A_letter_Logo-removebg-preview.png"
              alt="SoftTech Logo"
              className="mr-2 h-16 w-24 object-contain sm:mr-3 sm:w-28"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-x-4 lg:flex">
          {Menus.map((menu, index) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex shrink-0 items-center gap-x-3 sm:gap-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Contact Button */}
          <Link
            to="/contact"
            className="
              group relative flex items-center justify-center
              overflow-hidden rounded-full
              bg-gradient-to-r from-[#1E5470] to-[#2a7fa3]
              px-4 py-2.5 text-sm font-semibold text-white
              shadow-lg transition-all duration-300
              hover:scale-105 hover:shadow-xl
              active:scale-95
              sm:px-6 sm:py-3 sm:text-base
            "
          >
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                -translate-x-full skew-x-12
                bg-gradient-to-r from-transparent
                via-white/25 to-transparent
                transition-transform duration-700 ease-out
                group-hover:translate-x-full
              "
            />
            <span className="relative z-10">Contact</span>
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
