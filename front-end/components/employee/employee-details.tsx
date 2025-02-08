"use client";

import { formatDate, formatRelativeDifference } from "@/lib/date";
import { FullEmployee } from "@/models/Employee";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { useEmployeePortalContext } from "@/contexts/EmployeePortalContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Department } from "@/models/Department";
import { updateEmployeeById } from "../../services/employeeService";

type Props = {
  employee: FullEmployee;
};

export default function EmployeeDetails({ employee: initialState }: Props) {
  const { departments } = useEmployeePortalContext();

  const [employee, setEmployee] = useState(initialState);
  const [selectedDepartment, setSelectedDepartment] = useState(
    employee.department
  );

  const updateEmployeeDepartment = async (newDepartment: Department) => {
    try {
      const updatedEmployee = await updateEmployeeById(employee.id, {
        departmentId: newDepartment.id,
      }).then((res) => res.json());

      setEmployee(updatedEmployee);
    } catch (error) {
      console.log(error);
      
    }
  };

  const [formatedDate, dateRange] = useMemo(
    () => [
      formatDate(employee.hireDate),
      formatRelativeDifference(employee.hireDate),
    ],
    [employee.hireDate]
  );

  return (
    <div className="mt-4">
      <div className="grid grid-cols-[230px_1fr_100px]">
        <div className="h-52 w-52 bg-zinc-300" />
        <div>
          <h1 className="font-semibold mb-4">
            {employee.firstName} {employee.lastName}
          </h1>

          <Row title="Employee ID" value={employee.id.toString()} />
          <Row title="Department" value={employee.department.name} />
          <Row title="Telephone" value={employee.phone} />
          <Row title="Address" value={employee.address} />

          <div>
            <div className="text-sm font-bold mt-4 mb-1 ">
              Update Department
            </div>
            <div className="flex items-center gap-3">
              <Select
                value={JSON.stringify(selectedDepartment)}
                onValueChange={(data) =>
                  setSelectedDepartment(JSON.parse(data))
                }
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((department) => (
                    <SelectItem
                      key={department.id}
                      value={JSON.stringify(department)}
                    >
                      {department.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                disabled={employee.department.id === selectedDepartment.id}
                onClick={() => updateEmployeeDepartment(selectedDepartment)}
                size={"sm"}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold">Hire Date</div>
          <div className="text-sm text-gray-600">{formatedDate}</div>
          <div className="text-sm text-gray-600">{dateRange}</div>
          <Button variant={"destructive"} size={"sm"} className="mt-2">
            Deactivate
          </Button>
        </div>
      </div>
    </div>
  );
}

const Row = ({ title, value }: { title: string; value?: string }) => {
  return (
    <div className="text-sm text-gray-600 grid grid-cols-[90px_1fr] items-start">
      {title}: <span className="text-black">{value}</span>
    </div>
  );
};
