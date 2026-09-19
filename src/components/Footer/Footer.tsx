import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../assets/Black_Modern_A_letter_Logo-removebg-preview.png";

const socials = [
  {
    href: "https://www.linkedin.com/in/mdahadhossain/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/Ahadhossan",
    label: "GitHub",
    icon: FaGithubSquare,
  },
  {
    href: "https://wa.me/8801322959861",
    label: "WhatsApp",
    icon: IoLogoWhatsapp,
  },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-gray-200 bg-[#FAFAFA]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(18deg); }
          30% { transform: rotate(-8deg); }
          45% { transform: rotate(18deg); }
          60% { transform: rotate(-4deg); }
          75% { transform: rotate(10deg); }
        }
      `}</style>

      {/* Scroll to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-5 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#1E5470] text-white shadow-lg transition-all duration-300 hover:bg-[#15919B] sm:bottom-6 sm:right-6 sm:h-10 sm:w-10 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp size={16} />
      </button>

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-10 md:px-12 lg:px-[3vw]">
        {/* Top: availability + heading + mascot */}
        <div className="flex flex-col gap-8 border-b border-gray-200 pb-8 sm:pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#15919B]/30 bg-[#15919B]/5 px-3 py-1 text-xs font-medium text-[#0f6b72]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#15919B] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#15919B]" />
              </span>
              Open to work
            </span>
            <h2
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              className="mt-4 text-2xl font-normal leading-tight tracking-tight text-[#1E5470] sm:text-3xl md:text-4xl"
            >
              Looking for my next role.
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#565151e3]">
              Front-end / Product Designer roles. Reach out directly or find me
              here.
            </p>
          </div>

          {/* Decorative 3D mascot */}
          <div className="flex shrink-0 items-center justify-center gap-4 self-center md:self-auto">
            <svg
              width="76"
              height="76"
              viewBox="0 0 160 160"
              className="motion-safe:animate-[float_4s_ease-in-out_infinite] sm:h-[90px] sm:w-[90px]"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="faceGrad" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#ffd9b3" />
                  <stop offset="100%" stopColor="#f0b787" />
                </radialGradient>
                <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a7fa3" />
                  <stop offset="100%" stopColor="#1E5470" />
                </linearGradient>
                <linearGradient id="shirtGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#15919B" />
                  <stop offset="100%" stopColor="#0f6b72" />
                </linearGradient>
                <linearGradient id="laptopGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a2f33" />
                  <stop offset="100%" stopColor="#15181a" />
                </linearGradient>
                <radialGradient id="shadow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              <ellipse cx="80" cy="150" rx="48" ry="8" fill="url(#shadow2)" />

              <path
                d="M28 156 C28 122 50 108 80 108 C110 108 132 122 132 156 Z"
                fill="url(#shirtGrad2)"
              />
              <circle cx="80" cy="112" r="8" fill="#ffffff" opacity="0.9" />
              <circle
                cx="80"
                cy="112"
                r="8"
                fill="none"
                stroke="#0f6b72"
                strokeWidth="1.5"
                opacity="0.4"
              />

              <rect
                x="68"
                y="86"
                width="24"
                height="24"
                rx="8"
                fill="#f0b787"
              />

              <circle cx="80" cy="62" r="44" fill="url(#faceGrad)" />
              <ellipse
                cx="62"
                cy="52"
                rx="10"
                ry="7"
                fill="#ffffff"
                opacity="0.35"
              />

              <circle cx="35" cy="64" r="7" fill="#f0b787" />
              <circle cx="125" cy="64" r="7" fill="#f0b787" />

              <path
                d="M36 54 C34 18 60 4 80 4 C102 4 126 20 124 56 C124 40 108 26 80 26 C54 26 38 38 36 54 Z"
                fill="url(#hairGrad)"
              />
              <path
                d="M40 44 Q60 24 80 24 Q100 24 120 44"
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.2"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <rect x="60" y="56" width="14" height="4" rx="2" fill="#1E5470" />
              <rect x="86" y="56" width="14" height="4" rx="2" fill="#1E5470" />

              <circle cx="67" cy="66" r="6" fill="#22252a" />
              <circle cx="93" cy="66" r="6" fill="#22252a" />
              <circle cx="69.5" cy="63.5" r="1.8" fill="#ffffff" />
              <circle cx="95.5" cy="63.5" r="1.8" fill="#ffffff" />

              <path
                d="M79 70 Q82 74 79 77"
                fill="none"
                stroke="#d99a68"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M68 84 Q80 92 92 84"
                fill="none"
                stroke="#8a4b30"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <g
                style={{
                  transformOrigin: "26px 108px",
                  animation: "wave 1.8s ease-in-out infinite",
                }}
              >
                <path
                  d="M26 108 C14 100 8 82 14 66"
                  fill="none"
                  stroke="url(#shirtGrad2)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle cx="14" cy="64" r="8" fill="#f0b787" />
                <path
                  d="M9 58 L9 50"
                  stroke="#f0b787"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M14 56 L14 47"
                  stroke="#f0b787"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M19 58 L20 50"
                  stroke="#f0b787"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>

              <g>
                <rect
                  x="96"
                  y="92"
                  width="52"
                  height="40"
                  rx="6"
                  fill="url(#laptopGrad)"
                />
                <rect
                  x="100"
                  y="96"
                  width="44"
                  height="32"
                  rx="3"
                  fill="#1c2023"
                />
                <path
                  d="M113 106 L107 112 L113 118"
                  fill="none"
                  stroke="#15919B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M131 106 L137 112 L131 118"
                  fill="none"
                  stroke="#15919B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="126"
                  y1="102"
                  x2="120"
                  y2="122"
                  stroke="#2a7fa3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path d="M92 132 L152 132 L146 140 L98 140 Z" fill="#3a3f43" />
              </g>
            </svg>
          </div>
        </div>

        {/* Meta row: logo, socials + email, copyright */}
        <div className="flex flex-col items-center gap-6 border-t border-gray-200 pt-6 text-center sm:pt-8 md:flex-row md:items-center md:justify-between md:text-left">
          <img
            src={logo}
            alt="Ahad Hossain logo"
            loading="lazy"
            className="h-10 w-10 object-contain sm:h-24 sm:w-24"
          />

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#15919B] hover:text-[#1E5470] hover:shadow-md sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <Icon size={16} className="text-[#15919B] sm:size-[17px]" />
                <span className="hidden xs:inline sm:inline">{label}</span>
              </a>
            ))}
          </div>

          <p className="text-xs text-[#565151e3] sm:text-sm">
            © 2026 Md Ahad Hossain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
