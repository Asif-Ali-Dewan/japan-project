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
      const heroElem = document.getElementById('top') || document.querySelector('.hero-wrapper');
      const threshold = heroElem ? heroElem.offsetHeight - 90 : Math.max(window.innerHeight - 90, 480);
      setScrolledPastHero(window.scrollY > threshold);

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
      {/* 
        Full-width navigation header:
        - In Hero: 100% transparent edge-to-edge header with clean white text & white CTA button.
        - Scrolled Out: Solid white edge-to-edge bar with active/click in Royal Blue & Royal Blue CTA button.
      */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
          backgroundColor: scrolledPastHero ? '#FFFFFF' : 'transparent',
          borderBottom: scrolledPastHero ? '1px solid #E5E7EB' : 'none',
          boxShadow: scrolledPastHero ? '0 1px 4px rgba(0, 0, 0, 0.05)' : 'none',
          padding: scrolledPastHero ? '14px 36px' : '24px 36px',
          boxSizing: 'border-box',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#top"
            className="nav-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: scrolledPastHero ? '#0F172A' : '#FFFFFF',
              fontWeight: '700',
              fontSize: '18px',
              letterSpacing: '-0.02em',
              transition: 'color 0.25s ease',
              textShadow: scrolledPastHero ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              className="logo-icon-box"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                border: scrolledPastHero ? '1px solid #E2E8F0' : '1px solid rgba(255, 255, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                padding: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.3s ease',
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

          {/* Desktop Navigation Links: Blue on click/active & hover */}
          <nav
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {navLinks.map((item) => {
              const isSelected = activeOption === item.id;
              let linkColor = scrolledPastHero
                ? isSelected
                  ? '#304FE8' // Vibrant Blue on click/active
                  : '#4B5563'
                : isSelected
                ? '#FFFFFF'
                : 'rgba(255, 255, 255, 0.88)';

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{
                    textDecoration: 'none',
                    color: linkColor,
                    fontSize: '14.5px',
                    fontWeight: isSelected ? '700' : '500',
                    transition: 'all 0.2s ease',
                    textShadow: scrolledPastHero ? 'none' : '0 1px 6px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = scrolledPastHero ? '#304FE8' : '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = linkColor;
                  }}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Language Switch, Login, & Vibrant Blue Get Started Button */}
          <div
            className="desktop-nav-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <LanguageToggle variant={scrolledPastHero ? 'default' : 'transparent'} />

            <button
              onClick={() => onOpenAuth('login')}
              className="nav-action-login"
              style={{
                background: 'transparent',
                border: 'none',
                color: scrolledPastHero ? '#0F172A' : '#FFFFFF',
                fontSize: '14.5px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '8px 12px',
                transition: 'all 0.2s ease',
                textShadow: scrolledPastHero ? 'none' : '0 1px 6px rgba(0, 0, 0, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = scrolledPastHero ? '#304FE8' : '#FFFFFF';
                e.currentTarget.style.opacity = scrolledPastHero ? '1' : '0.85';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = scrolledPastHero ? '#0F172A' : '#FFFFFF';
                e.currentTarget.style.opacity = '1';
              }}
            >
              {t.nav.login}
            </button>

            {/* 
              CTA Button:
              - In Hero: Clean white button with navy text.
              - Scrolled Out: Vibrant Blue (#304FE8) button with white text.
            */}
            <button
              onClick={() => onOpenAuth('get-started')}
              className="nav-action-signup"
              style={{
                backgroundColor: scrolledPastHero ? '#304FE8' : '#FFFFFF',
                color: scrolledPastHero ? '#FFFFFF' : '#111827',
                border: 'none',
                fontSize: '14px',
                fontWeight: '600',
                padding: '10px 22px',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: scrolledPastHero
                  ? '0 4px 14px rgba(48, 79, 232, 0.3)'
                  : '0 4px 14px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.backgroundColor = scrolledPastHero ? '#203ECC' : '#FFFFFF';
                e.currentTarget.style.boxShadow = scrolledPastHero
                  ? '0 8px 20px rgba(48, 79, 232, 0.42)'
                  : '0 6px 18px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = scrolledPastHero ? '#304FE8' : '#FFFFFF';
                e.currentTarget.style.boxShadow = scrolledPastHero
                  ? '0 4px 14px rgba(48, 79, 232, 0.3)'
                  : '0 4px 14px rgba(0, 0, 0, 0.2)';
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
              color: scrolledPastHero ? '#111827' : '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '16px',
              right: '16px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
              border: '1px solid #E5E7EB',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              zIndex: 100,
              marginTop: '8px',
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
                    color: isSelected ? '#304FE8' : '#111827',
                    backgroundColor: isSelected ? '#EEF2FF' : 'transparent',
                    fontWeight: isSelected ? '700' : '600',
                    fontSize: '15px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div
              style={{
                borderTop: '1px solid #E5E7EB',
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
                style={{ width: '100%', backgroundColor: '#304FE8', color: '#FFFFFF', border: 'none' }}
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Responsive Styles */}
      <style>{`
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
