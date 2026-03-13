import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/shared/hero";
import { ToolSection } from "@/components/shared/tool-section";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ToolSection />
      
      {/* AI Teaser Section */}
      <section id="ai" className="py-20 px-4 bg-primary/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6">
              Exclusive AI Feature
            </div>
            <h2 className="text-4xl font-bold mb-6">Chat with your PDFs</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't just read documents, interview them. Our AI-powered assistant can 
              summarize 100-page contracts, find specific clauses, and answer any 
              question about your PDFs in seconds.
            </p>
            <div className="space-y-4">
              <FeatureItem text="Instant context-aware summaries" />
              <FeatureItem text="Automated data extraction from invoices" />
              <FeatureItem text="Legal clause risk identification" />
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[3rem] glass flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                <div className="glass-card p-6 rounded-2xl w-full">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">"What is the liability cap in this contract?"</div>
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary-foreground/90 ml-8 text-right">
                      "According to Article 14.2, the total liability is capped at $500,000 or 12 months of fees."
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-emerald-400" />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);
