"use client";

import React from "react";

export default function CtaButton({ children, variant = "primary" }: 
    { children: React.ReactNode, variant: "primary" | "secondary" }) {
    const styles = "btn-common-styles";
    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary"
    };
  
    return <button type="button" className={`${styles} ${variants[variant]}`}>{children}</button>;
  }