import { NextResponse } from "next/server";
import { readFile, access } from "fs/promises";
import { constants } from "fs";
import fm from "front-matter";
import path from "path";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const projectName = url.searchParams.get("projectName");

    if (!projectName) {
        return NextResponse.json({
            error: "Project name is required",
        }, { status: 400 });
    }

    try {
        const filePath = path.join(process.cwd(), "include/projects", `${projectName}`);
        
        // Check if file exists
        await access(filePath, constants.F_OK);
        
        // Read file content
        const fileContent = await readFile(filePath, "utf-8");

        const { attributes, body } = fm(fileContent);

        return NextResponse.json({
            attributes: attributes,
            content: body,
        });
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 404 });
    }
}
