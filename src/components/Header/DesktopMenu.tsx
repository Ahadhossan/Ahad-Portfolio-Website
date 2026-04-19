import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type IconType = React.ComponentType<{
  size?: number;
  className?: string;
}>;

type SubMenuLink = {
  label: string;
  href: string;
  icon?: string | IconType;
};

type MenuType = {
  name: string;
  path: string;
  gridCols?: 1 | 2 | 3 | 4;
  subMenu?: SubMenuLink[][];
};

type Props = {
  menu: MenuType;
};

export default function DesktopMenu({ menu }: Props) {
  const [isHover, setIsHover] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const location = useLocation();
  const { gridCols = 3, subMenu = [], name, path } = menu;

  const hasSubMenu = subMenu.length > 0;

  const gridColsMap: Record<1 | 2 | 3 | 4, string> = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  };

  const gridClass = `grid-cols-1 ${gridColsMap[gridCols]}`;

  const isTopActive = location.pathname === path;

  // Smooth hover handling
  const handleEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsHover(true);
  };

  const handleLeave = () => {
    const id = setTimeout(() => setIsHover(false), 150);
    setTimeoutId(id);
  };

  return (
    <li
      className="relative hidden md:list-item"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      tabIndex={0}
      aria-expanded={isHover}
      aria-haspopup={hasSubMenu}
      onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsHover((prev) => !prev);
        }
      }}
    >
      {/* Top Menu */}
      <Link
        to={path}
        className={`flex items-center gap-1 text-sm lg:text-base font-semibold px-3 py-2 rounded-xl 
        transition-all duration-200 relative tracking-wide
        ${
          isTopActive
            ? "bg-green-100 text-green-700"
            : "text-[#1E5470] hover:bg-white/80"
        }
        
        after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
        after:h-[2px] after:w-0 
        after:bg-[#1E5470]
        after:transition-all after:duration-300
        hover:after:w-3/4
        `}
      >
        {name}

        {hasSubMenu && (
          <ChevronDown
            className={`transition-transform duration-200 ${
              isHover ? "rotate-180" : ""
            }`}
            size={16}
          />
        )}
      </Link>

      {/* Submenu */}
      <AnimatePresence>
        {hasSubMenu && isHover && (
          <motion.div
            role="menu"
            aria-label="Submenu"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-3 
            bg-white/70 backdrop-blur-xl 
            border border-white/40 
            shadow-[0_10px_40px_rgba(0,0,0,0.1)] 
            rounded-2xl w-full max-w-[60vw] md:min-w-[400px] 
            p-4 z-40"
          >
            <div className={`grid gap-6 ${gridClass}`}>
              {subMenu.map((column, i) => (
                <ul key={i} className="space-y-2 text-[15px]">
                  {column.map((link, j) => {
                    const isSubActive = location.pathname === link.href;
                    const IconComponent = link.icon;

                    return (
                      <li key={j}>
                        <Link
                          to={link.href}
                          role="menuitem"
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg 
                          transition-all duration-200 group
                          ${
                            isSubActive
                              ? "bg-green-100 text-green-700"
                              : "text-[#1E5470] hover:bg-black/5 hover:text-[#031A09]"
                          }`}
                        >
                          {IconComponent &&
                            (typeof IconComponent === "string" ? (
                              <img
                                src={IconComponent}
                                alt={link.label}
                                className="w-5 h-5 object-contain"
                              />
                            ) : (
                              <IconComponent
                                size={16}
                                className="text-[#1E5470] group-hover:translate-x-1 transition-transform duration-200"
                              />
                            ))}

                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
