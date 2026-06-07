import { SectionHeader } from '../components/SectionHeader';
import { personalInfo } from '../data/portfolio';

const contactMethods = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: personalInfo.location,
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's connect — I'm always open to discussing new projects and opportunities"
        />

        <div className="contact-grid">
          {contactMethods.map((method) => (
            method.href ? (
              <a
                key={method.label}
                href={method.href}
                className="contact-card"
              >
                <div className="contact-card-icon">{method.icon}</div>
                <h3>{method.label}</h3>
                <p>{method.value}</p>
                <span className="contact-card-action">
                  {method.label === 'Email' ? 'Send Email' : 'Call Now'}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            ) : (
              <div key={method.label} className="contact-card contact-card--muted">
                <div className="contact-card-icon">{method.icon}</div>
                <h3>{method.label}</h3>
                <p>{method.value}</p>
              </div>
            )
          ))}
        </div>

        <p className="contact-availability">
          <span className="contact-availability-dot"></span>
          Available for freelance opportunities.
        </p>

        <div className="contact-socials-row">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
          <a
            href={personalInfo.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M23.002 3.005H.998A.998.998 0 000 4.003v15.994a.998.998 0 00.998.998h22.004a.998.998 0 00.998-.998V4.003a.998.998 0 00-.998-.998zM12.98 18.74H9.65v-5.793H5.934V9.736H9.65V7.28c0-2.632 1.416-4.165 4.368-4.165h2.064v3.245h-1.32c-1.02 0-1.78.393-1.78 1.52v1.856h3.36l-.57 3.21h-2.79v5.794z"/>
            </svg>
            Fiverr
          </a>
          <a
            href={personalInfo.freelancer}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M14.096 3.076l.918 1.268c1.274 1.764 2.04 2.888 2.61 4.146l.571 1.256c.191.42.345.645.574.645.23 0 .384-.225.575-.645l.57-1.256c.57-1.258 1.337-2.382 2.61-4.146l.919-1.268c.316-.436.58-.8.82-1.084-2.274.316-4.054.316-5.788.316h-5.316c-1.734 0-3.514 0-5.788-.316.24.284.504.648.82 1.084zm0 0l-.918 1.268c-1.274 1.764-2.04 2.888-2.61 4.146l-.571 1.256c-.191.42-.345.645-.574.645-.23 0-.384-.225-.575-.645l-.57-1.256c-.57-1.258-1.337-2.382-2.61-4.146l-.919-1.268C3.932 2.64 3.668 2.276 3.428 1.992c2.274.316 4.054.316 5.788.316h5.316c1.734 0 3.514 0 5.788-.316-.24.284-.504.648-.82 1.084zM12 21.692c-3.086 0-5.59-3.358-5.59-7.5 0-1.102.184-2.14.506-3.07l.134-.388c.585-1.694 1.538-3.104 2.756-4.226C11.002 5.554 11.653 5.5 12 5.5c.347 0 .998.054 2.194 1.008 1.218 1.122 2.171 2.532 2.756 4.226l.134.389c.322.929.506 1.967.506 3.069 0 4.142-2.504 7.5-5.59 7.5z"/>
            </svg>
            Freelancer
          </a>
        </div>
      </div>
    </section>
  );
}
