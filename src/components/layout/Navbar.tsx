import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'VLSI', href: '#vlsi' },
  { name: 'PCB', href: '#pcb' },
  { name: 'Lab', href: '#lab' },
  { name: 'Education', href: '#education' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfilePic, setShowProfilePic] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowProfilePic(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-border py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-4 group">
            <div className="h-10 w-10 bg-primary rounded flex items-center justify-center font-bold text-xl text-primary-foreground overflow-hidden relative">
              <AnimatePresence mode="wait">
                {showProfilePic ? (
                  <motion.img
                    key="profile"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    src="https://i.postimg.cc/q7Mz7xCY/Whats-App-Image-2026-08-01-at-8-31-13-AM-(1).jpg"
                    alt="Kangkan Sarkar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.span
                    key="letter"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                  >
                    K
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">KANGKAN SARKAR</h1>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[11px] font-mono-tech uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-border pl-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="https://drive.google.com/file/d/1ntEvTrXSi9PuLk8nGqmmX0qmSJmRag7f/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-[11px] font-mono-tech uppercase tracking-widest transition-colors hover:bg-primary/20"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1ntEvTrXSi9PuLk8nGqmmX0qmSJmRag7f/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-primary-foreground px-4 py-3 rounded-lg text-center font-medium mt-4"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
