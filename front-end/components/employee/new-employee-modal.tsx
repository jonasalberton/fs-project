"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputFormField from "../ui/input-form-field";
import { useEmployeePortalContext } from "@/contexts/EmployeePortalContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { useEmployee } from "@/hooks/useEmployee";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  hiredate: z.string().min(1, "Hire date is required"),
  phone: z.string().optional(),
  address: z.string().optional(),
  department: z.object({ id: z.number().int(), name: z.string() }),
});

type FormData = z.TypeOf<typeof schema>;

export default function NewEmployeeModal() {
  const { departments } = useEmployeePortalContext();
  const { createEmployee } = useEmployee();
  const { refresh } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createEmployee({
        phone: data.phone,
        address: data.address,
        departmentId: data.department.id,
        firstName: data.firstname,
        hireDate: new Date(data.hiredate),
        lastName: data.lastname,
      });

      reset();
      setIsOpen(false);
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">New Employee</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a New Employee</DialogTitle>
          <DialogDescription>
            Please complete the form to register a new employee
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <InputFormField
            label="First Name"
            name="firstname"
            error={errors.firstname?.message || ""}
            registerInput={{ ...register("firstname") }}
          />
          <InputFormField
            label="Last Name"
            name="lastname"
            error={errors.lastname?.message || ""}
            registerInput={{ ...register("lastname") }}
          />
          <InputFormField
            label="Hire Date"
            name="hiredate"
            error={errors.hiredate?.message || ""}
            registerInput={{ ...register("hiredate"), type: "date" }}
          />

          <div className="grid grid-cols-4 items-center gap-4 relative">
            <Label htmlFor="department" className="text-right">
              Department
            </Label>
            <Controller
              name="department"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => field.onChange(JSON.parse(value))}
                >
                  <SelectTrigger className="w-[280px]">
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
              )}
            />
            {errors.department?.message && (
              <span className="text-red-500 text-xs text-right mt-[-10] col-span-4">
                {errors.department?.message}
              </span>
            )}
          </div>

          <InputFormField
            label="Phone"
            name="phone"
            error={errors.phone?.message || ""}
            registerInput={{ ...register("phone"), type: "tel" }}
          />
          <InputFormField
            label="Address"
            name="address"
            error={errors.address?.message || ""}
            registerInput={{ ...register("address") }}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
