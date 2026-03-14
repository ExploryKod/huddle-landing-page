import React from "react";
import Image from "next/image";
import CtaButton from "@components/atomes/CtaButton";

export const Header: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <header className="header-height shadow-md w-full mx-auto flex items-center">
    <nav
      className={`flex flex-wrap items-center justify-between gap-4 w-full ${className}`.trim()}
    >
      <div className="flex items-center gap-4">
        <Image src="/logo.svg" alt="Huddle" width={100} height={100} />
      </div>
      <div className="flex items-center gap-4">
        <CtaButton variant="secondary" >Try It Free</CtaButton>
      </div>
    </nav>
    </header>
  );
};




