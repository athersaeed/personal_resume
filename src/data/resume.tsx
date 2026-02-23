import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Syed Ather Saeed",
  initials: "SA",
  url: "https://getmeadonut.live",
  location: "Waterloo, ON",
  locationLink: "https://www.google.com/maps/place/Waterloo,+ON",
  description:
    "CS student at Wilfrid Laurier University building full-stack web apps and data-driven tools. I love crafting scalable backends and clean, interactive front-ends.",
  summary:
    "I'm a Computer Science student at [Wilfrid Laurier University](/#education) with a passion for building production-ready software. I've shipped a [live creator donation platform](https://getmeadonut.live) powered by Next.js 16, Stripe, and MongoDB, engineered relational database systems with MySQL and Python, and built data visualization tools with Matplotlib and NumPy. I'm always looking to apply my skills across the full stack — from serverless APIs to rich desktop applications.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "syedathersaeed@example.com",
    tel: "+1-000-000-0000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/athersaeed",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/syedathersaeed/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/syedathersaeed",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:syedathersaeed@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ChaseBPO",
      href: "https://chasebpo.com",
      badges: [],
      location: "Toronto, ON",
      title: "E-commerce Coordinator & Technology Support",
      logoUrl: "/chasebpo.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Streamlined team operations and reduced onboarding time by training new hires on customer service protocols and inventory management systems. Enhanced website UX and visual design by conducting functionality analyses and managing WordPress updates, including image scaling and payment portal integration. Optimized inventory accuracy and sales reporting utilizing MS Excel and SQL for rigorous data tracking and performance reports. Ensured seamless execution of virtual events and internal communication by providing real-time technical support and troubleshooting connectivity issues.",
    },
  ],

  education: [
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/laurier.png",
      start: "Sep 2022",
      end: "Jul 2026",
    },
    {
      school: "Coursera",
      href: "https://coursera.org",
      degree: "Meta Database Engineer Professional Certificate",
      logoUrl: "/coursera.png",
      start: "Jan 2024",
      end: "Jan 2024",
    },
  ],

  projects: [
    {
      title: "Get Me A Donut",
      href: "https://getmeadonut.live",
      dates: "2024",
      active: true,
      description:
        "A scalable creator support platform built with Next.js 16 and MongoDB, enabling users to accept secure one-time donations through personalized, dynamic profile pages. Architected a serverless backend using Next.js Server Actions, reducing client bundle size by 30% and enhancing security. Integrated Stripe Checkout with a dynamic key management system for seamless payout connections with 0% platform latency.",
      technologies: [
        "Next.js 16",
        "React",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://getmeadonut.live",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Little Lemon Restaurant DBMS",
      href: "https://github.com/syedathersaeed/little-lemon-dbms",
      dates: "2024",
      active: true,
      description:
        "Designed and implemented a normalized relational database schema ensuring data integrity across Bookings, Orders, and Customer tables. Engineered ACID-compliant transactions and stored procedures (e.g., AddValidBooking) to handle concurrent reservations and prevent double-booking. Integrated Python with MySQL using prepared statements to prevent SQL injection. Visualized raw sales data and trends using Tableau dashboards.",
      technologies: ["MySQL", "Python", "SQL", "Tableau"],
      links: [
        {
          type: "Source",
          href: "https://github.com/syedathersaeed/little-lemon-dbms",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Desktop Workout Progress Tracker",
      href: "https://github.com/syedathersaeed/workout-tracker",
      dates: "2024",
      active: true,
      description:
        "Engineered a desktop fitness tracking application using Python and Tkinter with a normalized SQLite database. Developed real-time data visualization dashboards using Matplotlib with dual-axis graphs to correlate weight trends with strength performance. Implemented a gamification system using NumPy to generate dynamic competitor baselines. Built robust data integrity algorithms with automated speed calculations and cascading delete functionality.",
      technologies: ["Python", "SQLite", "Matplotlib", "NumPy", "Tkinter"],
      links: [
        {
          type: "Source",
          href: "https://github.com/syedathersaeed/workout-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    win?: string;
    mlh?: string;
    links: { title: string; icon: React.ReactNode; href: string }[];
  }[],
} as const;
