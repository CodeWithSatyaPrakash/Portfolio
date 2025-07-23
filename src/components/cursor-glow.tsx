'use client';

import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] transition-transform duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, hsla(var(--primary), 0.1), transparent 80%)`,
      }}
    />
  );
}
