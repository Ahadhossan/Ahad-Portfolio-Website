// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowDown, Download } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
// import heroBg from "../assets/hero.png";
// import { AnimatePresence } from "framer-motion";

// const Hero: React.FC = () => {
//   const [openPdf, setOpenPdf] = useState(false);

//   return (
//     <div
//       className="relative w-full min-h-[80dvh] flex items-center justify-center
//       text-white px-4 sm:px-6 lg:px-10 py-16
//       bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
//       {/* Floating blobs */}
//       <motion.div
//         className="absolute top-20 left-10 w-28 h-28 bg-[#2a7fa3]/30 rounded-full blur-3xl"
//         animate={{ y: [0, 40, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-10 w-36 h-36 bg-[#1E5470]/30 rounded-full blur-3xl"
//         animate={{ y: [0, -40, 0] }}
//         transition={{ duration: 7, repeat: Infinity }}
//       />
//       {/* CONTENT */}
//       <motion.div
//         className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//           Hello, I'm <span className="text-white">Ahad 👋</span>
//         </h1>

//         {/* Typing */}
//         <p className="mt-4 text-[1.35rem] sm:text-2xl md:text-3xl text-gray-200 font-medium">
//           I am a{" "}
//           <span className="text-[#2a7fa3] font-bold text-[1.25rem] sm:text-2xl md:text-3xl">
//             <Typewriter
//               words={[
//                 "Web Developer",
//                 "UI Designer",
//                 "Product Excellence Engineer",
//               ]}
//               loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={80}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </span>
//         </p>

//         {/* Description */}
//         <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-md">
//           I build modern, scalable and beautiful web applications with clean UI,
//           smooth UX, and performance-focused architectures.
//         </p>

//         {/* Buttons */}
//         <div className="mt-6 flex flex-col sm:flex-row gap-4">
//           {/* View Resume */}
//           <button
//             onClick={() => setOpenPdf(true)}
//             className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
//           >
//             View Resume
//           </button>

//           {/* Download Resume */}
//           <button
//             onClick={() => {
//               const link = document.createElement("a");
//               link.href = "/public/resume.pdf";
//               link.download = "Ahad Resume.pdf";
//               link.click();
//             }}
//             className="group flex items-center justify-center gap-2 px-6 py-3
//             rounded-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3]
//             font-semibold shadow-lg hover:scale-105 transition"
//           >
//             Download
//             <Download
//               size={16}
//               className="group-hover:translate-y-0.5 transition"
//             />
//           </button>
//         </div>
//       </motion.div>
//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center
//         text-gray-300 border border-white/20 rounded-full px-3 py-2
//         backdrop-blur-md bg-white/5"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, y: [0, 8, 0] }}
//         transition={{
//           opacity: { duration: 0.5 },
//           y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
//         }}
//       >
//         <ArrowDown className="w-4 h-4" />
//       </motion.div>

//       {/* ================= PDF MODAL ================= */}
//       <AnimatePresence>
//         {openPdf && (
//           <motion.div
//             className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setOpenPdf(false)}
//           >
//             <motion.div
//               className="relative w-full max-w-4xl h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
//               initial={{ scale: 0.8, y: 30 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.8, y: 30 }}
//               transition={{ duration: 0.3 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close button */}
//               {/* <button
//                 onClick={() => setOpenPdf(false)}
//                 className="absolute top-3 right-3 bg-black/80 text-white p-2 rounded-full hover:bg-black"
//               >
//                 <X size={18} />
//               </button> */}

//               {/* PDF */}
//               <iframe
//                 src="/public/resume.pdf"
//                 className="w-full h-full"
//                 title="Resume PDF"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Eye, X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import heroBg from "../assets/hero.png";

const Hero: React.FC = () => {
  const [openPdf, setOpenPdf] = useState(false);

  const scrollToNext = () => {
    const next = document.getElementById("next-section");
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full min-h-[100dvh] flex items-center justify-center
      text-white px-4 sm:px-6 lg:px-10 py-16
      bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-black/85" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-20 left-10 w-28 h-28 bg-[#2a7fa3]/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-36 h-36 bg-[#1E5470]/30 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#2a7fa3]/20 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full
          border border-white/15 bg-white/5 backdrop-blur-sm text-xs sm:text-sm text-gray-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2a7fa3] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2a7fa3]" />
          </span>
          Available for new opportunities
        </motion.span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ahad
          </span>{" "}
          👋
        </h1>

        {/* Typing */}
        <p className="mt-4 text-[1.35rem] sm:text-2xl md:text-3xl text-gray-200 font-medium">
          I am a{" "}
          <span className="text-[#2a7fa3] font-bold text-[1.25rem] sm:text-2xl md:text-3xl">
            <Typewriter
              words={[
                "Web Developer",
                "UI Designer",
                "Product Excellence Engineer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
          I build modern, scalable and beautiful web applications with clean UI,
          smooth UX, and performance-focused architectures.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* View Resume — outlined/secondary */}
          <motion.button
            onClick={() => setOpenPdf(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative flex items-center justify-center gap-2 px-6 py-3
    rounded-full border border-white/30 font-medium overflow-hidden
    hover:border-white/60 transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            <Eye
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="relative z-10">View Resume</span>
          </motion.button>

          {/* Download — primary, gradient with shimmer */}
          <motion.button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Ahad Resume.pdf";
              link.click();
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative flex items-center justify-center gap-2 px-6 py-3
    rounded-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3]
    font-semibold shadow-lg shadow-[#2a7fa3]/20 overflow-hidden
    hover:shadow-xl hover:shadow-[#2a7fa3]/40 transition-shadow duration-300"
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full
      bg-gradient-to-r from-transparent via-white/25 to-transparent
      transition-transform duration-700 ease-out skew-x-12"
            />
            <span className="relative z-10">Download</span>
            <Download
              size={16}
              className="relative z-10 transition-transform duration-300
      group-hover:translate-y-0.5 group-hover:scale-110"
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center
        text-gray-300 border border-white/20 rounded-full px-3 py-2
        backdrop-blur-md bg-white/5 cursor-pointer overflow-hidden
        hover:bg-white/10 hover:text-white hover:border-white/30
        transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Animated glow background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1E5470] via-[#2a7fa3] to-[#1E5470]"
          style={{ backgroundSize: "200% 200%" }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <ArrowDown className="relative z-10 w-4 h-4" />
      </motion.button>

      {/* ================= PDF MODAL ================= */}
      <AnimatePresence>
        {openPdf && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenPdf(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpenPdf(false)}
                aria-label="Close resume preview"
                className="absolute top-3 right-3 z-10 bg-black/80 text-white p-2 rounded-full
                hover:bg-black transition-colors duration-200"
              >
                <X size={18} />
              </button>

              {/* PDF */}
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume PDF"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
