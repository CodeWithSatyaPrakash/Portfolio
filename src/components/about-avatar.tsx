'use client';
import { User } from 'lucide-react';
import React from 'react';

export function AboutAvatar() {
  const binaryString = "01001101 01100101 01100101 01110100 00100000 01101101 01100101 00101100 00100000 01100001 00100000 01100100 01101001 01100111 01101001 01110100 01100001 01101100 00100000 01100101 01111000 01110000 01101100 01101111 01110010 01100101 01110010 00101110".split("").map((char, i) => (
    <span
      key={i}
      style={{
        transform: `rotate(${i * (360 / 150)}deg) translateX(150px) rotate(-${i * (360 / 150)}deg)`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transformOrigin: '0 0',
        fontSize: '10px',
        opacity: 0.3,
        color: 'hsl(var(--primary))',
        fontFamily: '"Source Code Pro", monospace',
      }}
    >
      {char}
    </span>
  ));

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '30s' }}>
        {binaryString}
      </div>
      <div className="relative w-64 h-64 rounded-full flex items-center justify-center bg-background z-10">
        <div className="absolute inset-0 rounded-full bg-primary/10 shadow-[inset_0_0_20px_hsl(var(--primary)/0.5)]" />
        <div className="w-56 h-56 rounded-full flex items-center justify-center bg-background z-10 shadow-inner">
           <div className="relative w-48 h-48 rounded-full flex items-center justify-center bg-primary/20 overflow-hidden">
                <div 
                    className="absolute w-full h-full"
                    style={{
                         background: 'linear-gradient(135deg, hsl(var(--primary)/0.8), hsl(var(--primary)/0.2))',
                         borderRadius: '50%'
                    }}
                />
               <User className="w-24 h-24 text-primary-foreground z-10 opacity-80" />
           </div>
        </div>
      </div>
    </div>
  );
}
