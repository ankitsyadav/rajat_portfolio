import { useState } from 'react';
import { personalInfo } from '../data/portfolio';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSending(true);

    try {
      const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;

      if (!formEndpoint) {
        throw new Error('Form endpoint not configured');
      }

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      const subject = `Portfolio Contact — ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSending(false);
    }
  };

  const isFormValid = formData.name.trim().length >= 2 && validateEmail(formData.email) && formData.message.trim().length >= 10;

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {submitted && (
        <div className="form-success" role="alert">
          <span className="form-success__icon">✓</span>
          <div>
            <div className="form-success__title">Message sent successfully!</div>
            <div className="form-success__text">Thanks for reaching out. I'll get back to you soon.</div>
          </div>
        </div>
      )}

      {error && (
        <div className="form-error" role="alert">
          <span className="form-error__icon">!</span>
          {error}
        </div>
      )}

      <div className={`form-group ${focused === 'name' ? 'form-group--focused' : ''} ${errors.name ? 'form-group--error' : ''}`}>
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
          className="form-input"
          placeholder="John Doe"
          aria-describedby={errors.name ? 'name-error' : undefined}
          minLength="2"
        />
        {errors.name && (
          <div id="name-error" className="form-error__message">
            {errors.name}
          </div>
        )}
      </div>

      <div className={`form-group ${focused === 'email' ? 'form-group--focused' : ''} ${errors.email ? 'form-group--error' : ''}`}>
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
          className="form-input"
          placeholder="you@example.com"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <div id="email-error" className="form-error__message">
            {errors.email}
          </div>
        )}
      </div>

      <div className={`form-group ${focused === 'message' ? 'form-group--focused' : ''} ${errors.message ? 'form-group--error' : ''}`}>
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
          rows="5"
          className="form-input form-textarea"
          placeholder="Tell me about your project or idea…"
          aria-describedby={errors.message ? 'message-error' : undefined}
          minLength="10"
        />
        {errors.message && (
          <div id="message-error" className="form-error__message">
            {errors.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn--primary btn--lg btn--full"
        disabled={isSending || !isFormValid}
        aria-busy={isSending}
      >
        {isSending ? 'Sending...' : 'Send Message'}
        {!isSending && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="20"
            height="20"
            style={{ marginLeft: 8 }}
            aria-hidden="true"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        )}
      </button>
    </form>
  );
}