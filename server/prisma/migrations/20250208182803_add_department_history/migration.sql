-- CreateTable
CREATE TABLE "DepartmentHistory" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DepartmentHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DepartmentHistory" ADD CONSTRAINT "DepartmentHistory_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentHistory" ADD CONSTRAINT "DepartmentHistory_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
