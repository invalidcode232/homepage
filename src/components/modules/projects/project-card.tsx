"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface ProjectCardProps {
  projectName: string;
  onClick?: () => void;
  index: number;
}

export default function ProjectCard({
  projectName,
  onClick,
  index,
}: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      {/* Main card */}
      <div className="relative bg-slate-800 border border-slate-700 rounded-lg p-6 overflow-hidden transition-colors duration-200 group-hover:bg-slate-750">
        {/* Mouse-tracking border effect */}
        <div
          className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `conic-gradient(from 0deg at ${mousePosition.x}px ${mousePosition.y}px, 
              transparent 0deg, 
              rgba(59, 130, 246, 0.4) 30deg, 
              transparent 60deg, 
              transparent 300deg, 
              rgba(59, 130, 246, 0.4) 330deg, 
              transparent 360deg)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Project icon */}
          <motion.div
            className="w-10 h-10 bg-slate-700 rounded-lg mb-4 flex items-center justify-center group-hover:bg-slate-600 transition-colors duration-200"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
              className="text-white font-medium text-sm"
            >
              {projectName.charAt(0).toUpperCase()}
            </motion.div>
          </motion.div>

          {/* Project name */}
          <motion.h3
            className="text-lg font-medium text-white mb-2 group-hover:text-blue-300 transition-colors duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 + 0.3 }}
          >
            {projectName}
          </motion.h3>

          {/* Project description */}
          <motion.p
            className="text-slate-400 text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 + 0.4 }}
          >
            Click to explore this project
          </motion.p>

          {/* Action indicator */}
          <motion.div
            className="flex items-center text-slate-400 text-sm group-hover:text-blue-300 transition-colors duration-200"
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 + 0.5 }}
            whileHover={{ x: 2 }}
          >
            <span>Open Project</span>
            <motion.svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
