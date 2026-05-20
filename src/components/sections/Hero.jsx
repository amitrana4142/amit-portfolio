import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, heroRoles } from '../../data/portfolio';
import { useTypewriter } from '../../hooks/useTypewriter';

const Hero = () => {
  const typedRole = useTypewriter(heroRoles, 90, 2200);
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section id="hero" className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="pulse-dot" />
          Available for opportunities
        </motion.span>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          {profile.role}
        </motion.p>

        <motion.div
          className="hero-typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span className="type-prefix">&gt;</span>
          <span className="type-text">{typedRole}</span>
          <span className="type-cursor">|</span>
        </motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <a href="#projects" className="btn btn--primary interactive">
            View Projects
          </a>
          <a href="#contact" className="btn btn--outline interactive">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span>Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="hero-avatar-wrap">
          <div className="avatar-ring" aria-hidden="true" />
          <div className="avatar-ring avatar-ring--2" aria-hidden="true" />
          <div className="hero-avatar-frame">
            {!avatarError ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="hero-avatar"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div className="hero-avatar hero-avatar--fallback" aria-label={profile.name}>
                AR
              </div>
            )}
          </div>
          <div className="hero-orbit-card card-1">
            <span>.NET</span>
          </div>
          <div className="hero-orbit-card card-2">
            <span>React</span>
          </div>
          <div className="hero-orbit-card card-3">
            <span>SQL</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
