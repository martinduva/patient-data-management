"use client";

import AddPatientButton from "@/components/AddEditPatient/AddPatientActionButton";
import PatientCard from "@/components/PatientsList/PatientCard";
import { usePatients } from "@/providers/patients-provider";

export default function PatientsListClient() {
  const patients = usePatients();

  return (
    <>
      {patients?.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
      <AddPatientButton />
    </>
  );
}
