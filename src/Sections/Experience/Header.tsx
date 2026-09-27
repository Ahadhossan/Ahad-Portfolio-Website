import React from "react";

const TopHeader = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32"
    >
      {/* Eyebrow */}
      <div className="mb-6 flex items-center gap-3 md:mb-8">
        <span className="h-[3px] w-8 bg-[#2a7fa3]" />
        <span className="font-space text-xs uppercase tracking-[0.25em] text-[#42464e] text-[22px]">
          Experience
        </span>
      </div>
    </section>
  );
};

export default TopHeader;
