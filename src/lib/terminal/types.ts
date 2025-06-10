import { z } from "zod";

export const ProjectListSchema = z.array(z.string());
export const FileContentSchema = z.object({
    content: z.string(),
});