import { z } from "zod";

class TFileSystem {
    static async getFileList(api: string, schema: z.ZodSchema): Promise<string[] | null> {
        const response = await fetch(api, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (!response.ok) {
            return null;
        }

        const validatedData = schema.parse(data);

        return validatedData;
    }

    static async getFileContent(api: string, name: string, fileName: string, schema: z.ZodSchema): Promise<string | null> {
        const response = await fetch(`${api}?${name}=${fileName}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();

        if (!response.ok) {
            return null;
        }

        const validatedData = schema.parse(data);
        return validatedData.content;
    }
}

export default TFileSystem;