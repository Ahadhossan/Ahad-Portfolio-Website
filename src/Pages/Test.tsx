import React from "react";

const skills = [
  "Docker",
  "Figma",
  "React JS",
  "Capacitor JS",
  "JavaScript",
  "Jenkins",
  "Next JS",
  "Tailwind CSS",
  "TypeScript",
  "Grafana",
  "Hono JS",
  "Vue JS",
];

const Test: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-4">
      <div
        className="flex w-max whitespace-nowrap animate-[marquee_25s_linear_infinite]"
        style={{
          animation: "marquee 25s linear infinite",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="mx-8 flex items-center text-lg font-medium text-white"
          >
            <span>{skill}</span>
            <span className="ml-6 text-cyan-400 text-xl">●</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Test;
