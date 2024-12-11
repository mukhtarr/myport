import React from 'react'
import '../styling/Skills.css';  // Importing the CSS file


function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'SQL','Angular', 'Vue JS'];
  return (
    <div>
      <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
    </div>
  )
}

export default Skills
