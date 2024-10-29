"use server";
import { projects } from "@/lib/db/schema";
import { z } from "zod";
import { db } from "@/lib/db/drizzle";
import { getUser } from "@/lib/db/queries";
import { validatedActionWithUser } from "@/lib/auth/middleware";

const createProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  settings: z.string().transform((str) => JSON.parse(str)),
});

export const createProject = validatedActionWithUser(
  createProjectSchema,
  async (data, _, user) => {
    try {
      await db.insert(projects).values({
        userId: user.id,
        name: data.name,
        settings: data.settings,
      });
      return { success: true };
    } catch (error) {
      return { error: "Failed to create project" };
    }
  }
);
