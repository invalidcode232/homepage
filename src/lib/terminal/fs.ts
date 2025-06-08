import { z } from "zod";

const ProjectListSchema = z.array(z.string());

const FileContentSchema = z.object({
    content: z.string(),
});

class TFileSystem {
    static async getFileList(): Promise<string[]> {
        const response = await fetch("/api/filesystem/projects/list");
        const data = await response.json();
        
        const validatedData = ProjectListSchema.parse(data);
        return validatedData;
    }

    static async getFileContent(fileName: string) {
        const response = await fetch(`/api/filesystem/projects/content?projectName=${fileName}`);
        const data = await response.json();

        const validatedData = FileContentSchema.parse(data);
        return validatedData.content;
    }
}

export default TFileSystem;