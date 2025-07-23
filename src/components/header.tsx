import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg font-headline text-primary">Satya's AI Canvas</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-primary">About</Link>
            <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link href="#skills" className="transition-colors hover:text-primary">Skills</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button asChild className="glow-primary-hover shadow-glow-primary">
            <a href="https://drive.google.com/file/d/1GNWhrTaCL03cIKNOSUzw0kWycwEo-DIo/view" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
