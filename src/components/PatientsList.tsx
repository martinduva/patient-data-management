import PatientsListContent from "@/components/PatientsListContent";
import { PatientsProvider } from "@/providers/patients-provider";
import { Patient } from "@/types/patient";

type PatientProps = {
  initialPatients: Patient[];
};

export default function PatientsList({ initialPatients }: PatientProps) {
  return (
    <PatientsProvider initialPatients={initialPatients}>
      <PatientsListContent />
    </PatientsProvider>
  );
}
