import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const textRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((text, index) => {
        if (text) {
          gsap.from(text, {
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: 'power1.out',
            delay: index * 0.1
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p ref={el => textRefs.current[0] = el}>
              I'm a Software Developer with a passion for creating 
              beautiful, functional, and user-centred digital experiences. With a background 
              in Business Computing and Entrepreneurship, I bring a unique blend of technical 
              skills and business acumen to every project.
            </p>
            <p ref={el => textRefs.current[1] = el}>
              Currently a software developer and leading the Direct Mail Templates department at Address Intelligence, I've built 
              scalable frontend solutions. I work extensively with React and TypeScript to build robust, 
              maintainable systems that solve complex problems.
            </p>
            <p ref={el => textRefs.current[2] = el}>
              My experience in UX/UI design has given me a strong foundation in design thinking 
              and user experience principles. I'm passionate about bridging the gap between 
              design and development, creating solutions that are both visually compelling 
              and technically sound.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
