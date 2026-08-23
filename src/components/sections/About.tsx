import { Section } from '../ui/Section';
import { USER_INFO } from '../../data/portfolio';
import { motion } from 'motion/react';
import { Cpu, Zap, LayoutTemplate, CircuitBoard } from 'lucide-react';

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="An aspiring electronics engineer focused on hardware and digital design.">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am an Electronics and Communication Engineering student with a deep passion for how things work at the lowest levels. From routing complex PCB traces to writing embedded C for microcontrollers, I love the intersection of hardware and software.
          </p>
          <p>
            My current focus is heavily geared towards VLSI Design and Embedded Systems. I enjoy taking a concept, designing the schematic, laying out the PCB, and bringing it to life through code.
          </p>
          <p>
            Beyond engineering, I enjoy photography, video editing, and continuously learning about new technological advancements.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-mono-tech text-[10px] font-bold tracking-widest text-primary uppercase mb-4">Currently Exploring</h3>
            <div className="flex flex-wrap gap-2">
              {['VLSI DESIGN', 'PCB ROUTING', 'EMBEDDED C', 'DIGITAL LOGIC'].map((item, i) => (
                <span key={i} className="bg-muted text-muted-foreground px-2 py-1 rounded text-[10px] font-mono-tech uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(USER_INFO.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border p-4 rounded-xl flex flex-col justify-center"
              >
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono-tech mb-1">{key}</div>
                <div className="text-xl font-bold text-foreground font-mono-tech">{value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
