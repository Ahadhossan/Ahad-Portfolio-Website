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
            {/* <img
              src="https://i.ibb.co/xSnVq4zQ/softtechlogo.png"
              alt="SoftTech Logo"
              className="w-8 h-8 object-contain rounded-md mr-3"
            /> */}
            Ahad.Dev
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
          {/* hire Button */}
          {/* <Link
            to="/Hire Me"
            className="bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white hover:scale-105 flex items-center gap-2 px-7 py-3 font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Hire Me
          </Link> */}
          {/* <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=your@email.com&su=Hire%20Request&body=Hi%20Ahad"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white flex items-center gap-2 px-7 py-3 font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Hire Me
            <span className="group-hover:translate-x-1 transition">→</span>
          </a> */}

          {/* ✅ Hire Me Button */}
          <button
            onClick={() => setOpen(true)}
            className="group bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white flex items-center gap-2 px-7 py-3 font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Hire Me
            <span className="group-hover:translate-x-1 transition">→</span>
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
