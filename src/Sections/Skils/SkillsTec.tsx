// // components/Skills.tsx
// // Needs: npm i lucide-react
// // Tailwind CSS v3+ (accent color: teal-600 / teal-500)
// import type { LucideIcon } from "lucide-react";
// import {
//   Activity,
//   Atom,
//   BookOpen,
//   Braces,
//   Clapperboard,
//   Cloud,
//   Code,
//   Component,
//   Cpu,
//   Database,
//   FileCode,
//   FileText,
//   Flame,
//   GitBranch,
//   GitMerge,
//   GraduationCap,
//   Globe,
//   Hammer,
//   Image as ImageIcon,
//   KeyRound,
//   Layers,
//   Layout,
//   LayoutGrid,
//   ListChecks,
//   MousePointer2,
//   Network,
//   Package,
//   Palette,
//   PenTool,
//   RefreshCw,
//   Rocket,
//   Server,
//   Smartphone,
//   SquareCheckBig,
//   Table,
//   Terminal,
//   Wind,
//   Zap,
// } from "lucide-react";
// import SectionEyebrow from "../../common/SectionEyebrow";

// type Skill = { name: string; icon: LucideIcon };
// type Category = { title: string; skills: Skill[] };

// const categories: Category[] = [
//   {
//     title: "Languages & Frameworks",
//     skills: [
//       { name: "HTML5", icon: FileCode },
//       { name: "CSS3", icon: Palette },
//       { name: "JavaScript", icon: Braces },
//       { name: "TypeScript", icon: Code },
//       { name: "React.js", icon: Atom },
//       { name: "Next.js", icon: Layers },
//       { name: "jQuery", icon: MousePointer2 },
//       { name: "PHP", icon: Server },
//     ],
//   },
//   {
//     title: "UI & Styling",
//     skills: [
//       { name: "Tailwind CSS", icon: Wind },
//       { name: "Bootstrap", icon: LayoutGrid },
//       { name: "SASS", icon: Palette },
//       { name: "Flexbox", icon: Layout },
//       { name: "CSS Grid", icon: Table },
//       { name: "Material UI", icon: Component },
//       { name: "Framer Motion", icon: Clapperboard },
//       { name: "Responsive Design", icon: Smartphone },
//     ],
//   },
//   {
//     title: "State Management & Backend",
//     skills: [
//       { name: "Redux Toolkit", icon: RefreshCw },
//       { name: "Firebase", icon: Flame },
//       { name: "Clerk", icon: KeyRound },
//       { name: "MySQL", icon: Database },
//     ],
//   },
//   {
//     title: "Database & Tools",
//     skills: [
//       { name: "MySQL", icon: Database },
//       { name: "phpMyAdmin", icon: Table },
//       { name: "Laragon", icon: Cpu },
//       { name: "XAMPP", icon: Server },
//     ],
//   },
//   {
//     title: "Version Control & DevOps",
//     skills: [
//       { name: "Git", icon: GitBranch },
//       { name: "GitHub", icon: GitMerge },
//       { name: "NPM", icon: Package },
//       { name: "Yarn", icon: Package },
//       { name: "Jenkins", icon: Hammer },
//     ],
//   },
//   {
//     title: "Deployment",
//     skills: [
//       { name: "Vercel", icon: Rocket },
//       { name: "Netlify", icon: Zap },
//       { name: "Firebase", icon: Flame },
//       { name: "GitHub Pages", icon: Globe },
//       { name: "InfinityFree", icon: Cloud },
//     ],
//   },
//   {
//     title: "Development Tools",
//     skills: [
//       { name: "VS Code", icon: Code },
//       { name: "Cursor", icon: MousePointer2 },
//       { name: "PyCharm", icon: Terminal },
//     ],
//   },
//   {
//     title: "Project & Collaboration",
//     skills: [
//       { name: "Jira", icon: ListChecks },
//       { name: "Confluence", icon: BookOpen },
//       { name: "ClickUp", icon: SquareCheckBig },
//       { name: "Figma", icon: PenTool },
//       { name: "Canva", icon: ImageIcon },
//       { name: "LMS", icon: GraduationCap },
//       { name: "Tailscale", icon: Network },
//       { name: "Wiki.js", icon: FileText },
//     ],
//   },
//   {
//     title: "Analytics",
//     skills: [{ name: "Google Analytics", icon: Activity }],
//   },
// ];

