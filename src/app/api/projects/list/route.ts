import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
    const files = await fs.readdir(path.join(process.cwd(), "include/projects"), { withFileTypes: true });
    const projectFiles = files.filter(file => file.isFile() && file.name.endsWith(".md"));
    const projectNames = projectFiles.map(file => file.name);

    return NextResponse.json(projectNames);
}