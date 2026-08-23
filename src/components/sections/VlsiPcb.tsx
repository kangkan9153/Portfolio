import { Section } from '../ui/Section';
import { VLSI_JOURNEY, PCB_WORKFLOW } from '../../data/portfolio';
import { motion } from 'motion/react';
import { Cpu, CheckCircle2, CircleDashed, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export function VlsiPcb() {
  return (
    <Section id="vlsi" className="bg-muted/50 border-y border-border overflow-hidden">
      <div className="grid gap-16">
        {/* VLSI Journey */}
        <div className="bg-card border border-border p-8 rounded-2xl flex flex-col mb-8 shadow-sm">
          <h3 className="text-[10px] font-mono-tech text-muted-foreground tracking-widest uppercase mb-8">VLSI Learning Journey</h3>
          <div className="flex items-center justify-between relative mt-2 px-4 overflow-x-auto pb-4 scrollbar-hide min-w-full">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 min-w-[600px]"></div>
            <div className="relative flex justify-between w-full min-w-[600px]">
              {VLSI_JOURNEY.map((step, idx) => {
                const isCompleted = step.status === 'Completed';
                const isLearning = step.status === 'Learning';
                return (
                  <div key={idx} className="relative flex flex-col items-center gap-3">
                    <div className={cn(
                      "h-3 w-3 rounded-full z-10 transition-colors",
                      isCompleted ? "bg-primary" : isLearning ? "bg-primary ring-4 ring-primary/20" : "bg-muted border border-border"
                    )}></div>
                    <span className={cn(
                      "text-[10px] font-mono-tech uppercase text-center w-24 leading-tight",
                      isCompleted || isLearning ? "text-primary" : "text-muted-foreground"
                    )}>
                      {step.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* PCB Design */}
        <div id="pcb">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-mono-tech text-xs">PCB</div>
              PCB Design
            </h2>
            <p className="text-muted-foreground">My standard workflow for bringing circuits to life.</p>
          </div>

          <div className="relative">
            {/* SVG Trace background */}
            <svg className="absolute inset-0 w-full h-full text-border pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M 40 40 L 40 400" strokeDasharray="4 4" />
            </svg>
            
            <div className="space-y-6 relative z-10">
              {PCB_WORKFLOW.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors z-10 relative shadow-sm">
                    {idx + 1}
                  </div>
                  {idx < PCB_WORKFLOW.length - 1 && (
                    <ArrowRight className="text-muted-foreground/50 w-4 h-4 hidden sm:block" />
                  )}
                  <div className="bg-card border border-border p-4 rounded-xl flex-grow shadow-sm group-hover:shadow-md transition-shadow">
                    <h4 className="font-bold">{item.step}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-card border border-border rounded-2xl">
              <h4 className="font-mono-tech text-sm font-bold text-muted-foreground mb-4 uppercase">Core Tools</h4>
              <div className="flex flex-wrap gap-3">
                {['KiCad', 'Proteus', 'Fusion 360', 'EasyEDA'].map(tool => (
                  <span key={tool} className="bg-muted text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-border">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