// function SkillChip({ skill }: { skill: Skill }) {
//   const Icon = skill.icon;
//   return (
//     <li className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs text-slate-700 sm:gap-2.5 sm:px-4 sm:py-2 sm:text-sm transition-colors hover:border-teal-500 hover:bg-teal-50 hover:text-slate-900">
//       <Icon
//         className="size-4 shrink-0 text-teal-600 sm:size-[18px]"
//         strokeWidth={2}
//         aria-hidden="true"
//       />
//       {skill.name}
//     </li>
//   );
// }

// const SkillsTec = () => {
//   return (
//     <section className="w-full bg-white text-slate-900 ">
//       <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4  sm:gap-12 sm:px-6 sm:pb-16 sm:pt-14 md:gap-14 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16 min-h-[720px] sm:min-h-[820px] lg:min-h-[100dvh] ">
//         {/* Header */}
//         <header className="flex max-w-3xl flex-col gap-4 sm:gap-5">
//           <span className="text-sm tracking-wider text-teal-600">
//             <SectionEyebrow label="Tech Stack & Tools" />
//           </span>
//           <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-balance">
//             Tools I use to build for the web.
//           </h1>
//           <p className="text-base leading-relaxed text-slate-500 sm:text-lg md:text-xl">
//             From pixel-perfect interfaces to databases and deployment, here is
//             the stack I work with every day.
//           </p>
//         </header>

//         {/* Skill cards */}
//         <section className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
//           {categories.map((category, index) => (
//             <article
//               key={category.title}
//               className="flex min-w-0 flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:gap-5 sm:p-6 lg:p-7 transition-colors hover:border-teal-500"
//             >
//               <span className="font-mono text-[13px] tracking-widest text-teal-600">
//                 {String(index + 1).padStart(2, "0")}
//               </span>
//               <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
//                 {category.title}
//               </h2>
//               <ul className="flex flex-wrap gap-2 sm:gap-2.5">
//                 {category.skills.map((skill) => (
//                   <SkillChip key={skill.name} skill={skill} />
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </section>
//       </div>
//     </section>
//   );
// };

// export default SkillsTec;

// /*
//  Fonts (Next.js app router) - app/layout.tsx:

//  import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
//  const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
//  const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
//  // <body className={`${sans.variable} ${mono.variable} font-sans`}>

//  tailwind.config.ts:
//  theme: { extend: { fontFamily: {
//    sans: ["var(--font-sans)", "sans-serif"],
//    mono: ["var(--font-mono)", "monospace"],
//  } } }
// */

// components/Skills.tsx
// Needs: npm i lucide-react
// Tailwind CSS v3.4+ (text-balance) | accent color: teal-600 / teal-500
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Atom,
  BookOpen,
  Braces,
  Clapperboard,
  Cloud,
  Code,
  Component,
  Cpu,
  Database,
  FileCode,
  FileText,
  Flame,
  GitBranch,
  GitMerge,
  GraduationCap,
  Globe,
  Hammer,
  Image as ImageIcon,
  KeyRound,
  Layers,
  Layout,
  LayoutGrid,
  ListChecks,
  MousePointer2,
  Network,
  Package,
  Palette,
  PenTool,
  RefreshCw,
  Rocket,
  Server,
  Smartphone,
  SquareCheckBig,
  Table,
  Terminal,
  Wind,
  Zap,
} from "lucide-react";
import SectionEyebrow from "../../common/SectionEyebrow";

