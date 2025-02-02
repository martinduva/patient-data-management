import PatientsListContent from "@/components/PatientsListContent";
import { PatientsProvider } from "@/providers/patients-provider";
import { getPatients } from "@/services/patients";

export default async function PatientsList() {
  const patients = await getPatients();

  return (
    <PatientsProvider initialPatients={patients}>
      <PatientsListContent />
    </PatientsProvider>
  );
}
