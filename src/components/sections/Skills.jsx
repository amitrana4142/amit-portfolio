import { motion } from 'framer-motion';
import { skills, techStack } from '../../data/portfolio';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const iconMap = {
  backend: '⚡',
  frontend: '◆',
  data: '▣',
  architecture: '◎',
};

const Skills = () => (
  <AnimatedSection id="skills" className="skills-section">
    <SectionHeading tag="02 — Arsenal" title="Skills & Tech Stack" subtitle="Tools I wield to ship production-grade software." />

    <div className="skills-layout">
      <div className="skill-bars">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skill-bar-item glass-card interactive"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="skill-bar-header">
              <span className="skill-icon">{iconMap[skill.category] || '•'}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-pct">{skill.level}%</span>
            </div>
            <div className="skill-track">
              <motion.div
                className="skill-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min(skill.level + 15, 100)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="tech-cloud glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="tech-cloud-title">Tech Stack</h3>
        <div className="tech-pills">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              className="tech-pill interactive"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -3, boxShadow: '0 0 20px var(--neon-cyan-glow)' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Skills;
