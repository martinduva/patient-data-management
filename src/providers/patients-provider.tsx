"use client";

import { createContext, useContext, useReducer } from "react";

import { Patient } from "@/types/patient";

type PatientActionDispatch = React.Dispatch<PatientAction>;

const PatientsContext = createContext<Patient[] | null>(null);

const PatientsDispatchContext = createContext<PatientActionDispatch>(() => {});

type PatientsProviderProps = {
  children: React.ReactNode;
  initialPatients: Patient[];
};

export function PatientsProvider({
  children,
  initialPatients,
}: PatientsProviderProps) {
  const [patients, dispatch] = useReducer(patientsReducer, initialPatients);

  return (
    <PatientsContext.Provider value={patients}>
      <PatientsDispatchContext.Provider value={dispatch}>
        {children}
      </PatientsDispatchContext.Provider>
    </PatientsContext.Provider>
  );
}

export function usePatients() {
  return useContext(PatientsContext);
}

export function usePatientsDispatch() {
  return useContext(PatientsDispatchContext);
}

export type PatientAction =
  | {
      type: "added";
      payload: Patient;
    }
  | {
      type: "changed";
      payload: Partial<Patient>;
    };

function patientsReducer(
  patients: Patient[],
  action: PatientAction,
): Patient[] {
  switch (action.type) {
    case "added": {
      console.log("added", action.payload);
      return [action.payload, ...patients];
    }
    case "changed": {
      return patients.map((p) => {
        if (p.id === action.payload.id) {
          return { ...p, ...action.payload };
        } else {
          return p;
        }
      });
    }
    default: {
      throw Error("Unknown action");
    }
  }
}
