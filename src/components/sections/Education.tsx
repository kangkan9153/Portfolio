import { Section } from '../ui/Section';
import { USER_INFO, CERTIFICATIONS } from '../../data/portfolio';
import { motion } from 'motion/react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

export function Education() {
  return (
    <Section id="education" className="bg-muted/30">
      <div className="grid gap-16 max-w-3xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" /> Education
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10" />
            
            <div className="font-mono-tech text-sm text-primary mb-2">{USER_INFO.education.graduation}</div>
            <h3 className="text-2xl font-bold mb-1">{USER_INFO.education.degree}</h3>
            <h4 className="text-lg text-muted-foreground mb-6">{USER_INFO.education.major}</h4>
            
            <div className="pt-6 border-t border-border">
              <p className="font-medium">{USER_INFO.education.college}</p>
            </div>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
