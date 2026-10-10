import React from "react";
import { motion } from "framer-motion";

interface FloatingHireMeButtonProps {
  onClick: () => void;
}

const FloatingHireMeButton = ({ onClick }: FloatingHireMeButtonProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Hire Me"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.94,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group
        fixed
        bottom-5
        right-5
        z-[900]

        flex
        h-[78px]
        w-[78px]
        items-center
        justify-center

        rounded-full
        border
        border-cyan-400/40
        bg-[#06101d]/95

        text-white

        shadow-[0_10px_45px_rgba(6,182,212,0.25)]

        backdrop-blur-xl

        sm:bottom-8
        sm:right-8
        sm:h-[86px]
        sm:w-[86px]
      "
    >
      {/* Rotating Ring */}
      <motion.span
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-1
          rounded-full
          border
          border-dashed
          border-cyan-400/40
        "
      />

      {/* Glow */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-400/5
          blur-xl
          transition-all
          duration-300
          group-hover:bg-cyan-400/20
        "
      />

      {/* Content */}
      <span
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <span
          className="
            text-[11px]
            font-bold
            tracking-wide
          "
        >
          Hire Me
        </span>
      </span>
    </motion.button>
  );
};

export default FloatingHireMeButton;
