// import type { SVGProps } from "react";

// type IconProps = SVGProps<SVGSVGElement>;

// /* ---------- Icons (inline SVG, no extra dependencies) ---------- */

// const LinkedInIcon = (p: IconProps) => (
//   <svg viewBox="0 0 24 24" {...p}>
//     <rect width="20" height="20" x="2" y="2" rx="3" fill="#0a84d6" />
//     <path
//       fill="#fff"
//       d="M5.5 9.5h2.6V18H5.5V9.5Zm1.3-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3 4h2.5v1.2h.04c.35-.66 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1V18h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18H9.8V9.5Z"
//     />
//   </svg>
// );
// const GitHubIcon = (p: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
//     <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
//   </svg>
// );
// const WhatsAppIcon = (p: IconProps) => (
//   <svg
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={1.7}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     viewBox="0 0 24 24"
//     {...p}
//   >
//     <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6L3 21Z" />
//     <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-.9-.4-1.9-1.4-2.3-2.3l.8-1-1-2L9 8.5Z" />
//   </svg>
// );
// const MailIcon = (p: IconProps) => (
//   <svg viewBox="0 0 24 24" {...p}>
//     <rect x="3" y="5" width="18" height="14" rx="2.5" fill="currentColor" />
//     <path
//       d="m4.5 7.5 7.5 5.5 7.5-5.5"
//       fill="none"
//       stroke="#0a1220"
//       strokeWidth={1.6}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );
// const HeartIcon = (p: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
//     <path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11Z" />
//   </svg>
// );

// /* Logo mark */
// const Logo = (p: IconProps) => (
//   <svg viewBox="0 0 48 44" {...p}>
//     <defs>
//       <linearGradient id="logo-g" x1="0" y1="1" x2="1" y2="0">
//         <stop offset="0" stopColor="#0ea5c6" />
//         <stop offset="1" stopColor="#5eead4" />
//       </linearGradient>
//     </defs>
//     <path d="M22 2 4 42h11l7-18 5 12h10L22 2Z" fill="url(#logo-g)" />
//     <path d="M28 20l16 22H30l-6-9 4-13Z" fill="#0d9488" opacity=".85" />
//   </svg>
// );

// /* Gem + orbit illustration */
// const Gem = (p: IconProps) => (
//   <svg viewBox="0 0 320 240" fill="none" {...p}>
//     <defs>
//       <linearGradient id="gem-a" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0" stopColor="#5eead4" />
//         <stop offset="1" stopColor="#0891b2" />
//       </linearGradient>
//       <linearGradient id="gem-b" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0" stopColor="#0e7490" />
//         <stop offset="1" stopColor="#1e2a5a" />
//       </linearGradient>
//       <radialGradient id="gem-glow" cx=".5" cy=".5" r=".5">
//         <stop offset="0" stopColor="#22d3ee" stopOpacity=".35" />
//         <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
//       </radialGradient>
//     </defs>
//     <ellipse cx="165" cy="215" rx="70" ry="8" fill="url(#gem-glow)" />
//     <ellipse
//       cx="160"
//       cy="120"
//       rx="150"
//       ry="55"
//       transform="rotate(-18 160 120)"
//       stroke="#22d3ee"
//       strokeOpacity=".7"
//     />
//     <path d="M160 30 110 110l50 80 50-80-50-80Z" fill="url(#gem-b)" />
//     <path d="M160 30 110 110l50 22V30Z" fill="url(#gem-a)" />
//     <path d="M160 30v102l50-22-50-80Z" fill="#0e9bb5" opacity=".8" />
//     <path d="M110 110l50 22 50-22-50 80-50-80Z" fill="#1e3a8a" opacity=".85" />
//     <circle cx="272" cy="87" r="4.5" fill="#22d3ee" />
//   </svg>
// );

