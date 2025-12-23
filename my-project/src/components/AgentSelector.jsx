import React from "react";

export default function AgentSelector({ active, setActive }) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {["AssemblyAI", "VAPI"].map((agent) => (
        <button
          key={agent}
          onClick={() => setActive(agent)}
          className={`
            px-6 py-3 rounded-xl font-semibold
            transition-all duration-300
            ${
              active === agent
                ? "bg-violet-600 text-white scale-105"
                : "bg-white/20 text-white hover:bg-white/30"
            }
          `}
        >
          {agent}
        </button>
      ))}
    </div>
  );
}
