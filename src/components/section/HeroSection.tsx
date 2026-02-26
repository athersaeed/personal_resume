import { DATA } from "@/data/resume";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const github = DATA.contact.social.GitHub;
  const linkedin = DATA.contact.social.LinkedIn;

  return (
    <section id="hero" className="scroll-mt-32">
      {/* SVG Clip Path Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curvy-triangle" clipPathUnits="objectBoundingBox">
            <path d="M 0.5 0.05 C 0.8 0.05 0.95 0.5 0.95 0.8 C 0.95 0.95 0.05 0.95 0.05 0.8 C 0.05 0.5 0.2 0.05 0.5 0.05 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10">
        {/* Left: text content */}
        <div className="flex-1">
          {/* Role tag */}
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-indigo-500 mb-6">
            Software Engineer
          </p>

          {/* Name */}
          <h1 className="font-heading text-6xl sm:text-7xl md:text-[5.5rem] text-[#0f0f0f] leading-[0.9] mb-8">
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
        <div className="shrink-0 self-start sm:self-auto sm:ml-auto">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 group drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300">
            <div 
              className="w-full h-full bg-gray-100"
              style={{ clipPath: "url(#curvy-triangle)" }}
            >
              <Image
                src="/me.jpg"
                alt={`${DATA.name} profile photo`}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            {/* Subtle glow/shadow overlay to match the unique shape */}
            <div 
              className="absolute inset-0 border border-black/5 mix-blend-overlay"
              style={{ clipPath: "url(#curvy-triangle)" }}
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-gray-200" />
    </section>
  );
}
