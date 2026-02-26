const skillCategories = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Tkinter", "Matplotlib", "NumPy"],
  },
  {
    label: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Docker", "Git", "Stripe", "Tableau"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-32">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-12">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
        <h2 className="font-heading text-3xl text-[#0f0f0f]">Skills</h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-10">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-400 mb-4">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm text-gray-600 border border-gray-200 rounded-full hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-150 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
