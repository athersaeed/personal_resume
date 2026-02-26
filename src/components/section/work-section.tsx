import { DATA } from "@/data/resume";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-32">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-12">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
        <h2 className="font-heading text-3xl text-[#0f0f0f]">Experience</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical rule */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200" aria-hidden />

        <div className="space-y-14">
          {DATA.work.map((role, idx) => (
            <div key={idx} className="relative pl-7">
              {/* Dot */}
              <span className="absolute left-[-4px] top-[7px] w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-[#fafafa]" aria-hidden />

              {/* Date */}
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-indigo-500 mb-2">
                {role.start} — {role.end}
              </p>

              {/* Company + location */}
              <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xl text-[#0f0f0f] hover:text-indigo-500 transition-colors duration-200"
                >
                  {role.company}
                </a>
                <span className="text-sm text-gray-400">{role.location}</span>
              </div>

              {/* Title */}
              <p className="text-sm font-semibold text-gray-600 mb-3">
                {role.title}
              </p>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
