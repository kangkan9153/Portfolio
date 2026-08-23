import { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  containerClass?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, title, subtitle, children, className, containerClass, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn('py-20 md:py-28 relative', className)}
        {...props}
      >
        <div className={cn('container mx-auto px-4 md:px-6 relative z-10', containerClass)}>
          {(title || subtitle) && (
            <div className="mb-12 md:mb-20 max-w-3xl">
              {title && (
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                >
                  {title}
                </motion.h2>
              )}
              {subtitle && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-muted-foreground"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = 'Section';
