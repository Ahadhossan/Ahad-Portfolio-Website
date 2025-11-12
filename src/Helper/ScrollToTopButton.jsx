// components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Toggle visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <div className="fixed z-50 bottom-12 right-4 animate-pulse">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 text-white transition rounded-full shadow-lg bg-gray-950 hover:bg-gray-900 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
