export default function Projects() {
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

  return (
    <section aria-labelledby="projects-page-heading" className="projects-section">
      <div className="section-header-centered">
        <span className="section-tag">Curated Work</span>
        <h1 id="projects-page-heading" className="section-title">
          Featured Case Studies
        </h1>
        <p className="section-subtitle">
          Compilation of case studies and software solutions that evoke my sense of pride
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <article key={project.title} className="project-bento-card">
            <div>
              <div className="project-meta-tag">{project.category}</div>
              <h2 className="project-title" style={{ fontSize: '1.85rem' }}>
                {project.title}
              </h2>
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
      </div>
    </section>
  );
}