// /* ---------- Data ---------- */
// const socials = [
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/",
//     icon: <LinkedInIcon className="h-5 w-5" />,
//   },
//   {
//     label: "GitHub",
//     href: "https://github.com/",
//     icon: <GitHubIcon className="h-5 w-5" />,
//   },
//   {
//     label: "WhatsApp",
//     href: "https://wa.me/",
//     icon: <WhatsAppIcon className="h-5 w-5" />,
//   },
//   {
//     label: "Email",
//     href: "mailto:ahadm3016@gmail.com",
//     icon: <MailIcon className="h-5 w-5" />,
//   },
// ];

// /* ---------- Component ---------- */
// export default function FooterTest() {
//   return (
//     <footer className="relative isolate overflow-hidden bg-[#070d18] text-slate-200">
//       {/* Background glows */}
//       <div
//         aria-hidden
//         className="absolute -left-40 -top-40 -z-10 h-[400px] w-[500px] rounded-full bg-blue-900/40 blur-[120px]"
//       />
//       <div
//         aria-hidden
//         className="absolute -right-32 -top-32 -z-10 h-[360px] w-[420px] rounded-full bg-teal-500/15 blur-[120px]"
//       />

//       {/* Decorative waves */}
//       {/* <svg
//         aria-hidden
//         viewBox="0 0 1240 200"
//         preserveAspectRatio="none"
//         className="absolute inset-x-0 bottom-0 -z-10 h-32 w-full sm:h-44"
//       >
//         <path
//           d="M0 150C300 90 560 60 820 110s420 70 620 10"
//           fill="none"
//           stroke="#22d3ee"
//           strokeOpacity=".55"
//           strokeWidth="2"
//         />
//         <path
//           d="M0 150C300 90 560 60 820 110s420 70 620 10V200H0Z"
//           fill="#22d3ee"
//           fillOpacity=".05"
//         />
//       </svg> */}
//       <svg
//         aria-hidden
//         viewBox="0 0 200 200"
//         className="absolute bottom-16 left-0 -z-10 hidden h-40 w-40 text-teal-400/60 lg:block"
//       >
//         <path
//           d="M0 40c40 20 50 90 100 120"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         />
//       </svg>

//       <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-8 lg:pt-20">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.3fr] lg:gap-8">
//           {/* Brand */}
//           <div>
//             <a href="#" className="inline-flex items-center gap-3">
//               <Logo className="h-11 w-12" />
//               <span className="text-3xl font-bold tracking-[0.12em] text-white">
//                 AHAD<span className="text-teal-400">.DEV</span>
//               </span>
//             </a>

//             <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-300">
//               Frontend Developer <span className="mx-2 text-teal-400">•</span>{" "}
//               Product Excellence Engineer
//               <br />
//               HMS/PMS Specialist
//             </p>
//             <span className="mt-5 block h-0.5 w-11 rounded bg-teal-400" />

//             <p className="mt-5 max-w-xs text-[15px] leading-7 text-slate-300">
//               Building modern web experiences with clean code, creative design
//               and a focus on real user needs.
//             </p>

//             <ul className="mt-6 flex gap-3">
//               {socials.map((s) => (
//                 <li key={s.label}>
//                   <a
//                     href={s.href}
//                     aria-label={s.label}
//                     target={s.href.startsWith("http") ? "_blank" : undefined}
//                     rel="noreferrer"
//                     className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:border-teal-400/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
//                   >
//                     {s.icon}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Keep exploring */}
//           <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center md:col-span-2 lg:col-span-1">
//             <div>
//               <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
//                 Keep Exploring
//               </p>
//               <h3 className="mt-5 text-4xl font-medium leading-tight text-white">
//                 Better ideas.
//                 <br />
//                 <span className="text-teal-400">Bigger</span> impact.
//               </h3>
//               <span className="mt-6 block h-0.5 w-11 rounded bg-teal-400" />
//               <p
//                 className="mt-6 text-3xl italic text-slate-300"
//                 style={{
//                   fontFamily: "'Mrs Saint Delafield', 'Segoe Script', cursive",
//                 }}
//               >
//                 Ahad Hossain
//               </p>
//             </div>
//             <Gem
//               aria-hidden
//               className="mx-auto h-44 w-auto shrink-0 sm:mx-0 sm:h-52 lg:-mr-4"
//             />
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center">
//           <p className="flex items-center gap-3">
//             <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
//             &copy; 2026 Md. Ahad Hossain. All rights reserved.
//           </p>
//           <p className="flex items-center gap-2">
//             <HeartIcon className="h-4 w-4 text-teal-400" />
//             Built with React
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import type { SVGProps } from "react";
// import { Heart } from "lucide-react";
// import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

