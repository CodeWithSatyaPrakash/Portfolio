'use client';

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  dataAiHint: string;
};

export function ProjectCard({ title, description, image, tags, dataAiHint }: ProjectCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: el } = e;
    const { offsetWidth: width, offsetHeight: height } = el;
    const { clientX, clientY } = e;
    const { left, top } = el.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const rotateX = -((y - height / 2) / (height / 2)) * 8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-glow-primary border-transparent hover:border-primary/50 bg-card/50">
        <CardContent className="p-0">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto object-cover aspect-video"
            data-ai-hint={dataAiHint}
          />
        </CardContent>
        <CardHeader>
          <CardTitle className="text-xl font-bold font-headline">{title}</CardTitle>
          <CardDescription className="pt-2">{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-code text-primary bg-primary/10 border border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
