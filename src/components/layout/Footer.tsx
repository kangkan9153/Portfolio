export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="font-mono-tech font-bold text-2xl mb-4">Kangkan Sarkar</h3>
            <p className="text-muted-foreground max-w-sm">
              Electronics & Communication Engineering
              <br />
              Building. Learning. Experimenting.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#lab" className="hover:text-primary transition-colors">Lab</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="mailto:kangkan9153@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground font-mono-tech gap-4">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <span>LOC: WEST BENGAL, IN</span>
            <span className="hidden sm:inline">COORD: 26.49°N 89.52°E</span>
            <span>CORE: ECE // SEM: 05</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
