import { Suspense } from "react";

import PatientsListServer from "@/components/PatientsList/PatientsListServer";
import PatientsListSkeleton from "@/components/PatientsList/PatientsListSkeleton";

export default async function Home() {
  return (
    <div className="grid min-h-screen grid-cols-4 place-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="col-span-full grid grid-cols-subgrid gap-y-10">
        <h1 className="col-span-full text-center text-2xl sm:text-left sm:text-3xl">
          Patient Data Management
        </h1>
        <Suspense fallback={<PatientsListSkeleton amount={50} />}>
          <PatientsListServer />
        </Suspense>
      </main>
      <footer className="col-span-full row-start-3 flex flex-wrap items-center justify-center gap-6">
        Patient Data Management &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
