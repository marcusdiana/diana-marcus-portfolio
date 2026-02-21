import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { useTheme } from '../contexts/ThemeContext'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div 
            className="navbar-brand" 
            onClick={() => scrollToSection('hero')}
            onMouseEnter={(e) => {
              gsap.to(e.target, { 
                scale: 1.02,
                letterSpacing: '0.08em',
                duration: 0.4,
                ease: 'power2.out'
              })
            }}
            onMouseLeave={(e) => {
              gsap.to(e.target, { 
                scale: 1,
                letterSpacing: '0.05em',
                duration: 0.4,
                ease: 'power2.out'
              })
            }}
          >
            <span className="brand-first">Diana</span>
            <span className="brand-last">Marcus</span>
          </div>
          <div className="navbar-right">
            <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              {['About', 'Experience', 'Projects', 'Education', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => { 
                      e.preventDefault()
                      scrollToSection(item.toLowerCase())
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.target, { 
                        x: 3,
                        duration: 0.3,
                        ease: 'power2.out'
                      })
                      gsap.to(e.target.querySelector('.nav-line'), {
                        scaleX: 1,
                        duration: 0.4,
                        ease: 'power2.out'
                      })
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.target, { 
                        x: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                      })
                      gsap.to(e.target.querySelector('.nav-line'), {
                        scaleX: 0,
                        duration: 0.4,
                        ease: 'power2.out'
                      })
                    }}
                  >
                    {item}
                    <span className="nav-line"></span>
                  </a>
                </li>
              ))}
            </ul>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  rotation: 180,
                  scale: 1.1,
                  duration: 0.5,
                  ease: 'back.out(1.7)'
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  rotation: 0,
                  scale: 1,
                  duration: 0.5,
                  ease: 'back.out(1.7)'
                })
              }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
