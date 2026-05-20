import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryPhotos } from '../../data/portfolio';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

function GalleryImage({ photo }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="gallery-placeholder">
        <span>Add image</span>
        <code>{photo.src}</code>
      </div>
    );
  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const lightboxSrc = lightbox ? (lightbox.fullSrc ?? lightbox.src) : '';

  return (
    <AnimatedSection id="gallery" className="gallery-section">
      <SectionHeading tag="06 — Lens" title="Photography Gallery" subtitle="Cinematic frames from adventures behind the lens." />

      <div className="gallery-masonry">
        {galleryPhotos.map((photo, i) => (
          <motion.button
            key={photo.id}
            type="button"
            className={`gallery-item gallery-item--${photo.span} interactive`}
            onClick={() => setLightbox(photo)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.03 }}
          >
            <GalleryImage photo={photo} />
            <div className="gallery-overlay">
              <span>{photo.alt}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
          >
            <motion.button
              type="button"
              className="lightbox-close interactive"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ×
            </motion.button>
            <motion.img
              src={lightboxSrc}
              alt={lightbox.alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="lightbox-caption">{lightbox.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default Gallery;
