import React from "react";
import StaggeredMenu from "./StaggeredMenu";

type MenuItem = {
  label: string;
  ariaLabel: string;
  link: string;
};

type SocialItem = {
  label: string;
  link: string;
};

const Navbar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems: SocialItem[] = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="black"
        openMenuButtonColor="black"
        changeMenuColorOnOpen={true}
        colors={["", ""]}
        logoUrl="/path-to-your-logo.svg"
        accentColor=""
        isFixed={true} // ✅ REQUIRED FIX
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </div>
  );
};

export default Navbar;
