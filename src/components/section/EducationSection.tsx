import { DATA } from "@/data/resume";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-32">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-12">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
        <h2 className="font-heading text-3xl text-[#0f0f0f]">Education</h2>
      </div>

      <div className="space-y-8">
        {DATA.education.map((edu, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between gap-4 py-5 border-b border-gray-100 last:border-none"
          >
            <div>
              <a
                href={edu.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-lg text-[#0f0f0f] hover:text-indigo-500 transition-colors duration-200"
              >
                {edu.school}
              </a>
              <p className="text-sm text-gray-500 mt-0.5">{edu.degree}</p>
            </div>
            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gray-400 shrink-0 mt-1">
              {edu.start} — {edu.end}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
