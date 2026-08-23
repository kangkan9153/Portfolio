import { Section } from '../ui/Section';
import { SKILLS } from '../../data/portfolio';
import { motion } from 'motion/react';

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Tools and technologies I use to build electronics and software.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between group">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className={`text-xs font-mono-tech px-2 py-1 rounded-md border ${
                    skill.status === 'Proficient' ? 'bg-primary/10 border-primary/20 text-primary' :
                    skill.status === 'Familiar' ? 'bg-accent/10 border-accent/20 text-accent-foreground' :
                    'bg-muted border-border text-muted-foreground'
                  }`}>
                    {skill.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
