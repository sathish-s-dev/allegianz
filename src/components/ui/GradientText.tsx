import React from "react";

const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className="bg-clip-text text-transparent bg-primary-gradient">
      {children}
    </span>
  );
};

export default GradientText;
