import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["JavaScript", "React", "Vue.js", "TypeScript", "HTML", "CSS", "SCSS", "Tailwind CSS", "Gatsby"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express", "MongoDB", "Python"]
    },
    {
      title: "Design & Prototyping",
      skills: ["Figma", "Adobe XD", "Miro"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Jira", "Visual Studio Code", "Cursor", "Apache Superset", "Socket.io", "Bootstrap"]
    },
    {
      title: "Other Skills",
      skills: ["MS Office", "Maya", "Data Visualisation", "Project Management", "Business Modelling"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category"
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
