import React from 'react'
import './Contact.css'

const Contact = () => {
  const email = import.meta.env.VITE_CONTACT_EMAIL || ''

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and design. Feel free to reach out!
          </p>
          <div className="contact-info">
            {email ? (
              <a
                href={`mailto:${email}`}
                className="contact-item"
                aria-label={`Send email to ${email}`}
              >
                <div className="contact-icon">✉</div>
                <div>
                  <h4>Email</h4>
                  <p>{email}</p>
                </div>
              </a>
            ) : (
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <h4>Email</h4>
                  <p>—</p>
                </div>
              </div>
            )}
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>London, UK</p>
              </div>
            </div>
          </div>
          <div className="social-links">
            {[
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/diana-marcus/' },
              { label: 'GitHub', url: 'https://github.com/marcusdiana' },
              { label: 'Behance', url: 'https://www.behance.net/dianamarcus1' }
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
