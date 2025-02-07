import { FullEmployee } from "@/models/Employee";
import EmployeeCard from "./employee-card";

export default async function EmployeeList() {
  const res = await fetch("http://localhost:3333/employees");
  const employees: FullEmployee[] = await res.json();

  console.log("data:", employees);

  return (
    <div className="flex flex-col gap-2">
      {employees.map((item) => (
        <EmployeeCard key={item.id} employee={item} />
      ))}
    </div>
  );
}
