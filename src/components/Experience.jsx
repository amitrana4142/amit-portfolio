const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Channel Fusion",
      date: "Apr 2026 – Present",
      location: "Chandigarh, India",
      points: [
        "Building and scaling microservice-based back-end services using .NET Core and C#, contributing to 3 active production applications.",
        "Designing and implementing inter-service communication patterns (REST, async messaging) across the microservice ecosystem.",
        "Collaborating on architecture decisions for new services, ensuring scalability, resilience, and clean separation of concerns."
      ]
    },
    {
      title: "Associate Software Developer",
      company: "Channel Fusion",
      date: "Apr 2025 – Apr 2026",
      location: "Chandigarh, India",
      points: [
        "Built component-driven React (TypeScript/JSX) micro-frontend modules within an Nx Workspace monorepo, reducing build times by ~30% through Webpack optimisation.",
        "Introduced unit testing practices that reduced regression bugs by ~25% across consecutive sprint cycles.",
        "Integrated GitHub Copilot into the team workflow, cutting average feature delivery time by ~15% without compromising code quality.",
        "Resolved full stack production bugs covering SQL execution plan analysis, API failures, and React rendering issues."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Channel Fusion",
      date: "Oct 2024 – Apr 2025",
      location: "Chandigarh, India",
      points: [
        "Developed and shipped 10+ features across monolithic web applications using .NET Core, C#, Razor Pages, and SQL Server.",
        "Wrote and optimised stored procedures, improving query performance and reducing report generation time."
      ]
    },
    {
      title: "Software Engineer",
      company: "Connoisseur Infotech Pvt. Ltd.",
      date: "Jan 2021 – Oct 2021",
      location: "Mohali, Punjab",
      points: [
        "Developed and improved features across 3 existing web projects using JavaScript and MySQL, reducing reported defects by 15%.",
        "Built an API early warning monitoring system that reduced average incident response time by 35% and improved platform uptime.",
        "Authored technical documentation covering 5 core modules, reducing new developer onboarding time by approximately 2 days."
      ]
    }
  ];

  return (
    <section className="section container" id="experience">
      <h2 className="section-title">Where I've Worked</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
              </div>
              <div className="timeline-date">{exp.date}</div>
            </div>
            <ul className="timeline-list">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
