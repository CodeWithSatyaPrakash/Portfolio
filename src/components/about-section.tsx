import Image from "next/image";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section id="about" className="bg-card/30">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image 
            src="https://placehold.co/600x600.png"
            width={600}
            height={600}
            alt="AI Coder"
            data-ai-hint="ai coder"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Me</h2>
          <p className="text-lg text-muted-foreground">
            A passionate B.Tech Computer Science student specializing in Data Science, transforming complex data into actionable insights through machine learning, computer vision, and NLP.
          </p>
          <div>
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-muted-foreground">B.Tech in Computer Science (Data Science), ITER, Siksha 'O' Anusandhan, Bhubaneswar (2021-2025)</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Community Involvement</h3>
            <p className="text-muted-foreground">Core Member at GDSC ITER and TFUG Bhubaneswar, organizing tech events and fostering ML discussions.</p>
          </div>
          <Button asChild>
             <a href="https://drive.google.com/file/d/1GNWhrTaCL03cIKNOSUzw0kWycwEo-DIo/view" target="_blank" rel="noopener noreferrer">
              View Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
