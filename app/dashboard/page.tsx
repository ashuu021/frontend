"use client";

import { Navbar } from "@/components/shared/navbar";
import { 
  Merge, 
  Scissors, 
  Scaling, 
  Image as ImageIcon, 
  FileText, 
  Sparkles, 
  Trash2, 
  History,
  LayoutGrid,
  Settings,
  Bell,
  Clock
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const tools = [
  { group: "Essentials", items: [
    { name: "Merge PDF", icon: Merge, href: "/tools/merge-pdf", color: "text-blue-400", premium: false },
    { name: "Split PDF", icon: Scissors, href: "/tools/split-pdf", color: "text-red-400", premium: false },
    { name: "Compress", icon: Scaling, href: "/tools/compress-pdf", color: "text-orange-400", premium: false },
  ]},
  { group: "Converters", items: [
    { name: "JPG to PDF", icon: ImageIcon, href: "/tools/jpg-to-pdf", color: "text-emerald-400", premium: false },
    { name: "PDF to Word", icon: FileText, href: "/tools/pdf-to-word", color: "text-sky-400", premium: false },
    { name: "PDF to Excel", icon: FileText, href: "/tools/pdf-to-excel", color: "text-green-400", premium: false },
  ]},
  { group: "AI Productivity", items: [
    { name: "AI Summarizer", icon: Sparkles, href: "/tools/ai-summary", color: "text-purple-400", premium: true },
    { name: "Contract Analyzer", icon: FileText, href: "/tools/ai-contract", color: "text-indigo-400", premium: true },
    { name: "Auto Filler", icon: Sparkles, href: "/tools/auto-filler", color: "text-pink-400", premium: true },
  ]},
  { group: "Security", items: [
    { name: "Unlock PDF", icon: Trash2, href: "/tools/unlock", color: "text-rose-400", premium: false },
    { name: "Protect PDF", icon: FileText, href: "/tools/protect", color: "text-yellow-400", premium: false },
  ]}
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#050505]">
      <Navbar />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-8">
          <div className="space-y-1">
            <SidebarItem icon={<LayoutGrid size={20} />} label="Workspace" active />
            <SidebarItem icon={<History size={20} />} label="Recent Work" />
            <SidebarItem icon={<Clock size={20} />} label="Scheduled Tasks" />
            <SidebarItem icon={<Settings size={20} />} label="Settings" />
          </div>

          <div className="glass-card p-4 rounded-2xl relative overflow-hidden bg-primary/5 border-primary/20">
            <div className="relative z-10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Upgrade to Pro</h4>
              <p className="text-xs text-muted-foreground mb-3">Get unlimited AI summarization and large file support.</p>
              <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Go Pro
              </button>
            </div>
            <Sparkles className="absolute -bottom-2 -right-2 w-16 h-16 text-primary/10" />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-10">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Workspace</h1>
              <div className="flex gap-2">
                <button className="p-2 glass rounded-lg hover:bg-white/5 transition-colors text-muted-foreground"><Bell size={20} /></button>
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary">JD</div>
              </div>
            </div>

            {tools.map((section) => (
              <div key={section.group} className="mb-10">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">{section.group}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {section.items.map((tool) => (
                    <Link key={tool.name} href={tool.href}>
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-primary/30 group"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary/10 transition-colors`}>
                          <tool.icon className={`w-6 h-6 ${tool.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold">{tool.name}</h4>
                            {tool.premium && (
                              <span className="text-[10px] font-extrabold bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase">AI</span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const SidebarItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'}`}>
    {icon}
    {label}
  </button>
);
