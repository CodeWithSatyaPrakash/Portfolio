import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { CursorGlow } from '@/components/cursor-glow';
import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: "satyagpt",
  description: "Satya Prakash Mohanty's AI & Data Science Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <CursorGlow />
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
