import React from "react";

export function Section({ children }: { children: React.ReactNode }): React.ReactElement {
  return <section className="section">{children}</section>;
}