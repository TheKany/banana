import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

const Contents = ({ children, className, src, alt }: Props) => {
  return (
    <section className={`relative ${className} ?? ''`}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority
      />

      {children}
    </section>
  );
};

export default Contents;
