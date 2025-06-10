import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import fm from "front-matter";
import { ProjectSummary } from "@/types/types";

export async function GET(request: Request) {
    const files = await fs.readdir(path.join(process.cwd(), "include/projects"), { withFileTypes: true });
    const projectFiles = files.filter(file => file.isFile() && file.name.endsWith(".md"));
    const projectNames = projectFiles.map(file => file.name);

    const projectSummaries = await Promise.all(projectNames.map(async (projectName) => {
        const filePath = path.join(process.cwd(), "include/projects", `${projectName}`);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { attributes } = fm<ProjectSummary>(fileContent);
        console.log(attributes);
        return {
            name: attributes.name,
            description: attributes.description,
            skills: attributes.skills,
            link: attributes.link,
        };
    }));

    return NextResponse.json(projectSummaries);
}