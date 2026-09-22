import { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const RECIPIENT_EMAIL = 'gadicharlagayathri@gmail.com';
const FORMSPREE_FORM_ID = 'mjykwknw';

export default function Contact() {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  // Email format validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (data = formData) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (!data.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    if (touched[name]) {
      const currentErrors = validate(updatedData);
      setErrors((prev) => ({
        ...prev,
        [name]: currentErrors[name] || '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const currentErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: currentErrors[name] || '',
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.name) {
        nameInputRef.current?.focus();
      } else if (validationErrors.email) {
        emailInputRef.current?.focus();
      } else if (validationErrors.message) {
        messageInputRef.current?.focus();
      }
      return;
    }

    await handleSubmit(e);
  };

  const handleReset = () => {
    if (typeof reset === 'function') {
      reset();
    }
    setFormData({ name: '', email: '', message: '' });
    setTouched({});
    setErrors({});
  };

  return (
    <section aria-labelledby="contact-title" className="contact-container">
      <div className="section-header-centered">
        <span className="section-tag">Get In Touch</span>
        <h1 id="contact-title" className="section-title">
          Let's Connect
        </h1>
        <p className="section-subtitle">
          I am always open to exploring developer opportunities, hackathons, and innovative technology collaborations. Send a message below or reach out directly.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Left Column: Sleek Form Card */}
        <div className="contact-form-card">
          {state.succeeded ? (
            <div className="success-banner" role="status" aria-live="polite">
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-mint)', margin: '0 0 0.75rem' }}>
                Message Sent Successfully!
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Thank you, <strong>{formData.name.trim() || 'there'}</strong>! Your message has been sent to <strong>{RECIPIENT_EMAIL}</strong> via Formspree. I will review it and get back to you promptly.
              </p>
              <button
                type="button"
                className="btn-pill-ghost"
                onClick={handleReset}
                style={{ marginTop: '1.25rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={onSubmit}
              noValidate
              aria-label="Contact form for Gadicharla Gayathri"
            >
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  <span>Full Name</span>
                  <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  placeholder="e.g. Alex Morgan"
                />
                {errors.name && (
                  <p id="contact-name-error" className="field-error" role="alert">
                    {errors.name}
                  </p>
                )}
                <ValidationError prefix="Name" field="name" errors={state.errors} className="field-error" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  <span>Email Address</span>
                  <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <input
                  ref={emailInputRef}
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  placeholder="e.g. alex@example.com"
                />
                {errors.email && (
                  <p id="contact-email-error" className="field-error" role="alert">
                    {errors.email}
                  </p>
                )}
                <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  <span>Message</span>
                  <span className="required-mark" aria-hidden="true">*</span>
                </label>
                <textarea
                  ref={messageInputRef}
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  placeholder="Write your message here (minimum 10 characters)..."
                />
                {errors.message && (
                  <p id="contact-message-error" className="field-error" role="alert">
                    {errors.message}
                  </p>
                )}
                <ValidationError prefix="Message" field="message" errors={state.errors} className="field-error" />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-submit-contact"
                  disabled={state.submitting}
                  style={{
                    opacity: state.submitting ? 0.75 : 1,
                    cursor: state.submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  <span>{state.submitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Direct Info & Profiles */}
        <aside className="contact-details-card" aria-label="Direct contact details and professional profiles">
          <div>
            <h2 className="contact-details-title">Direct Information &amp; Profiles</h2>
            <p className="contact-details-intro">
              Prefer direct outreach? You can reach me across any of the platforms or channels below.
            </p>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-row">
              <span className="contact-info-icon" aria-hidden="true">📍</span>
              <div className="contact-info-content">
                <h4>Base Location</h4>
                <p>Greater Hyderabad, Telangana</p>
              </div>
            </div>

            <div className="contact-info-row">
              <span className="contact-info-icon" aria-hidden="true">🏛️</span>
              <div className="contact-info-content">
                <h4>Institution</h4>
                <p>Sreenidhi Institute of Science and Technology (SNIST)</p>
              </div>
            </div>

            <div className="contact-info-row">
              <span className="contact-info-icon" aria-hidden="true">✉️</span>
              <div className="contact-info-content">
                <h4>Direct Email</h4>
                <address>
                  <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a>
                </address>
              </div>
            </div>

            <div className="contact-info-row">
              <span className="contact-info-icon" aria-hidden="true">💼</span>
              <div className="contact-info-content">
                <h4>LinkedIn</h4>
                <p>
                  <a
                    href="https://www.linkedin.com/in/gayathri-gadicharla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info-row">
              <span className="contact-info-icon" aria-hidden="true">🐙</span>
              <div className="contact-info-content">
                <h4>GitHub</h4>
                <p>
                  <a
                    href="https://github.com/gayathrig-spec"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore GitHub Repos
                  </a>
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
