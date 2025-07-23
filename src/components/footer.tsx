import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Satya Prakash Mohanty. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Learn and grow
        </p>
        <Link href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Back to Top &uarr;
        </Link>
      </div>
    </footer>
  );
}
