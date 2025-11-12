/** @format */
import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ReactGA from "react-ga4";

// Call ReactGA.initialize('G-XXXXXXX') once in your app root.

const trackCustomEvent = (name, params = {}) => {
  ReactGA.event(name, params);
};

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.05 },
    },
  };

  const textStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
    },
  };

  const textChild = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleResumeButtonClick = () => {
    trackCustomEvent("resume_click", {
      section: "hero",
      location: "primary_cta",
      label: "Resume Button",
    });
  };

  return (
    <section className="px-4 pb-12 pt-36 sm:pb-16 lg:pb-20 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col-reverse items-center justify-between gap-12 mx-auto md:flex-row max-w-7xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column (Image) */}
        <motion.div
          className="flex justify-center w-full md:w-1/2 md:justify-start"
          variants={imageVariant}
        >
          <img
            src="/src/assets/Ahad 1.webp" // place under /public/assets/
            alt="Portrait of Ahad Hossain"
            className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
            width={500}
            height={500}
          />
        </motion.div>

        {/* Right Column (Text Content) */}
        <motion.div
          className="w-full space-y-6 md:w-1/2"
          variants={textStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl leading-tight text-black md:text-4xl dark:text-white"
            variants={textChild}
          >
            Hi, I’m Ahad Hossain — Turning vision into reality with code and
            design.
          </motion.h2>

          <motion.p
            className="text-lg sm:text-[16px] md:text-[18px] font-medium text-gray-600 dark:text-slate-500 mt-6 sm:mt-8 md:mt-8"
            variants={textChild}
          >
            As a skilled Web Developer & Full-Stack Developer, I’m dedicated to
            turning ideas into innovative web applications. With a strong
            background in React.js and modern web technologies, I create
            responsive, user-friendly experiences that make a real impact.
            Explore my latest projects and articles to see how I approach
            challenges, learn new skills, and continuously push the boundaries
            of web development. I’m passionate about building digital products
            that not only function beautifully but also deliver value to users
            and clients. I’m always open to new opportunities and
            collaborations—let’s connect and build something amazing!
          </motion.p>

          {/* Button */}
          <motion.div variants={textChild}>
            <a
              onClick={handleResumeButtonClick}
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#15919B] dark:border-[#59dce6] rounded-full bg-[#15919B] dark:bg-[#59dce6] text-white dark:text-black font-medium text-lg shadow-md hover:bg-white hover:text-[#15919B] dark:hover:bg-black dark:hover:text-[#59dce6] transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#15919B]/40"
              href="/src/assets/Ahad hossain Resume.pdf" // place under /public/resume/
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <span
                className="transition-transform duration-300"
                aria-hidden="true"
              >
                <ArrowDownRight />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
