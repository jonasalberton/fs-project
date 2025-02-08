import { useEmployee } from "@/hooks/useEmployee";
import { FullEmployee } from "@/models/Employee";

const Row = ({ title, value }: { title: string; value?: string }) => {
  return (
    <div className="text-sm text-gray-600 grid grid-cols-[90px_1fr] items-start">
      {title}: <span className="text-black">{value}</span>
    </div>
  );
};

type Props = {
  id: number;
};

export default async function EmployeeDetails({ id }: Props) {
  const { getEmployeeById } = useEmployee();
  const employee: FullEmployee = await getEmployeeById(id);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-[180px_1fr_100px]">
        <div className="h-40 w-40 bg-zinc-300" />
        <div>
          <h1 className="font-semibold mb-4">
            {employee.firstName} {employee.lastName}
          </h1>

          <Row title="Employee ID" value={employee.id.toString()} />
          <Row title="Department" value={employee.department.name} />
          <Row title="Telephone" value={employee.phone} />
          <Row title="Address" value={employee.address} />
        </div>
        <div>hire</div>
      </div>
    </div>
  );
}
