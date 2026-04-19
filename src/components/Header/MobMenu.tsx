// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, Menu } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// type IconType = React.ComponentType<{
//   size?: number;
//   className?: string;
// }>;

// type SubMenuItem = {
//   href: string;
//   label: string;
//   icon?: string | IconType;
// };

// type MenuType = {
//   name: string;
//   path: string;
//   subMenu?: SubMenuItem[][];
// };

// export default function MobMenu({ Menus }: { Menus: MenuType[] }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const location = useLocation();

//   const toggleDrawer = () => {
//     setIsOpen((prev) => !prev);
//     setActiveIndex(null);
//   };

//   const toggleSubMenu = (index: number) => {
//     setActiveIndex((prev) => (prev === index ? null : index));
//   };

//   const subMenuVariants = {
//     enter: {
//       height: "auto",
//       opacity: 1,
//       transition: { duration: 0.25 },
//     },
//     exit: {
//       height: 0,
//       opacity: 0,
//       transition: { duration: 0.2 },
//     },
//   };

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         className="lg:hidden z-[1000] relative text-[#1E5470]"
//         onClick={toggleDrawer}
//       >
//         <Menu size={26} />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 bg-black/40 z-[998]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={toggleDrawer}
//             />

//             {/* Drawer */}
//             <motion.div
//               className="fixed top-16 left-0 right-0 bottom-0 z-[999]
//               bg-white shadow-2xl p-5 overflow-y-auto rounded-t-2xl"
//               initial={{ y: "-100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-100%" }}
//               // 🔥 Bounce effect
//               transition={{
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 22,
//                 mass: 0.8,
//               }}
//               // 📱 Swipe down to close
//               drag="y"
//               dragDirectionLock
//               dragConstraints={{ top: 0, bottom: 0 }}
//               dragElastic={0.25}
//               onDragEnd={(event, info) => {
//                 if (info.offset.y > 120 || info.velocity.y > 500) {
//                   setIsOpen(false);
//                 }
//               }}
//             >
//               {/* Grab handle */}
//               <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

//               <ul className="space-y-2">
//                 {Menus.map((menu, index) => {
//                   const hasSubMenu = !!menu.subMenu?.length;

//                   const isTopActive =
//                     location.pathname === menu.path ||
//                     (hasSubMenu &&
//                       menu
//                         .subMenu!.flat()
//                         .some((item) => item.href === location.pathname));

//                   const isActive = activeIndex === index;

//                   return (
//                     <li key={menu.name}>
//                       {/* Top Menu */}
//                       <div
//                         className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer transition
//                         ${
//                           isTopActive
//                             ? "bg-green-100 text-green-700"
//                             : "hover:bg-gray-100"
//                         }`}
//                         onClick={() =>
//                           hasSubMenu ? toggleSubMenu(index) : setIsOpen(false)
//                         }
//                       >
//                         <Link
//                           to={menu.path || "#"}
//                           className="text-[16px] font-semibold flex-1"
//                         >
//                           {menu.name}
//                         </Link>

//                         {hasSubMenu && (
//                           <ChevronDown
//                             size={18}
//                             className={`transition-transform duration-300 ${
//                               isActive ? "rotate-180" : ""
//                             }`}
//                           />
//                         )}
//                       </div>

//                       {/* Submenu */}
//                       {hasSubMenu && (
//                         <AnimatePresence initial={false}>
//                           {isActive && (
//                             <motion.ul
//                               variants={subMenuVariants}
//                               initial="exit"
//                               animate="enter"
//                               exit="exit"
//                               className="ml-3 mt-2 space-y-2 overflow-hidden"
//                             >
//                               {menu.subMenu!.map((col, colIndex) => (
//                                 <ul
//                                   key={colIndex}
//                                   className="space-y-1 border-l pl-3"
//                                 >
//                                   {col.map((item, i) => {
//                                     const isSubActive =
//                                       location.pathname === item.href;

