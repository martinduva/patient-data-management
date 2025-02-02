"use client";

import { useState } from "react";

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
          : `${children.substring(0, maxLength)}${children.length > maxLength && "..."}`}
      </p>
      <button
        onClick={toggleExpansion}
        className="mt-2 text-blue-500 underline"
      >
        {children.length > maxLength &&
          (isExpanded ? "Show Less" : "Show More")}
      </button>
    </div>
  );
};

export default PatientDescription;
