"use client";

import { usePatientsDispatch } from "@/providers/patients-provider";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

export default function AddPatientButton() {
  const dispatch = usePatientsDispatch();

  const addPatient = () => {
    dispatch({
      type: "added",
      payload: {
        id: Math.random().toString(36).substr(2, 9),
        name: "John Doe",
        avatar: "",
        createdAt: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        website: "https://example.com",
      },
    });
  };

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
          <div className="mt-4 flex justify-center space-x-4">
            <DialogClose
              onClick={addPatient}
              className="rounded-lg bg-white p-4 text-black hover:bg-gray-100"
            >
              Add
            </DialogClose>
            <DialogClose className="rounded-lg bg-white p-4 text-black hover:bg-gray-100">
              Cancel
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
