import { z } from "zod";

export const EmployeeSchema = z.object({
  id: z.number().optional(),
  firstName: z.string(),
  lastName: z.string(),
  hireDate: z.date(),
  departmentId: z.number(),
  isActive: z.boolean(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
});

export type Employee = z.infer<typeof EmployeeSchema>;

export type CreateEmployee = Omit<Employee, 'id'>