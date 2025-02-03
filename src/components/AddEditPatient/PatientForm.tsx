"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { DialogClose } from "@/components/ui/Dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { patientSchema } from "@/lib/schemas";
import { usePatientsDispatch } from "@/providers/patients-provider";
import { Patient } from "@/types/patient";

const addPatientFormControls = [
  {
    name: "name",
    label: "Name",
    placeholder: "John Doe",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Lorem ipsum dolor...",
  },
  {
    name: "website",
    label: "Website",
    placeholder: "www.patientwebsite.com",
  },
] as {
  name: "name" | "description" | "website";
  label: string;
  placeholder: string;
}[];

export default function PatientForm() {
  const dispatch = usePatientsDispatch();

  const addPatient = (patient: Patient) => {
    dispatch({
      type: "added",
      payload: patient,
    });
  };

  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      description: "",
      website: "",
    },
  });

  function onSubmit(values: z.infer<typeof patientSchema>) {
    addPatient({
      ...values,
      id: Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
      avatar: "",
    });

    form.reset();

    toast("Patient added successfully!", {
      className: "flex gap-4",
      icon: <CheckIcon />,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {addPatientFormControls.map((control) => (
          <FormField
            key={control.name}
            control={form.control}
            name={control.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{control.label}</FormLabel>
                <FormControl>
                  <Input placeholder={control.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="mt-4 flex justify-center space-x-4">
          <Button type="submit">Add</Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
