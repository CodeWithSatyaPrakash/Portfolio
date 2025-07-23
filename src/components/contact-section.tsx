import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from 'next/image';

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/satyapmohanty",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/satyapmohanty",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:satyapmohanty@example.com",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Get In Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground transition-colors hover:text-primary transform hover:-translate-y-1"
              >
                <link.icon className="w-10 h-10" />
              </a>
            ))}
          </div>
          <div className="hidden md:block h-16 w-px bg-border"></div>
          <div className="flex items-center gap-4">
             <Image 
                src="https://placehold.co/128x128.png"
                alt="QR Code"
                width={128}
                height={128}
                data-ai-hint="qr code"
                className="rounded-lg border-2 border-primary/50 p-1"
              />
              <p className="text-muted-foreground max-w-[150px]">Scan to connect or send an email.</p>
          </div>
        </div>
        <div className="mt-12">
            <Button asChild size="lg" className="glow-primary-hover shadow-glow-primary">
                <a href="https://drive.google.com/file/d/1GNWhrTaCL03cIKNOSUzw0kWycwEo-DIo/view" target="_blank" rel="noopener noreferrer">
                Download My Resume
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
