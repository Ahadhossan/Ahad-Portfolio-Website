"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const tap = { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } };

const LetsTalk = () => {
  // Build the email at runtime (mild anti-scrape)
  const user = "ahadm3016";
  const host = "gmail.com";
  const email = `${user}@${host}`;

  const subject = encodeURIComponent("Hello Ahad");
  const body = encodeURIComponent(
    "Hi Ahad,\n\nI came across your portfolio and..."
  );

  const [copied, setCopied] = useState(false);

  const openMailClient = () => {
    window.location.href = `mailto:${encodeURIComponent(
      email
    )}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      const ok = window.confirm(
        `Couldn't copy automatically.\n\nPress OK to copy manually: ${email}`
      );
      if (ok) {
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
        } catch {}
        document.body.removeChild(ta);
      }
    }
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-12 lg:px-[10vw] py-16">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col gap-6 items-center text-center 
                   border border-[#15919B] dark:border-[#59dce6] rounded-2xl 
                   bg-white/50 dark:bg-slate-900/50 backdrop-blur-md 
                   shadow-lg p-6 sm:p-12 my-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        role="region"
        aria-labelledby="lets-talk-heading"
      >
        <motion.h2
          id="lets-talk-heading"
          className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-black dark:text-white mb-2"
          variants={item}
        >
          Let’s Talk
        </motion.h2>

        <motion.p
          className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-700 dark:text-slate-300 leading-relaxed max-w-2xl"
          variants={item}
        >
          Whether you’re looking for a passionate web developer to join your
          team, need help bringing a project idea to life, or just want to talk
          tech — I’m always open to connecting.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-6"
          variants={item}
        >
          {/* Default mail client */}
          <motion.button
            type="button"
            onClick={openMailClient}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#15919B] dark:border-[#59dce6]
                       rounded-full bg-[#15919B] dark:bg-[#59dce6] text-white dark:text-black
                       font-medium text-lg shadow-md hover:bg-white hover:text-[#15919B]
                       dark:hover:bg-black dark:hover:text-[#59dce6] transition-all duration-300"
            aria-label="Open default mail client"
            {...tap}
          >
            <FaEnvelope aria-hidden className="shrink-0" /> Email
          </motion.button>

          {/* Utility: copy email */}
          <motion.button
            type="button"
            onClick={copyEmail}
            className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-[#15919B] dark:border-[#59dce6]
                       rounded-full bg-white/70 dark:bg-black/70 text-[#15919B] dark:text-[#59dce6]
                       font-medium text-lg shadow-md hover:bg-white dark:hover:bg-black transition-all duration-300"
            aria-label="Copy email address"
            title={email}
            {...tap}
          >
            <FaCopy aria-hidden className="shrink-0" /> Copy email
            {copied && (
              <span
                role="status"
                aria-live="polite"
                className="absolute -top-3 -right-3 text-xs font-semibold px-2 py-1 rounded-full 
                           bg-[#15919B] text-white dark:bg-[#59dce6] dark:text-black shadow"
              >
                Copied!
              </span>
            )}
          </motion.button>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/mdahadhossain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#15919B] dark:border-[#59dce6] 
                       rounded-full bg-[#15919B] dark:bg-[#59dce6] text-white dark:text-black 
                       font-medium text-lg shadow-md hover:bg-white hover:text-[#15919B] 
                       dark:hover:bg-black dark:hover:text-[#59dce6] transition-all duration-300"
            aria-label="Open LinkedIn profile"
            {...tap}
          >
            <FaLinkedin aria-hidden className="shrink-0" /> LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LetsTalk;
