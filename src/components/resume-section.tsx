import { Button } from "./ui/button";
import { Download, Eye } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="bg-background">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-4">My Resume</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mb-8">
          Check out my full resume to get a detailed overview of my skills, experience, and projects.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="glow-primary-hover shadow-glow-primary">
            <a href="https://drive.google.com/file/d/1GNWhrTaCL03cIKNOSUzw0kWycwEo-DIo/view" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
             <a href="https://drive.google.com/file/d/1GNWhrTaCL03cIKNOSUzw0kWycwEo-DIo/view" target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-5 w-5" />
              View Online
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
