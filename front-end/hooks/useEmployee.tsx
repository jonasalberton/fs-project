import { CreateEmployee } from "@/models/Employee";
import { useState } from "react";

export function useEmployee() {
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const createEmployee = async (employeeData: CreateEmployee) => {
    setIsSaving(true);

    return fetch("http://localhost:3333/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    })
      .catch((error) => {
        console.log(error);
        throw error;
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const deleteEmployee = async (id: number) => {
    setIsDeleting(true);

    return fetch(`http://localhost:3333/employees/${id}`, {
      method: "DELETE",
    })
      .catch((error) => {
        console.log(error);
        throw error;
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return { isSaving, isDeleting, createEmployee, deleteEmployee };
}
