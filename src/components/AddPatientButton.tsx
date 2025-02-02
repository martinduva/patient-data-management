"use client";

import { usePatientsDispatch } from "@/providers/patients-provider";

export default function AddPatientButton() {
  const dispatch = usePatientsDispatch();

  const addPatient = () =>
    dispatch({
      type: "added",
      payload: {
        id: Math.random().toString(36).substr(2, 9),
        name: "John Doe",
        avatar: "",
        createdAt: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        website: "https://example.com",
      },
    });

  return (
    <button
      onClick={addPatient}
      className="fixed bottom-4 right-8 rounded-lg bg-indigo-900 p-4 hover:bg-indigo-800"
    >
      Add Patient
    </button>
  );
}
