import { Card } from "@/components/ui/Card";

type PatientsListSkeletonProps = {
  amount?: number;
};

export default function PatientsListSkeleton({
  amount = 10,
}: PatientsListSkeletonProps) {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => (
        <Card
          key={index}
          className="col-span-1 flex h-96 w-full flex-col items-center gap-4 p-4"
        >
          <div className="size-12 rounded-full bg-gray-800"></div>
          <div className="h-4 w-24 bg-gray-800"></div>
          <div className="h-4 w-3/4 bg-gray-800"></div>
          <div className="h-4 w-3/4 bg-gray-800"></div>
          <div className="h-4 w-3/4 bg-gray-800"></div>
          <div className="h-4 w-3/4 bg-gray-800"></div>
          <div className="h-4 w-3/4 bg-gray-800"></div>
          <div className="h-4 w-3/4 bg-gray-800"></div>
          <div className="h-4 w-3/4 bg-gray-800"></div>
        </Card>
      ))}
    </>
  );
}
