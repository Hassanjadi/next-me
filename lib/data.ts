import React from "react";
import { FaReact } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import LokerIn from "@/public/LokerIn.jpg";
import RentalIn from "@/public/RentalIn.jpg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UI/UX Designer",
    location: "Malang, Indonesia",
    description:
      "I graduated after 6 months of internship. I learned a lot about the process of creating a UI/UX properly and correctly. Created several projects for work experience. Also working on real projects with a team to learn to work together with other people (team).. I immediately found a job as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full Stack Web (Javascript)",
    location: "Remote",
    description:
      "I studied as a full-stack developer for 6 months using 2 languages ​​(javascript & typescript). I also upgraded my skills to full stack web.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "State.id",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "LokerIn",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Javascript", "Tailwind", "Context"],
    imageUrl: LokerIn,
    link: "https://lokerin-job-vacancy.vercel.app/",
  },
  {
    title: "RentalIn",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Javascript", "Bootstrap", "Context"],
    imageUrl: RentalIn,
    link: "https://car-rental-png.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "NPM",
  "Tailwind",
  "Bootstrap",
  "Knex",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
  "Docker",
] as const;
