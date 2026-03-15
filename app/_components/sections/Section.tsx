import React from "react";

export function Section({ children, classNames }: { children: React.ReactNode, classNames?: string }): React.ReactElement {
  return <section className={`section-container ${classNames}`}>{children}</section>;
}