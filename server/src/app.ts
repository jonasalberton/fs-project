import fastify from 'fastify';
import { employeeRoutes } from './routes/employee.routes';
import { departmentRoutes } from './routes/department.routes';

export function buildApp() {
  const app = fastify({
    logger: true
  });

  app.register(employeeRoutes);
  app.register(departmentRoutes);

  return app;
} 