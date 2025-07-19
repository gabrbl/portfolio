import { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="logo-text glow-text animate-pulse-glow">GR</span>
        </div>
        <div className="loading-bar">
          <div 
            className="loading-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="loading-text">Cargando Portfolio...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
