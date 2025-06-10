"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TFileSystem from "@/lib/fs-api/fs-api";
import { ProjectGrid, ProjectSkeleton } from "@/components/modules/projects";
import { ProjectSummaryListSchema, ProjectSummarySchema } from "@/types/types";
import type { ProjectSummary } from "@/types/types";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const projectList = await TFileSystem.getFileSummary(
          "/api/projects/summary",
          ProjectSummaryListSchema
        );

        if (projectList) {
          setProjects(projectList);
        } else {
          setError("Failed to load projects");
        }
      } catch (err) {
        setError("An error occurred while fetching projects");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // const handleProjectClick = (projectName: string) => {
  //   console.log(`Opening project: ${projectName}`);
  //   // Add your project opening logic here
  // };

  if (loading) {
    return <ProjectSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-white mb-2">
            Error Loading Projects
          </h2>
          <p className="text-slate-400 text-sm mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors duration-200"
          >
            Retry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-medium text-white mb-2">My Projects</h1>
      {projects.length === 0 ? (
        <div className="flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              No Projects Found
            </h2>
            <p className="text-gray-400">
              Your projects will appear here once they&apos;re available.
            </p>
          </motion.div>
        </div>
      ) : (
        // <ProjectGrid projects={projects} onProjectClick={handleProjectClick} />
        <ProjectGrid projects={projects} />
      )}
    </div>
  );
}
