import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  fz: number;
};

const Text = ({ children, className, fz }: Props) => {
  return (
    <span
      className={`text-center tracking-tight ${className ?? ""}`}
      style={{
        fontSize: `clamp(${fz - 5}px, ${(fz / 375) * 100}vw, ${fz + 2}px)`,
      }}
    >
      {children}
    </span>
  );
};

export default Text;
