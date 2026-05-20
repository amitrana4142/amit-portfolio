const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Production platform serving 1,000+ products across modules for order processing, customer support, and reporting. Built a responsive React front-end that improved page load speed by 25% and reduced bounce rate. Integrated a secure payment gateway and optimized stored procedures to reduce query time.",
      tech: ["C#", ".NET Core", "React", "Entity Framework", "SQL Server"],
      image: "/ecommerce.png"
    },
    {
      title: "HR Management System",
      description: "HR portal managing 100+ employee records with modules for onboarding, attendance, leave management, and payroll processing. Implemented role-based access control (RBAC) across 4 user roles and built dynamic report generation with export support.",
      tech: ["C#", "ASP.NET MVC", "SQL Server", "jQuery"],
      image: "/hr.png"
    }
  ];

  return (
    <section className="section container" id="projects">
      <h2 className="section-title">Some Things I've Built</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
