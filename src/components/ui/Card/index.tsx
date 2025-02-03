import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"div">;

const Card = ({ children, className, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export { Card };
