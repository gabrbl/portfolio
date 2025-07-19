const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 Gabriel Rebelles. Todos los derechos reservados.</p>
          </div>
          <div className="footer-links">
            <a 
              href="#home" 
              className="footer-link"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
            >
              Volver arriba
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
