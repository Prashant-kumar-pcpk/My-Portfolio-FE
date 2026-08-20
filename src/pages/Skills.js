
import { motion } from "framer-motion";
import { skillGroups } from "../data/skillData";
import { GiSkills } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-4 pt-24 pb-16 text-slate-100 sm:px-6 sm:pt-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Main Skills Container */}
        <section className="overflow-hidden rounded-3xl border-2 object-cover shadow-[0_0_40px_rgba(6,182,212,0.5)] bg-slate-950/75 p-6 backdrop-blur-xl sm:p-8 lg:p-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 border-b border-white/10 pb-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="flex items-center gap-4">

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
              >
                <GiSkills className="h-8 w-8" />
              </motion.div>

              {/* Title */}
              <div>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-amber-500  sm:text-4xl">
                  Tools & Technologies
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-slate-400">
              Tools & technologies I use to build modern interfaces,
              backend systems, real-time applications, and production-ready
              products.
            </p>
          </motion.div>

          {/* Skill Groups */}
          <div className="m-4 grid gap-5 md:grid-cols-3">

            {skillGroups.map((group, groupIndex) => (
              <motion.article
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: groupIndex * 0.08,
                }}
                // whileHover={{
                //   y: -4,
                // }}
                whileHover={{
                    rotate: 5,
                  }}
                className="m-3 group rounded-xl border px-4 border-amber-400 object-cover shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300 hover:border-amber-600 hover:bg-slate-900/90"
              >

                {/* Category Header */}
                <div className="mb-5 flex  items-start justify-between gap-6">
                 <div>
                    <h2 className="mt-1 flex items-center gap-2 text-xl font-bold text-amber-500">
                      {group.icon && <group.icon className="h-5 w-5 text-cyan-400" />}
                      {group.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      {group.description}
                    </p>
                  </div>

                  <FiArrowUpRight
                    className="mt-1 h-5 w-5 text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </div>

                {/* Technologies */}
                <div className="w-3/5 flex flex-col gap-2">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          scale: 1.04,
                        }}
                        className="flex items-center gap-2 rounded-xl  px-3 py-2 text-sm text-slate-100 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                      >
                        <Icon
                          className="h-4 w-4 text-cyan-400"
                          aria-hidden="true"
                        />

                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.article>
            ))}

          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] px-5 py-4 text-center"
          >
            <p className="text-sm text-slate-400">
              Always learning, experimenting, and building with modern
              technologies.
            </p>
          </motion.div>

        </section>
      </div>
    </section>
  );
}