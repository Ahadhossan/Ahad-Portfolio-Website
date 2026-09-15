import { FaLightbulb } from "react-icons/fa";

const Philosophy = () => {
  const philosophies = [
    {
      title: "Keep it simple",
      description:
        "Elegant, maintainable solutions are always better than unnecessary complexity.",
    },
    {
      title: "User-first mindset",
      description:
        "Technology should adapt to people, not the other way around.",
    },
    {
      title: "Continuous learning",
      description:
        "Growth comes from curiosity and learning something new every day.",
    },
    {
      title: "Collaboration over competition",
      description:
        "Great products are built through teamwork, trust, and shared knowledge.",
    },
  ];

  return (
    <section className="relative px-4 py-8 sm:px-6 md:px-12 lg:px-[3vw] lg:py-16">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#15919B] bg-white/70 p-6 shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-xl sm:p-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <FaLightbulb className="text-2xl text-[#15919B]" />

          <h2 className="text-[26px] font-bold text-black sm:text-[30px] lg:text-[36px]">
            My Philosophy
          </h2>
        </div>

        {/* Divider */}
        <div className="mt-4 h-1 w-16 rounded-full bg-[#15919B]" />

        {/* Intro */}
        <p className="mt-6 text-[16px] leading-relaxed text-gray-700 sm:text-[18px] lg:text-[20px]">
          I believe that great code is more than functionality—it reflects
          clarity, structure, and long-term maintainability. Every project is an
          opportunity to solve meaningful problems, think creatively, and build
          technology that improves people's lives.
        </p>

        {/* Philosophy List */}
        <ul className="mt-6 space-y-4">
          {philosophies.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 text-gray-800"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#15919B]" />

              <span>
                <strong>{item.title}</strong> — {item.description}
              </span>
            </li>
          ))}
        </ul>

        {/* Closing */}
        <p className="mt-6 text-[16px] leading-relaxed text-gray-700 sm:text-[18px] lg:text-[20px]">
          My goal is to create software that is reliable, intuitive, and
          impactful, delivering lasting value through simplicity, innovation,
          and thoughtful design.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
