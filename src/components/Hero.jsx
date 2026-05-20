const Hero = () => {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="hero-subtitle">Hi, my name is</div>
        <h1 className="hero-title">
          Amit <span>Rana.</span><br />
          I build things for the web.
        </h1>
        <p className="hero-desc">
          I'm a .NET Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products across monolithic and microservice architectures.
        </p>
        <div className="hero-buttons">
          <a href="mailto:amitrana4142@gmail.com" className="btn-primary" style={{ textDecoration: 'none' }}>
            Get In Touch
          </a>
          <a href="https://www.linkedin.com/in/amit-rana-251ba2190/" target="_blank" rel="noreferrer" className="btn-secondary" style={{ textDecoration: 'none' }}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
