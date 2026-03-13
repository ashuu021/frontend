"use client";

import { useState } from 'react';
import { Navbar } from "@/components/shared/navbar";
import { PDFDropzone } from "@/components/tools/pdf-dropzone";
import { Sparkles, BrainCircuit, FileSearch, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AISummaryPage() {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (files: File[]) => {
    setLoading(true);
    // Simulation for now
    setTimeout(() => {
      setLoading(false);
      alert("AI Summary would start processing here in the full version!");
    }, 2000);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center">
      <Navbar />
      
      <div className="text-center mb-16 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6">
          <Sparkles className="w-3 h-3" />
          <span>Powered by GPT-4 & proprietary PDF models</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">AI PDF Summarizer</h1>
        <p className="text-muted-foreground">
          Extract key insights, detect risks, and get instant executive summaries from any PDF document.
        </p>
      </div>

      <PDFDropzone onUpload={handleUpload} isLoading={loading} multiple={false} />

      <div className="mt-32 max-w-5xl w-full">
        <h2 className="text-2xl font-bold mb-12 text-center">How AI Supercharges your PDFs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<BrainCircuit className="text-indigo-400" />}
            title="Semantic Analysis"
            description="Our models understand the context, not just keywords, to provide accurate summaries of legal and technical documents."
          />
          <FeatureCard 
            icon={<FileSearch className="text-emerald-400" />}
            title="Entity Extraction"
            description="Automatically extract dates, amounts, people, and clauses mentioned throughout your documents into a clean table."
          />
          <FeatureCard 
            icon={<Zap className="text-orange-400" />}
            title="Instant Q&A"
            description="Ask specific questions about the document and get answers cited directly from the text with page numbers."
          />
        </div>
      </div>
    </main>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors" />
    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
  </motion.div>
);
