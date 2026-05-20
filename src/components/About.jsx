const About = () => {
  const skills = {
    languages: ['C#', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML', 'CSS'],
    frameworks: ['.NET Core', 'ASP.NET MVC', 'Razor Pages', 'React', 'Entity Framework', 'jQuery', 'Nx Workspace'],
    architecture: ['Microservices', 'Monolithic', 'RESTful API', 'Micro-Frontend (MFE)', 'Webpack'],
    databases: ['SQL Server', 'MySQL']
  };

  return (
    <section className="section container" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! I'm Amit, a Full Stack .NET Developer with over 2 years of experience building and maintaining production-level web applications. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
          </p>
          <p>
            My journey into web development started when I realized the power of software to solve real-world problems. Today, I work across both monolithic and microservice architectures, leveraging tools like C#, .NET Core, React, and SQL Server to deliver robust solutions.
          </p>
          <p>
            I'm known for writing clean, well-tested, maintainable code and have sharp debugging skills developed on live enterprise systems. I also consistently leverage AI-assisted development workflows to enhance productivity.
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Architecture</h3>
            <div className="skill-tags">
              {skills.architecture.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-tags">
              {skills.databases.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
