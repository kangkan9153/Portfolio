import { useState } from 'react';
import { Section } from '../ui/Section';
import { USER_INFO } from '../../data/portfolio';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Send, Terminal, Check } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Copy to clipboard for convenience
    if (navigator.clipboard) {
      navigator.clipboard.writeText(USER_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }

    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile: Use standard mailto
      window.location.href = `mailto:${USER_INFO.email}`;
    } else {
      // Desktop: Open Gmail web compose in a new tab
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${USER_INFO.email}`, '_blank');
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project idea, collaboration, or just want to talk electronics?">
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-card border border-border p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
            <h3 className="font-bold text-xl mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${USER_INFO.email}`} 
                onClick={handleEmailClick}
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center relative overflow-hidden shrink-0">
                  <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${copied ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <Check size={18} className="text-green-500" />
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${copied ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{USER_INFO.email}</span>
                  <span className="text-xs text-muted-foreground/70">{copied ? 'Copied to clipboard! Opening Gmail...' : 'Send an email'}</span>
                </div>
              </a>
              
              <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Github size={18} />
                </div>
                <span className="font-medium">GitHub Profile</span>
              </a>

              <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Linkedin size={18} />
                </div>
                <span className="font-medium">LinkedIn Network</span>
              </a>

              <a href={USER_INFO.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Instagram size={18} />
                </div>
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </span>
            </div>
            <p className="text-green-500 font-medium">Available for new opportunities.</p>
          </div>

        </div>

        <div className="lg:col-span-3">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="bg-card border border-border p-8 rounded-2xl space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="How can we collaborate?"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status !== 'idle'}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <span className="w-5 h-5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
              ) : status === 'success' ? (
                <>Message Sent!</>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
}
