import { motion } from 'motion/react';
import { ArrowRight, Download, Cpu, Activity, Zap } from 'lucide-react';
import { USER_INFO } from '../../data/portfolio';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid-dots-cyan opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 L200 100 L250 150 L600 150 L650 100 L1024 100" stroke="#22d3ee" fill="none" strokeWidth="1" />
          <path d="M800 0 L800 200 L850 250 L1024 250" stroke="#22d3ee" fill="none" strokeWidth="1" />
          <circle cx="250" cy="150" r="3" fill="#22d3ee" />
          <circle cx="600" cy="150" r="3" fill="#22d3ee" />
        </svg>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-mono-tech mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                ECE / 2026
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-foreground">
                Electronics <br className="hidden md:block" />
                <span className="text-primary underline underline-offset-8 decoration-1 text-glow">Engineer</span> in the Making.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {USER_INFO.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-card-foreground text-background hover:bg-card-foreground/90 px-6 py-3 rounded-lg font-bold text-sm transition-colors"
              >
                Explore My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-muted text-foreground border border-border px-6 py-3 rounded-lg font-bold text-sm transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="text-[11px] font-mono-tech uppercase tracking-widest text-muted-foreground hover:text-foreground underline underline-offset-4 ml-4"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Sophisticated visual */}
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-card border border-border shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Circuit Grid */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                {/* Profile Image */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative z-10 w-64 h-64 rounded-2xl border-4 border-muted shadow-2xl overflow-hidden"
                >
                  <img 
                    src="https://i.postimg.cc/q7Mz7xCY/Whats-App-Image-2026-08-01-at-8-31-13-AM-(1).jpg" 
                    alt="Kangkan Sarkar"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute top-12 left-12 bg-card border border-border rounded-lg p-3 shadow-lg flex items-center gap-3 font-mono-tech text-xs"
                >
                  <Activity className="w-4 h-4 text-primary" />
                  CLK_SYS: 240MHz
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-12 right-12 bg-card border border-border rounded-lg p-3 shadow-lg flex items-center gap-3 font-mono-tech text-xs"
                >
                  <Zap className="w-4 h-4 text-primary" />
                  VDD: 3.3V
                </motion.div>
                
                {/* Decorative Traces (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40 stroke-foreground" fill="none" strokeWidth="2">
                  <path d="M 50 250 L 120 250 L 150 220" />
                  <path d="M 450 200 L 380 200 L 350 230" />
                  <path d="M 250 50 L 250 120 L 220 150" />
                  <path d="M 250 450 L 250 380 L 280 350" />
                  <circle cx="50" cy="250" r="4" fill="currentColor" />
                  <circle cx="450" cy="200" r="4" fill="currentColor" />
                  <circle cx="250" cy="50" r="4" fill="currentColor" />
                  <circle cx="250" cy="450" r="4" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
