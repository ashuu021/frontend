"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Github, Zap } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              PDF<span className="text-primary font-extrabold text-2xl">⚡</span>AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#tools" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tools</Link>
            <Link href="#ai" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">AI Features</Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#api" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Developer API</Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">Login</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started <Zap className="ml-2 w-3 h-3 fill-current" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
