import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center font-black leading-none select-none ${className}`}>
      <span className="text-[0.3em] tracking-[0.15em] ml-[0.15em] mb-[0.05em]">OWN THE</span>
      <span className="text-[1em] tracking-[-0.06em]">Site</span>
      <span className="text-[0.15em] tracking-[0.1em] mt-[0.1em]">EST. 2026</span>
    </div>
  );
}
