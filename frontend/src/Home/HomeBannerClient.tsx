"use client";
import React, { useEffect } from "react";
import { MatrixBackground } from "@/components/MatrixBackground";

export default function HomeBannerClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative isolate">
      <MatrixBackground />
      {children}
    </div>
  );
}
