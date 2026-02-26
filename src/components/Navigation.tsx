"use client";

import Link from "next/link";
import { DATA } from "@/data/resume";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafafa]/90 backdrop-blur-md border-b border-gray-200/60 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-heading text-xl text-[#0f0f0f] hover:text-indigo-500 transition-colors duration-200"
          aria-label="Home"
        >
          {DATA.initials}.
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-gray-500 hover:text-[#0f0f0f] transition-colors duration-200 group"
            >
              {item.name}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
