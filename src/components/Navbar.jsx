import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenAuth }) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [activeOption, setActiveOption] = useState('courses');

  const navLinks = [
    { id: 'acceleration', label: t.nav.acceleration, href: '#career-acceleration' },
    { id: 'courses', label: t.nav.courses, href: '#courses' },
    { id: 'certificates', label: t.nav.certificates, href: '#curriculum' },
    { id: 'jobs', label: t.nav.jobs, href: '#steps' },
    { id: 'teach', label: t.nav.teach, href: '#teach' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate hero boundary: transparent within hero, solid floating pill once scrolled past hero
      const heroElem = document.getElementById('top') || document.querySelector('.hero-wrapper');
      const threshold = heroElem ? heroElem.offsetHeight - 90 : Math.max(window.innerHeight - 90, 480);
      setScrolledPastHero(window.scrollY > threshold);

      // Dynamically detect which content section is currently on screen
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
    handleScroll();
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
          top: scrolledPastHero ? '14px' : '20px',
          left: 0,
          right: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1000,
          padding: scrolledPastHero ? '0 16px' : '0 28px',
          pointerEvents: 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Navigation Bar: Transparent on Hero, Solid Frosted Pill when Scrolled Out */}
        <nav
          className="nav-pill"
          style={{
            pointerEvents: 'auto',
            backgroundColor: scrolledPastHero ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: scrolledPastHero ? 'blur(16px)' : 'none',
            borderRadius: 'var(--r-pill)',
            padding: scrolledPastHero ? '6px 10px 6px 18px' : '6px 4px 6px 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 'var(--container)',
            boxShadow: scrolledPastHero
              ? '0 16px 36px rgba(11, 18, 47, 0.14), 0 4px 12px rgba(11, 18, 47, 0.06)'
              : 'none',
            border: scrolledPastHero ? '1px solid var(--line)' : 'none',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: scrolledPastHero ? 'translateY(-2px)' : 'translateY(0)',
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
              color: scrolledPastHero ? 'var(--navy)' : '#FFFFFF',
              fontWeight: '700',
              fontSize: '18px',
              letterSpacing: '-0.02em',
              transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              textShadow: scrolledPastHero ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div
              className="logo-icon-box"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '9px',
                border: scrolledPastHero ? '1px solid var(--line)' : '1px solid rgba(255, 255, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                padding: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
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

          {/* Desktop Navigation Links with Responsive Transparent/Glass vs Solid Styling */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: scrolledPastHero
                ? 'rgba(244, 247, 254, 0.6)'
                : 'rgba(255, 255, 255, 0.12)',
              padding: '4px',
              borderRadius: 'var(--r-pill)',
              border: scrolledPastHero
                ? '1px solid rgba(226, 228, 238, 0.6)'
                : '1px solid rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
            }}
          >
            {navLinks.map((item) => {
              const isSelected = activeOption === item.id;
              let linkColor = scrolledPastHero ? 'var(--muted)' : 'rgba(255, 255, 255, 0.9)';
              let linkBg = 'transparent';
              let linkShadow = 'none';

              if (isSelected) {
                linkBg = '#FFFFFF';
                linkColor = '#1C36D0';
                linkShadow = scrolledPastHero
                  ? '0 2px 8px rgba(48, 79, 232, 0.15)'
                  : '0 2px 10px rgba(0, 0, 0, 0.18)';
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`nav-link-btn ${isSelected ? 'is-selected' : ''}`}
                  style={{
                    textDecoration: 'none',
                    color: linkColor,
                    backgroundColor: linkBg,
                    fontSize: '13px',
                    fontWeight: isSelected ? '700' : '600',
                    padding: '7px 16px',
                    borderRadius: 'var(--r-pill)',
                    transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    boxShadow: linkShadow,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.color = scrolledPastHero ? 'var(--navy)' : '#FFFFFF';
                      e.currentTarget.style.backgroundColor = scrolledPastHero
                        ? 'rgba(255, 255, 255, 0.85)'
                        : 'rgba(255, 255, 255, 0.22)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.color = linkColor;
                      e.currentTarget.style.backgroundColor = linkBg;
                    }
                  }}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Action Buttons: Language Switch, Login, & Get Started */}
          <div
            className="desktop-nav-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <LanguageToggle variant={scrolledPastHero ? 'default' : 'transparent'} />

            <button
              onClick={() => onOpenAuth('login')}
              className="nav-action-login"
              style={{
                background: 'transparent',
                border: 'none',
                color: scrolledPastHero ? 'var(--navy)' : '#FFFFFF',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
                textShadow: scrolledPastHero ? 'none' : '0 1px 6px rgba(0, 0, 0, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = scrolledPastHero
                  ? 'var(--surface)'
                  : 'rgba(255, 255, 255, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {t.nav.login}
            </button>

            <button
              onClick={() => onOpenAuth('get-started')}
              className="nav-action-signup"
              style={{
                backgroundColor: scrolledPastHero ? 'var(--blue)' : '#FFFFFF',
                color: scrolledPastHero ? '#FFFFFF' : '#1C36D0',
                border: 'none',
                fontSize: '14px',
                fontWeight: '700',
                padding: '9px 22px',
                borderRadius: 'var(--r-pill)',
                cursor: 'pointer',
                boxShadow: scrolledPastHero
                  ? '0 4px 14px rgba(48, 79, 232, 0.25)'
                  : '0 4px 18px rgba(0, 0, 0, 0.24)',
                transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = scrolledPastHero
                  ? '0 8px 24px rgba(48, 79, 232, 0.4)'
                  : '0 8px 24px rgba(0, 0, 0, 0.32)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = scrolledPastHero
                  ? '0 4px 14px rgba(48, 79, 232, 0.25)'
                  : '0 4px 18px rgba(0, 0, 0, 0.24)';
              }}
            >
              {t.nav.getStarted}
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
              color: scrolledPastHero ? 'var(--navy)' : '#FFFFFF',
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
            <div
              style={{
                borderTop: '1px solid var(--line)',
                paddingTop: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
                <LanguageToggle />
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                {t.nav.login}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('get-started');
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Embedded CSS for Hover and Click Animations */}
      <style>{`
        .nav-logo:hover .logo-icon-box {
          transform: rotate(-8deg) scale(1.08);
        }
        .nav-logo:active {
          transform: scale(0.96);
        }

        .nav-link-btn:active {
          transform: scale(0.95);
        }

        @media (max-width: 860px) {
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
