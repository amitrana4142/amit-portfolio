import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolio';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const Experience = () => (
  <AnimatedSection id="experience" className="experience-section">
    <SectionHeading tag="03 — Journey" title="Experience" subtitle="A timeline of growth across enterprise systems." />

    <div className="timeline">
      <div className="timeline-track" aria-hidden="true" />
      {experiences.map((exp, index) => (
        <motion.article
          key={`${exp.title}-${exp.date}`}
          className="timeline-card glass-card interactive"
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ x: 6 }}
        >
          <div className="timeline-node" aria-hidden="true" />
          <span className="timeline-date">{exp.date}</span>
          <h3 className="timeline-title">{exp.title}</h3>
          <p className="timeline-company">{exp.company}</p>
          <ul className="timeline-points">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </AnimatedSection>
);

export default Experience;
