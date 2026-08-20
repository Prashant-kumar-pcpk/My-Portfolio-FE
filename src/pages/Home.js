import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Achievements from "./Achievement";
import Contact from "./Contact";

export default function Home() {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let targetId = null;
    if (location.hash) {
      targetId = location.hash.replace("#", "");
    } else {
      const path = location.pathname.replace("/", "").toLowerCase();
      if (path && path !== "home") {
        targetId = path;
      }
    }

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location]);

  return (
    <div className="relative">
      {/* 1. Hero / Home Section */}
      <section id="home" className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
        {/* Background Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

        {/* Main Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">
          {/* Resume Button */}
          <div className="mb-8 flex justify-end sm:mb-10">
            <motion.a
              href="/prashant kumar-cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-cyan-500/40 sm:px-5 sm:py-3 sm:text-base"
            >
              <Download
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              Resume
            </motion.a>
          </div>

          {/* Hero Content */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mb-4 text-lg text-cyan-400 sm:text-xl">
                👋 Welcome
              </h3>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                Hi, I'm
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
                  Prashant Kumar
                </span>
              </h1>

              <div className="mt-5 text-xl font-semibold text-orange-400 sm:text-2xl">
                <Typewriter
                  words={["Full Stack Developer (MERN)"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={60}
                />
              </div>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8">
                Passionate Full Stack Developer specializing in React,
                Node.js, Express.js and MongoDB. I build modern, responsive,
                scalable and user-friendly web applications that solve
                real-world problems and provide outstanding user experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 sm:mt-10 sm:gap-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("work")}
                  className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-gray-900 shadow-xl transition hover:bg-amber-700 hover:text-white sm:px-8 sm:py-4"
                >
                  View My Work
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full border border-amber-300 px-6 py-3 font-semibold text-cyan-400 transition-all hover:bg-orange-600 hover:text-white sm:px-8 sm:py-4"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              className="order-1 flex justify-center lg:order-2"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Image Glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

                <img
                  src="/prashant.jpg"
                  alt="Prashant Kumar"
                  className="relative h-68 w-68 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_40px_rgba(6,182,212,0.5)] sm:h-80 sm:w-80 lg:h-[430px] lg:w-[430px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <About />

      {/* 3. Skills Section */}
      <Skills />

      {/* 4. Projects / Work Section */}
      <Work />

      {/* 5. Achievements Section */}
      <Achievements />

      {/* 6. Contact Us Section */}
      <Contact />
    </div>
  );
}