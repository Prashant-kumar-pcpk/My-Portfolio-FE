
import React from "react";
import { useNavigate } from "react-router-dom";
import herobg from "../assets/background1.jpg";
import {Typewriter} from "react-simple-typewriter";


export default function Main(){

  const navigate = useNavigate();

  const handleClick = () => {
    navigate ("/Home");
  }
  
    return(
         <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${herobg})`,
      }}
      onClick={handleClick}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4">

          {/* Profile Image */}
          <img
            src="/Prashant kr.png"
            alt="Profile"
            className="w-60 h-60 rounded-full border-4 border-white object-cover mx-auto shadow-2xl"
          />

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-5xl font-bold">
            Hi, I'm <span className="text-white">Prashant Kumar </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl md:text-2xl text-gray-300 tracking-widest uppercase">
            I'm Full Stack Developer
          </p>
          <div className="text-2xl mt-5 font-semibold text-orange-400">

              <Typewriter
                words={[
                  // "Full Stack Developer (MERN)",
                  "Full-Stack Software Engineer ", 
                  "Real-Time Systems ", 
                  "AI + React + Node.js"


                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
              />

            </div>
        </div>
      </div>
    </section>
    )
}