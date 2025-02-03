import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-foreground px-4 py-2 text-background hover:bg-gray-300",
        outline:
          "border border-foreground bg-transparent text-foreground hover:bg-gray-900",
        action:
          "fixed bottom-8 right-10 rounded-full bg-foreground p-2 text-background hover:bg-gray-300",
      },
      size: {
        default: "h-10 min-w-20 px-4 py-2",
        sm: "h-9 min-w-12 px-3",
        lg: "h-16 min-w-24 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = ({
  className,
  asChild = false,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button };
