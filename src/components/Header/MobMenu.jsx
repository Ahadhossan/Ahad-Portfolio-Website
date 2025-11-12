/** @format */

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const MobMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 h-full p-6 pb-20 overflow-y-auto text-black top-16 bg-white/70 backdrop-blur dark:bg-black/70 dark:text-white"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, path }, i) => {
            const isClicked = clicked === i;
            return (
              <li key={name} className="">
                <span
                  className="relative p-4 font-bold rounded-md cursor-pointer flex-center-between hover:bg-black/5 hover:text-black dark:hover:text-white dark:hover:bg-white/5"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  <a
                    href={path}
                    className="hover:text-[#09D1C7] dark:hover:text-[#09D1C7]"
                  >
                    {name}
                  </a>
                </span>
              </li>
            );
          })}
        </ul>

        {/* Contact */}
        <div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-[#15919B] to-[#2CC295] hover:opacity-95 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#15919B]/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default MobMenu;
