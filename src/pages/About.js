import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiTarget } from 'react-icons/fi';
import { education, objective } from '../data/myData';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen text-slate-100 px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-slate-900/60 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_35%)]" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-amber-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  MERN Stack Developer
                </p>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Hi, I’m <span className="text-cyan-300">Prashant</span>.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I build modern, responsive, and scalable web applications with a strong focus on performance and user experience. I turn ideas into production-ready solutions using React, Node.js, Express.js, and MongoDB, creating clean interfaces, robust APIs, and reliable applications designed to solve real-world problems.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Experience</p>
                    <p className="mt-3 text-3xl font-semibold text-white">2+ Years</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/10">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Projects Delivered</p>
                    <p className="mt-3 text-3xl font-semibold text-white">5+</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl font-mono text-sm">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10 text-xs text-slate-400">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-slate-400">prashant.config.js</span>
                </div>
                <div className="mt-4 space-y-2 text-xs sm:text-sm">
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-amber-400">name</span>: <span className="text-emerald-300">'Prashant Kumar'</span>,</p>
                  <p className="pl-4"><span className="text-amber-400">role</span>: <span className="text-emerald-300">'Full Stack Developer'</span>,</p>
                  <p className="pl-4"><span className="text-amber-400">skills</span>: [<span className="text-cyan-200">'React'</span>, <span className="text-cyan-200">'Node'</span>, <span className="text-cyan-200">'MongoDB'</span>],</p>
                  <p className="pl-4"><span className="text-amber-400">passion</span>: <span className="text-emerald-300">'Building Scalable Web Apps'</span>,</p>
                  <p className="pl-4"><span className="text-amber-400">availableForHire</span>: <span className="text-purple-400">true</span></p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

 {/*  =================== Career Objective ==================== */}
          <section className="mx-8 mt-12 mb-8 space-y-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">

              {/* Center Golden Line */}
              <div className=" pointer-events-none absolute bottom-0 left-1/3 top-0 hidden w-[6px] -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-500 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)] md:block " />

              {/* Content */}
              <div className="grid items-center gap-8 md:grid-cols-3">

                {/* LEFT - Header */}
                <div className="flex items-center gap-4 md:pr-8">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                    <FiTarget className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      Career Objective
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-amber-400 sm:text-2xl">
                      What I’m aiming for
                    </h2>
                  </div>
                </div>

                {/* RIGHT - Content */}
                <div className="md:pl-8 md:col-span-2">
                  <p className="text-base leading-8 text-slate-300">
                    {objective}
                  </p>
                </div>
              </div>
            </motion.article>
          </section>

{/* ==============Education====================== */}
        <section className=" mx-8 mt-8 space-y-8">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
              
              {/* Center Golden Line */}
              <div className=" pointer-events-none absolute bottom-0 left-1/3 top-0 hidden w-[6px] -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-500 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)] md:block"/>

              {/* Content */}
              <div className="grid items-center gap-8 md:grid-cols-3">

                {/* LEFT - Education Header */}
                <div className="flex items-center gap-4 md:pr-8">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                    <FiBookOpen className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      Education
                    </p>

                    <h3 className="mt-1 break-words text-xl font-semibold text-amber-400 sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                </div>

                {/* RIGHT - Education Details */}
                <div className="min-w-0 md:col-span-2 md:pl-8 ">

                  <p className="break-words text-sm font-medium text-slate-400">
                    {item.institution}
                    <span className="mx-2 text-amber-400">•</span>
                    {item.period}
                  </p>

                  <p className="mt-4 break-words text-base leading-7 text-slate-300">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default About;
