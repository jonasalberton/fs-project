import { DepartmentRepository } from "../repositories/DepartmentRepository";

export class DepartmentService {
  constructor(private repository: DepartmentRepository) {}

  async findAll() {
    return this.repository.getAll();
  }
} 