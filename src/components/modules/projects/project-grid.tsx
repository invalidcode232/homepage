"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";

interface ProjectGridProps {
  projects: string[];
  onProjectClick?: (projectName: string) => void;
}

export default function ProjectGrid({
  projects,
  onProjectClick,
}: ProjectGridProps) {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.slice(0, -3)}
          index={index}
          onClick={() => onProjectClick?.(project)}
        />
      ))}
    </motion.div>
  );
}
