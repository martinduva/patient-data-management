import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
};

const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
);

export { Card };
