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
import Link from "next/link";
import ProjectSkillBox from "./project-skill-box";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  link,
  index = 0,
}: ProjectCardProps) {
  return (
    <Card index={index} className="bg-slate-800 border border-slate-700">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex gap-2 flex-wrap text-gray-300 mt-2">
          <ProjectSkillBox skill="Next.js" />
          <ProjectSkillBox skill="Tailwind" />
          {/* <ProjectSkillBox skill="Shadcn UI" /> */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <Image src={image} alt={title} width={100} height={100} /> */}
        <p className="prose prose-invert">{description}</p>
      </CardContent>
      <CardFooter>
        <CardAction
          className="text-blue-300 hover:text-blue-400"
          href={`/projects/${link.split(".")[0]}`}
        >
          View Project
        </CardAction>
      </CardFooter>
    </Card>
  );
}
