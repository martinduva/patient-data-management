"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
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

export default function AddPatientForm() {
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
    console.log(values);
    addPatient({
      ...values,
      id: Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
      avatar: "",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Lorem ipsum dolor..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="www.patientwebsite.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 flex justify-center space-x-4">
          <Button type="submit">Add</Button>
          <DialogClose className="rounded-lg bg-white p-4 text-black hover:bg-gray-100">
            Cancel
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
