"use client";

import { FullEmployee } from "@/models/Employee";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { formatDate, formatRelativeDifference } from "@/lib/date";
import { useMemo } from "react";
import { deleteEmployee } from "@/services/employeeService";
import Link from "next/link";
import { ROUTES } from "@/routes";

type Props = {
  employee: FullEmployee;
  onRemoveEmployee: (id: number) => void;
};

export default function EmployeeCard({ employee, onRemoveEmployee }: Props) {
  const handleDelete = async () => {
    // Ideally I'd implement a confirmation modal before triggering the delete action
    try {
      await deleteEmployee(employee.id);
      onRemoveEmployee(employee.id);
    } catch (error) {
      console.log(error);
    }
  };

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

      <Link
        href={ROUTES.EMPLOYEE_DETAILS.replace(":id", employee.id.toString())}
      >
        <Button>View Details</Button>
      </Link>
      <Button variant={"ghost"} onClick={handleDelete}>
        <Trash2 size={22} className="text-red-600" />
      </Button>
    </Card>
  );
}
