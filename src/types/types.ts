import { z } from "zod";

export const ProjectListSchema = z.array(z.string());

export const FileContentSchema = z.object({
    attributes: z.object({
        name: z.string(),
        description: z.string(),
        skills: z.array(z.string()).optional(),
        link: z.string().optional(),
    }),
    content: z.string(),
});

export const ProjectSummarySchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    skills: z.array(z.string()).optional(),
    link: z.string().optional(),
});

export const ProjectSummaryListSchema = z.array(ProjectSummarySchema);

export type FileContent = z.infer<typeof FileContentSchema>;
export type ProjectSummary = z.infer<typeof ProjectSummarySchema>;
export type ProjectSummaryList = z.infer<typeof ProjectSummaryListSchema>;