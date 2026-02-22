import React from 'react'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: "BSc (Hons) Business Computing and Entrepreneurship",
      grade: "First Class (1.1)",
      institution: "Goldsmiths University of London",
      location: "London, UK",
      period: "Sep 2019 – Jul 2022",
      highlights: [
        "Proficiently applied a diverse range of programming languages including Java, JavaScript, NodeJS, HTML, CSS, Express, MongoDB, and Python to software development and full-stack web applications.",
        "Developed a strong understanding in UX and UI design principles, demonstrated by crafting interactive prototypes using Figma and Adobe XD to drive user-centric design thinking.",
        "Acquired a comprehensive understanding of entrepreneurship through coursework covering statistics, business modelling, project management, and creating digital ventures.",
        "Other skills: MS Office, Maya, Data Visualisation, Visual Studio Code, Git, FigJam, Miro.",
      ]
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-grade">{edu.grade}</p>
                  <p className="education-institution">{edu.institution} • {edu.location}</p>
                </div>
                <span className="education-period">{edu.period}</span>
              </div>
              {edu.highlights && (
                <ul className="education-highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
