import { motion } from 'framer-motion';
import { hobbies } from '../../data/portfolio';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const Hobbies = () => (
  <AnimatedSection id="hobbies" className="hobbies-section">
    <SectionHeading tag="05 — Beyond Code" title="Hobbies & Interests" subtitle="Passions that fuel creativity off the keyboard." />

    <div className="hobbies-grid">
      {hobbies.map((hobby, i) => (
        <motion.article
          key={hobby.id}
          className="hobby-card interactive"
          style={{ '--hobby-gradient': hobby.gradient }}
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          whileHover={{ y: -12, scale: 1.02 }}
        >
          <div className="hobby-bg" aria-hidden="true" />
          <div className="hobby-content">
            <span className="hobby-emoji">{hobby.emoji}</span>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
          <div className="hobby-scanline" aria-hidden="true" />
        </motion.article>
      ))}
    </div>
  </AnimatedSection>
);

export default Hobbies;
