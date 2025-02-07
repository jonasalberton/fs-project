import prisma from "../lib/prisma";
import { CreateEmployee } from "../models/Employee";
import { IRepository } from "./IRepository";
import { Employee } from "@prisma/client";

export class EmployeeRepository implements IRepository<Employee> {
  async getAll() {
    return prisma.employee.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: { department: true },
    });
  }

  async getById(id: number) {
    return prisma.employee.findUnique({
      where: { id },
      include: { department: true },
    });
  }

  async create(data: CreateEmployee) {
    return prisma.employee.create({ data });
  }

  async update(id: number, data: Partial<Employee>) {
    return prisma.employee.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.employee.delete({
      where: { id },
    });
  }
}
