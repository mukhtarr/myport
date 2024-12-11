import React from 'react'
import '../styling/Projects.css';  // Importing the CSS file


function Projects() {
    const projects = [
        { name: 'E-learning Platform', description: 'Developed a full-stack e-learning platform using MERN stack' },
        { name: 'Portfolio Generator', description: 'Created a React-based tool for generating professional  portfolios' },
        { name: 'University Course Management System', description: 'Built a Java-based system for managing university courses and student enrollments' },
      ];
  return (
    <div>
      <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
    </div>
  )
}

export default Projects
