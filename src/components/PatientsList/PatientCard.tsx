import EditPatientButton from "@/components/AddEditPatient/EditPatientButton";
import PatientDescription from "@/components/PatientsList/PatientDescription";
import PatientAvatar, {
  PatientAvatarFallback,
} from "@/components/PatientsList/PatientAvatar";
import { Card } from "@/components/ui/Card";
import { Patient } from "@/types/patient";

type PatientCardProps = {
  patient: Patient;
};

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <Card className="relative col-span-full flex h-96 w-full flex-col items-center gap-4 p-4 shadow-lg shadow-slate-600/50 md:col-span-2 xl:col-span-1">
      {JSON.parse(process.env.NEXT_PUBLIC_EDIT_PATIENT_ACTIVE || "false") && (
        <EditPatientButton />
      )}
      <PatientAvatar
        src={patient.avatar}
        alt={patient.name}
        fallback={<PatientAvatarFallback patientName={patient.name} />}
      />
      <h2 className="text-lg">{patient.name}</h2>
      <PatientDescription>{patient.description}</PatientDescription>
    </Card>
  );
}
