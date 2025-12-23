import React from "react";

export default function VoiceWave({ active }) {
  if (!active) return null;

  return (
    <div className="flex justify-center gap-2 mt-6">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="w-2 bg-violet-400 rounded-full animate-wave"
          style={{
            height: "2rem",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
