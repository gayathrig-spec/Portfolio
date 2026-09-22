import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Track active section on scroll when on Home page
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['contact', 'about', 'experience', 'skills', 'works', 'home'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle hash scrolling when navigating back to home
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      setActiveSection(sectionId);
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'Works' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <nav className="nav-wrapper" aria-label="Main Navigation">
        <Link
          to="/"
          className="nav-brand"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className="nav-brand-dot" aria-hidden="true"></span>
          <span>Gadicharla Gayathri</span>
        </Link>

        <button
          type="button"
          className="hamburger-toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="hamburger-icon" aria-hidden="true">
            <span className="hamburger-line line-top"></span>
            <span className="hamburger-line line-middle"></span>
            <span className="hamburger-line line-bottom"></span>
          </span>
        </button>

        <ul
          id="primary-navigation"
          className={`nav-menu ${isOpen ? 'open' : ''}`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id && location.pathname === '/' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
