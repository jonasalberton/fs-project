import { Suspense } from "react";

import EmployeeList from "@/components/employee/employee-list";
import { getAllEmployees } from "@/services/employeeService";
import { FullEmployee } from "@/models/Employee";

async function EmployeeListLoader() {
  const employees: FullEmployee[] = await getAllEmployees();

  return <EmployeeList employees={employees ?? []} />;
}

export default function Page() {
  return (
    <div className="max-w-4xl m-auto">
      <Suspense fallback="Loading...">
        <EmployeeListLoader />
      </Suspense>
    </div>
  );
}
