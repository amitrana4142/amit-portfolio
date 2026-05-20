import { profile } from '../../data/portfolio';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-glow" aria-hidden="true" />
    <p className="footer-text">
      Engineered by <span className="text-gradient">{profile.name}</span>
    </p>
    <p className="footer-meta">
      <a href={`mailto:${profile.email}`} className="interactive">{profile.email}</a>
      <span className="footer-divider">|</span>
      {profile.phone}
    </p>
    <p className="footer-year">© {new Date().getFullYear()} — All systems nominal</p>
  </footer>
);

export default Footer;
