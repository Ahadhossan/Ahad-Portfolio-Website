// @format
import { memo } from "react";

/**
 * Reusable skills block with chips.
 * - Accessible: proper landmarks + aria-labelledby
 * - Reusable: accepts title and items as props
 * - Dark-mode friendly and responsive
 */
const Tools = memo(function LanguagesFrameworks({
  title = "Tools & IDEs",
  items = ["VSCode", "PyCharm", "Cursor", "Laragon", "XAMPP"],
}) {
  const headingId = "skills-lang-fw";

  return (
    <section
      aria-labelledby={headingId}
      className="relative px-4 sm:px-6 md:px-12 lg:px-[3vw] py-6 lg:py-8"
    >
      <div className="max-w-7xl mx-auto bg-white/60 dark:bg-slate-900/60 border border-[#15919B]/60 dark:border-[#59dce6]/60 rounded-2xl shadow-lg p-4 sm:p-6 backdrop-blur-md transition-shadow duration-300 hover:shadow-xl">
        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <h2
            id={headingId}
            className="text-[22px] sm:text-[24px] lg:text-[26px] font-bold text-black dark:text-white"
          >
            {title}
          </h2>
        </div>

        {/* Chips */}
        <ul className="flex flex-wrap gap-2 sm:gap-3">
          {items.map((label) => (
            <li key={label}>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700
                           bg-white/80 dark:bg-slate-800/70 px-3 py-1 text-[12px] sm:text-[14px] lg:text-[16px]
                           text-gray-800 dark:text-slate-200 shadow-sm hover:shadow transition 
                           focus:outline-none font-bold focus-visible:ring-2 focus-visible:ring-[#15919B]/60 dark:focus-visible:ring-[#59dce6]/60 hover:bg-teal-300 dark:hover:bg-teal-600 cursor-pointer"
                role="listitem"
                tabIndex={0}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default Tools;
