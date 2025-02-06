import { FastifyInstance } from "fastify";
import {
  getAll,
  getOne,
  create,
  update,
  deleteEmployee,
} from "../controllers/EmployeeController";

export async function employeeRoutes(fastify: FastifyInstance) {
  fastify.get("/employees", getAll);
  fastify.get("/employees/:id", getOne);
  fastify.post("/employees", create);
  fastify.put("/employees/:id", update);
  fastify.delete("/employees/:id", deleteEmployee);
}
