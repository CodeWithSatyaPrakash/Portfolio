'use client';

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "./ui/alert-dialog";
import { Github, PlayCircle, X } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  dataAiHint: string;
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export function ProjectCard({ title, description, image, tags, dataAiHint, features, githubUrl, demoUrl }: ProjectCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsHovered(false);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="transition-transform duration-300 ease-out relative group"
      >
        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-glow-primary border-transparent hover:border-primary/50 bg-card/50">
          <CardContent className="p-0 relative">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto object-cover aspect-video"
              data-ai-hint={dataAiHint}
            />
             <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="glow-primary-hover shadow-glow-primary"
                >
                    View Details
                </Button>
            </div>
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

      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogContent className="glassmorphism">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold font-headline text-primary">{title}</AlertDialogTitle>
             <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-primary hover:text-primary/80 transition-colors glow-close-icon">
                <X />
            </button>
            <AlertDialogDescription className="pt-2 text-base text-muted-foreground">{description}</AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="my-4">
            <h4 className="font-bold text-lg mb-2 text-primary">Features</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
          </div>

          <div className="my-4">
              <h4 className="font-bold text-lg mb-2 text-primary">Skills & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-code bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
          </div>
          
          <AlertDialogFooter>
             {githubUrl && (
              <Button asChild>
                <Link href={githubUrl} target="_blank"><Github className="mr-2" /> View Code</Link>
              </Button>
            )}
            {demoUrl && (
              <Button asChild variant="secondary">
                <Link href={demoUrl} target="_blank"><PlayCircle className="mr-2" /> View Demo</Link>
              </Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}