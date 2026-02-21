import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const titleWordsRef = useRef([])
  const labelRef = useRef(null)
  const descRef = useRef(null)
  const metaRef = useRef(null)
  const linksRef = useRef([])
  const backgroundRef = useRef(null)
  const email = import.meta.env.VITE_CONTACT_EMAIL || ''

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          opacity: 0.03,
          duration: 2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1
        })
      }

      // Split title into words for elegant animation
      const titleText = titleRef.current?.textContent || ''
      const words = titleText.split(' ')
      titleRef.current.innerHTML = words.map((word, i) => 
        `<span class="title-word" style="display: inline-block;">${word}</span>`
      ).join(' ')
      
      const titleWords = titleRef.current?.querySelectorAll('.title-word') || []
      titleWords.forEach((word, i) => {
        titleWordsRef.current[i] = word
      })

      // Elegant timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.from(labelRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
      }, 0.3)
      .from(titleWordsRef.current, {
        opacity: 0,
        y: 60,
        rotationX: -90,
        stagger: 0.1,
        duration: 1.2,
      }, 0.5)
      .from(descRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
      }, 1)
      .from(metaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, 1.2)
      .from(linksRef.current.filter(Boolean), {
        opacity: 0,
        y: 20,
        scale: 0.9,
        stagger: 0.08,
        duration: 0.6,
      }, 1.4)

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-background" ref={backgroundRef}></div>
      <div className="hero-pattern"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-intro" ref={labelRef}>
            <span className="hero-label">
              <span className="label-line"></span>
              Software Developer
            </span>
          </div>
          <h1 className="hero-title" ref={titleRef}>
            Diana Marcus
          </h1>
          <p className="hero-description" ref={descRef}>
            Building scalable frontend solutions and creating intuitive user experiences. 
            Software engineer with a focus on clean code, 
            thoughtful design, and solving complex problems.
          </p>
          <div className="hero-meta" ref={metaRef}>
            <div className="hero-location">London, UK</div>
            {email && (
              <>
                <span className="hero-divider">•</span>
                <a href={`mailto:${email}`}
                 className="hero-email"
                 onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    y: -3,
                    scale: 1.02,
                    duration: 0.4,
                    ease: 'power2.out'
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, {
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                  })
                }}
                 >{email}</a>
              </>
            )}
            <span className="hero-divider">•</span>
            <div className="hero-links">
              {[
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/diana-marcus/' },
                { label: 'GitHub', url: 'https://github.com/marcusdiana' },
                { label: 'Behance', url: 'https://www.behance.net/dianamarcus1' }
              ].map(({ label, url }, index) => (
                <a
                  key={label}
                  ref={el => linksRef.current[index] = el}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-media-link"
                  onMouseEnter={(e) => {
                    gsap.to(e.target, {
                      y: -3,
                      scale: 1.02,
                      duration: 0.4,
                      ease: 'power2.out'
                    })
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.target, {
                      y: 0,
                      scale: 1,
                      duration: 0.4,
                      ease: 'power2.out'
                    })
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
