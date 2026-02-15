import { useState } from 'react';
import { personalInfo } from '../data/portfolio';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact — ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {submitted && (
        <div className="form-success">
          <span className="form-success__icon">✓</span>
          Thanks! I'll get back to you soon.
        </div>
      )}

      <div className={`form-group ${focused === 'name' ? 'form-group--focused' : ''}`}>
        <label htmlFor="name" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused('')}
          required
          className="form-input"
          placeholder="John Doe"
        />
      </div>

      <div className={`form-group ${focused === 'email' ? 'form-group--focused' : ''}`}>
        <label htmlFor="email" className="form-label">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused('')}
          required
          className="form-input"
          placeholder="you@example.com"
        />
      </div>

      <div className={`form-group ${focused === 'message' ? 'form-group--focused' : ''}`}>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused('')}
          required
          rows="5"
          className="form-input form-textarea"
          placeholder="Tell me about your project or idea…"
        />
      </div>

      <button type="submit" className="btn btn--primary btn--lg btn--full">
        Send Message
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          width="20"
          height="20"
          style={{ marginLeft: 8 }}
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  );
}
