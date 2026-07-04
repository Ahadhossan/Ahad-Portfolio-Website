import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const EMAIL = "ahadm3016@gmail.com";

const socials = [
  {
    href: "https://www.linkedin.com/in/mdahadhossain/",
    label: "LinkedIn",
    icon: FaLinkedin,
    bg: "bg-[#0A66C2]/10",
    hoverBg: "hover:bg-[#0A66C2]",
    color: "text-[#0A66C2]",
    hoverColor: "group-hover:text-white",
  },
  {
    href: "https://github.com/Ahadhossan",
    label: "GitHub",
    icon: FaGithubSquare,
    bg: "bg-gray-900/5",
    hoverBg: "hover:bg-gray-900",
    color: "text-gray-700",
    hoverColor: "group-hover:text-white",
  },
  {
    href: "https://wa.me/8801322959861",
    label: "WhatsApp",
    icon: IoLogoWhatsapp,
    bg: "bg-[#25D366]/10",
    hoverBg: "hover:bg-[#25D366]",
    color: "text-[#25D366]",
    hoverColor: "group-hover:text-white",
  },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard 📋");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer className="relative pt-16 pb-10 border-t border-gray-200 bg-[#FAFAFA] overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-gradient-to-r from-transparent via-[#2a7fa3] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-[3vw]">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          {/* Left: Brand + copyright */}
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="text-lg font-bold tracking-tight text-[#1E5470]">
              AHAD<span className="text-[#2a7fa3]">.</span>
            </span>
            <p className="text-sm text-gray-500">© 2026 All rights reserved.</p>
          </div>

          {/* Center: Socials */}
          <div className="flex gap-3">
            {socials.map(
              ({ href, label, icon: Icon, bg, hoverBg, color, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-full
                ${bg} ${hoverBg} shadow-sm transition-colors duration-300`}
                >
                  <Icon
                    size={19}
                    className={`${color} ${hoverColor} transition-colors duration-300`}
                  />
                </motion.a>
              ),
            )}
          </div>

          {/* Right: Say hello CTA + copy email */}
          <div className="flex items-center gap-2">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Gmail"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200
  text-gray-500 transition-all duration-300 hover:border-[#2a7fa3]/50 hover:text-[#1E5470] hover:bg-[#2a7fa3]/5"
            >
              <FaGoogle size={14} />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              title="Copy email address"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200
              text-gray-500 transition-all duration-300 hover:border-[#2a7fa3]/50 hover:text-[#1E5470] hover:bg-[#2a7fa3]/5"
            >
              {copied ? (
                <Check size={14} className="text-green-500" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
        </div>

        {/* Bottom: built-with line */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            Built with <span className="text-red-500">♥</span> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
