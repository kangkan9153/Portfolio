import { Section } from '../ui/Section';
import { LAB_EQUIPMENT } from '../../data/portfolio';
import { motion } from 'motion/react';

export function Lab() {
  return (
    <Section id="lab" title="My Electronics Lab" subtitle="A digital inventory of my hardware workstation and tools.">
      
      <div className="grid lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono-tech text-muted-foreground">ONLINE</span>
              </div>
            </div>
            
            <h3 className="font-mono-tech text-[10px] tracking-widest font-bold text-muted-foreground mb-6 uppercase">Lab Status</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono-tech mb-1">Current Experiment</div>
                <div className="text-sm font-bold text-primary">ESP32 + IMU Sensor Fusion</div>
              </div>
              <div className="h-px w-full bg-border" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono-tech mb-1">Active Tools</div>
                <div className="text-sm font-bold">VS Code, KiCad 7.0</div>
              </div>
              <div className="h-px w-full bg-border" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono-tech mb-1">Power Draw</div>
                <div className="font-mono-tech text-sm font-bold text-accent-foreground">~ 12.4W</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {LAB_EQUIPMENT.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 flex items-start gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 text-muted-foreground">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </Section>
  );
}
