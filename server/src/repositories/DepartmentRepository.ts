import prisma from "../lib/prisma";
import { Department } from "@prisma/client";
import { IRepository } from "./IRepository";

export class DepartmentRepository implements Partial<IRepository<Department>> {
  async getAll() {
    return prisma.department.findMany();
  }
}
