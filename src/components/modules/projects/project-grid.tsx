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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      {projects.map(
        (project, index) => (
          console.log(project), (<ProjectCard key={index} project={project} />)
        )
      )}
    </motion.div>
  );
}
