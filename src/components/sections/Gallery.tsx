import React from "react";
import { useState, useEffect, useCallback } from 'react';
import { Section } from '../ui/Section';
import { GALLERY_IMAGES } from '../../data/portfolio';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null);
    }
  }, [lightboxIndex]);
  
  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <Section id="gallery" title="Gallery" subtitle="Glimpses of projects, hardware, and photography.">
      
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {GALLERY_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.1 }}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer bg-muted border border-border"
            onClick={() => openLightbox(idx)}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <span className="text-xs font-mono-tech font-bold text-primary mb-1">{img.category}</span>
              <p className="text-sm font-medium text-foreground">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-xl" onClick={closeLightbox}>
            <button className="absolute top-4 right-4 sm:top-6 sm:right-6 text-foreground/70 hover:text-foreground hover:bg-background/80 bg-background/50 backdrop-blur-md rounded-full transition-colors p-2 z-[300] shadow-md" onClick={closeLightbox}>
              <X size={32} />
            </button>
            
            <button className="absolute left-4 sm:left-6 text-foreground/70 hover:text-foreground hover:bg-background/80 bg-background/50 backdrop-blur-md rounded-full transition-colors p-3 sm:p-4 z-[300] hidden sm:block shadow-md" onClick={prevImage}>
              <ChevronLeft size={36} strokeWidth={1.5} className="sm:w-12 sm:h-12" />
            </button>
            
            <button className="absolute right-4 sm:right-6 text-foreground/70 hover:text-foreground hover:bg-background/80 bg-background/50 backdrop-blur-md rounded-full transition-colors p-3 sm:p-4 z-[300] hidden sm:block shadow-md" onClick={nextImage}>
              <ChevronRight size={36} strokeWidth={1.5} className="sm:w-12 sm:h-12" />
            </button>

            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={GALLERY_IMAGES[lightboxIndex].src} 
                alt={GALLERY_IMAGES[lightboxIndex].alt} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-border/50"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono-tech text-primary uppercase tracking-widest">{GALLERY_IMAGES[lightboxIndex].category}</span>
                <h3 className="text-lg font-medium mt-1">{GALLERY_IMAGES[lightboxIndex].alt}</h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
