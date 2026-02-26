import { DATA } from "@/data/resume";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-32">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-12">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
        <h2 className="font-heading text-3xl text-[#0f0f0f]">Projects</h2>
      </div>

      <div className="space-y-6">
        {DATA.projects.map((project, idx) => (
          <article
            key={idx}
            className="group relative border border-gray-200 rounded-xl p-7 bg-white hover:border-indigo-300 hover:shadow-sm transition-all duration-200"
          >
            {/* Title + links row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-heading text-xl text-[#0f0f0f] group-hover:text-indigo-600 transition-colors duration-200">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0 mt-1">
                {project.links.map((link, li) => {
                  const isSource = link.type === "Source";
                  return (
                    <a
                      key={li}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — ${link.type}`}
                      className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
                    >
                      {isSource ? (
                        <Github size={16} />
                      ) : (
                        <ExternalLink size={16} />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed text-[15px] mb-5">
              {project.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
