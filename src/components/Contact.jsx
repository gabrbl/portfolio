import { useState } from 'react'
import { sendEmail, validateForm } from '../services/emailService'
import Toast from './Toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState({ show: false, message: '', type: '' })

  const showToast = (message, type) => {
    setToast({ show: true, message, type })
  }

  const hideToast = () => {
    setToast({ show: false, message: '', type: '' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setErrors({})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar formulario
    const validation = validateForm(formData)
    
    if (!validation.isValid) {
      setErrors(validation.errors)
      showToast('Por favor, corrige los errores del formulario', 'error')
      return
    }

    setIsLoading(true)
    setErrors({})
    showToast('Enviando mensaje...', 'loading')

    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        showToast('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success')
        resetForm()
      } else {
        showToast(result.message, 'error')
      }
    } catch (error) {
      console.error('Error:', error)
      showToast('Error inesperado. Por favor, intenta nuevamente.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">¿Interesado en trabajar juntos? ¡Hablemos!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-title">Información de Contacto</h3>
            <p className="contact-description">
              Estoy siempre abierto a discutir nuevas oportunidades, 
              proyectos interesantes o simplemente charlar sobre tecnología.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <span>gabriel.rebelles1@gmail.com</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <span>11 3688-6325</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <span>Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/gabrbl" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a href="https://github.com/gabrbl" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              
              <a href="https://www.instagram.com/gabrbl" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className={`contact-form ${isLoading ? 'form-loading' : ''}`} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <div className="form-error">
                    <i className="fas fa-exclamation-triangle"></i>
                    {errors.name}
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <div className="form-error">
                    <i className="fas fa-exclamation-triangle"></i>
                    {errors.email}
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="¿De qué quieres hablar?"
                />
                {errors.subject && (
                  <div className="form-error">
                    <i className="fas fa-exclamation-triangle"></i>
                    {errors.subject}
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                ></textarea>
                {errors.message && (
                  <div className="form-error">
                    <i className="fas fa-exclamation-triangle"></i>
                    {errors.message}
                  </div>
                )}
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Toast Notification */}
        <Toast 
          message={toast.message}
          type={toast.type}
          show={toast.show}
          onClose={hideToast}
        />
      </div>
    </section>
  )
}

export default Contact
