import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
    <section id="contact" className="bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of an amazing team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                 <p className="text-muted-foreground">
                    Feel free to reach out via email or connect with me on social media.
                </p>
                <div className="flex flex-col space-y-4">
                     <a href="mailto:satyapmohanty@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                        <Mail />
                        <span>satyapmohanty@example.com</span>
                    </a>
                    <div className="flex space-x-4 pt-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                <link.icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <form className="space-y-4">
                 <Input placeholder="Your Name" />
                 <Input type="email" placeholder="Your Email" />
                 <Textarea placeholder="Your Message" rows={5} />
                 <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
        </div>
      </div>
    </section>
  );
}
