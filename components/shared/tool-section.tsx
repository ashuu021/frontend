"use client";

import { motion } from "framer-motion";
import { 
  Merge, 
  Scissors, 
  FileDown, 
  Image as ImageIcon, 
  FileText, 
  Clock,
  Unlock,
  Scaling
} from "lucide-react";
import Link from "next/link";

const tools = [
  { name: "Merge PDF", icon: Merge, color: "text-blue-400", desc: "Combine multiple PDFs into one" },
  { name: "Split PDF", icon: Scissors, color: "text-red-400", desc: "Extract specific pages or ranges" },
  { name: "Compress", icon: Scaling, color: "text-orange-400", desc: "Reduce file size without losing quality" },
  { name: "JPG to PDF", icon: ImageIcon, color: "text-emerald-400", desc: "Convert images to high-quality PDFs" },
  { name: "PDF to Word", icon: FileText, color: "text-sky-400", desc: "Convert for easy editing" },
  { name: "Unlock PDF", icon: Unlock, color: "text-yellow-400", desc: "Remove passwords and security" },
  { name: "Auto Delete", icon: Clock, color: "text-rose-400", desc: "Files cleared every hour" },
  { name: "Export All", icon: FileDown, color: "text-purple-400", desc: "Bulk process your documents" },
];

export const ToolSection = () => {
  return (
    <section id="tools" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Essential Tools</h2>
            <p className="text-muted-foreground">Everything you need to handle PDFs, only faster.</p>
          </div>
          <Link href="/dashboard" className="text-primary text-sm font-semibold hover:underline">
            View All Tools →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass-card group p-6 rounded-[2rem] cursor-pointer hover:border-primary/30"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-primary/10 transition-colors`}>
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
