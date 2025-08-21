import React from "react";

type Props = {
  children: React.ReactNode;
};

const TableRow = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-[60px_repeat(4,1fr)] border-t border-t-black divide-x divide-[#8A8A8A]">
      {children}
    </div>
  );
};

export default TableRow;
