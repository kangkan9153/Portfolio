/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { VlsiPcb } from './components/sections/VlsiPcb';
import { Lab } from './components/sections/Lab';
import { Education } from './components/sections/Education';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <VlsiPcb />
          <Lab />
          <Education />
          <Gallery />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