// type SvgProps = SVGProps<SVGSVGElement>;

// /* ---------- Custom artwork (logo + gem) ---------- */
// const Logo = (p: SvgProps) => (
//   <svg viewBox="0 0 48 44" {...p}>
//     <defs>
//       <linearGradient id="logo-g" x1="0" y1="1" x2="1" y2="0">
//         <stop offset="0" stopColor="#0ea5c6" />
//         <stop offset="1" stopColor="#5eead4" />
//       </linearGradient>
//     </defs>
//     <path d="M22 2 4 42h11l7-18 5 12h10L22 2Z" fill="url(#logo-g)" />
//     <path d="M28 20l16 22H30l-6-9 4-13Z" fill="#0d9488" opacity=".85" />
//   </svg>
// );

// const Gem = (p: SvgProps) => (
//   <svg viewBox="0 0 320 240" fill="none" {...p}>
//     <defs>
//       <linearGradient id="gem-a" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0" stopColor="#5eead4" />
//         <stop offset="1" stopColor="#0891b2" />
//       </linearGradient>
//       <linearGradient id="gem-b" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0" stopColor="#0e7490" />
//         <stop offset="1" stopColor="#1e2a5a" />
//       </linearGradient>
//       <radialGradient id="gem-glow" cx=".5" cy=".5" r=".5">
//         <stop offset="0" stopColor="#22d3ee" stopOpacity=".35" />
//         <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
//       </radialGradient>
//     </defs>
//     <ellipse cx="165" cy="215" rx="70" ry="8" fill="url(#gem-glow)" />
//     <ellipse
//       cx="160"
//       cy="120"
//       rx="150"
//       ry="55"
//       transform="rotate(-18 160 120)"
//       stroke="#22d3ee"
//       strokeOpacity=".7"
//     />
//     <path d="M160 30 110 110l50 80 50-80-50-80Z" fill="url(#gem-b)" />
//     <path d="M160 30 110 110l50 22V30Z" fill="url(#gem-a)" />
//     <path d="M160 30v102l50-22-50-80Z" fill="#0e9bb5" opacity=".8" />
//     <path d="M110 110l50 22 50-22-50 80-50-80Z" fill="#1e3a8a" opacity=".85" />
//     <circle cx="272" cy="87" r="4.5" fill="#22d3ee" />
//   </svg>
// );

// /* ---------- Data ---------- */
// const socials = [
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/",
//     icon: <FaLinkedin className="h-5 w-5 text-sky-400" strokeWidth={1.8} />,
//   },
//   {
//     label: "GitHub",
//     href: "https://github.com/",
//     icon: <FaGithub className="h-5 w-5" strokeWidth={1.8} />,
//   },
//   {
//     label: "WhatsApp",
//     href: "https://wa.me/",
//     icon: <FaWhatsapp className="h-5 w-5 text-emerald-400" strokeWidth={1.8} />,
//   },
// ];

// /* ---------- Component ---------- */
// const Footer = () => {
//   return (
//     <footer className="relative isolate overflow-hidden bg-[#070d18] text-slate-200">
//       {/* Background glows */}
//       <div
//         aria-hidden
//         className="absolute -left-32 -top-32 -z-10 h-[300px] w-[360px] rounded-full bg-blue-900/40 blur-[100px] sm:-left-40 sm:-top-40 sm:h-[400px] sm:w-[500px] sm:blur-[120px]"
//       />
//       <div
//         aria-hidden
//         className="absolute -right-24 -top-24 -z-10 h-[260px] w-[300px] rounded-full bg-teal-500/15 blur-[100px] sm:-right-32 sm:-top-32 sm:h-[360px] sm:w-[420px] sm:blur-[120px]"
//       />

