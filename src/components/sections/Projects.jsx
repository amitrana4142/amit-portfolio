import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const Projects = () => (
  <AnimatedSection id="projects" className="projects-section">
    <SectionHeading tag="04 — Work" title="Projects" subtitle="Production systems built with precision and scale." />

    <div className="projects-grid">
      {projects.map((project, i) => (
        <motion.article
          key={project.title}
          className="project-card glass-card interactive"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8 }}
        >
          {/*{i === 0 && <div className="featured-badge">Featured Project</div>}*/}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill tech-pill--sm">{t}</span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </AnimatedSection>
);

export default Projects;
