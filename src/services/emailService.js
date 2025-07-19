import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAIL_CONFIG = {
  SERVICE_ID: 'service_535hq5k', // Reemplazar con tu Service ID
  TEMPLATE_ID: 'template_b2d6nfn', // Reemplazar con tu Template ID
  PUBLIC_KEY: 'sFMgyL_ieDBoQhkfn' // Reemplazar con tu Public Key
};

// Inicializar EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

/**
 * Envía un email usando EmailJS
 * @param {Object} formData - Los datos del formulario
 * @param {string} formData.name - Nombre del remitente
 * @param {string} formData.email - Email del remitente
 * @param {string} formData.subject - Asunto del mensaje
 * @param {string} formData.message - Contenido del mensaje
 * @returns {Promise} Promise que resuelve cuando el email se envía
 */
export const sendEmail = async (formData) => {
  try {
    // Parámetros que se enviarán al template de EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'gabriel.rebelles1@gmail.com',
      reply_to: formData.email
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('Email enviado exitosamente:', response);
    return {
      success: true,
      message: 'Mensaje enviado correctamente'
    };
  } catch (error) {
    console.error('Error al enviar email:', error);
    return {
      success: false,
      message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
    };
  }
};

/**
 * Valida los datos del formulario
 * @param {Object} formData - Los datos del formulario a validar
 * @returns {Object} Objeto con el resultado de la validación
 */
export const validateForm = (formData) => {
  const errors = {};

  // Validar nombre
  if (!formData.name.trim()) {
    errors.name = 'El nombre es requerido';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Por favor, ingresa un email válido';
  }

  // Validar asunto
  if (!formData.subject.trim()) {
    errors.subject = 'El asunto es requerido';
  } else if (formData.subject.trim().length < 5) {
    errors.subject = 'El asunto debe tener al menos 5 caracteres';
  }

  // Validar mensaje
  if (!formData.message.trim()) {
    errors.message = 'El mensaje es requerido';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
