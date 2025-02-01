type Patient = {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: string;
};

export default async function Patients() {
  const patientsRequest = await fetch(
    "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users",
  );

  const patients = (await patientsRequest.json()) as Patient[];

  return patients.map((patient) => (
    <div key={patient.id} className="flex items-center gap-4">
      <img
        src={patient.avatar}
        alt={patient.name}
        className="size-12 rounded-full"
      />
      <div>
        <h2 className="text-lg">{patient.name}</h2>
        <p>{patient.description}</p>
      </div>
    </div>
  ));
}
