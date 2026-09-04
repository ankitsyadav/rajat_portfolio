import { motion } from 'framer-motion';

const categoryColors = {
  'Full Stack Development': { bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.2)', text: '#a78bfa' },
  'JavaScript': { bg: 'rgba(247, 223, 30, 0.08)', border: 'rgba(247, 223, 30, 0.18)', text: '#f7df1e' },
  'React.js': { bg: 'rgba(97, 218, 251, 0.08)', border: 'rgba(97, 218, 251, 0.18)', text: '#61dafb' },
  'Node.js': { bg: 'rgba(51, 153, 51, 0.1)', border: 'rgba(51, 153, 51, 0.2)', text: '#68a063' },
  'Git / GitHub': { bg: 'rgba(240, 80, 50, 0.08)', border: 'rgba(240, 80, 50, 0.16)', text: '#f05032' },
};

const issuerIcons = {
  'Simplilearn SkillUp': 'S',
  'NamasteDev.com': 'N',
  'Simplilearn': 'S',
  'LinkedIn Learning': 'in',
};

const issuerIconColors = {
  'Simplilearn SkillUp': { bg: '#ff6b35', text: '#fff' },
  'NamasteDev.com': { bg: '#7c3aed', text: '#fff' },
  'Simplilearn': { bg: '#ff6b35', text: '#fff' },
  'LinkedIn Learning': { bg: '#0077b5', text: '#fff' },
};

export function CertificateCard({ cert, index }) {
  const catColor = categoryColors[cert.category] || { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)', text: '#9494a8' };
  const iconColor = issuerIconColors[cert.issuer] || { bg: 'rgba(255,255,255,0.08)', text: '#9494a8' };
  const icon = issuerIcons[cert.issuer] || cert.issuer[0];

  return (
    <motion.div
      className={`cert-card${cert.featured ? ' cert-card--featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="cert-card__top">
        <div className="cert-card__icon" style={{ background: iconColor.bg, color: iconColor.text }}>
          {icon}
        </div>
        <span className="cert-card__category" style={{ background: catColor.bg, borderColor: catColor.border, color: catColor.text }}>
          {cert.category}
        </span>
      </div>

      <h3 className="cert-card__title">{cert.title}</h3>
      <p className="cert-card__issuer">{cert.issuer}</p>

      <div className="cert-card__meta">
        <span className="cert-card__id-label">Credential ID</span>
        <span className="cert-card__id-value">{cert.credentialId}</span>
      </div>

      {cert.date && (
        <div className="cert-card__meta">
          <span className="cert-card__id-label">Completed</span>
          <span className="cert-card__id-value">{cert.date}</span>
        </div>
      )}
    </motion.div>
  );
}
