import { FastifyRequest, FastifyReply } from "fastify";
import { EmployeeService } from "../services/EmployeeService";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { CreateEmployee, Employee } from "../models/Employee";

const employeeService = new EmployeeService(new EmployeeRepository());

export const getAll = async (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    const employees = await employeeService.findAll();
    return reply.send(employees);
  } catch (error) {
    return reply.status(500).send({ error: "Internal Server Error" });
  }
};

export const getOne = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const employee = await employeeService.findOne(Number(request.params.id));
    if (!employee) {
      return reply.status(404).send({ error: "Employee not found" });
    }
    return reply.send(employee);
  } catch (error) {
    return reply.status(500).send({ error: "Internal Server Error" });
  }
};

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const employee = await employeeService.create(request.body as CreateEmployee);
    return reply.status(201).send(employee);
  } catch (error) {
    return reply.status(400).send({ error: "Invalid employee data" });
  }
};

export const update = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const employee = await employeeService.update(
      Number(request.params.id),
      request.body as Partial<Employee>
    );
    return reply.send(employee);
  } catch (error) {
    return reply.status(400).send({ error: "Invalid employee data" });
  }
};

export const deleteEmployee = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    await employeeService.delete(Number(request.params.id));
    return reply.status(204).send();
  } catch (error) {
    return reply.status(500).send({ error: "Internal Server Error" });
  }
};
