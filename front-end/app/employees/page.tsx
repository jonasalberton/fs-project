import { Suspense } from "react";
import EmployeeList from "@/components/employee/employee-list";

import NewEmployeeModal from "@/components/employee/new-employee-modal";

export default function Page() {
  return (
    <div className="max-w-4xl m-auto">
      <div className="flex items-center justify-between mb-5 ">
        <h1 className="font-semibold">Employees</h1>
        <NewEmployeeModal />
      </div>
      <Suspense fallback="Loading...">
        <EmployeeList />
      </Suspense>
    </div>
  );
}
