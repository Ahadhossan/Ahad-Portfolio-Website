import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkWithMeButton = () => {
  return (
    <Link
      to="/work-with-me"
      aria-label="Work With Me"
      className="
        group fixed right-6 top-72 z-[9999]
        flex h-16 w-16 items-center justify-end
        overflow-visible
      "
    >
      {/* Expanded text */}
      <div
        className="
          absolute right-8
          flex h-12 w-0 items-center
          overflow-hidden rounded-full
          border border-blue-500/70
          bg-[#07111f]/95
          opacity-0
          backdrop-blur-xl
          transition-all duration-500
          ease-out
          group-hover:w-32
          group-hover:opacity-100
        "
      >
        <span
          className="
            whitespace-nowrap pl-5 pr-14
            text-sm font-medium text-white
          "
        >
          Click Me
        </span>
      </div>

      {/* Outer animated rings */}
      <span
        className="
          absolute inset-0
          rounded-full
          border border-blue-500/30
          animate-[spin_8s_linear_infinite]
        "
      />

      <span
        className="
          absolute -inset-2
          rounded-full
          border border-purple-500/20
          animate-pulse
        "
      />

      {/* Main circular button */}
      <div
        className="
          relative z-10
          flex h-16 w-16 shrink-0
          items-center justify-center
          rounded-full
          border-4 border-blue-500
          bg-gradient-to-br
          from-blue-500
          via-indigo-500
          to-purple-600
          shadow-[0_0_25px_rgba(59,130,246,0.35)]
          transition-all duration-500
          group-hover:scale-105
          group-hover:border-purple-400
          group-hover:shadow-[0_0_40px_rgba(99,102,241,0.55)]
        "
      >
        {/* Inner circle */}
        <div
          className="
            flex h-[54px] w-[54px]
            items-center justify-center
            rounded-full
            bg-[#07111f]
          "
        >
          <div className="flex flex-col items-center leading-none">
            <span className="text-[12px] font-semibold text-white">Work</span>

            <span className="text-[12px] font-semibold text-white">
              With Me
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="mt-1 text-white"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkWithMeButton;
