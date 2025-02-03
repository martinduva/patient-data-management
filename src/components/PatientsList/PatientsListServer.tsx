import PatientsListContent from "@/components/PatientsList/PatientsListClient";
import { PatientsProvider } from "@/providers/patients-provider";
import { getPatients } from "@/services/patients";

export default async function PatientsListServer() {
  const patients = await getPatients();

  return (
    <PatientsProvider initialPatients={patients}>
      <PatientsListContent />
    </PatientsProvider>
  );
}
