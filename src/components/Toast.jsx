import { useState, useEffect } from 'react';

const Toast = ({ message, type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // Se cierra automáticamente después de 4 segundos

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        <div className="toast-icon">
          {type === 'success' && <i className="fas fa-check-circle"></i>}
          {type === 'error' && <i className="fas fa-exclamation-circle"></i>}
          {type === 'loading' && <i className="fas fa-spinner fa-spin"></i>}
        </div>
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Toast;
