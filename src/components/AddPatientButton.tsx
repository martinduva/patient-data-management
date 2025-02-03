"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import AddPatientForm from "./AddPatientForm";

export default function AddPatientButton() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="fixed bottom-4 right-8 rounded-lg bg-white p-4 text-black hover:bg-gray-100">
          Add Patient
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Patient</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </DialogDescription>
          </DialogHeader>
          <AddPatientForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
