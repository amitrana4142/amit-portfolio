import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const hasFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

const CustomCursor = () => {
  const [enabled] = useState(hasFinePointer);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      if (e.target?.closest?.('a, button, .interactive, input, textarea')) {
        setHovering(true);
      }
    };
    const onOut = () => setHovering(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovering ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hovering ? 1.8 : 1,
          borderColor: hovering ? 'var(--neon-cyan)' : 'rgba(0, 240, 255, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 18, mass: 0.8 }}
      />
      <div
        className="cursor-trail"
        style={{ left: pos.x, top: pos.y }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
