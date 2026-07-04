import React, { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import { Menus } from "../../Data/utils";
import { Link } from "react-router-dom";
import HireModal from "../../common/HireModal";
import { AnimatePresence } from "framer-motion";
import MobMenu from "./MobMenu";

// ✅ Optional: define Menu type (recommended if not already typed)
type MenuType = {
  name: string;
  path: string;
  gridCols?: 1 | 2 | 3 | 4;
  subMenuHeading?: any[];
  subMenu?: any[][];
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-16 text-[15px] fixed top-0 left-0 right-0 flex items-center bg-white/95 border-b border-gray-200 z-50 shadow-lg">
      <nav className="px-16 flex items-center justify-between w-full max-w-9xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-x-3">
          <Link
            to="/home"
            className="flex items-center text-xl font-extrabold tracking-wide 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    bg-clip-text text-transparent 
    animate-gradient-x"
          >
            <img
              src="/src/assets/Black_Modern_A_letter_Logo-removebg-preview.png"
              alt="SoftTech Logo"
              className="w-32 h-32 object-contain rounded-md mr-3"
            />
            {/* Ahad.Dev */}
            {/* <video
              src="/src/assets/doodle-motif-270-arrow-right-hover-pointing.mp4"
              className="w-8 h-8 object-contain rounded-md mr-3"
              autoPlay
              loop
              muted
              playsInline
            /> */}
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-x-4 items-center">
          {Menus.map((menu: MenuType, index: number) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-x-4">
          {/* ✅ Hire Me Button */}
          <button
            onClick={() => setOpen(true)}
            className="group w-full sm:w-auto bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white flex items-center justify-center gap-2 
  px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3
  text-sm sm:text-base font-semibold rounded-full shadow-lg 
  hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Hire Me
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>

      {/* Animated Modal */}
      <AnimatePresence mode="wait">
        {open && <HireModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
