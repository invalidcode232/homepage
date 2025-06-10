"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";

interface ProjectGridProps {
  projects: string[];
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.slice(0, -3)}
          description="This is a description"
          link={project}
        />
      ))}
    </motion.div>
  );
}
