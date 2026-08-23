import { Section } from '../ui/Section';
import { USER_INFO, CERTIFICATIONS } from '../../data/portfolio';
import { motion } from 'motion/react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

export function Education() {
  return (
    <Section id="education" className="bg-muted/30">
      <div className="grid md:grid-cols-2 gap-16">
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

        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-primary" /> Certifications
          </h2>
          
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border p-5 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors"
              >
                <div>
                  <h4 className="font-bold">{cert.name}</h4>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                    <span>{cert.organization}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="font-mono-tech">{cert.date}</span>
                  </div>
                </div>
                <a href={cert.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