//       {/* Decorative waves */}
//       <svg
//         aria-hidden
//         viewBox="0 0 1240 200"
//         preserveAspectRatio="none"
//         className="absolute inset-x-0 bottom-0 -z-10 h-24 w-full sm:h-36 lg:h-44"
//       >
//         <path
//           d="M0 150C300 90 560 60 820 110s420 70 620 10"
//           fill="none"
//           stroke="#22d3ee"
//           strokeOpacity=".55"
//           strokeWidth="2"
//           vectorEffect="non-scaling-stroke"
//         />
//         <path
//           d="M0 150C300 90 560 60 820 110s420 70 620 10V200H0Z"
//           fill="#22d3ee"
//           fillOpacity=".05"
//         />
//       </svg>
//       <svg
//         aria-hidden
//         viewBox="0 0 200 200"
//         className="absolute bottom-16 left-0 -z-10 hidden h-40 w-40 text-teal-400/60 lg:block"
//       >
//         <path
//           d="M0 40c40 20 50 90 100 120"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         />
//       </svg>

//       <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
//           {/* Brand */}
//           <div>
//             <a
//               href="#"
//               className="inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
//             >
//               <Logo className="h-9 w-10 sm:h-11 sm:w-12" />
//               <span className="text-2xl font-bold tracking-[0.12em] text-white sm:text-3xl">
//                 AHAD<span className="text-teal-400">.DEV</span>
//               </span>
//             </a>

//             <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-[15px]">
//               Frontend Developer <span className="mx-2 text-teal-400">•</span>{" "}
//               Product Excellence Engineer
//               <br className="hidden sm:block" /> HMS/PMS Specialist
//             </p>
//             <span className="mt-5 block h-0.5 w-11 rounded bg-teal-400" />

//             <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300 sm:text-[15px]">
//               Building modern web experiences with clean code, creative design
//               and a focus on real user needs.
//             </p>

//             <ul className="mt-6 flex flex-wrap gap-3">
//               {socials.map((s) => (
//                 <li key={s.label}>
//                   <a
//                     href={s.href}
//                     aria-label={s.label}
//                     target={s.href.startsWith("http") ? "_blank" : undefined}
//                     rel="noreferrer"
//                     className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:border-teal-400/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400 sm:h-12 sm:w-12"
//                   >
//                     {s.icon}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Keep exploring */}
//           <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between lg:justify-end lg:gap-12">
//             <div>
//               <p className="text-xs uppercase tracking-[0.3em] text-slate-400 sm:text-sm">
//                 Keep Exploring
//               </p>
//               <h3 className="mt-4 text-3xl font-medium leading-tight text-white sm:mt-5 sm:text-4xl">
//                 Better ideas.
//                 <br />
//                 <span className="text-teal-400">Bigger</span> impact.
//               </h3>
//               <span className="mt-5 block h-0.5 w-11 rounded bg-teal-400 sm:mt-6" />
//               <p
//                 className="mt-5 text-2xl italic text-slate-300 sm:mt-6 sm:text-3xl"
//                 style={{
//                   fontFamily: "'Mrs Saint Delafield', 'Segoe Script', cursive",
//                 }}
//               >
//                 Ahad Hossain
//               </p>
//             </div>
//             <Gem
//               aria-hidden
//               className="mx-auto aspect-[4/3] h-36 w-auto shrink-0 sm:mx-0 sm:h-44 lg:h-52"
//             />
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-slate-300 sm:mt-14 sm:flex-row sm:text-left sm:text-sm">
//           <p className="flex items-center gap-3">
//             <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-teal-400" />
//             &copy; 2026 Md. Ahad Hossain. All rights reserved.
//           </p>
//           <p className="flex items-center gap-2">
//             <Heart className="h-4 w-4 fill-teal-400 text-teal-400" />
//             Built with React
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
