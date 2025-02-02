import { createContext, useContext, useReducer } from "react";

import { getPatients } from "@/services/patients";
import { Patient } from "@/types/patient";

type PatientActionDispatch = React.Dispatch<PatientAction>;

const PatientsContext = createContext<Patient[] | null>(null);

const PatientsDispatchContext = createContext<PatientActionDispatch | null>(
  null,
);

type PatientsProviderProps = {
  children: React.ReactNode;
};

export function PatientsProvider({ children }: PatientsProviderProps) {
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
      return [...patients, action.payload];
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

const initialPatients = await getPatients();
