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
        "Designed, built, and shipped client-facing frontend features using React, Vue.js, TypeScript, and JavaScript, improving performance, usability, and overall product experience.",
        "Led the migration from Sisense to Apache Superset, reducing infrastructure costs by ~£50K annually and automating 80% of previously manual reporting workflows.",
        "Contributed to Advysr, an AI-powered analytics platform, developing production-ready interfaces in React and TypeScript to surface actionable client insights.",
        "Developed and maintained the AddIntel and Advysr marketing websites using Gatsby, React, TypeScript, and GSAP, delivering high-performance, accessible, and fully responsive pages.",
        "Currently building a cross-platform mobile application (iOS & Android) using Expo and React Native to extend the Advysr platform and improve mobile accessibility.",
        "Promoted within 6 months to head of frontend template architecture for client direct mail campaigns.",
        "Standardised and optimised template structures, improving rendering consistency and delivery reliability.",
        "Owned template performance, quality, and release workflows, achieving a 98% same-day bug resolution rate.",
        "Trained and onboarded new team members, establishing best practices and improving team efficiency.",
      ]
    },
    {
      title: "UX/UI Designer - Intern",
      company: "Adarga",
      location: "London, UK",
      period: "May 2023 – Aug 2023",
      achievements: [
        "Led the UX design for a feature visualising Twitter thread intelligence data within the Adarga Knowledge Platform.",
        "Translated complex user and business requirements into intuitive, scalable UI solutions.",
        "Produced wireframes, user flows, and interactive prototypes using Figma.",
        "Conducted usability testing and incorporated feedback to improve clarity, efficiency, and user satisfaction.",
        "Collaborated closely with designers, engineers, and product managers in an agile environment.",
        "Ensured all designs adhered to brand guidelines, accessibility standards, and design best practices.",
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
