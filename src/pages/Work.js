import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {projects} from "../data/myData";

/* ============== PROJECT MODAL ============== */
const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-12 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-2xl sm:p-8"
          >
            {/* Title */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {project.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {(Array.isArray(project.stack)
                  ? project.stack
                  : typeof project.stack === "string"
                  ? project.stack.split(",").map((s) => s.trim())
                  : []
                ).map((tech) => (
                  <span
                    key={`modal-${project.title}-${tech}`}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-slate-800 px-4 py-3 text-center font-semibold text-white transition hover:bg-slate-700"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Live Demo
              </a>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="mt-5 w-full rounded-full border border-slate-700 py-2.5 font-semibold text-white transition hover:bg-slate-800"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ============== PROJECT COMPONENT ================= */

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const [slideDistance, setSlideDistance] = useState(0);

  const carouselRef = useRef(null);

  /* ============== RESPONSIVE CARD COUNT ============== */

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  /* ================ CALCULATE CARD WIDTH + GAP =============== */
  useEffect(() => {
    const calculateSlideDistance = () => {
      if (!carouselRef.current) return;

      const firstCard = carouselRef.current.querySelector("article");

      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;

      // Tailwind gap-6 = 24px
      const gap = 24;

      setSlideDistance(cardWidth + gap);
    };

    calculateSlideDistance();

    const timer = setTimeout(calculateSlideDistance, 100);

    window.addEventListener("resize", calculateSlideDistance);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateSlideDistance);
    };
  }, [visibleCount]);

  /* ================== MAX INDEX ==================== */
  const maxIndex = Math.max(0, projects.length - visibleCount);

  /* ================ KEEP ACTIVE INDEX VALID =========== */
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  /* =============== PREVIOUS================ */
  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  /* =================== NEXT =================== */
  const handleNext = () => {
    setActiveIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const showControls = projects.length > visibleCount;

  return (
    <section
      id="work"
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="m-12 text-center"
        >
          <h2 className="text-4xl font-bold text-amber-400 sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200">
            Explore my latest work showcasing expertise in React, Full-Stack
            development, and modern web technologies. All projects built with
            clean code, responsive design, and professional standards.
          </p>
        </motion.div>

        {/* ============= CAROUSEL ================ */}
        <div className="relative">
          {/* Navigation Buttons */}

          {showControls && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className=" absolute -top-16 right-0 z-20 flex items-center gap-3 " >

              {/* PREVIOUS */}
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous projects"
                className=" flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-950 text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12 " >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* NEXT */}
              <button
                onClick={handleNext}
                disabled={activeIndex >= maxIndex}
                aria-label="Next projects"
                className=" flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-700 bg-slate-950 text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12 " >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          )}

          {/* =============  VIEWPORT ================= */}
          <div className="w-full overflow-hidden">
            {/* =============== TRACK =============== */}
            <div
              ref={carouselRef}
              className="flex gap-6"
              style={{
                transform: `translateX(-${activeIndex * slideDistance}px)`,
                transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {projects.map((project) => {
                const stackList = Array.isArray(project.stack)
                  ? project.stack
                  : typeof project.stack === "string"
                  ? project.stack.split(",").map((s) => s.trim())
                  : [];

                return (
                  <motion.article
                    key={project.title}
                    className="  w-full flex-shrink-0 sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] "
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* CARD */}

                    <div
                      className=" group flex h-[520px] flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-950 to-slate-900 shadow-xl transition-all duration-300  hover:border-amber-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 " >

                      {/* =============== IMAGE ============== */}
                      <div className="relative h-48 w-full flex-shrink-0 overflow-hidden bg-slate-800">
                        <img
                          src={project.image}
                          alt={project.title}
                          className=" h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 "
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50" />
                      </div>

                      {/* ============== CONTENT =============== */}
                      <div className="flex flex-1 flex-col justify-between gap-4 px-5 py-5 sm:px-6 ">
                        {/* TITLE */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/70">
                            Project
                          </p>

                          <h3 className=" line-clamp-2 text-xl font-bold leading-snug text-amber-400 transition duration-300 group-hover:text-cyan-300 " >
                            {project.title}
                          </h3>
                        </div>

                        {/* TECH STACK */}
                        <div className="flex flex-wrap gap-2">
                          {stackList.slice(0, 3).map((tech) => (
                            <span
                              key={`${project.title}-${tech}`}
                              className=" rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2  py-1 text-xs font-medium text-cyan-300 " >
                              {tech}
                            </span>
                          ))}

                          {stackList.length > 3 && (
                            <span className="px-2 py-1 text-xs text-slate-400">
                              +{stackList.length - 3} more
                            </span>
                          )}
                        </div>

                      {/* BUTTONS */}

                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" flex-1 rounded-full border border-slate-600 bg-slate-800/50 px-3 py-2.5 text-center text-sm font-semibold text-white transition-all  duration-300 hover:border-slate-500 hover:bg-slate-700 active:scale-95 " >
                          GitHub
                        </a>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" flex-1  rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-3 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:from-cyan-400 hover:to-cyan-500 hover:shadow-cyan-500/50 active:scale-95 " >
                          Live Demo
                        </a>
                      </div>

                      {/* VIEW DETAILS */}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="  w-full rounded-full border border-cyan-400/30 bg-cyan-500/10 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-amber-300/60  hover:bg-cyan-500/20 " >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
            </div>
          </div>

          {/* =============== COUNTER ============= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-sm text-slate-400"
          >
            Showing {Math.min(activeIndex + visibleCount, projects.length)} of{" "}
            {projects.length} projects
          </motion.div>
        </div>

        {/* ============ INFO CARDS ============= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 mx-10 grid gap-6 sm:grid-cols-2"
        >

          {/* RESPONSIVE DESIGN */}
          <div
            className=" rounded-xl border border-amber-700/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg " >
            <h3 className="text-lg font-bold text-white">Responsive Design</h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Desktop (3 cards), Tablet (2 cards), and Mobile (1 card) layouts
              optimized for perfect viewing experience across all devices.
            </p>
          </div>

          {/* TECH STACK */}
          <div
            className=" rounded-xl border border-amber-700/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg " >
            <h3 className="text-lg font-bold text-white">Tech Stack Focus</h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Full-Stack development expertise with React, Node.js, MongoDB,
              Express, and modern JavaScript technologies.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ============= PROJECT MODAL ============ */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
