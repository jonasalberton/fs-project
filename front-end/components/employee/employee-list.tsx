import { FullEmployee } from "@/models/Employee";
import EmployeeCard from "./employee-card";
import { useEmployee } from "@/hooks/useEmployee";

export default async function EmployeeList() {
  const { getAllEmployees} = useEmployee()
  const employees: FullEmployee[] = await getAllEmployees();

  return (
    <div className="flex flex-col gap-2">
      {employees.map((item) => (
        <EmployeeCard key={item.id} employee={item} />
      ))}
    </div>
  );
}
