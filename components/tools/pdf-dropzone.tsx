"use client";

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, File, X, FileType, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PDFDropzoneProps {
  onUpload: (files: File[]) => void;
  isLoading?: boolean;
  accept?: Record<string, string[]>;
  multiple?: boolean;
}

export const PDFDropzone = ({ onUpload, isLoading, accept = { 'application/pdf': ['.pdf'] }, multiple = true }: PDFDropzoneProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple,
  });

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleProcess = () => {
    onUpload(files);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div 
        {...getRootProps()} 
        className={`relative aspect-[21/9] rounded-[2.5rem] border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center p-8
          ${isDragActive ? 'border-primary bg-primary/5 scale-[0.99]' : 'border-white/10 hover:border-primary/20 bg-white/[0.02]'}
        `}
      >
        <input {...getInputProps()} />
        <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-6">
          <Upload className={`w-8 h-8 ${isDragActive ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Select PDF files</h2>
        <p className="text-muted-foreground text-center max-w-sm">
          or drag and drop them here. Your files are automatically deleted after 1 hour.
        </p>
      </div>

      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {files.map((file, i) => (
                <motion.div
                  key={`${file.name}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-4 rounded-2xl flex items-center gap-4 relative group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                    <FileType className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <button 
                    onClick={() => removeFile(i)}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center pt-6">
              <Button 
                onClick={handleProcess} 
                disabled={isLoading}
                size="lg" 
                className="h-14 px-12 text-md font-bold rounded-2xl bg-primary hover:bg-primary/90 min-w-[200px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Merge PDFs <CheckCircle2 className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
