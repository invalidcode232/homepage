"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import ProjectTextSkeleton from "@/components/modules/projects/project-text-skeleton";

export default function ProjectPage() {
  const [projectContent, setProjectContent] = useState<string>("");
  const { project } = useParams();

  const fetchProject = async () => {
    const response = await fetch(
      `/api/projects/content?projectName=${project}.md`
    );
    const data = await response.json();

    setProjectContent(data.content);
  };

  useEffect(() => {
    fetchProject();
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {projectContent ? (
        <div className="prose prose-invert">
          <Markdown>{projectContent}</Markdown>
        </div>
      ) : (
        <ProjectTextSkeleton />
      )}
    </motion.div>
  );
}
