"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { ROUTES } from "@/routes";

export default function Home() {
  useEffect(() => {
    redirect(ROUTES.EMPLOYEES);
  }, []);

  return <div></div>;
}
