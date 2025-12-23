import React from "react";

export default function GlassCard({ children }) {
  return (
    <div className="
      bg-white/10
      backdrop-blur-2xl
      border border-white/20
      rounded-3xl
      shadow-[0_0_60px_rgba(139,92,246,0.4)]
      p-8
    ">
      {children}
    </div>
  );
}
