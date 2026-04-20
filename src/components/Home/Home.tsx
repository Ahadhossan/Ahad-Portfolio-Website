import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import heroBg from "../../assets/hero.png";
import { AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const [openPdf, setOpenPdf] = useState(false);

  return (
    <div
      className="relative w-full min-h-[80dvh] flex items-center justify-center
      text-white px-4 sm:px-6 lg:px-10 py-16
      bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
      {/* Floating blobs */}
      <motion.div
        className="absolute top-20 left-10 w-28 h-28 bg-[#2a7fa3]/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-36 h-36 bg-[#1E5470]/30 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hello, I'm <span className="text-white">Ahad 👋</span>
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
        <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-md">
          I build modern, scalable and beautiful web applications with clean UI,
          smooth UX, and performance-focused architecture.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {/* View Resume */}
          <button
            onClick={() => setOpenPdf(true)}
            className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            View Resume
          </button>

          {/* Download Resume */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Ahad-Resume.pdf";
              link.click();
            }}
            className="group flex items-center justify-center gap-2 px-6 py-3 
            rounded-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3]
            font-semibold shadow-lg hover:scale-105 transition"
          >
            Download
            <Download
              size={16}
              className="group-hover:translate-y-0.5 transition"
            />
          </button>
        </div>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center
  text-gray-300 border border-white/20 rounded-full px-3 py-2
  backdrop-blur-md bg-white/5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-4 h-4" />
      </motion.div>

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
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              {/* <button
                onClick={() => setOpenPdf(false)}
                className="absolute top-3 right-3 bg-black/80 text-white p-2 rounded-full hover:bg-black"
              >
                <X size={18} />
              </button> */}

              {/* PDF */}
              <iframe
                src="../Ahad hossain Resume.pdf"
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

export default Home;
