import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determinar la sección activa
      const sections = ['home', 'about', 'skills', 'experience', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" className="logo-link" onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}>
            <span className="logo-text">Gabriel Rebelles</span>
          </a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('home')
                }}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
              >
                Sobre Mí
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('skills')
                }}
              >
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#experience" 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('experience')
                }}
              >
                Experiencia
              </a>
            </li>
            {/* <li className="nav-item">
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                Proyectos
              </a>
            </li> */}
            <li className="nav-item">
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
