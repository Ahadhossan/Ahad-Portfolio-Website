import { jsx as _jsx } from "react/jsx-runtime";
import StaggeredMenu from "./StaggeredMenu";
const Navbar = () => {
    const menuItems = [
        { label: "Home", ariaLabel: "Go to home page", link: "/" },
        { label: "About", ariaLabel: "Learn about us", link: "/about" },
        { label: "Services", ariaLabel: "View our services", link: "/services" },
        { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
    ];
    const socialItems = [
        { label: "Twitter", link: "https://twitter.com" },
        { label: "GitHub", link: "https://github.com" },
        { label: "LinkedIn", link: "https://linkedin.com" },
    ];
    return (_jsx("div", { className: "fixed top-0 left-0 w-full z-50", children: _jsx(StaggeredMenu, { position: "right", items: menuItems, socialItems: socialItems, displaySocials: true, displayItemNumbering: true, menuButtonColor: "black", openMenuButtonColor: "black", changeMenuColorOnOpen: true, colors: ["", ""], logoUrl: "/path-to-your-logo.svg", accentColor: "", isFixed: true, onMenuOpen: () => console.log("Menu opened"), onMenuClose: () => console.log("Menu closed") }) }));
};
export default Navbar;
