import EmployeeList from "@/components/employee/employee-list";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5 ">
        <h1 className="font-semibold">Employees</h1>
        <Button variant={"default"}>New Employee</Button>
      </div>
      <Suspense fallback="Loading...">
        <EmployeeList />
      </Suspense>
    </div>
  );
}
