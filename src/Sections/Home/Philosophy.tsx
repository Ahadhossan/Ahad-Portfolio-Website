// import { FaLightbulb } from "react-icons/fa";

// const Philosophy = () => {
//   const philosophies = [
//     {
//       title: "Keep it simple",
//       description:
//         "Elegant, maintainable solutions are always better than unnecessary complexity.",
//     },
//     {
//       title: "User-first mindset",
//       description:
//         "Technology should adapt to people, not the other way around.",
//     },
//     {
//       title: "Continuous learning",
//       description:
//         "Growth comes from curiosity and learning something new every day.",
//     },
//     {
//       title: "Collaboration over competition",
//       description:
//         "Great products are built through teamwork, trust, and shared knowledge.",
//     },
//   ];

//   return (
//     <section className="relative px-4 py-8 sm:px-6 md:px-12 lg:px-[3vw] lg:py-16">
//       <div className="mx-auto max-w-7xl rounded-2xl border border-[#15919B] bg-white/70 p-6 shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-xl sm:p-10">
//         {/* Header */}
//         <div className="flex items-center gap-3">
//           <FaLightbulb className="text-2xl text-[#15919B]" />

//           <h2 className="text-[26px] font-bold text-black sm:text-[30px] lg:text-[36px]">
//             My Philosophy
//           </h2>
//         </div>

//         {/* Divider */}
//         <div className="mt-4 h-1 w-16 rounded-full bg-[#15919B]" />

//         {/* Intro */}
//         <p className="mt-6 text-[16px] leading-relaxed text-gray-700 sm:text-[18px] lg:text-[20px]">
//           I believe that great code is more than functionality—it reflects
//           clarity, structure, and long-term maintainability. Every project is an
//           opportunity to solve meaningful problems, think creatively, and build
//           technology that improves people's lives.
//         </p>

//         {/* Philosophy List */}
//         <ul className="mt-6 space-y-4">
//           {philosophies.map((item) => (
//             <li
//               key={item.title}
//               className="flex items-start gap-3 text-gray-800"
//             >
//               <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#15919B]" />

//               <span>
//                 <strong>{item.title}</strong> — {item.description}
//               </span>
//             </li>
//           ))}
//         </ul>

//         {/* Closing */}
//         <p className="mt-6 text-[16px] leading-relaxed text-gray-700 sm:text-[18px] lg:text-[20px]">
//           My goal is to create software that is reliable, intuitive, and
//           impactful, delivering lasting value through simplicity, innovation,
//           and thoughtful design.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Philosophy;

import {
  Lightbulb,
  Code2,
  Users,
  Sprout,
  Handshake,
  type LucideIcon,
} from "lucide-react";

interface PhilosophyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const philosophies: PhilosophyItem[] = [
  {
    title: "Keep it simple",
    description:
      "Elegant, maintainable solutions are always better than unnecessary complexity.",
    icon: Code2,
  },
  {
    title: "User-first mindset",
    description: "Technology should adapt to people, not the other way around.",
    icon: Users,
  },
  {
    title: "Continuous learning",
    description:
      "Growth comes from curiosity and learning something new every day.",
    icon: Sprout,
  },
  {
    title: "Collaboration over competition",
    description:
      "Great products are built through teamwork, trust, and shared knowledge.",
    icon: Handshake,
  },
];

const Philosophy = () => {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:px-12 lg:px-[3vw] lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Left: heading + intro, sticky on large screens */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#15919B]/10 text-[#15919B]">
              <Lightbulb className="h-5 w-5" strokeWidth={1.75} />
            </div>

            <h2 className="mt-5 text-[28px] font-bold leading-tight text-[#0F2E33] sm:text-[34px] lg:text-[40px]">
              My philosophy
            </h2>

            <div className="mt-4 h-1 w-14 rounded-full bg-[#15919B]" />

            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-gray-600 sm:text-[17px]">
              Great code is more than functionality — it reflects clarity,
              structure, and long-term maintainability. Every project is a
              chance to solve meaningful problems and build technology that
              improves people's lives.
            </p>

            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-gray-600 sm:text-[17px]">
              My goal is software that's reliable, intuitive, and impactful —
              delivered through simplicity, care, and thoughtful design.
            </p>
          </div>

          {/* Right: philosophy items */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {philosophies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#15919B]/20 bg-white p-6 transition-colors duration-300 hover:border-[#15919B]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#15919B]/10 text-[#15919B] transition-colors duration-300 group-hover:bg-[#15919B] group-hover:text-white">
                    <Icon
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="mt-4 text-[17px] font-semibold text-[#0F2E33] sm:text-[18px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
