import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WorkExperience.css'

gsap.registerPlugin(ScrollTrigger)

const WorkExperience = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: 'power1.out',
            delay: index * 0.05
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const experiences = [
    {
      title: "Software Developer",
      company: "Address Intelligence",
      location: "London, UK",
      period: "Nov 2023 – Present",
      achievements: [
        "Designed and built scalable and high-performing frontend solutions using JavaScript, CSS, SCSS, and HTML, improving template quality and system efficiency.",
        "Promoted to head of the templates department within 6 months, responsible for building templates, debugging, and ensuring a 98% same-day bug resolution rate, minimising downtime and maintaining template integrity.",
        "Expanded role into software engineering, applying best coding practices with Vue.js, demonstrating proactive problem-solving across projects.",
        "Led the proof of concept for a new data analytics platform using Apache Superset, projected to save £50,000+ annually, by migrating analytics from Sisense and enhancing dashboard personalisation to better align with client needs and expectations.",
        "Developed custom Superset plugins using React and TypeScript, streamlining dashboard functionality and enhancing data visualisation.",
        "Contributed to developing and maintaining responsive web components for the company website using Tailwind CSS and Gatsby, ensuring design consistency, accessibility and enhancing user experience.",
        "Collaborated closely with the operations team to streamline issue resolution, and improved cross-team communication by fostering better alignment between development and operations.",
      ]
    },
    {
      title: "UX/UI Designer - Intern",
      company: "Adarga",
      location: "London, UK",
      period: "May 2023 – Aug 2023",
      achievements: [
        "Worked closely with cross-functional teams of designers, developers, and product managers to translate user needs into intuitive, high-quality interfaces.",
        "Participated in brainstorming sessions and design reviews, contributing fresh ideas, and providing constructive feedback to enhance design iterations.",
        "Developed wireframes, interactive prototypes, and user flows using industry-standard tools effectively communicating design concepts.",
        "Conducted usability testing and gathered user feedback to refine designs, improving user satisfaction and aligning solutions with business goals.",
        "Adhered to brand guidelines and design principles to create cohesive and visually consistent user interfaces that elevate the overall user experience.",
        "Collaborated seamlessly with cross-functional teams, including developers and product managers, to ensure the successful implementation of design solutions while maintaining design integrity."
      ]
    }
  ]

  return (
    <section id="experience" className="work-experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="experience-card"
              ref={(el) => { cardsRef.current[index] = el }}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company} • {exp.location}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
