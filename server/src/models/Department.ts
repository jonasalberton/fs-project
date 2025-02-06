import { z } from "zod";

export const DepartmentSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
});

export type Department = z.infer<typeof DepartmentSchema>;
