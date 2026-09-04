import { SectionHeader } from '../components/SectionHeader';
import { CertificateCard } from '../components/CertificateCard';
import { certificates } from '../data/portfolio';

export function CertificationsSection() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <SectionHeader
          label="Certifications"
          title="Certifications & Learning"
          subtitle="Continuous learning across the technologies I use to build modern full-stack applications."
        />

        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.credentialId} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
