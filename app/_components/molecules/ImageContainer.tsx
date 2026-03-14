import React from "react";

interface ImageContainerProps {
  children: React.ReactNode;
  objectFit?: "image-contain" | "image-cover" | "image-fill";
  classNames?: string;
}

export default function ImageContainer({
  children,
  objectFit = "image-cover",
  classNames = "",
}: ImageContainerProps) {
  return (
    <div className={`image-container ${objectFit} ${classNames}`.trim()}>
      {children}
    </div>
  );
}