/** @format */

import { GithubIcon, LinkedinIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-12 pb-10 border-t border-gray-200 dark:border-gray-600 bg-[#FAFAFA] dark:bg-[#101115]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-[3vw]">
        {/* Main Footer Grid */}
        <div className="grid items-center grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-20">
          {/* Left */}
          <div>
            <h2 className="text-[15px] md:text-[17px] lg:text-[19px] font-medium text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </h2>
          </div>
          {/* Center */}
          <div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[15px] md:text-[17px] lg:text-[19px] text-black dark:text-white font-medium">
                Built with <span className="text-red-500">♥</span> by{" "}
                <span className="font-bold tracking-tight text-[#2CC295]">
                  AHAD
                </span>
              </span>
              {/* Social icons */}
              <div className="flex gap-3 mt-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mdahadhossain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group p-2 text-gray-600 transition border border-gray-300 rounded-full dark:border-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-slate-800"
                >
                  <LinkedinIcon className="w-5 h-5 transition-colors group-hover:text-[#0A66C2]" />
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/Ahadhossan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group p-2 text-gray-600 transition border border-gray-300 rounded-full dark:border-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800"
                >
                  <GithubIcon className="w-5 h-5 transition-colors group-hover:text-black dark:group-hover:text-white" />
                </a>
                {/* WhatsApp */}
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group p-2 text-gray-600 transition border border-gray-300 rounded-full dark:border-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-slate-800"
                >
                  <FaWhatsapp className="w-5 h-5 transition-colors group-hover:text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>
          {/* Right */}
          <div>
            <span className="text-[15px] md:text-[17px] lg:text-[19px] text-gray-600 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/mdahadhossain/"
                className="underline transition underline-offset-2 hover:text-[#09D1C7] dark:hover:text-[#09D1C7]"
              >
                Say hello →
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
