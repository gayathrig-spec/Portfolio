export default function About() {
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
      {/* Hero: Know who am I (Clean Section Layout) */}
      <section className="clean-section clean-section-divider about-section" aria-labelledby="about-main-title">
        <span className="section-tag">About Me</span>
        <h1 id="about-main-title" className="clean-section-title">
          Know who am I
        </h1>
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

      {/* Technical Skills & Toolkit (Clean Section Layout) */}
      <section className="clean-section clean-section-divider" aria-labelledby="about-tech-title">
        <div className="section-header-centered">
          <span className="section-tag">Technical Toolkit</span>
          <h2 id="about-tech-title" className="section-title">
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
      </section>

      {/* What I'm Exploring (Clean Section Layout) */}
      <section className="clean-section clean-section-divider" aria-labelledby="about-exploring-title">
        <div className="section-header-centered">
          <span className="section-tag">Continuous Growth</span>
          <h2 id="about-exploring-title" className="section-title">
            What I'm Exploring
          </h2>
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
      </section>

      {/* Experience & Leadership Timeline */}
      <section className="timeline-section" aria-labelledby="about-exp-title">
        <div className="section-header-centered">
          <span className="section-tag">Journey & Leadership</span>
          <h2 id="about-exp-title" className="section-title">
            Experience & Activities
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
      </section>

      {/* Education & Certifications */}
      <section className="edu-cert-section" aria-labelledby="about-edu-title">
        <div className="edu-cert-card">
          <span className="section-tag">Academic Foundation</span>
          <h3 id="about-edu-title">Education</h3>
          
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
      </section>
    </div>
  );
}
