 import { motion } from 'framer-motion';
 import bg from '../assets/skill.avif';
 import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiHtml5,
  SiCss,
  SiGithub,
  SiBootstrap,
 
} from 'react-icons/si';



export default function Skills() {

    
  const skills = [
    { title: 'React.js', icon: SiReact, category: 'Frontend' },
    { title: 'JavaScript (ES6+)', icon: SiJavascript, category: 'Frontend' },
    { title: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
    { title: 'Express.js', icon: SiExpress, category: 'Backend' },
    { title: 'MongoDB', icon: SiMongodb, category: 'Database' },
    { title: 'MySQL', icon: SiMysql, category: 'Database' },
    { title: 'Tailwind CSS', icon: SiTailwindcss, category: 'UI' },
    { title: 'HTML5', icon: SiHtml5, category: 'UI' },
    { title: 'CSS3', icon: SiCss, category: 'UI' },
    { title: 'Git & GitHub', icon: SiGithub, category: 'Collaboration' },
    { title: 'Bootstrap', icon: SiBootstrap, category: 'UI' }    
  ];

  return (

     <main className="min-h-screen text-slate-100 px-4 py-8 sm:px-6 lg:px-10"
     style={{
             backgroundImage: `url(${bg})`,
               }} >

      <div className="mx-auto max-w-7xl">

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
      </div>
    </main>
  )
};