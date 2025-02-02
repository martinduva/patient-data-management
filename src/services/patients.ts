import { Patient } from "@/types/patient";

const getPatients = async () => {
  const usersMockApiUrl = process.env.USERS_MOCKAPI_URL;

  const patientsRequestUrl =
    usersMockApiUrl || "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users";

  const patientsRequest = await fetch(patientsRequestUrl, {
    cache: "no-store",
  });

  if (!patientsRequest.ok) {
    throw new Error("Failed to fetch patients data");
  }

  const patients = (await patientsRequest.json()) as Patient[];

  return patients;
};

export { getPatients };
