import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const Education = () => (
  <AnimatedSection id="education" className="education-section">
    <SectionHeading tag="07 — Academics" title="Education" />

    <div className="education-grid">
      {education.map((item, i) => (
        <motion.div
          key={item.title}
          className="education-card glass-card interactive"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <span className="education-date">{item.date}</span>
          <h3>{item.title}</h3>
          <p className="education-institution">{item.institution}</p>
          <span className="education-score">{item.score}</span>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

export default Education;
