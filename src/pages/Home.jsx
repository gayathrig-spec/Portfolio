import { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const RECIPIENT_EMAIL = 'gadicharlagayathri@gmail.com';
const FORMSPREE_FORM_ID = 'mjykwknw';

export default function Home() {
  // Formspree Integration
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

  const projects = [
    {
      title: 'C Programming Quiz Application',
      category: 'WEB APP • C PROGRAMMING',
      description:
        'Developed an interactive, three-level quiz website using HTML, CSS, and JavaScript to test core C programming concepts with progressive difficulty levels.',
      features: [
        'Progressive 3-tier difficulty (Beginner, Intermediate, Advanced)',
        'Real-time scoring logic with instantaneous performance feedback',
        'Intuitive, responsive interface designed for CS students',
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'C Concepts'],
      repoLink: 'https://github.com/gayathrig-spec/C-Language-Quiz',
      liveDemoLink: 'https://c-language-quiz.vercel.app/',
      demoLabel: 'Live Quiz Game',
      graphicEmoji: '💻',
      caption: 'c-language-quiz.vercel.app',
    },
    {
      title: 'MedGuide AI / Launchpad X Medical Report Project',
      category: 'AI • COMPUTER VISION • HACKATHON',
      description:
        'Built a computer vision-powered medical report analysis tool during a two-day hackathon team event.',
      features: [
        'Automated document scanning and optical data structuring',
        'Engineered in an intensive 48-hour sprint at Launchpad X / Bower AI',
        'Intelligent diagnostics synthesis to assist patients and clinicians',
      ],
      techStack: ['Python', 'Computer Vision', 'AI', 'Image Processing'],
      repoLink: 'https://github.com/gayathrig-spec',
      liveDemoLink: 'https://med-guide-ai-xfki.vercel.app/',
      demoLabel: 'Live MediGuide AI',
      graphicEmoji: '🩺',
      caption: 'med-guide-ai-xfki.vercel.app',
    },
  ];

  const techStackCategories = [
    {
      name: 'Languages',
      icon: '💻',
      colorClass: 'pill-cyan',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'],
    },
    {
      name: 'Core Computer Science',
      icon: '🧠',
      colorClass: 'pill-purple',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'DBMS',
        'Computer Networks',
        'Operating Systems',
      ],
    },
    {
      name: 'AI / Machine Learning',
      icon: '🤖',
      colorClass: 'pill-mint',
      skills: [
        'Machine Learning',
        'Data Analysis',
        'Supervised Learning',
        'Model Evaluation',
        'AI/ML Fundamentals',
      ],
    },
    {
      name: 'Web Development',
      icon: '🌐',
      colorClass: 'pill-blue',
      skills: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
    },
    {
      name: 'Databases',
      icon: '🗄️',
      colorClass: 'pill-emerald',
      skills: ['MySQL', 'Supabase'],
    },
    {
      name: 'Developer Tools',
      icon: '🛠️',
      colorClass: 'pill-cyan',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'GitHub Actions'],
    },
  ];

  const exploringItems = [
    {
      title: 'AI & Machine Learning',
      icon: '⚡',
      desc: 'Building a foundation in ML and exploring practical AI applications.',
    },
    {
      title: 'Problem Solving',
      icon: '🧩',
      desc: 'Strengthening DSA and algorithmic thinking using C++.',
    },
    {
      title: 'Software Engineering',
      icon: '🏗️',
      desc: 'Learning how to design, build, and deploy reliable applications.',
    },
    {
      title: 'MLOps',
      icon: '🚀',
      desc: 'Exploring the systems and workflows required to take ML models from development to production.',
    },
  ];

  const experiences = [
    {
      role: 'Hackathon Contributor — MedGuide AI',
      org: 'Launchpad X / Bower AI Hackathon',
      period: '48-Hour Hackathon Sprint',
      desc: 'Collaborated in a fast-paced team environment to engineer MedGuide AI, a computer vision-driven application designed to scan and interpret complex medical documentation.',
    },
    {
      role: 'Secretary',
      org: 'Rotary Interact Club',
      period: 'Nov 2023 – Dec 2024',
      desc: 'Orchestrated youth leadership development workshops, managed institutional communications, and directed community outreach initiatives.',
    },
    {
      role: 'Cadet & Active Participant',
      org: 'NCC (National Cadet Corps)',
      period: 'Continuous Engagement',
      desc: 'Underwent rigorous physical and leadership drills instilling steadfast discipline, operational teamwork, crisis resilience, and civic dedication.',
    },
  ];

  const certifications = [
    'Java Foundations (Completed via CodeChef)',
    'C Programming Foundational Coursework',
    'EF SET English Certificate (C1 Advanced)',
  ];

  return (
    <div>
      {/* 1. Hero Section (Figma Ripple, Radial Glow & Centered Hierarchy) */}
      <section id="home" className="hero-wrapper" aria-labelledby="hero-title">
        {/* Ambient Multi-Stop Radial Glow */}
        <div className="hero-radial-glow" aria-hidden="true"></div>

        {/* Background Ripple Rings */}
        <div className="hero-rings" aria-hidden="true">
          <div className="hero-ring hero-ring-1"></div>
          <div className="hero-ring hero-ring-2"></div>
          <div className="hero-ring hero-ring-3"></div>
        </div>

        <div className="hero-content">
          <h1 id="hero-title" className="hero-headline">
            Hi, I'm Gadicharla Gayathri
          </h1>

          <p className="hero-tagline">
            B.Tech CSE | Tech Enthusiast | Aspiring SDE | NCC Disciplined
          </p>

          <div className="hero-ctas">
            <button
              type="button"
              className="btn-pill-white"
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>👋 Let's Talk</span>
            </button>
            <button
              type="button"
              className="btn-pill-ghost"
              onClick={() => {
                const el = document.getElementById('works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View Projects</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects (Curated Work in Large Bento Cards) */}
      <section
        id="works"
        className="projects-section"
        aria-labelledby="curated-work-heading"
      >
        <div className="section-header-centered">
          <span className="section-tag">Curated Work</span>
          <h2 id="curated-work-heading" className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Compilation of case studies and software solutions that evoke my sense of pride
          </p>
        </div>

        {projects.map((project) => (
          <article key={project.title} className="project-bento-card">
            <div>
              <div className="project-meta-tag">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-checklist" aria-label="Key Highlights">
                {project.features.map((feat) => (
                  <li key={feat} className="project-check-item">
                    <span className="check-icon" aria-hidden="true">&#10003;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div
                className="pill-list"
                style={{ margin: '0 0 1.5rem' }}
                aria-label={`Tech stack for ${project.title}`}
              >
                {project.techStack.map((tech) => (
                  <span key={tech} className="pill-badge pill-cyan">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-white"
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}
                >
                  <span>{project.demoLabel}</span>
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-ghost"
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}
                >
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>

            {/* Browser / Device Preview Mockup Window */}
            <div className="project-preview-window" aria-hidden="true">
              <div className="preview-bar">
                <div className="preview-dot red"></div>
                <div className="preview-dot yellow"></div>
                <div className="preview-dot green"></div>
              </div>
              <div className="preview-body">
                <div className="preview-badge-graphic">{project.graphicEmoji}</div>
                <div className="preview-caption">{project.caption}</div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* 3. Technical Skills & Toolkit (Clean Section Layout) */}
      <section id="skills" className="clean-section clean-section-divider" aria-labelledby="tech-heading">
        <div className="section-header-centered">
          <span className="section-tag">Technical Toolkit</span>
          <h2 id="tech-heading" className="section-title">
            Tech Stack &amp; Skills
          </h2>
          <p className="section-subtitle">
            Organized breakdown of programming languages, core CS disciplines, AI/ML concepts, and developer workflows.
          </p>
        </div>

        <div className="clean-tech-grid">
          {techStackCategories.map((cat) => (
            <div key={cat.name} className="clean-tech-card">
              <div className="clean-tech-card-header">
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </div>
              <div className="clean-tech-card-pills">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`pill-badge ${cat.colorClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What I'm Exploring */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-header-centered">
            <span className="section-tag">Continuous Growth</span>
            <h3 className="section-title" style={{ fontSize: '1.85rem' }}>
              What I'm Exploring
            </h3>
            <p className="section-subtitle">
              Active engineering focus areas and domains I am investigating in depth.
            </p>
          </div>

          <div className="clean-exploring-grid">
            {exploringItems.map((item) => (
              <div key={item.title} className="clean-exploring-card">
                <div className="clean-exploring-header">
                  <span style={{ color: 'var(--accent-mint)' }}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <p className="clean-exploring-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience, Education & Profiles Section */}
      <section id="experience" className="timeline-section" aria-labelledby="experience-heading">
        <div className="section-header-centered">
          <span className="section-tag">Journey & Leadership</span>
          <h2 id="experience-heading" className="section-title">
            Experience &amp; Activities
          </h2>
          <p className="section-subtitle">
            Hackathon participation, organizational leadership, and disciplined teamwork
          </p>
        </div>

        <div>
          {experiences.map((exp) => (
            <div key={exp.role} className="timeline-row">
              <div>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-org">{exp.org}</div>
                <div className="timeline-period">{exp.period}</div>
              </div>
              <div className="timeline-body">
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Nested Clean Section */}
        <div className="edu-cert-section" style={{ marginTop: '3.5rem' }}>
          {/* Education Card */}
          <div className="edu-cert-card">
            <span className="section-tag">Academic Foundation</span>
            <h3>Education</h3>
            
            <div>
              <h4 style={{ margin: '0 0 0.35rem', color: '#ffffff', fontSize: '1.15rem' }}>
                B.Tech &mdash; Computer Science &amp; Engineering
              </h4>
              <p style={{ margin: '0 0 0.25rem', color: 'var(--accent-mint)', fontWeight: 600 }}>
                Sreenidhi Institute of Science and Technology (SNIST)
              </p>
              <p style={{ margin: '0 0 1.25rem', fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                2025 &ndash; Present
              </p>

              <h5 style={{ margin: '0 0 0.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                Relevant Coursework &amp; Focus:
              </h5>
              <div className="stack-pill-grid">
                {['DSA', 'OOP', 'DBMS', 'Computer Networks', 'Operating Systems', 'AI/ML'].map((course) => (
                  <span key={course} className="pill-badge pill-cyan" style={{ fontSize: '0.75rem' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="edu-cert-card">
            <span className="section-tag">Verified Milestones</span>
            <h3>Certifications</h3>

            <ul className="cert-list" aria-label="Certifications list">
              {certifications.map((cert) => (
                <li key={cert} className="cert-item">
                  <span className="cert-check" aria-hidden="true">&#10003;</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coding & Professional Profiles Bar */}
        <div className="profiles-section" style={{ marginTop: '3.5rem', marginBottom: '1rem' }} aria-labelledby="profiles-heading">
          <div>
            <span className="section-tag">Professional Profiles</span>
            <h3 id="profiles-heading" style={{ fontSize: '1.75rem', margin: '0.25rem 0 0.5rem', color: '#ffffff' }}>
              Coding &amp; Professional Profiles
            </h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              Explore my open-source code repositories, development projects, and professional network.
            </p>
          </div>

          <div className="profiles-links">
            <a
              href="https://github.com/gayathrig-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-ghost"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gayathri-gadicharla"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-ghost"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. About Section (Clean Section Layout) */}
      <section id="about" className="clean-section clean-section-divider about-section" aria-labelledby="about-heading">
        <span className="section-tag">About Me</span>
        <h2 id="about-heading" className="clean-section-title">
          Know who am I
        </h2>
        <p className="about-lead-text">
          I am a B.Tech Computer Science student at Sreenidhi Institute of Science and Technology (SNIST-29). Grounded in NCC discipline and equipped with foundational basics in programming languages like C, Java, Python, and JavaScript, I am deeply passionate about bridging raw information with intelligent technology. Whether it's participating in hackathons or building practical software solutions, I am always eager to learn, solve complex problems, and build for a data-driven future.
        </p>

        <div className="about-persona-row">
          <span className="persona-tag">🎖️ NCC Disciplined</span>
          <span className="persona-tag">💡 Problem Solver</span>
          <span className="persona-tag">🚀 Tech Explorer</span>
          <div className="status-badge" style={{ display: 'inline-flex', marginLeft: 'auto' }}>
            <span className="status-dot" aria-hidden="true"></span>
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* Minimalist Location & Institution Info Strip */}
        <div className="meta-info-strip" aria-label="Location and Academic Institution">
          <div className="meta-info-col">
            <span className="meta-info-label">📍 Base Location</span>
            <span className="meta-info-val">Greater Hyderabad, Telangana</span>
          </div>
          <div className="meta-info-col">
            <span className="meta-info-label">🏛️ Institution</span>
            <span className="meta-info-val">Sreenidhi Institute of Science and Technology (SNIST)</span>
          </div>
        </div>
      </section>

      {/* 6. Contact Section (Interactive Message Form + Direct Outreach) */}
      <section id="contact" className="clean-section clean-section-divider contact-container" aria-labelledby="contact-heading">
        <div className="section-header-centered">
          <span className="section-tag">Get In Touch</span>
          <h2 id="contact-heading" className="section-title">
            Let's Connect
          </h2>
          <p className="section-subtitle">
            I am always open to exploring developer opportunities, hackathons, and innovative technology collaborations. Send a message below or reach out directly.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Sleek Form Card with Formspree */}
          <div className="contact-form-card">
            {state.succeeded ? (
              <div className="success-banner" role="status" aria-live="polite">
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-mint)', margin: '0 0 0.75rem', fontSize: '1.5rem' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Thank you, <strong>{formData.name.trim() || 'there'}</strong>! Your message has been safely delivered to <strong>{RECIPIENT_EMAIL}</strong>. I will review it and get back to you promptly.
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
                aria-label="Contact message form"
              >
                <div className="form-group">
                  <label htmlFor="home-contact-name" className="form-label">
                    <span>Full Name</span>
                    <span className="required-mark" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="home-contact-name"
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
                    aria-describedby={errors.name ? 'home-name-error' : undefined}
                    placeholder="e.g. Alex Morgan"
                  />
                  {errors.name && (
                    <p id="home-name-error" className="field-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="field-error" />
                </div>

                <div className="form-group">
                  <label htmlFor="home-contact-email" className="form-label">
                    <span>Email Address</span>
                    <span className="required-mark" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={emailInputRef}
                    id="home-contact-email"
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
                    aria-describedby={errors.email ? 'home-email-error' : undefined}
                    placeholder="e.g. alex@example.com"
                  />
                  {errors.email && (
                    <p id="home-email-error" className="field-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
                </div>

                <div className="form-group">
                  <label htmlFor="home-contact-message" className="form-label">
                    <span>Message</span>
                    <span className="required-mark" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    ref={messageInputRef}
                    id="home-contact-message"
                    name="message"
                    rows={5}
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'home-message-error' : undefined}
                    placeholder="Write your message here (minimum 10 characters)..."
                  />
                  {errors.message && (
                    <p id="home-message-error" className="field-error" role="alert">
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
              <h3 className="contact-details-title" style={{ fontSize: '1.35rem', margin: '0 0 0.5rem' }}>
                Direct Information &amp; Profiles
              </h3>
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
    </div>
  );
}
