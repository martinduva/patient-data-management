"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";

type PatientDescriptionProps = {
  children: string;
  maxLength?: number;
};

const PatientDescription = ({
  children,
  maxLength = 200,
}: PatientDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col overflow-scroll">
      <p className="text-base leading-relaxed text-gray-400">
        {isExpanded
          ? children
          : `${children.substring(0, maxLength)}${children.length > maxLength ? "..." : ""}`}
      </p>
      <Button variant="link" onClick={toggleExpansion}>
        {children.length > maxLength &&
          (isExpanded ? "Show Less" : "Show More")}
      </Button>
    </div>
  );
};

export default PatientDescription;
