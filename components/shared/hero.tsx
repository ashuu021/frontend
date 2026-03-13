"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck, Layers, Sparkles, Trash2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
      {/* Background Orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-orbit pointer-events-none">
         <div className="w-4 h-4 bg-primary rounded-full blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-8"
          >
            <Sparkles className="w-3 h-3" />
            <span>Next-Generation PDF Platform</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            The PDF Tools You Love, <br />
            <span className="gradient-text">Augmented with AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Merge, split, and compress PDFs instantly. Use AI to summarize contracts, 
            extract insights, and automate document workflows in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="h-14 px-8 text-md font-bold rounded-2xl bg-primary hover:bg-primary/90">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-md font-bold rounded-2xl glass hover:bg-white/5">
              Explore Tools
            </Button>
          </motion.div>
        </div>

        {/* Feature Preview Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <PreviewCard icon={<Layers className="text-indigo-400" />} title="Merge & Split" description="Seamless page management" />
          <PreviewCard icon={<Sparkles className="text-purple-400" />} title="AI Summary" description="Instant document insights" />
          <PreviewCard icon={<FileCheck className="text-emerald-400" />} title="Contract Analysis" description="Risk detection with AI" />
          <PreviewCard icon={<Trash2 className="text-rose-400" />} title="Auto Delete" description="Security by design" />
        </motion.div>
      </div>
    </section>
  );
};

const PreviewCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="glass-card p-6 rounded-3xl text-left">
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/5">
      {icon}
    </div>
    <h3 className="font-bold text-sm mb-1">{title}</h3>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);