//                                     return (
//                                       <li key={i}>
//                                         <Link
//                                           to={item.href}
//                                           onClick={() => setIsOpen(false)}
//                                           className={`flex items-center gap-2 px-2 py-2 text-sm rounded transition
//                                           ${
//                                             isSubActive
//                                               ? "bg-green-100 text-green-700"
//                                               : "hover:bg-gray-100 text-[#1E5470]"
//                                           }`}
//                                         >
//                                           {item.icon &&
//                                             (typeof item.icon === "string" ? (
//                                               <img
//                                                 src={item.icon}
//                                                 alt={item.label}
//                                                 className="w-4 h-4"
//                                               />
//                                             ) : (
//                                               <item.icon size={14} />
//                                             ))}

//                                           {item.label}
//                                         </Link>
//                                       </li>
//                                     );
//                                   })}
//                                 </ul>
//                               ))}
//                             </motion.ul>
//                           )}
//                         </AnimatePresence>
//                       )}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  easeIn,
  easeOut,
  type Variants,
} from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type IconType = React.ComponentType<{
  size?: number;
  className?: string;
}>;

type SubMenuItem = {
  href: string;
  label: string;
  icon?: string | IconType;
};

type MenuType = {
  name: string;
  path: string;
  subMenu?: SubMenuItem[][];
};

export default function MobMenu({ Menus }: { Menus: MenuType[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
    setActiveIndex(null);
  };

  const toggleSubMenu = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // ✨ Smooth dropdown animation (UP → DOWN)
  const dropdownVariants: Variants = {
    initial: {
      opacity: 0,
      y: -10,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.2,
      },
    },
  };

  const subMenuVariants = {
    enter: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.25, ease: easeOut },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: easeIn },
    },
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="lg:hidden z-[1000] relative text-[#1E5470]"
        onClick={toggleDrawer}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 z-[999]
            bg-white shadow-2xl p-5 overflow-y-auto rounded-b-2xl"
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Small top divider */}
            {/* <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" /> */}

            <ul className="space-y-2">
              {Menus.map((menu, index) => {
                const hasSubMenu = !!menu.subMenu?.length;

                const isTopActive =
                  location.pathname === menu.path ||
                  (hasSubMenu &&
                    menu
                      .subMenu!.flat()
                      .some((item) => item.href === location.pathname));

                const isActive = activeIndex === index;

                return (
                  <li key={menu.name}>
                    {/* Top Menu */}
                    <div
                      className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer transition
                      ${
                        isTopActive
                          ? "bg-green-100 text-green-700"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() =>
                        hasSubMenu ? toggleSubMenu(index) : setIsOpen(false)
                      }
                    >
                      <Link
                        to={menu.path || "#"}
                        className="text-[16px] font-semibold flex-1"
                      >
                        {menu.name}
                      </Link>

                      {hasSubMenu && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>

                    {/* Submenu */}
                    {hasSubMenu && (
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.ul
                            variants={subMenuVariants}
                            initial="exit"
                            animate="enter"
                            exit="exit"
                            className="ml-3 mt-2 space-y-2 overflow-hidden"
                          >
                            {menu.subMenu!.map((col, colIndex) => (
                              <ul
                                key={colIndex}
                                className="space-y-1 border-l pl-3"
                              >
                                {col.map((item, i) => {
                                  const isSubActive =
                                    location.pathname === item.href;

                                  return (
                                    <li key={i}>
                                      <Link
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-2 px-2 py-2 text-sm rounded transition
                                        ${
                                          isSubActive
                                            ? "bg-green-100 text-green-700"
                                            : "hover:bg-gray-100 text-[#1E5470]"
                                        }`}
                                      >
                                        {item.icon &&
                                          (typeof item.icon === "string" ? (
                                            <img
                                              src={item.icon}
                                              alt={item.label}
                                              className="w-4 h-4"
                                            />
                                          ) : (
                                            <item.icon size={14} />
                                          ))}

                                        {item.label}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
