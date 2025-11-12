/** @format */

import { useEffect, memo, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample data (replace with API/props)
const projects = [
  {
    title: "Food Ordering App",
    status: "Completed",
    tech: "React, Tailwind CSS, JavaScript, Firebase",
    description:
      "A modern food-ordering SPA with cart, checkout, and order tracking. Built with React + Tailwind.",
    // Prefer avoiding spaces in asset filenames, e.g. Food_ordering_app.png
    imgSrc: "/src/assets/Food ordering app.png",
    view: "View Project",
    viewlink: "https://food-delivery-app-web.vercel.app/", // internal route example
    github: "Source Code",
    githubLink: "https://github.com/Ahadhossan/Food-Delivery-App-Web-",
  },
  {
    title: "Meal-Khuj",
    status: "Completed",
    tech: "React, Tailwind CSS, JavaScript, TheMealDB API",
    description:
      "Discover a wide variety of delicious meal recipes tailored just for you. Browse the listings, save your favorites, and dive into easy-to-follow instructions—all in one sleek app.",
    imgSrc: "/src/assets/Meal-khuj.png",
    view: "View Project",
    viewlink: "https://recipe-app-mocha-omega.vercel.app/", // internal route example
    github: "Source Code",
    githubLink: "https://github.com/Ahadhossan/Recipe-App",
  },
];

const FinishedProject = memo(function FinishedProject() {
  // State for showing more or less projects
  const [showAllRBuildProject, setShowAllBuildProject] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto mb-6 px-4 sm:px-6">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2">
          {projects
            .slice(0, showAllRBuildProject ? projects.length : 2)
            .map((p, idx) => (
              <article
                key={`${p.title}-${idx}`}
                className="py-6 px-6 bg-[#ebe7e7] dark:bg-[#0a0a0a] rounded-xl shadow-lg w-full"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                {/* Image */}
                <div className="flex justify-center w-full md:justify-start">
                  {/* Use loading="lazy" for perf */}
                  <img
                    src={p.imgSrc}
                    alt={p.title}
                    loading="lazy"
                    className="w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;utf8,\
                      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>\
                      <rect width='100%' height='100%' fill='%23e5e7eb'/>\
                      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='24'>Image not found</text>\
                      </svg>";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="mt-4 space-y-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    <a href="/">{p.title}</a>
                  </h3>

                  <h2 className="py-2 text-black dark:text-white">
                    <span className="text-green-400">Tech Stack:</span> {p.tech}
                  </h2>

                  <p className="text-black/80 dark:text-white/80">
                    <span className="text-green-500 font-medium">Status:</span>{" "}
                    {p.status}
                  </p>

                  <p className="text-black dark:text-white">{p.description}</p>

                  {/* Actions */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {/* View Project: internal links use <Link>; external use <a> */}
                    {p.viewlink?.startsWith("/") ? (
                      <Link
                        to={p.viewlink}
                        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#15919B] to-[#2CC295] hover:opacity-95 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#15919B]/40 transition"
                        aria-label={`Open ${p.title}`}
                      >
                        {p.view}
                      </Link>
                    ) : (
                      <a
                        href={p.viewlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#15919B] to-[#2CC295] hover:opacity-95 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#15919B]/40 transition"
                        aria-label={`Open ${p.title}`}
                      >
                        {p.view}
                      </a>
                    )}

                    {/* GitHub */}
                    {p.githubLink && (
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-black dark:text-white border border-black/20 dark:border-white/20 hover:border-green-400 dark:hover:border-green-400 hover:text-green-500 dark:hover:text-green-400 transition"
                        aria-label={`Open GitHub for ${p.title}`}
                      >
                        {p.github}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAllBuildProject(!showAllRBuildProject)}
            className={`px-6 py-2 text-white rounded-lg transition duration-300 ${
              showAllRBuildProject
                ? "bg-[#15919B] hover:bg-[#0d8b83]"
                : "bg-green-400 hover:bg-green-600"
            }`}
          >
            {showAllRBuildProject ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
});

export default FinishedProject;
