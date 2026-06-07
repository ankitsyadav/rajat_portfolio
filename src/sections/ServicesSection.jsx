import { SectionHeader } from '../components/SectionHeader';
import { services } from '../data/portfolio';

export function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeader
          title="Services"
          subtitle="What I can do for you"
        />

        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <p>Have a project in mind?</p>
          <a
            href="#contact"
            className="btn btn--primary btn--lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
