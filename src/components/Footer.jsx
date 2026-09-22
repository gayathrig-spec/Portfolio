import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      {/* Striking Mint-to-Cyan Gradient Banner (Figma Template Design) */}
      <aside
        className="footer-cta-banner"
        aria-label="Call to Action: Connect and Collaborate"
      >
        <div className="footer-cta-text">
          <div className="status-badge" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
            <span className="status-dot" aria-hidden="true"></span>
            <span>Available for opportunities</span>
          </div>
          <h2>Let's Connect and Create Something Amazing!</h2>
          <p>Reach out to me for collaborations, inquiries, or just to say hello.</p>
        </div>

        <button
          type="button"
          className="btn-cta-dark"
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigate('/contact');
            }
          }}
        >
          <span>Contact Me</span>
        </button>
      </aside>

      {/* Global Footer Bar */}
      <div className="site-footer">
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Gadicharla Gayathri &bull; CSE UG @ SNIST &bull; Greater Hyderabad, Telangana
        </p>

        <nav className="footer-socials" aria-label="Social Links">
          <a
            href="https://github.com/gayathrig-spec"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gayathri-gadicharla"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:gadicharlagayathri@gmail.com">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
