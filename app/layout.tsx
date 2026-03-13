import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PDF⚡AI - Premium PDF Tools Augmented with AI",
  description: "Merge, split, compress PDFs and use AI to summarize and analyze your documents instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-grid",
          inter.variable
        )}
      >
        {children}
        <Toaster position="bottom-right" richColors theme="dark" />
      </body>
    </html>
  );
}
