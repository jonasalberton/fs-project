import { FastifyRequest, FastifyReply } from "fastify";
import { DepartmentService } from "../services/DepartmentService";
import { DepartmentRepository } from "../repositories/DepartmentRepository";

const departmentService = new DepartmentService(new DepartmentRepository());

export const getAll = async (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    const departments = await departmentService.findAll();
    return reply.send(departments);
  } catch (error) {
    return reply.status(500).send({ error: "Internal Server Error" });
  }
};
