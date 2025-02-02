import Image from "next/image";

import { Card } from "@/components/ui/Card";
import PatientDescription from "@/components/PatientDescription";

type Patient = {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: string;
};

export default async function Patients() {
  const usersMockApiUrl = process.env.USERS_MOCKAPI_URL;

  const patientsRequestUrl =
    usersMockApiUrl || "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users";

  const patientsRequest = await fetch(patientsRequestUrl);

  const patients = (await patientsRequest.json()) as Patient[];

  return patients.map((patient) => (
    <Card
      key={patient.id}
      className="col-span-1 flex h-96 w-full flex-col items-center gap-4 p-4"
    >
      {patient.avatar ? (
        <Image
          src={patient.avatar}
          alt={patient.name}
          className="size-12 rounded-full"
          width={48}
          height={48}
        />
      ) : (
        <div className="flex size-10 items-center justify-center rounded-full bg-gray-800 p-6">
          <p className="uppercase">{patient.name.split(" ")[0].charAt(0)}</p>
          <p className="uppercase">{patient.name.split(" ")[1]?.charAt(0)}</p>
        </div>
      )}
      <h2 className="text-lg">{patient.name}</h2>
      <PatientDescription>{patient.description}</PatientDescription>
    </Card>
  ));
}
