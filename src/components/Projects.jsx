const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión Web",
      description: "Aplicación web completa para gestión de inventario y ventas con panel administrativo, reportes dinámicos y sistema de usuarios con diferentes niveles de acceso.",
      image: "/assets/images/project-1.svg",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "API de Autenticación JWT",
      description: "API RESTful robusta con sistema de autenticación JWT, validación de datos, middleware de seguridad y documentación completa con Swagger.",
      image: "/assets/images/project-2.svg",
      technologies: ["Node.js", "JWT", "MongoDB", "Swagger"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Dashboard de Analytics",
      description: "Panel de control interactivo con visualización de datos en tiempo real, gráficos dinámicos y reportes personalizables para análisis de métricas.",
      image: "/assets/images/project-3.svg",
      technologies: ["React", "Chart.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Aplicación de Tareas",
      description: "Aplicación web para gestión de tareas personales con funcionalidades de drag & drop, categorización, fechas límite y sincronización en tiempo real.",
      image: "/assets/images/project-4.svg",
      technologies: ["Vue.js", "Firebase", "CSS3", "PWA"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">Algunos de mis trabajos más recientes</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
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

export default Projects
