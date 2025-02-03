"use client";

import { EditIcon } from "@/components/ui/EditIcon";
import { usePatientsDispatch } from "@/providers/patients-provider";

export default function EditPatientButton() {
  const dispatch = usePatientsDispatch();

  const editPatient = () =>
    dispatch({
      type: "changed",
      payload: {
        id: "29",
        name: "John Doe",
        avatar: "",
        createdAt: new Date().toISOString(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        website: "https://example.com",
      },
    });

  return (
    <button className="absolute right-4 top-4" onClick={editPatient}>
      <EditIcon />
    </button>
  );
}
