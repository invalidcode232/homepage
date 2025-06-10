"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import { ProjectSummary } from "@/types/types";

interface ProjectGridProps {
  projects: ProjectSummary[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Calculate grid dimensions for full page coverage
  const getGridClasses = () => {
    // Base: 3 rows for mobile, 4 rows for larger screens
    // This ensures cards fill the available height
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full grid-rows-3 md:grid-rows-4 auto-rows-fr";
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${getGridClasses()} min-h-[calc(100vh-12rem)]`}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  );
}
