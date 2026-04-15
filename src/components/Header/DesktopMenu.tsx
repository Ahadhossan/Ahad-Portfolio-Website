import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type IconType = React.ComponentType<{
  size?: number;
  className?: string;
}>;

type SubMenuLink = {
  label: string;
  href: string;
  icon?: string | IconType;
};

type SubMenuHeading = {
  title: string;
  icon?: IconType;
};

type MenuType = {
  name: string;
  path: string;
  gridCols?: 1 | 2 | 3 | 4;
  subMenuHeading?: SubMenuHeading[];
  subMenu?: SubMenuLink[][];
};

type Props = {
  menu: MenuType;
};

export default function DesktopMenu({ menu }: Props) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const location = useLocation();

  const { gridCols = 3, subMenuHeading = [], subMenu = [], name, path } = menu;

  const hasSubMenu = subMenu.length > 0;

  const gridColsMap: Record<1 | 2 | 3 | 4, string> = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  };

  const gridClass = `grid-cols-1 ${gridColsMap[gridCols] || "sm:grid-cols-3"}`;

  const isTopActive = location.pathname === path;

  return (
    <li
      className="relative hidden md:list-item"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
        className={`flex items-center gap-1 text-sm lg:text-base font-semibold px-3 py-2 rounded-xl transition-all duration-200 ${
          isTopActive
            ? "bg-green-100 text-green-700"
            : "text-[#1E5470] hover:bg-white/80"
        }`}
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
      {hasSubMenu && (
        <div
          role="menu"
          aria-label="Submenu"
          className={`absolute mt-3 backdrop-blur-xl bg-white/60 border border-white/30 shadow-2xl rounded-2xl w-full max-w-[100vw] md:min-w-[600px] p-6 z-40 origin-top transition-all duration-200 ${
            isHover
              ? "opacity-100 scale-100 translate-y-0 visible"
              : "opacity-0 scale-95 translate-y-2 invisible"
          }`}
        >
          <div className={`grid gap-6 ${gridClass}`}>
            {subMenuHeading.map(({ title, icon: Icon }, i) => (
              <div key={i}>
                <p className="text-[17px] font-semibold mb-3 flex items-center gap-2 text-green-700">
                  {Icon && <Icon size={18} />}
                  {title}
                </p>

                <ul className="space-y-2 text-[15px]">
                  {subMenu[i]?.map((link, j) => {
                    const isSubActive = location.pathname === link.href;

                    const IconComponent = link.icon;

                    return (
                      <li key={j}>
                        <Link
                          to={link.href}
                          role="menuitem"
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
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
                                className="text-[#1E5470]"
                              />
                            ))}

                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}
