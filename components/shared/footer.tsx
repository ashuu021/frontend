"use client";

import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                PDF<span className="text-primary font-extrabold text-2xl">⚡</span>AI
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              The world's first AI-native PDF productivity platform. Built for developers, teams, and individuals who want more from their documents.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6">Tools</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/tools/merge-pdf" className="hover:text-primary transition-colors">Merge PDF</Link></li>
              <li><Link href="/tools/split-pdf" className="hover:text-primary transition-colors">Split PDF</Link></li>
              <li><Link href="/tools/compress-pdf" className="hover:text-primary transition-colors">Compress PDF</Link></li>
              <li><Link href="/tools/jpg-to-pdf" className="hover:text-primary transition-colors">JPG to PDF</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6">AI Features</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/tools/ai-summary" className="hover:text-primary transition-colors">AI Summarizer</Link></li>
              <li><Link href="/tools/ai-contract" className="hover:text-primary transition-colors">Contract Analysis</Link></li>
              <li><Link href="/tools/auto-filler" className="hover:text-primary transition-colors">Auto Form Filler</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-muted-foreground">© 2026 PDF⚡AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors"><Twitter size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors"><Github size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors"><Linkedin size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
