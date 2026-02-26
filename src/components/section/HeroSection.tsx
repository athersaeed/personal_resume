import { DATA } from "@/data/resume";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const github = DATA.contact.social.GitHub;
  const linkedin = DATA.contact.social.LinkedIn;

  return (
    <section id="hero" className="scroll-mt-32">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10">
        {/* Left: text content */}
        <div className="flex-1">
          {/* Role tag */}
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-indigo-500 mb-6">
            Software Engineer
          </p>

          {/* Name */}
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl text-[#0f0f0f] leading-[0.9] mb-8">
            {DATA.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-10">
            {DATA.description}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-500 transition-colors duration-200 group"
            >
              <Github
                size={16}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              GitHub
            </a>
            <span className="w-px h-4 bg-gray-300" aria-hidden />
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-500 transition-colors duration-200 group"
            >
              <Linkedin
                size={16}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-gray-300" aria-hidden />
            <a
              href={`mailto:${DATA.contact.email}`}
              aria-label="Send Email"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-500 transition-colors duration-200 group"
            >
              <ExternalLink
                size={16}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              {DATA.contact.email}
            </a>
          </div>
        </div>

        {/* Right: profile photo */}
        <div className="shrink-0 self-start sm:self-auto">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-2 ring-gray-200 hover:ring-indigo-400 transition-all duration-300">
            <Image
              src="/me.jpg"
              alt={`${DATA.name} profile photo`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-gray-200" />
    </section>
  );
}
