"use client";

import AddPatientForm from "@/components/AddEditPatient/PatientForm";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

export default function AddPatientActionButton() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="action" size="lg">
            Add Patient
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Patient</DialogTitle>
            <DialogDescription>
              *Once added, a patient cannot be deleted.
            </DialogDescription>
          </DialogHeader>
          <AddPatientForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
