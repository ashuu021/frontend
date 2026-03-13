"use client";

import { useState } from 'react';
import { Navbar } from "@/components/shared/navbar";
import { PDFDropzone } from "@/components/tools/pdf-dropzone";
import { toast } from 'sonner';

export default function JPGToPDFPage() {
  const [loading, setLoading] = useState(false);

  const handleConvert = async (files: File[]) => {
    toast.info("Image to PDF conversion is in production queue. This will use our high-speed processing clusters.");
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center">
      <Navbar />
      
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">JPG to PDF</h1>
        <p className="text-muted-foreground">
          Convert JPG, PNG, and TIFF images to professional PDF documents with high resolution.
        </p>
      </div>

      <PDFDropzone 
        onUpload={handleConvert} 
        isLoading={loading} 
        accept={{ 'image/jpeg': ['.jpg', '.jpeg'], 'image/png': ['.png'] }} 
      />

      <div className="mt-32 max-w-4xl text-center">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8">Process Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Auto Alignment", "Margin Control", "High Fidelity", "Multi-Image Support"].map((feature) => (
            <div key={feature} className="glass py-4 px-2 rounded-2xl text-xs font-semibold">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
