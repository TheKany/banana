import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <main className="w-full max-w-md mx-auto mb-[80px] relative">
      {children}
    </main>
  );
};

export default Container;
