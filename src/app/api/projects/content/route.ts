import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const projectName = url.searchParams.get("projectName");

    if (!projectName) {
        return NextResponse.json({
            error: "Project name is required",
        }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "include/projects", `${projectName}`);
    const file = Bun.file(filePath);
    if (!await file.exists()) {
        return NextResponse.json({
            error: "File not found",
        }, { status: 404 });
    }

    const fileContent = await file.text();

    return NextResponse.json({
        content: fileContent,
    });
}
