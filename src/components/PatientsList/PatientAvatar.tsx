import Image from "next/image";
import { useEffect, useState } from "react";

type PatientAvatarProps = {
  src: string;
  alt: string;
  fallback?: React.ReactNode;
};

const PatientAvatar = ({ src, alt, fallback }: PatientAvatarProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => setHasError(false), [src]);

  if (!src || hasError) {
    return fallback || null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      className="size-12 rounded-full"
      width={48}
      height={48}
      onErrorCapture={() => setHasError(true)}
    />
  );
};

type PatientAvatarFallbackProps = {
  patientName: string;
};

export const PatientAvatarFallback = ({
  patientName,
}: PatientAvatarFallbackProps) => {
  const [firstName, lastName] = patientName.split(" ");
  const initials = `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`;

  return (
    <div className="flex size-10 items-center justify-center rounded-full bg-gray-800 p-6">
      <p className="uppercase">{initials}</p>
    </div>
  );
};

export default PatientAvatar;
