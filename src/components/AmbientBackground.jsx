import React from 'react';

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary Radial Soft Glow */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Secondary Ambient Accent Glow */}
      <div 
        className="absolute top-[45%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
        }}
      />

      {/* Tertiary Subtle Glow Bottom */}
      <div 
        className="absolute -bottom-[10%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-15 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)'
        }}
      />

      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 grid-background opacity-40" />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/60 to-[#050505]" />
    </div>
  );
};
