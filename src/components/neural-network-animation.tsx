'use client'

import React, { useMemo } from 'react';

export function NeuralNetworkAnimation() {
  const nodes = useMemo(() => [
    { id: 1, cx: 10, cy: 50, layer: 1 },
    { id: 2, cx: 10, cy: 20, layer: 1 },
    { id: 3, cx: 10, cy: 80, layer: 1 },
    { id: 4, cx: 35, cy: 35, layer: 2 },
    { id: 5, cx: 35, cy: 65, layer: 2 },
    { id: 6, cx: 35, cy: 95, layer: 2 },
    { id: 7, cx: 65, cy: 20, layer: 3 },
    { id: 8, cx: 65, cy: 50, layer: 3 },
    { id: 9, cx: 65, cy: 80, layer: 3 },
    { id: 10, cx: 90, cy: 50, layer: 4 },
  ], []);

  const links = useMemo(() => [
    { source: 1, target: 4 }, { source: 2, target: 4 }, { source: 2, target: 5 }, { source: 3, target: 5 }, { source: 3, target: 6 },
    { source: 4, target: 7 }, { source: 4, target: 8 }, { source: 5, target: 8 }, { source: 6, target: 8 }, { source: 6, target: 9 },
    { source: 7, target: 10 }, { source: 8, target: 10 }, { source: 9, target: 10 },
  ], []);

  const getNodePos = (id: number) => nodes.find(n => n.id === id);

  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { r: 3; opacity: 0.8; }
          50% { r: 4; opacity: 1; }
        }
        @keyframes pulse-line {
          0%, 100% { stroke-opacity: 0.3; }
          50% { stroke-opacity: 0.7; }
        }
        .dot { animation: pulse-dot 3s infinite ease-in-out; }
        .line { animation: pulse-line 5s infinite ease-in-out; }
      `}</style>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <g stroke="hsl(var(--primary))" strokeWidth="0.5">
          {links.map((link, i) => {
            const sourcePos = getNodePos(link.source);
            const targetPos = getNodePos(link.target);
            if (!sourcePos || !targetPos) return null;
            return (
              <line
                key={i}
                x1={sourcePos.cx}
                y1={sourcePos.cy}
                x2={targetPos.cx}
                y2={targetPos.cy}
                className="line"
                style={{ animationDelay: `${(i * 150)}ms` }}
              />
            );
          })}
        </g>
        <g fill="hsl(var(--primary))">
          {nodes.map(node => (
            <circle
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              r="3"
              className="dot"
              style={{ animationDelay: `${(node.id * 100)}ms` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
