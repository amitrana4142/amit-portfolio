import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/portfolio';
import { getVisitorGreetingHtml } from '../../utils/visitorGreeting';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const SocialIcon = ({ type }) => {
  const paths = {
    github: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z',
    mail: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
      <path d={paths[type] || paths.mail} />
    </svg>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [greetingHtml, setGreetingHtml] = useState('');

  useEffect(() => {
    setGreetingHtml(getVisitorGreetingHtml());
    const saved = localStorage.getItem('portfolio_contact_draft');
    if (saved) setForm(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('portfolio_contact_draft', JSON.stringify(form));
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <AnimatedSection id="contact" className="contact-section">
      <SectionHeading tag="08 — Signal" title="Contact" subtitle="Open for opportunities and collaborations." />

      {greetingHtml && (
        <div
          className="visitor-greeting"
          dangerouslySetInnerHTML={{ __html: greetingHtml }}
        />
      )}

      <div className="contact-layout">
        <motion.form
          className="contact-form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Let's build something great..."
            />
          </div>
          <button type="submit" className="btn btn--primary btn--full interactive">
            {sent ? 'Opening mail client...' : 'Send Transmission'}
          </button>
        </motion.form>

        <motion.div
          className="contact-aside glass-card"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Let's Build Something</h3>
          <p>Currently open for new opportunities and collaborations.</p>
          <a href={`mailto:${profile.email}`} className="contact-email interactive">
            {profile.email}
          </a>
          <p className="contact-phone">{profile.phone}</p>

          <div className="social-links">
            {profile.socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                className="social-link interactive"
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcon type={s.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
