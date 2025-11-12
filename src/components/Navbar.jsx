/** @format */

import { Github } from "lucide-react";
import { Menus } from "../Data/utils";
import DesktopMenu from "./Header/DesktopMenu";
import MobMenu from "./Header/MobMenu";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="h-20 text-[15px] fixed inset-0 flex-center  shadow-md shadow-gray-300 dark:shadow-gray-500 bg-[#FAFAFA] dark:bg-[#101115] z-50">
      <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
        <div className="flex-center gap-x-3 z-[999] relative">
          {/* <a href="/home">
            <img
              src="/src/assets/Aha Dev.png"
              alt=""
              className="w-12 h-12 rounded-full flex-center bg-white dark:bg-[#101115] border border-gray-300 dark:border-gray-500 hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </a> */}
          <a
            href="/home"
            className="text-[20px] sm:text-[22px] md:text-[25px] lg:text-[27px] text-black dark:text-white hover:text-[#09D1C7] dark:hover:text-[#09D1C7]"
          >
            Ahad.Dev
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden text-black gap-x-1 lg:flex-center dark:text-white">
          {Menus.map((menu, index) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        <div className="flex items-center gap-x-5">
          {/* Mobile Menu */}
          <div className="lg:hidden text-black dark:text-white">
            <MobMenu Menus={Menus} />
          </div>

          {/* github */}
          <a
            href="https://github.com/Ahadhossan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <Github
              className="w-6 h-6 text-black dark:text-white hover:text-[#09D1C7] dark:hover:text-[#09D1C7] transition-colors duration-300"
              aria-hidden="true"
            />
          </a>

          {/* Theme switch */}
          <div>
            <ThemeSwitcher />
          </div>
          {/* Contact */}
          <div className="hidden lg:inline-block">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-[#15919B] to-[#2CC295] hover:opacity-95 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#15919B]/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
