"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectSkillBox from "./project-skill-box";
import type { ProjectSummary } from "@/types/types";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";

interface ProjectCardProps {
  project: ProjectSummary;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Card
      index={index}
      className="bg-slate-800 border border-slate-700 h-full flex flex-col"
    >
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="flex gap-2 flex-wrap text-gray-300 mt-2">
          {project.skills?.map((skill, index) => (
            <ProjectSkillBox skill={skill} key={index} />
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="prose prose-invert">{project.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex justify-between w-full">
          <CardAction
            className="text-blue-300 hover:text-blue-400"
            href={`/projects/${project.name}`}
          >
            Learn More
          </CardAction>

          <Link href={project.link ?? ""} target="_blank">
            <SiGithub className="w-4 h-4 text-gray-300 hover:text-gray-200" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
