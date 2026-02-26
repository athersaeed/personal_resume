import { DATA } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-32">
      {/* Divider */}
      <div className="h-px bg-gray-200 mb-16" />

      <div className="text-center">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-indigo-500 mb-4">
          Get in touch
        </p>
        <h2 className="font-heading text-5xl sm:text-6xl text-[#0f0f0f] leading-tight mb-6">
          Let&apos;s talk.
        </h2>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto leading-relaxed">
          Open to new opportunities, collaborations, or just a good conversation
          about software.
        </p>

        {/* Email link */}
        <a
          href={`mailto:${DATA.contact.email}`}
          className="inline-block text-lg font-medium text-indigo-500 underline underline-offset-4 decoration-indigo-300 hover:decoration-indigo-500 transition-colors duration-200 mb-12"
        >
          {DATA.contact.email}
        </a>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 hover:scale-110 transform"
          >
            <Github size={20} />
          </a>
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${DATA.contact.email}`}
            aria-label="Email"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-200 hover:scale-110 transform"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Footer line */}
        <p className="mt-16 text-xs text-gray-300">
          {DATA.name} · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
