import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer({ onOpenAuth }) {
  const { t, language } = useLanguage();
  const isJa = language === 'ja';

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: '0 16px 24px 16px',
        boxSizing: 'border-box',
      }}
      className="bottom-card-wrapper"
    >
      {/* Dark Footer Card with 28px rounded corners & full width within 16px padding */}
      <div
        style={{
          width: '100%',
          backgroundColor: 'var(--navy)',
          borderRadius: 'var(--r-xl)',
          padding: '64px 44px 36px 44px',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', width: '100%' }}>
          {/* Main Footer Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr repeat(4, 1fr)',
              gap: '40px',
              marginBottom: '56px',
            }}
            className="footer-grid"
          >
            {/* Brand info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="SAMURAI TALENT Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.02em' }}>SAMURAI TALENT</span>
              </div>

              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8F9BB3', maxWidth: '300px', marginBottom: '24px' }}>
                {t.footer.tagline}
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SAMURAI TALENT GitHub"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SAMURAI TALENT Twitter"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SAMURAI TALENT LinkedIn"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Links Column 1: Courses */}
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', marginBottom: '18px' }}>
                {t.footer.colPrograms}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#courses" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '自動車・二輪整備' : 'Automotive & Motorcycle'}</a></li>
                <li><a href="#courses" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '電気工事・強電配線' : 'Electrical Installation'}</a></li>
                <li><a href="#courses" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '空調・冷凍冷蔵設備' : 'HVAC & Refrigeration'}</a></li>
                <li><a href="#courses" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '溶接・金属加工' : 'Welding & Metal Fabrication'}</a></li>
                <li><a href="#courses" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '給排水・プラント配管' : 'Plumbing & Pipe Fitting'}</a></li>
              </ul>
            </div>

            {/* Links Column 2: Platform */}
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', marginBottom: '18px' }}>
                {t.footer.colPlatform}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#curriculum" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '専門技術パス' : 'Trade Pathways'}</a></li>
                <li><a href="#curriculum" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? 'JIS技術認定証' : 'Certificates'}</a></li>
                <li><a href="#steps" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '企業求人ボード' : 'Industry Job Board'}</a></li>
                <li><a href="#teach" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '講師・指導員募集' : 'Teach with Us'}</a></li>
                <li><a href="#features" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? 'マイスター実技審査' : 'Master Craftsman Inspection'}</a></li>
              </ul>
            </div>

            {/* Links Column 3: Company */}
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', marginBottom: '18px' }}>
                {t.footer.colCommunity}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '運営会社概要' : 'About SAMURAI TALENT'}</a></li>
                <li><a href="#stories" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '受講生の転職実績' : 'Alumni Stories'}</a></li>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? '採用情報' : "Careers (We're Hiring)"}</a></li>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? 'プレスキット' : 'Press Kit'}</a></li>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? 'お問い合わせ' : 'Contact Support'}</a></li>
              </ul>
            </div>

            {/* Links Column 4: Trust & Legal */}
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', marginBottom: '18px' }}>
                {t.footer.colLegal}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{t.footer.privacy}</a></li>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{t.footer.terms}</a></li>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? 'セキュリティと認証' : 'Security & Verification'}</a></li>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{isJa ? 'アクセシビリティ対応' : 'Accessibility (AA Compliant)'}</a></li>
                <li><a href="#top" style={{ color: '#8F9BB3', fontSize: '14px', textDecoration: 'none' }}>{t.footer.cookies}</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '13px',
              color: '#8F9BB3',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              {t.footer.copyright}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span>WCAG 2.1 AA Contrast Compliant</span>
              <span>·</span>
              <span>Designed with SAMURAI TALENT Design System v1</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bottom-card-wrapper {
            padding: 0 8px 12px 8px !important;
          }
          .bottom-card-wrapper > div {
            border-radius: var(--r-lg) !important;
            padding: 48px 24px 28px 24px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}