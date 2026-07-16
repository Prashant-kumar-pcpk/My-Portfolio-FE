
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Movie Review App',
    description: 'Built a responsive React movie review app with live search, filter controls, detailed movie pages, and interactive star ratings. Features include dynamic movie listings, real-time search, advanced filtering by genre and year, and a 5-star rating system with persistent storage.',
    stack: ['React', 'Tailwind CSS', 'React Hooks', 'Mock API'],
    image: '/work-image/Review app.png',
    github: 'https://github.com/Prashant-kumar-pcpk/Movie-Review-app',
    live: 'https://pkmoviereviewapp.netlify.app',
  },
  {
    title: 'Full-Stack Blogging Platform',
    description: 'Delivered a full-stack blogging platform with React front-end and Express/MongoDB back-end supporting authentication, posts, comments, likes, and moderation. Includes JWT-based security, role-based access control, and comment spam detection.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: '/work-image/BloggingApp SC.png',
    github: 'https://github.com/Prashant-kumar-pcpk/FE-Blogging-Platform',
    live: 'https://prashantdairies-blogging-platform.netlify.app',
  },
  {
    title: 'Recipe App',
    description: 'Developed an interactive recipe search and discovery application with responsive design and dynamic content rendering. Users can browse recipes, search by ingredients or cuisine, view detailed instructions, and filter by dietary preferences.',
    stack: ['JavaScript', 'HTML', 'Tailwind CSS', 'API Integration'],
    image: '/work-image/Reciepe App.png',
    github: 'https://github.com/Prashant-kumar-pcpk/-Recipe-app',
    live: 'https://remarkable-fox-3b42ee.netlify.app',
  },
  {
    title: 'Holiday Finder App',
    description: 'Created a public holiday search tool using external API lookup, CSV export, dark mode toggle, and responsive results display. Users can search holidays by country and year, export results as CSV, and toggle between dark and light themes.',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript', 'Fetch API'],
    image: '/work-image/holiday finder app.png',
    github: 'https://github.com/Prashant-kumar-pcpk/Holiday-Finder-App',
    live: 'https://holidays-finder.netlify.app',
  },
  {
    title: 'Jokes-Pitara',
    description: 'Built an entertaining jokes application featuring dynamic joke fetching, category filtering, and smooth user interactions. Includes favorites functionality, sharing capabilities, and a clean UI designed for optimal user engagement and entertainment.',
    stack: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    image: '/work-image/jokes pitara.jpg',
    github: 'https://github.com/Prashant-kumar-pcpk/Jokes-Pitara',
    live: 'https://jokes-pitara.netlify.app',
  },
  {
    title: 'Life Dashboard',
    description: 'Developed a React dashboard for daily check-ins with analytics, timeline history, localStorage persistence, and data visualization using Recharts. Track focus, energy, and mood metrics with visual charts and historical timeline.',
    stack: ['React', 'Tailwind CSS', 'Recharts', 'LocalStorage'],
    image: '/work-image/life dashboard.webp',
    github: 'https://github.com/Prashant-kumar-pcpk/Life-Dashboard',
    live: 'https://life-dashboard.netlify.app',
  },
];

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-950 p-8 shadow-2xl"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{project.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={`modal-${project.title}-${tech}`} className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300 border border-cyan-400/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-slate-800 px-4 py-3 text-center font-semibold text-white transition hover:bg-slate-700">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400">
                Live Demo
              </a>
            </div>

            <button onClick={onClose} className="mt-6 w-full rounded-full border border-slate-700 py-2 font-semibold text-white transition hover:bg-slate-800">
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      setVisibleCount(width < 640 ? 1 : width < 1024 ? 2 : 3);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [maxIndex, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const showControls = visibleCount < projects.length;
  const translatePercent = -(activeIndex * (100 / visibleCount));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* <p className="mb-3 text-sm uppercase tracking-[0.2em] font-semibold text-cyan-400/70">Portfolio</p> */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Featured Projects</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            Explore my latest work showcasing expertise in React, Full-Stack development, and modern web technologies. All projects built with clean code, responsive design, and professional standards.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Top Right */}
          {showControls && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute -top-16 right-0 z-20 flex items-center gap-3"
            >
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-700 bg-slate-950 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-700 disabled:hover:shadow-none"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex >= maxIndex}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-700 bg-slate-950 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-700 disabled:hover:shadow-none"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          )}

          {/* Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${translatePercent}%)` }}
            >
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  className="flex-shrink-0 min-w-full sm:min-w-[50%] lg:min-w-[calc(33.333%-1rem)]"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group relative h-[520px] overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-950 to-slate-900 shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
                    {/* Image Container - Fixed Height */}
                    <div className="relative h-48 w-full flex-shrink-0 overflow-hidden bg-slate-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40" />
                    </div>

                    {/* Content Container - Fixed Layout */}
                    <div className="flex flex-1 flex-col justify-between gap-4 px-6 py-5">
                      {/* Title & Category */}
                      <div className="space-y-2 flex-shrink-0">
                        <p className="text-xs uppercase tracking-widest font-semibold text-cyan-400/70">Project</p>
                        <h3 className="text-xl font-bold text-white leading-snug group-hover:text-cyan-300 transition duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
  
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 flex-shrink-0">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={`${project.title}-${tech}`}
                            className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border border-cyan-400/30 text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="inline-block px-2 py-1 text-xs font-medium text-slate-400">
                            +{project.stack.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Dual Action Buttons */}
                      <div className="flex gap-3 pt-2 flex-shrink-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-full border border-slate-600 bg-slate-800/50 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-700 active:scale-95"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-cyan-500 active:scale-95"
                        >
                          Live Demo
                        </a>
                      </div>

                      {/* View More Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full rounded-full border border-cyan-400/30 bg-cyan-500/10 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-500/20"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Project Count Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-sm text-slate-400"
          >
            Showing {Math.min(activeIndex + visibleCount, projects.length)} of {projects.length} projects
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          <div className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg">
            <h3 className="text-lg font-bold text-white">Responsive Design</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Desktop (3 cards), Tablet (2 cards), and Mobile (1 card) layouts optimized for perfect viewing experience across all devices.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg">
            <h3 className="text-lg font-bold text-white">Tech Stack Focus</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Full-Stack development expertise with React, Node.js, MongoDB, Express, and modern JavaScript technologies.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
