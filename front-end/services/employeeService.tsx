import { CreateEmployee, Employee } from "@/models/Employee";

// In a real app wiht timeout to get the response, I'd implemt a isLoading / isSaving state to show a spinner

const getAllEmployees = () => {
  return fetch("http://localhost:3333/employees", {
    cache: "no-cache",
  }).then((res) => res.json());
};

const createEmployee = (employeeData: CreateEmployee) => {
  return fetch("http://localhost:3333/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeData),
  });
};

const deleteEmployee = (id: number) => {
  return fetch(`http://localhost:3333/employees/${id}`, {
    method: "DELETE",
  });
};

const getEmployeeById = (id: number) => {
  return fetch(`http://localhost:3333/employees/${id}`, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
};

const updateEmployeeById = (id: number, data: Partial<Employee>) => {
  return fetch(`http://localhost:3333/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
};
