import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center">

       {/* Resume Button */}
      <div className="absolute top-6 right-6 lg:right-12 z-16">
        <motion.a
          href="/prashant kumar-cv.pdf" // Put your resume inside the public folder
          download
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-4 py-2 text-white font-semibold shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
        >
          <Download
            size={20}
            className="group-hover:-translate-y-1 transition-transform duration-300"
          />

          Resume
        </motion.a>
      </div>
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">


        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <h3 className="text-cyan-400 text-xl mb-4">
              👋 Welcome 
            </h3>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
              Hi, I'm
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Prashant Kumar
              </span>
            </h1>

            <div className="text-2xl mt-5 font-semibold text-orange-400">

              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                 
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
              />

            </div>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
              Passionate Full Stack Developer specializing in React,
              Node.js, Express.js and MongoDB.
              I build modern, responsive, scalable and user-friendly web
              applications that solve real-world problems and provide
              outstanding user experiences.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .95 }}
                onClick={() => navigate("/work")}
                className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-700 text-white font-semibold shadow-xl"
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .95 }}
                onClick={() => navigate("/sendMail")}
                className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
              >
                Contact Me
              </motion.button>

            </div>
          </motion.div>

           {/* Right Side */}
          <motion.div  className="flex justify-center order-1 lg:order-2 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}>

            <motion.div
              animate={{
                y: [0, -20, 0]
              }}

              transition={{
                duration: 4,
                repeat: Infinity
              }}
              className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30" />

              <img
                src="prashant.jpg"
                alt="Prashant"
                className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_50px_rgba(6,182,212,.6)]"
                  />
            </motion.div>

          </motion.div> 

        </div>

      </div>

    </div>
  );
}