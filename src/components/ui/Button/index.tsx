import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
};

const Button = ({ className, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={className} {...props} />;
};

export { Button };
