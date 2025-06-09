import React from "react";
import { cn } from "@/lib/utils";

const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("bg-clip-text text-transparent bg-primary-gradient leading-[1.4] -mt-2", className)}>
      {children}
    </span>
  );
};

export default GradientText;
