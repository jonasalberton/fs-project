import EmployeeDetails from "@/components/employee/employee-details";
import { Suspense } from "react";

type PageParams = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageParams) {
  const { id } = await params;

  if (!id) return "ID no suplied";

  return (
    <div className="max-w-4xl m-auto">
      <h1 className="font-semibold">Employee Details</h1>
      <Suspense fallback="Loading..">
        <EmployeeDetails id={parseInt(id)} />
      </Suspense>
    </div>
  );
}
