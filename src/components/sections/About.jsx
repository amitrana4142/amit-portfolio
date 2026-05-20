import { motion } from 'framer-motion';
import { about } from '../../data/portfolio';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const About = () => (
  <AnimatedSection id="about" className="about-section">
    <SectionHeading tag="01 — Profile" title="About Me" subtitle="Engineer. Builder. Creative problem solver." />

    <div className="about-grid">
      <motion.div
        className="glass-card about-main"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <p className="about-lead">{about.intro}</p>
        {about.details.map((para, i) => (
          <p key={i} className="about-text">{para}</p>
        ))}
      </motion.div>

      <motion.div
        className="glass-card about-philosophy"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="philosophy-icon" aria-hidden="true">◈</div>
        <h3>Philosophy</h3>
        <p>{about.philosophy}</p>
        <div className="philosophy-stats">
          <div className="stat">
            <span className="stat-value">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">10+</span>
            <span className="stat-label">Features Shipped</span>
          </div>
          <div className="stat">
            <span className="stat-value">3</span>
            <span className="stat-label">Production Apps</span>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default About;
