import React from "react";
import Image from "next/image";
import CtaButton from "@components/atomes/CtaButton";

export const Header: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <header className="pb-10 header-height w-full mx-auto bg-transparent">
    <nav
      className={`header-container flex flex-wrap items-center justify-between gap-4 w-full ${className}`.trim()}
      aria-label="Header Navigation bar"
    >
      <div className="flex items-center gap-4">
        <Image src="/logo.svg" alt="Huddle" width={200} height={200} className="h-auto w-[150px] md:w-[200px]"/>
      </div>
      <div className="flex items-center gap-4">
        <CtaButton variant="secondary" >Try It Free</CtaButton>
      </div>
    </nav>
    </header>
  );
};




