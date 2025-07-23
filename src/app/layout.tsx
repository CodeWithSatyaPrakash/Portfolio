import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { CursorGlow } from '@/components/cursor-glow';
import React from 'react';

export const metadata: Metadata = {
  title: "Satya's AI Canvas",
  description: "Satya Prakash Mohanty's AI & Data Science Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="font-body antialiased">
        <CursorGlow />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
