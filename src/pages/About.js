import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/skill.avif';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiBootstrap,
} from 'react-icons/si';
import { FiAward, FiBookOpen, FiBriefcase, FiTarget } from 'react-icons/fi';

const skills = [
  { title: 'React.js', icon: SiReact, category: 'Frontend' },
  { title: 'JavaScript (ES6+)', icon: SiJavascript, category: 'Frontend' },
  { title: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { title: 'Express.js', icon: SiExpress, category: 'Backend' },
  { title: 'MySQL', icon: SiMysql, category: 'Database' },
  { title: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { title: 'Tailwind CSS', icon: SiTailwindcss, category: 'UI' },
  { title: 'HTML5', icon: SiHtml5, category: 'UI' },
  { title: 'CSS3', icon: SiCss, category: 'UI' },
  { title: 'Git', icon: SiGit, category: 'Collaboration' },
  { title: ' GitHub', icon: SiGithub, category: 'Collaboration' },
  { title: 'Bootstrap', icon: SiBootstrap, category: 'UI' },

];

const education = [
  {
    title: 'Bachelor of Computer Application (BCA)',
    institution: 'Sandip University',
    period: '2021 - 2024',
    description: 'Strong foundation in algorithms, data structures, OOP, and web application development.',
  },
  {
    title: 'Higher Secondary Certificate',
    institution: 'PDCP College Basaith',
    period: '2018 - 2020',
    description: 'Focused on Mathematics, Physics, and Computer Science with strong academic performance.',
  },
];

const experience = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'HCL GUVI',
    period: 'Jan 2024 - May 2024',
    description:
      'Contributed to client-facing web applications using React, Node.js, Express, and MongoDB. Improved user experience with responsive UI and reusable components.',
  },
];

const achievements = [
  'Built a full-stack portfolio project with authentication and admin dashboard.',
  'Won 1st place in a college hackathon for an AI-powered productivity app.',
  'Published technical blog posts on modern React patterns and clean component design.',
];

const objective =
  'To secure an entry-level software developer role where I can apply my MERN stack expertise, contribute to meaningful products, and continue growing within a high-performing engineering team.';

const About = () => {
  return (
    <main className="min-h-screen  text-slate-100 px-4 py-8 sm:px-6 lg:px-10"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-cyan-500/10 backdrop-blur-xl sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_35%)]" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  MERN Stack Developer
                </p>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Hi, I’m <span className="text-cyan-300">Prashant</span>.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  I build modern, responsive web applications with a polished user experience. I love turning ideas into production-ready projects using React, Node.js, Express, and MongoDB.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Years Learning</p>
                    <p className="mt-3 text-3xl font-semibold text-white"></p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/10">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Projects Delivered</p>
                    <p className="mt-3 text-3xl font-semibold text-white">5+</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Brand Statement</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Professional Profile</h2>
                <p className="mt-4 text-slate-300 leading-7">
                  I am a detail-oriented developer focused on clean code, accessible interfaces, and fast performance. My goal is to deliver recruitment-ready web experiences that make a strong first impression.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl bg-slate-900/80 p-4 text-sm text-slate-300 shadow-sm shadow-black/20">
                    <span className="block text-slate-200 font-medium">Primary Strength</span>
                    Full-stack development with a developer-first mindset and strong product intuition.
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 p-4 text-sm text-slate-300 shadow-sm shadow-black/20">
                    <span className="block text-slate-200 font-medium">Recruiter Friendly</span>
                    Clear communication, fast learning, and internship readiness for software teams.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                  <FiBookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Introduction</p>
                  <h2 className="text-2xl font-semibold text-white">About Me</h2>
                </div>
              </div>
              <p className="mt-6 text-slate-300 leading-8">
                I am a passionate MERN Stack Developer who enjoys crafting modern web applications with elegant interfaces. I build responsive, accessible products that solve real problems and help teams move quickly from concept to launch.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-300">
                  <FiTarget className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Career Objective</p>
                  <h2 className="text-2xl font-semibold text-white">What I’m aiming for</h2>
                </div>
              </div>
              <p className="mt-6 text-slate-300 leading-8">{objective}</p>
            </motion.article>
          </section>

          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-300">
                  <FiAward className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Achievements</p>
                  <h2 className="text-2xl font-semibold text-white">Highlights</h2>
                </div>
              </div>
              <ul className="mt-6 space-y-4 text-slate-300">
                {achievements.map((item) => (
                  <li key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:bg-white/10">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-500/10 p-3 text-sky-300">
                  <FiBriefcase className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Experience</p>
                  <h2 className="text-2xl font-semibold text-white"></h2>
                </div>
              </div>
              <div className="mt-6 space-y-6">
                {experience.map((item) => (
                  <div key={item.role} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10">
                    <p className="text-base font-semibold text-white">{item.role}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.company} • {item.period}</p>
                    <p className="mt-3 text-slate-300 leading-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </section>
        </div>

        <section className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Skills & Technologies</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Toolbox</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400">
              I use modern tools and libraries to create production-grade experiences, from UI design to backend APIs and deployment-ready applications.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="group rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-lg shadow-black/20 transition duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/15">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{skill.title}</p>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{skill.category}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-300">
                  <FiBookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Education</p>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-400">{item.institution} • {item.period}</p>
              <p className="mt-4 text-slate-300 leading-7">{item.description}</p>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default About;
