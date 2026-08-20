import { motion } from "framer-motion";
import { FiCode, FiExternalLink, FiAward } from "react-icons/fi";

const achievements = [
  {
    icon: FiCode,
    title: "250+ Codekata Problems Solved",
    description:
      "Built a coding practice platform focused on algorithmic problem solving, providing an interactive environment for developers to solve programming challenges.",
    link: "https://www.guvi.in/code-kata/",
    linkText: "View Codekata Profile",
  },

  {
    icon: FiAward,
    title: "Rojgar Mela in Darbhanga",
    description:
          'Work as Junior Assistant of HR in Rojgar Mela (Job Mela) 2023, in Darbhanga.',
},
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-amber-400 sm:text-5xl">
            Achievements
          </h2>

          <p className="mt-3 text-lg text-slate-300">
            Milestones that mark the journey
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="flex gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 shadow-xl backdrop-blur-xl hover:border-amber-400/50 hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-300">
                    {achievement.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {achievement.description}
                  </p>

                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
                    >
                      {achievement.linkText}
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}