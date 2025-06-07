import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
    const body = await request.json();
    const projectName = body.projectName;

    const filePath = path.join(process.cwd(), "include/projects", `${projectName}.md`);
    const fileContent = await fs.readFile(filePath, "utf8");

    return NextResponse.json({
        content: fileContent,
    });
}
