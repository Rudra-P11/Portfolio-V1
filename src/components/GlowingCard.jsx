import React from "react";

const GlowingCard = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-[1px] ${className}`}>
      {/* The Spinning Gradient Border */}
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      
      {/* The Content Background (covers the middle so only border shows) */}
      <div className="relative h-full w-full rounded-3xl bg-secondary/90 backdrop-blur-xl p-1">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;