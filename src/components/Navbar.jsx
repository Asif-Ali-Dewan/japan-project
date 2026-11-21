import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeOption, setActiveOption] = useState('courses');

  const navLinks = [
    { id: 'acceleration', label: 'Acceleration', href: '#career-acceleration' },
    { id: 'courses', label: 'Courses', href: '#courses' },
    { id: 'certificates', label: 'Certificates', href: '#curriculum' },
    { id: 'jobs', label: 'Jobs', href: '#steps' },
    { id: 'teach', label: 'Teach', href: '#teach' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Dynamically detect which section is currently on screen (ordered as on page)
      const sections = [
        { id: 'acceleration', elem: document.getElementById('career-acceleration') },
        { id: 'courses', elem: document.getElementById('courses') },
        { id: 'certificates', elem: document.getElementById('curriculum') },
        { id: 'jobs', elem: document.getElementById('steps') },
        { id: 'teach', elem: document.getElementById('teach') },
      ];

      const scrollPosition = window.scrollY + 240;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.elem && sec.elem.offsetTop <= scrollPosition) {
          setActiveOption(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveOption(item.id);
    setMobileMenuOpen(false);

    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="navbar-fixed-container"
        style={{
          position: 'fixed',
          top: '16px',
          left: 0,
          right: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '0 16px',
          pointerEvents: 'none',
          transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
        }}
      >
        {/* Floating White Navigation Pill with Scroll & Hover States */}
        <nav
          className="nav-pill"
          style={{
            pointerEvents: 'auto',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : '#FFFFFF',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--r-pill)',
            padding: '6px 10px 6px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 'var(--container)',
            boxShadow: scrolled
              ? '0 16px 36px rgba(11, 18, 47, 0.14), 0 4px 12px rgba(11, 18, 47, 0.06)'
              : '0 10px 30px rgba(11, 18, 47, 0.08)',
            border: scrolled ? '1px solid rgba(48, 79, 232, 0.18)' : '1px solid var(--line)',
            transition: 'all 0.35s cubic-bezier(0.2, 0, 0, 1)',
            transform: scrolled ? 'translateY(-2px)' : 'translateY(0)',
          }}
        >
          {/* Brand Logo with Tactile Click & Hover Feedback */}
          <a
            href="#top"
            className="nav-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: 'var(--navy)',
              fontWeight: '700',
              fontSize: '18px',
              letterSpacing: '-0.02em',
              transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div
              className="logo-icon-box"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '9px',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                padding: '4px',
                boxShadow: '0 2px 6px rgba(11, 18, 47, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <img
                src="/logo.png"
                alt="SAMURAI TALENT Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <span>SAMURAI TALENT</span>
          </a>

          {/* Desktop Navigation Links with Clear Selected / Active State */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: 'rgba(244, 247, 254, 0.6)',
              padding: '4px',
              borderRadius: 'var(--r-pill)',
              border: '1px solid rgba(226, 228, 238, 0.6)',
            }}
          >
            {navLinks.map((item) => {
              const isSelected = activeOption === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`nav-link-btn ${isSelected ? 'is-selected' : ''}`}
                  style={{
                    textDecoration: 'none',
                    color: isSelected ? 'var(--blue)' : 'var(--muted)',
                    backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                    fontSize: '13px',
                    fontWeight: isSelected ? '700' : '600',
                    padding: '7px 16px',
                    borderRadius: 'var(--r-pill)',
                    transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    boxShadow: isSelected ? '0 2px 8px rgba(48, 79, 232, 0.15)' : 'none',
                  }}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Action Buttons with Proper Hover & Active Click Feedback */}
          <div
            className="desktop-nav-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <button
              onClick={() => onOpenAuth('login')}
              className="nav-action-login"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--navy)',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
              }}
            >
              Log In
            </button>
            <button
              onClick={() => onOpenAuth('get-started')}
              className="nav-action-signup"
              style={{
                backgroundColor: 'var(--blue)',
                color: '#FFFFFF',
                border: 'none',
                fontSize: '14px',
                fontWeight: '600',
                padding: '9px 20px',
                borderRadius: 'var(--r-pill)',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(48, 79, 232, 0.25)',
                transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--navy)',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              pointerEvents: 'auto',
              position: 'absolute',
              top: '68px',
              left: '16px',
              right: '16px',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--r-lg)',
              padding: '24px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              zIndex: 100,
            }}
          >
            {navLinks.map((item) => {
              const isSelected = activeOption === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{
                    textDecoration: 'none',
                    color: isSelected ? 'var(--blue)' : 'var(--navy)',
                    backgroundColor: isSelected ? 'var(--lav)' : 'transparent',
                    fontWeight: isSelected ? '700' : '600',
                    fontSize: '15px',
                    padding: '10px 14px',
                    borderRadius: 'var(--r-md)',
                    display: 'block',
                  }}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('get-started');
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Embedded CSS for Hover and Click Animations */}
      <style>{`
        .nav-logo:hover .logo-icon-box {
          transform: rotate(-10deg) scale(1.1);
          background-color: var(--surface);
          border-color: var(--blue);
        }
        .nav-logo:active {
          transform: scale(0.96);
        }

        .nav-link-btn:not(.is-selected):hover {
          color: var(--navy) !important;
          background-color: rgba(255, 255, 255, 0.8) !important;
          transform: translateY(-1px);
        }
        .nav-link-btn:active {
          transform: scale(0.94);
        }

        .nav-action-login:hover {
          background-color: var(--surface) !important;
          color: var(--blue) !important;
          transform: translateY(-1px);
        }
        .nav-action-login:active {
          transform: scale(0.94);
        }

        .nav-action-signup:hover {
          background-color: var(--blue-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(48, 79, 232, 0.4) !important;
        }
        .nav-action-signup:active {
          transform: scale(0.95);
          box-shadow: 0 2px 6px rgba(48, 79, 232, 0.2) !important;
        }

        @media (max-width: 768px) {
          .desktop-nav, .desktop-nav-actions {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
