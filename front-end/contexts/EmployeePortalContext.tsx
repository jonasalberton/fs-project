"use client";

import { Department } from "@/models/Department";
import React, { createContext, ReactNode, useEffect, useState } from "react";

type EmployeePortalContextType = {
  departments: Department[];
};

const EmployeePortalContext = createContext<EmployeePortalContextType>({
  departments: [],
});

export const EmployeePortalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const response = await fetch("http://localhost:3333/departments");
      const data = await response.json();
      setDepartments(data);
    };

    fetchDepartments();
  }, []);

  return (
    <EmployeePortalContext.Provider value={{ departments }}>
      {children}
    </EmployeePortalContext.Provider>
  );
};

export const useEmployeePortalContext = () => {
  return React.useContext(EmployeePortalContext);
};
