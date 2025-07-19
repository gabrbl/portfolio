const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">Conoce más sobre mi trayectoria profesional</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Soy Gabriel Rebelles, desarrollador de software autodidacta con más de 4 años 
              de experiencia profesional. Mi pasión por la tecnología me llevó a aprender 
              programación de forma independiente, construyendo una sólida base de conocimientos 
              a través de la práctica constante y proyectos reales.
            </p>
            <p className="about-description">
              Como desarrollador full stack, domino tecnologías como Node.js, NestJS, 
              React, Angular, TypeScript y bases de datos como PostgreSQL y DynamoDB. 
              Mi enfoque se centra en el desarrollo de arquitecturas escalables, microservicios 
              y la implementación de soluciones eficientes que generen valor real para los usuarios.
            </p>
            <p className="about-description">
              Actualmente trabajo como Software Engineer SSR, liderando proyectos de alto impacto 
              y aplicando metodologías ágiles en equipos multidisciplinarios. Mi aprendizaje
              me ha dado una perspectiva única para resolver problemas complejos 
              y adaptarme rápidamente a nuevas tecnologías.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Tecnologías Dominadas</span>
              </div>
            </div>
            
            <div className="about-actions">
              <a 
                href="/assets/cv/Gabriel-Rebelles-CV.pdf" 
                download="Gabriel-Rebelles-CV.pdf"
                className="btn btn-primary"
              >
                <i className="fas fa-download"></i>
                Descargar CV
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-img-container">
              <img src="/assets/images/entorno.png" alt="Entorno de desarrollo de Gabriel" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
