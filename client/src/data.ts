import projectImage2 from "./assets/project2.png";
import backend from "./assets/course-backend.png";
import brainly from "./assets/brainly.png"
import seat1 from "./assets/Seat1.jpg"
import vibe from "./assets/vibe.png"


export const EXPERIENCES = [
    {
        title: "CIS Cloud Infra Engineer",
        company: "LTIMindtree",
        period: "2024 - 2026",
        description:
            "Working in the Cloud & Infrastructure Services (CIS) unit, collaborating with development teams on internal ticketing portal solutions and enterprise applications. Involved in backend API integration, authentication workflows, frontend development using React, and Azure-based cloud operations. Experienced with Azure DevOps, CI/CD pipelines, REST APIs, access management, and maintaining scalable cloud infrastructure solutions.",
    },
    {
        title: "Frontend Developer",
        company: "DigiBricks",
        period: "2025",
        description:
            "Worked as a frontend developer with experience in building dynamic, responsive, and user-friendly web interfaces using React.js, JavaScript, and Tailwind CSS. Contributed to multiple projects focused on performance optimization, reusable UI components, and delivering seamless user experiences across devices.",
    }
];

export const PROJECTS = [
    {
        title: "Seatify.",
        category: "Advance Backend Movie Seat Reservation App",
        colSpan: "md:col-span-2",
        image: seat1,
        anchor: "https://seatify-iota.vercel.app/",
        technologies: ["MERN", "Full Stack", "Node.js", "MongoDB"],
    },
    {
        title: "Brainly",
        category: "Second Brain Productivity App",
        colSpan: "md:col-span-1",
        image: brainly,
        anchor: "https://brainly-frontend-22lw.onrender.com/",
        technologies: ["MERN", "Full Stack", "Node.js", "MongoDB"],
    },
    {
        title: "Course Selling Application – Backend",
        category: "Scalable Backend Learning Platform API",
        image: backend,
        colSpan: "md:col-span-1",
        anchor: "https://github.com/Ananta2003/Ananta2003-course-selling-application-backend",
        technologies: ["MERN", "Auth [jwt,zod]", "Node.js", "MongoDB"],
    },
    {
        title: "Framer Landing ",
        category: "Modern Animated Frontend Experience",
        colSpan: "md:col-span-2",
        image: vibe,
        anchor: "https://framer-landing-page-nine.vercel.app/",
        technologies: ["Replit","React", "Tailwind CSS",],
    },
    {
        title: "Refokus Replica",
        category: "Modern Animated Frontend Experience",
        colSpan: "md:col-span-2",
        image: projectImage2,
        anchor: "https://refokus-home.vercel.app/",
        technologies: ["React", "Tailwind CSS", "Animation"],
    },

];

import { FaCode, FaMicrochip } from "react-icons/fa6";
import { BsDatabaseFill } from "react-icons/bs";

export const ToolKit = [
    {
        icon: FaCode,
        color: "text-cyan-400 m-4",
        title: "Frontend",
        tools: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
        icon: FaMicrochip,
        color: "text-violet-400 m-4",
        title: "Backend",
        tools: "Node.js, Express, Python, Go",
    },
    {
        icon: BsDatabaseFill,
        color: "text-indigo-400 m-4",
        title: "Database & Design",
        tools: "MongoDB, PostgreSQL, Figma, Framer",
    }, {
        icon: BsDatabaseFill,
        color: "text-indigo-400 m-4",
        title: "Database & Design",
        tools: "MongoDB, PostgreSQL, Figma, Framer",
    },
];
