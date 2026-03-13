"use client";

import { useState } from 'react';
import { Navbar } from "@/components/shared/navbar";
import { PDFDropzone } from "@/components/tools/pdf-dropzone";
import axios from 'axios';
import { toast } from 'sonner';

export default function MergePDFPage() {
  const [loading, setLoading] = useState(false);

  const handleMerge = async (files: File[]) => {
    if (files.length < 2) {
      toast.error("Please select at least 2 PDF files to merge.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/pdf/merge', formData, {
        responseType: 'blob',
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'merged_by_pdf_ai.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      toast.success("PDFs merged successfully!");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while merging your PDFs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center">
      <Navbar />
      
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Merge PDF Files</h1>
        <p className="text-muted-foreground">
          Combine multiple PDFs into one document in seconds. 
          Reorder your files after selecting them (coming soon).
        </p>
      </div>

      <PDFDropzone onUpload={handleMerge} isLoading={loading} />

      <section className="mt-32 max-w-4xl w-full grid md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="font-bold mb-2">High Security</h3>
          <p className="text-sm text-muted-foreground">All files are processed on secure servers and deleted automatically after 1 hour.</p>
        </div>
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="font-bold mb-2">Lossless Quality</h3>
          <p className="text-sm text-muted-foreground">We maintain the original resolution and formatting of your PDF documents.</p>
        </div>
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="font-bold mb-2">AI Optimization</h3>
          <p className="text-sm text-muted-foreground">Our AI optimizes the output file size for the best balance between quality and speed.</p>
        </div>
      </section>
    </main>
  );
}
