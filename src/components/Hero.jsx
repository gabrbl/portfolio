const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="animated-bg"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hola, soy</span>
              <span className="name glow-text">Gabriel Rebelles</span>
            </h1>
            <p className="hero-subtitle">Software Engineer SSR</p>
            <p className="hero-description">
              Software Engineer con más de 4 años de experiencia profesional. 
              Especializado en Node.js, NestJS, React, Angular y arquitecturas de microservicios. 
              Mi pasión por el aprendizaje continuo me ha llevado a liderar proyectos de alto 
              impacto en empresas como Nación Servicios y Naranja X.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('experience')}
              >
                Ver Experiencia
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contactar
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="/assets/images/retrato.png" alt="Gabriel Rebelles" className="profile-img" />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <a 
            href="#about" 
            className="scroll-indicator"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('about')
            }}
          >
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
