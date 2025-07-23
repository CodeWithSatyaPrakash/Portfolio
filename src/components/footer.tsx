import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Satya Prakash Mohanty. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground text-center">
          Learn and grow
        </p>
      </div>
    </footer>
  );
}
