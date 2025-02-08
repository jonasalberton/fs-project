"use client";

import { FullEmployee } from "@/models/Employee";
import EmployeeCard from "./employee-card";
import { useCallback, useState } from "react";
import NewEmployeeModal from "./new-employee-modal";

type Props = {
  employees: FullEmployee[];
};

export default function EmployeeList(props: Props) {
  const [employees, setEmployees] = useState(props.employees);

  const onRemoveEmployee = (id: number) => {
    setEmployees((currentList) => currentList.filter((item) => item.id !== id));
  };

  const onCreateEmployee = useCallback((employee: FullEmployee) => {
    setEmployees((currentList) => [employee, ...currentList]);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between mb-5 ">
        <h1 className="font-semibold">Employees</h1>
        <NewEmployeeModal onCreateEmployee={onCreateEmployee} />
      </div>
      <div className="flex flex-col gap-2">
        {employees.map((item) => (
          <EmployeeCard
            key={item.id}
            employee={item}
            onRemoveEmployee={onRemoveEmployee}
          />
        ))}
      </div>
    </div>
  );
}
