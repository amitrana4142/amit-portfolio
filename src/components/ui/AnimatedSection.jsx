import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const AnimatedSection = ({ children, className = '', delay = 0, id }) => {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <section id={id} className={`section ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
