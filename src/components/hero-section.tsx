import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/CodeWithSatyaPrakash",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/satya-prakash-mohanty-343496257",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:satyaprakashmohanty97@gmail.com",
    },
  ];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden grid-bg">
       <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background to-background" />
      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
            <p className="text-xl font-medium">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Satya Prakash Mohanty</span>
            </h1>
            <h2 className="text-2xl font-semibold">Data Science Specialist</h2>
            <p className="max-w-lg mx-auto md:mx-0 text-muted-foreground">
            A passionate B.Tech Computer Science student specializing in Data Science, transforming complex data into actionable insights through machine learning, computer vision, and NLP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" asChild className="glow-primary-hover shadow-glow-primary">
                    <Link href="#projects">View My Projects <ArrowRight className="ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <a href="mailto:satyaprakashmohanty97@gmail.com">Contact Me <Mail className="ml-2" /></a>
                </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        <link.icon className="w-6 h-6" />
                    </a>
                ))}
            </div>
        </div>
        <div className="hidden md:block">
            <Image 
                src="https://storage.googleapis.com/aifirebase-7a130.appspot.com/users%2FwPEiJbLpA4Z2yMNAeRkD%2Fgenerations%2F2f63e6e8-6e5a-4b6a-9f5b-514d7a8d29b0.jpeg?alt=media&token=e11e8605-7729-4c74-9f26-78722a490196"
                width={600}
                height={600}
                alt="Satya Prakash Mohanty"
                data-ai-hint="profile picture"
                className="animate-[float_5s_ease-in-out_infinite] rounded-lg shadow-2xl shadow-primary/30"
            />
        </div>
      </div>
    </section>
  );
}
