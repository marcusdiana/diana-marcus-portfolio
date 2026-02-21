import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Projects.css'

const isThemeScreenshots = (s) => s && typeof s === 'object' && !Array.isArray(s) && (s.light || s.dark)

const hasScreenshots = (project) => {
  if (!project.screenshots) return false
  if (Array.isArray(project.screenshots)) return project.screenshots.length > 0
  return !!(project.screenshots.light?.length || project.screenshots.dark?.length)
}

const ScreenshotCarousel = ({ projectKey, screenshots, carouselIndex, setCarouselIndex, showTitle = true, isMobile = false }) => {
  const [theme, setTheme] = useState('light')
  const themeScreenshots = isThemeScreenshots(screenshots)
  const slides = themeScreenshots
    ? (screenshots[theme] || [])
    : (Array.isArray(screenshots) ? screenshots : [])
  const safeIndex = Math.min(carouselIndex, Math.max(0, slides.length - 1))
  const total = slides.length
  const goPrev = () => setCarouselIndex(Math.max(0, (safeIndex - 1 + total) % total))
  const goNext = () => setCarouselIndex((safeIndex + 1) % total)
  const current = slides[safeIndex]

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    setCarouselIndex(0)
  }

  if (!current) return null

  return (
    <div className={`project-screenshots carousel ${isMobile ? 'carousel--mobile' : ''}`}>
      {showTitle && <h4 className="project-screenshots-title">Screenshots</h4>}
      {themeScreenshots && (
        <div className="carousel-theme-toggle">
          <button
            type="button"
            className={`carousel-theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeChange('light')}
            aria-pressed={theme === 'light'}
          >
            Light
          </button>
          <button
            type="button"
            className={`carousel-theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeChange('dark')}
            aria-pressed={theme === 'dark'}
          >
            Dark
          </button>
        </div>
      )}
      <div className="carousel-nav-wrapper">
        <button
          type="button"
          className="carousel-btn carousel-btn-prev"
          onClick={goPrev}
          aria-label="Previous screenshot"
        >
          ‹
        </button>
        <div className="carousel-viewport">
          <div className="carousel-slide">
            <img
              key={`${theme}-${safeIndex}`}
              src={current.src}
              alt={current.alt}
              className="project-screenshot-img"
            />
          </div>
        </div>
        <button
          type="button"
          className="carousel-btn carousel-btn-next"
          onClick={goNext}
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot ${i === safeIndex ? 'active' : ''}`}
            onClick={() => setCarouselIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const Projects = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [carouselIndex, setCarouselIndex] = useState({})

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (card) {
          // Hover animations only - no scroll-triggered opacity
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -8,
              duration: 0.6,
              ease: 'power2.out'
            })
            const title = card.querySelector('.project-title')
            if (title) gsap.to(title, { color: 'var(--primary)', duration: 0.4, ease: 'power2.out' })
          })
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              duration: 0.6,
              ease: 'power2.out'
            })
            const title = card.querySelector('.project-title')
            if (title) gsap.to(title, { color: 'var(--text-primary)', duration: 0.4, ease: 'power2.out' })
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      title: "Advysr.ai",
      type: "Product Website",
      period: "2025 – Present",
      gradient: "gradient-1",
      image: "/images/advysr-website/advysr-hero.jpeg",
      description: "Developed the public-facing website for the Advysr AI Advisor platform, translating a complex enterprise intelligence product into a clear, conversion-focused digital experience.",
      tech: ["React", "TypeScript", "Gatsby"],
      features: [
        "Built responsive React + TypeScript components aligned with brand and product positioning",
        "Implemented modular UI architecture for scalability and maintainability",
        "Optimised performance and page load speed",
        "Collaborated with product and design teams to clearly articulate AI capabilities through intuitive UX",
        "Ensured consistency between marketing site and web application design system",
      ],
      url: "https://advysr.ai"
    },
    {
      title: "Advysr Web App Platform",
      type: "Web Application Platform",
      period: "2024 – Present",
      gradient: "gradient-2",
      image: "/images/advysr-webapp/dark/Home-1.jpeg",
      screenshots: {
        light: [
          { src: "/images/advysr-webapp/light/chat.png", alt: "Home chat" },
          { src: "/images/advysr-webapp/light/home-2.png", alt: "Home" },
          { src: "/images/advysr-webapp/light/home-with-drawers.png", alt: "Home with dashboards" },
          { src: "/images/advysr-webapp/light/reports.png", alt: "Advysr Reports" },
          { src: "/images/advysr-webapp/light/chat-with-chart.png", alt: "Chat with chart" },
          { src: "/images/advysr-webapp/light/dashboard-historical-market-insights.png", alt: "Historical Market Insights" },
          { src: "/images/advysr-webapp/light/dashboard-market-analytics.png", alt: "Marketing Analytics" },
          { src: "/images/advysr-webapp/light/dashboard-NC.png", alt: "National Campaign" }
        ],
        dark: [
          { src: "/images/advysr-webapp/dark/Home-1.jpeg", alt: "Home" },
          { src: "/images/advysr-webapp/dark/Home-2.jpeg", alt: "Home" },
          { src: "/images/advysr-webapp/dark/Home-3.jpeg", alt: "Home" },
          { src: "/images/advysr-webapp/dark/Dashboard-and-drawers.jpeg", alt: "Home with dashboards" },
          { src: "/images/advysr-webapp/dark/Chat.jpeg", alt: "Chat" },
          { src: "/images/advysr-webapp/dark/Chat-with-chart.jpeg", alt: "Chat with chart" },
          { src: "/images/advysr-webapp/dark/Reports.jpeg", alt: "Advysr Reports" },
          { src: "/images/advysr-webapp/dark/Dashboard-roi.jpeg", alt: "ROI Dashboard" },
          { src: "/images/advysr-webapp/dark/Dashboard-Office.jpeg", alt: "Office Breakdown" }
        ]
      },
      description: "Contributed to the development of an AI-powered advisor platform centred around an intelligent LLM-driven agent that enables stakeholders to query complex business data through natural language.",
      valueProposition: "The core product experience is a conversational AI interface that synthesises operational, ROI, and market data into structured, decision-ready insights — reducing reliance on static dashboards and manual analysis.",
      tech: ["React", "TypeScript", "ECharts", "LLM Integration", "REST APIs"],
      features: [
        "Developed interactive dashboard views for ROI, market insights, and operational metrics",
        "Integrated LLM-powered conversational interface for natural-language data querying",
        "Built reusable, type-safe React components using TypeScript",
        "Implemented real-time data visualisation and chart components",
        "Ensured responsive, production-ready UI across devices",
        "Contributed to architectural decisions improving scalability and maintainability",
        "Responsive design for desktop and tablet",
      ]
    },
    {
      title: "Insights Pro Mobile App",
      type: "Mobile Application",
      period: "2024 – Present",
      gradient: "gradient-3",
      screenshotVariant: "mobile",
      image: "/images/mobile-app/dark/home.jpg",
      screenshots: {
        light: [
          { src: "/images/mobile-app/light/home.jpg", alt: "Home" },
          { src: "/images/mobile-app/light/chat.jpg", alt: "Chat" },
          { src: "/images/mobile-app/light/voice-chat.jpg", alt: "Voice chat" },
          { src: "/images/mobile-app/light/notifications.jpg", alt: "Notifications" },
          { src: "/images/mobile-app/light/settings.jpg", alt: "Settings" }
        ],
        dark: [
          { src: "/images/mobile-app/dark/login.jpg", alt: "Login" },
          { src: "/images/mobile-app/dark/home.jpg", alt: "Home" },
          { src: "/images/mobile-app/dark/chat.jpg", alt: "Chat" },
          { src: "/images/mobile-app/dark/voice-chat.jpg", alt: "Voice chat" },
          { src: "/images/mobile-app/dark/chat-history.jpg", alt: "Chat history" },
          { src: "/images/mobile-app/dark/notifications.jpg", alt: "Notifications" },
          { src: "/images/mobile-app/dark/settings.jpg", alt: "Settings" }
        ]
      },
      description: "Contributed to the development of the cross-platform mobile extension of the Advysr AI Advisor platform, delivering conversational business intelligence through voice and text-based AI interaction.",
      valueProposition: "The application centres around an LLM-powered AI agent that enables stakeholders to access strategic insights, performance metrics, and market analysis on demand — optimised for mobile-first executive usage.",
      tech: ["React Native", "TypeScript", "LLM Integration", "Voice Recognition", "Mobile UI/UX"],
      features: [
        "Built and maintained cross-platform React Native architecture for iOS and Android",
        "Implemented AI chat interface with structured insight rendering",
        "Integrated voice input/output functionality for hands-free interaction",
        "Managed conversation history, state persistence, and user session handling",
        "Developed supporting dashboard views (ROI, Market Insights, Office Performance)",
        "Designed intuitive navigation using tiled home layout and highlight-based UI",
        "Ensured responsive performance and consistent UX across device types",
      ]
    },
    {
      title: "AddIntel.co.uk",
      type: "Website",
      period: "2024",
      gradient: "gradient-1",
      image: "/images/aim-360-website/aim360-hero.jpeg",
      description: "Contributed to the redevelopment of the company website as part of the strategic rebrand from Address Intelligence to AIM360, translating a new brand identity into a modern, scalable digital platform.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Gatsby"],
      features: [
        "Responsive design",
        "Performance optimisation",
        "Modern UI/UX"
      ],
      url: "https://addintel.co.uk"
    },
    {
      title: "NCAP - National Campaign Platform",
      type: "Internal Platform",
      period: "2024",
      gradient: "gradient-2",
      // image: "/images/ncap.jpg",
      description: "Internal platform designed to automate and optimise Direct Mail National Campaign processes, reducing resource intensity and human error while maintaining profitability.",
      valueProposition: "Streamlines national campaign execution through automation, allowing analysts and developers to focus on strategic initiatives rather than repetitive tasks.",
      tech: ["React", "TypeScript", "Database Design", "BPMN", "Process Automation"],
      features: [
        "Fully structured database for campaign data",
        "Well-documented process workflows",
        "Automated campaign operations",
        "Error reduction through automation",
        "Future-proof data model design"
      ]
    },
    {
      title: "Path - Women's Career Mentorship Web Application",
      type: "Full-Stack Application",
      period: "Sep 2021 – May 2022",
      gradient: "gradient-1",
      description: "Developed a full-stack web application designed to connect secondary school female students with mentors from various industries, providing free career guidance and mentorship.",
      purpose: "Aimed to bridge the gender gap in professional fields by empowering young women with career knowledge and networking opportunities.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Bootstrap", "CSS"],
      features: [
        "Full-stack web application with secure and scalable architecture",
        "Real-time communication between users using Socket.io",
        "Responsive UI using Bootstrap and CSS",
        "Mentor-student matching system"
      ]
    },
    {
      title: "Designs",
      type: "Case Studies",
      gradient: "gradient-2",
      description: "Selected UX/UI and product design case studies. Click any image to view the full case study on Behance.",
      designs: [
        { image: "/images/designs/marketplace-design.jpg", title: "Case Study 1", behanceUrl: "https://www.behance.net/gallery/180556803/Dashboard-Marketplace" },
        { image: "/images/designs/threaded-messages-adarga.jpg", title: "Case Study 2", behanceUrl: "https://www.behance.net/gallery/176790573/UXUI-Case-Study-Threaded-Messages-Internship-project" },
        { image: "/images/designs/wastenot-uni-project.jpg", title: "Case Study 3", behanceUrl: "https://www.behance.net/gallery/176945121/Short-Case-Study-UXUI-WasteNoMore-concept-app" },
        { image: "/images/designs/dissertation-project.jpg", title: "Case Study 4", behanceUrl: "https://www.behance.net/gallery/176702451/Case-Study-UXUI-Path" }
      ]
    }
  ]

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${project.gradient}`}
              ref={(el) => { cardsRef.current[index] = el }}
            >
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.type && <span className="project-type">{project.type}</span>}
                </div>
                {project.period && <span className="project-period">{project.period}</span>}
              </div>
              {project.designs ? (
                <div className="project-designs-grid">
                  {project.designs.map((design, designIndex) => (
                    <a
                      key={designIndex}
                      href={design.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-design-link"
                      aria-label={`View ${design.title} on Behance`}
                    >
                      <img
                        src={design.image}
                        alt={design.title}
                        className="project-design-img"
                        loading="lazy"
                      />
                      <span className="project-design-overlay">View case study →</span>
                    </a>
                  ))}
                </div>
              ) : hasScreenshots(project) ? (
                <div className="project-image-wrapper">
                  <ScreenshotCarousel
                    projectKey={index}
                    screenshots={project.screenshots}
                    carouselIndex={carouselIndex[index] ?? 0}
                    setCarouselIndex={(i) => setCarouselIndex((prev) => ({ ...prev, [index]: i }))}
                    showTitle={false}
                    isMobile={project.screenshotVariant === 'mobile'}
                  />
                </div>
              ) : project.image ? (
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </div>
              ) : null}
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                {project.valueProposition && (
                  <p className="project-value">{project.valueProposition}</p>
                )}
                {project.purpose && (
                  <p className="project-purpose">{project.purpose}</p>
                )}
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    onMouseEnter={(e) => {
                      gsap.to(e.target, { 
                        x: 5,
                        duration: 0.4,
                        ease: 'power2.out'
                      })
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.target, { 
                        x: 0,
                        duration: 0.4,
                        ease: 'power2.out'
                      })
                    }}
                  >
                    Visit Website →
                  </a>
                )}
                {project.tech && project.tech.length > 0 && (
                  <div className="project-tech">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                {project.features && project.features.length > 0 && (
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
