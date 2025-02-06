import { Employee } from "@prisma/client";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { CreateEmployee, EmployeeSchema } from "../models/Employee";

export class EmployeeService {
  constructor(private repository: EmployeeRepository) {}

  async findAll() {
    return this.repository.getAll();
  }

  async findOne(id: number) {
    return this.repository.getById(id);
  }

  async create(data: CreateEmployee) {
    return this.repository.create(data);
  }

  async update(id: number, data: Partial<Employee>) {
    const validated = EmployeeSchema.partial().omit({ id: true }).parse(data);
    return this.repository.update(id, validated);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
