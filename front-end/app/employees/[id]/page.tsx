import EmployeeDetails from "@/components/employee/employee-details";
import { getEmployeeById } from "@/services/employeeService";
import { FullEmployee } from "@/models/Employee";
import { Suspense } from "react";

type PageParams = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageParams) {
  const { id } = await params;
  const employee: FullEmployee = await getEmployeeById(parseInt(id));

  return (
    <div className="max-w-4xl m-auto">
      <h1 className="font-semibold">Employee Details</h1>
      <Suspense fallback="Loading..">
        <EmployeeDetails employee={employee} />
      </Suspense>
    </div>
  );
}