type Skill = { name: string; icon: LucideIcon };
type Category = { title: string; skills: Skill[] };

const categories: Category[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "TypeScript", icon: Code },
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: Layers },
      { name: "jQuery", icon: MousePointer2 },
      { name: "PHP", icon: Server },
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      { name: "Tailwind CSS", icon: Wind },
      { name: "Bootstrap", icon: LayoutGrid },
      { name: "SASS", icon: Palette },
      { name: "Flexbox", icon: Layout },
      { name: "CSS Grid", icon: Table },
      { name: "Material UI", icon: Component },
      { name: "Framer Motion", icon: Clapperboard },
      { name: "Responsive Design", icon: Smartphone },
    ],
  },
  {
    title: "State Management & Backend",
    skills: [
      { name: "Redux Toolkit", icon: RefreshCw },
      { name: "Firebase", icon: Flame },
      { name: "Clerk", icon: KeyRound },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "phpMyAdmin", icon: Table },
      { name: "Laragon", icon: Cpu },
      { name: "XAMPP", icon: Server },
    ],
  },
  {
    title: "Version Control & DevOps",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitMerge },
      { name: "NPM", icon: Package },
      { name: "Yarn", icon: Package },
      { name: "Jenkins", icon: Hammer },
    ],
  },
  {
    title: "Deployment",
    skills: [
      { name: "Vercel", icon: Rocket },
      { name: "Netlify", icon: Zap },
      { name: "Firebase", icon: Flame },
      { name: "GitHub Pages", icon: Globe },
      { name: "InfinityFree", icon: Cloud },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "VS Code", icon: Code },
      { name: "Cursor", icon: MousePointer2 },
      { name: "PyCharm", icon: Terminal },
    ],
  },
  {
    title: "Project & Collaboration",
    skills: [
      { name: "Jira", icon: ListChecks },
      { name: "Confluence", icon: BookOpen },
      { name: "ClickUp", icon: SquareCheckBig },
      { name: "Figma", icon: PenTool },
      { name: "Canva", icon: ImageIcon },
      { name: "LMS", icon: GraduationCap },
      { name: "Tailscale", icon: Network },
      { name: "Wiki.js", icon: FileText },
    ],
  },
  {
    title: "Analytics",
    skills: [{ name: "Google Analytics", icon: Activity }],
  },
];

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs text-slate-700 transition-colors hover:border-teal-500 hover:bg-teal-50 hover:text-slate-900 sm:gap-2.5 sm:px-4 sm:py-2 sm:text-sm">
      <Icon
        className="size-4 shrink-0 text-teal-600 sm:size-[18px]"
        strokeWidth={2}
        aria-hidden="true"
      />
      {skill.name}
    </li>
  );
}

export default function Skills() {
  return (
    <main className="w-full bg-white text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16 lg:px-8 lg:py-24 px-5 py-14 sm:px-6 sm:py-24 md:px-10 md:py-28">
        {/* Header */}
        <header className="flex max-w-3xl flex-col gap-4 sm:gap-5">
          <span className="text-sm tracking-wider text-teal-600">
            <SectionEyebrow label="Tech Stack & Tools" />
          </span>
          <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Tools I use to build for the web.
          </h1>
          <p className="text-base leading-relaxed text-slate-500 sm:text-lg md:text-xl">
            From pixel-perfect interfaces to databases and deployment, here is
            the stack I work with every day.
          </p>
        </header>

        {/* Skill cards */}
        <section className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((category, index) => (
            <article
              key={category.title}
              className="flex min-w-0 flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-teal-500 sm:gap-5 sm:p-6 lg:p-7"
            >
              <span className="font-mono text-[13px] tracking-widest text-teal-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl lg:text-[22px]">
                {category.title}
              </h2>
              <ul className="flex flex-wrap gap-2 sm:gap-2.5">
                {category.skills.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
