import { z } from "zod";

const ProjectListSchema = z.array(z.string());

const FileContentSchema = z.object({
    content: z.string(),
});

class TFileSystem {
    static async getFileList(): Promise<string[] | null> {
        const response = await fetch("/api/projects/list");
        const data = await response.json();

        if (!response.ok) {
            return null;
        }

        const validatedData = ProjectListSchema.parse(data);
        return validatedData;
    }

    static async getFileContent(fileName: string): Promise<string | null> {
        const response = await fetch(`/api/projects/content?projectName=${fileName}`);
        const data = await response.json();

        if (!response.ok) {
            return null;
        }

        const validatedData = FileContentSchema.parse(data);
        return validatedData.content;
    }
}

export default TFileSystem;