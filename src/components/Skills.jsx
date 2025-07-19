import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress')
            if (progressBar) {
              const level = progressBar.getAttribute('data-level')
              progressBar.style.width = `${level}%`
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    skillsRef.current.forEach((skill) => {
      if (skill) observer.observe(skill)
    })

    return () => {
      skillsRef.current.forEach((skill) => {
        if (skill) observer.unobserve(skill)
      })
    }
  }, [])

  const skills = {
    frontend: [
      { name: 'React', icon: 'fab fa-react', level: 90 },
      { name: 'NextJS', icon: 'fab fa-react', level: 85 },
      { name: 'Angular', icon: 'fab fa-angular', level: 88 },
      { name: 'TypeScript', icon: 'fab fa-js-square', level: 85 },
      { name: 'JavaScript', icon: 'fab fa-js-square', level: 92 },
      { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', level: 80 }
    ],
    backend: [
      { name: 'Node.js', icon: 'fab fa-node-js', level: 100 },
      { name: 'NestJS', icon: 'fas fa-server', level: 90 },
      { name: 'Express', icon: 'fas fa-server', level: 85 },
      { name: 'Python', icon: 'fab fa-python', level: 80 },
      { name: 'Fastify', icon: 'fas fa-bolt', level: 80 },
      { name: 'GraphQL', icon: 'fas fa-project-diagram', level: 82 },
      { name: 'Redis', icon: 'fas fa-memory', level: 75 },
      { name: 'API REST', icon: 'fas fa-code-branch', level: 90 }
    ],
    database: [
      { name: 'PostgreSQL', icon: 'fas fa-database', level: 88 },
      { name: 'DynamoDB', icon: 'fas fa-database', level: 85 },
      { name: 'MongoDB', icon: 'fas fa-leaf', level: 80 },
      { name: 'MySQL', icon: 'fas fa-database', level: 75 }
    ],
    tools: [
      { name: 'Docker', icon: 'fab fa-docker', level: 85 },
      { name: 'Kubernetes', icon: 'fas fa-dharmachakra', level: 80 },
      { name: 'Google Cloud', icon: 'fab fa-google', level: 82 },
      { name: 'AWS', icon: 'fab fa-aws', level: 80 },
      { name: 'Jest', icon: 'fas fa-vial', level: 88 },
      { name: 'Git', icon: 'fab fa-git-alt', level: 90 },
      { name: 'Microservicios', icon: 'fas fa-cubes', level: 85 }
    ]
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Tecnologías y herramientas que domino</p>
        </div>
        
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Backend</h3>
            <div className="skills-grid">
              {skills.backend.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-item"
                  ref={el => skillsRef.current[index] = el}
                >
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-progress" data-level={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-item"
                  ref={el => skillsRef.current[index + 8] = el}
                >
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-progress" data-level={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Bases de Datos</h3>
            <div className="skills-grid">
              {skills.database.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-item"
                  ref={el => skillsRef.current[index + 14] = el}
                >
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-progress" data-level={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">DevOps & Herramientas</h3>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-item"
                  ref={el => skillsRef.current[index + 18] = el}
                >
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div className="skill-progress" data-level={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
