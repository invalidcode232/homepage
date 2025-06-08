import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {
    const body = await request.json();
    const projectName = body.projectName;

    const filePath = path.join(process.cwd(), "include/projects", `${projectName}.md`);
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
