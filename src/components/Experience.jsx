const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "Junio 2024 - Presente",
      title: "Fullstack Software Engineer SSR",
      company: "Nación Servicios",
      description: "Lidero el desarrollo de microservicios con NestJS y Express, ampliando la capacidad de manejo de solicitudes simultáneas. Diseño y optimizo esquemas en PostgreSQL, consiguiendo respuestas de consulta marcadamente más ágiles. Desarrollo y mantengo componentes en React/NextJs con Tailwind, mejorando la satisfacción y consistencia de la interfaz de usuario. Aseguro la calidad del código con Jest, manteniendo unas pruebas rigurosas y confiables en cada iteración.",
      technologies: ["NestJS", "Express", "PostgreSQL", "React", "NextJS", "Tailwind", "Jest"]
    },
    {
      id: 2,
      period: "Mayo 2023 - Junio 2024",
      title: "Backend Software Engineer SSR",
      company: "Naranja X",
      description: "Construí API REST de alto rendimiento con Express y Fastify, soportando más de 1M de transacciones mensuales escalables. Lideré la migración a DynamoDB, logrando lecturas más ágiles y un acceso a datos más estable. Definí la arquitectura de microservicios en Google Cloud, garantizando alta disponibilidad y precios de demanda. Implementé pruebas automatizadas con Jest y refactoring de código, fortaleciendo la calidad y mantenibilidad del proyecto.",
      technologies: ["Express", "Fastify", "DynamoDB", "Google Cloud", "Jest", "API REST"]
    },
    {
      id: 3,
      period: "Enero 2023 - Mayo 2023",
      title: "Fullstack Software Engineer",
      company: "ITsynch",
      description: "Diseñé y desarrollé un framework de frontend con Angular, estandarizando componentes reutilizables y acelerando la entrega de nuevas aplicaciones. Integré GraphQL con Apollo Client/Server, minimizando la sobrecarga de datos en cada petición. Promoví prácticas de TDD y Domain-Driven Design, fortaleciendo la robustez del código en producción. Orquesté contenedores con Docker y Kubernetes, estandarizando entornos de desarrollo, pruebas y despliegue.",
      technologies: ["Angular", "GraphQL", "Apollo", "Docker", "Kubernetes", "TDD"]
    },
    {
      id: 4,
      period: "Mayo 2021 - Noviembre 2022",
      title: "Fullstack Developer",
      company: "Seidor",
      description: "Desarrollé una plataforma para gestionar procesos de innovación, centralizando y automatizando flujos de trabajo para facilitar la colaboración en equipos. Diseñé microservicios en Express con TypeScript, facilitando un crecimiento fluido en la base de datos. Administré bases de datos PostgreSQL y MongoDB, asegurando consistencia de datos y alto rendimiento operativo. Desarrollé el frontend en Angular, consiguiendo una interfaz responsiva y eficiente en dispositivos móviles y web. Apliqué pruebas unitarias con Jest, reforzando la estabilidad en cada versión liberada.",
      technologies: ["Express", "TypeScript", "PostgreSQL", "MongoDB", "Angular", "Jest"]
    },
    {
      id: 4,
      period: "Enero 2021 - Mayo 2021",
      title: "Cyber Security Analyst",
      company: "NovaRed",
      description: "Desarrollé scripts en JavaScript y Python para automatizar tareas de seguridad y análisis de vulnerabilidades. Brindé soporte técnico a usuarios internos dentro de la empresa. Implementé medidas de seguridad en aplicaciones web, mejorando la protección contra ataques comunes. Colaboré con el equipo de desarrollo para integrar prácticas de seguridad desde las fases iniciales del ciclo de vida del software.",
      technologies: ["JavaScript", "Python", "CyberArk", "Análisis de Vulnerabilidades"],
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="section-subtitle">Mi trayectoria en el desarrollo de software</p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
