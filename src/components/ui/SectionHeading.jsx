import { motion } from 'framer-motion';

const SectionHeading = ({ tag, title, subtitle, id }) => (
  <motion.header
    id={id}
    className="section-heading"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {tag && <span className="section-tag">{tag}</span>}
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
    <div className="section-line" />
  </motion.header>
);

export default SectionHeading;
