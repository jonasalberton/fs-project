import { FullEmployee } from "@/models/Employee";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { formatDate, formatRelativeDifference } from "@/lib/date";
import { useMemo } from "react";

type Props = {
  employee: FullEmployee;
};

export default function EmployeeCard({ employee }: Props) {
  const dateRow = useMemo(() => {
    return `${formatDate(employee.hireDate)} (${formatRelativeDifference(
      employee.hireDate
    )})`;
  }, [employee]);

  return (
    <Card className="p-3 grid gap-4 grid-cols-[64px_1fr_100px_50px] items-center">
      <div className="h-16 w-16 bg-zinc-200" />
      <div>
        <div className="font-bold flex gap-2">
          {employee.firstName} {employee.lastName}
          <span className="font-thin">({employee.department.name})</span>
        </div>

        <div className="mt-1 text-sm text-black">Hire Date</div>
        <div className="text-xs text-gray-600">{dateRow}</div>
      </div>

      <Button>View Details</Button>
      <Button variant={"ghost"}>
        <Trash2 size={22} className="text-red-600" />
      </Button>
    </Card>
  );
}
