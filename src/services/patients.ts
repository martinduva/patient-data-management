import { Patient } from "@/types/patient";

const getPatients = async () => {
  const usersMockApiUrl = process.env.USERS_MOCKAPI_URL;

  const patientsRequestUrl =
    usersMockApiUrl || "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users";

  const patientsRequest = await fetch(patientsRequestUrl);

  const patients = (await patientsRequest.json()) as Patient[];

  return patients;
};

export { getPatients };
