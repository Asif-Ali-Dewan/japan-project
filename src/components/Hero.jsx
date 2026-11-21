import React from 'react';
import { ArrowRight, Star, Sparkles, Wrench, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenAuth }) {
  const { t } = useLanguage();

  return (
    <div className="hero-wrapper" id="top">
      <div className="hero-panel">
        {/* Hero Main Content Grid - Expands to fill full hero screen */}
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            alignItems: 'center',
            gap: '56px',
            position: 'relative',
            zIndex: 10,
            flex: 1,
            paddingTop: '96px',
            paddingBottom: '32px',
          }}
        >
          {/* Left Column: Headline and Call to Actions */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--r-pill)',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '28px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Sparkles size={14} color="#FFF1D2" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="display-hero" style={{ color: '#FFFFFF', marginBottom: '24px' }}>
              {t.hero.titleLine1} <br />
              {t.hero.titleLine2}
            </h1>

            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#DCE3FF',
                marginBottom: '36px',
                maxWidth: '600px',
                fontWeight: '400',
              }}
            >
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenAuth('signup')}
                className="btn btn-dark"
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  padding: '12px 28px',
                  boxShadow: '0 8px 24px rgba(11, 18, 47, 0.2)',
                }}
              >
                <span>{t.hero.startLearning}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#steps"
                className="btn btn-ghost-dark"
                style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  padding: '12px 26px',
                }}
              >
                <span>{t.hero.howItWorks}</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div
              style={{
                marginTop: '44px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                fontSize: '13px',
                color: '#DCE3FF',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#E6F7ED" />
                <span>{t.hero.trust1}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#E6F7ED" />
                <span>{t.hero.trust2}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#E6F7ED" />
                <span>{t.hero.trust3}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Abstract Visual Canvas (Minimal / Zero Text Clutter) */}
          <div
            className="hero-visual"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '480px',
            }}
          >
            {/* Background concentric glowing circles */}
            <div
              style={{
                position: 'absolute',
                width: '520px',
                height: '520px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 70%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                border: '1px dashed rgba(255, 255, 255, 0.28)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                pointerEvents: 'none',
              }}
            />

            {/* Center Floating Card: Pure Visual Canvas with minimal text */}
            <div
              className="floating-card animate-float"
              style={{
                width: '100%',
                maxWidth: '480px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--r-xl)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 28px 56px rgba(11, 18, 47, 0.25)',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Window Header with subtle window dots */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                </div>
                <div
                  style={{
                    height: '8px',
                    width: '90px',
                    backgroundColor: 'var(--line)',
                    borderRadius: 'var(--r-pill)',
                  }}
                />
                <div style={{ width: '20px' }} />
              </div>

              {/* Minimalist Graphic Illustration Canvas */}
              <div
                style={{
                  padding: '24px 20px',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {/* SVG Visual Graphic Composition */}
                <svg viewBox="0 0 380 210" style={{ width: '100%', height: 'auto', display: 'block' }}>
                  <defs>
                    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#304FE8" />
                      <stop offset="100%" stopColor="#5B77F6" />
                    </linearGradient>
                    <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E6F7ED" />
                      <stop offset="100%" stopColor="#C4F0D6" />
                    </linearGradient>
                    <linearGradient id="lavGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D9E2FF" />
                      <stop offset="100%" stopColor="#BFD0FF" />
                    </linearGradient>
                    <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFE6D7" />
                      <stop offset="100%" stopColor="#FFD0BA" />
                    </linearGradient>
                  </defs>

                  {/* Top Abstract Layout Blocks */}
                  <rect x="15" y="15" width="220" height="42" rx="10" fill="url(#lavGrad)" opacity="0.8" />
                  <rect x="245" y="15" width="120" height="42" rx="10" fill="url(#mintGrad)" opacity="0.9" />

                  {/* Abstract UI Elements inside top blocks */}
                  <circle cx="40" cy="36" r="10" fill="#304FE8" opacity="0.3" />
                  <rect x="60" y="32" width="70" height="8" rx="4" fill="#304FE8" opacity="0.5" />
                  <rect x="140" y="32" width="40" height="8" rx="4" fill="#304FE8" opacity="0.25" />

                  <circle cx="270" cy="36" r="10" fill="#17A34A" opacity="0.3" />
                  <rect x="290" y="32" width="55" height="8" rx="4" fill="#17A34A" opacity="0.5" />

                  {/* Main Central Visual Composition */}
                  <rect x="15" y="68" width="350" height="126" rx="12" fill="#F4F7FE" stroke="#E2E4EE" strokeWidth="1" />

                  {/* Left Column Graphic: Code / Data Bars */}
                  <rect x="32" y="86" width="36" height="36" rx="8" fill="url(#blueGrad)" />
                  <path d="M 44 104 L 50 110 L 56 98" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                  <rect x="80" y="90" width="90" height="9" rx="4.5" fill="#0B122F" opacity="0.75" />
                  <rect x="80" y="106" width="130" height="7" rx="3.5" fill="#5A6180" opacity="0.35" />

                  {/* Modern Wave Arc Visual */}
                  <path d="M 32 165 C 80 135, 120 175, 160 145 S 230 130, 270 155 S 330 130, 348 140" fill="none" stroke="#304FE8" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 32 170 C 80 142, 120 180, 160 152 S 230 138, 270 162 S 330 138, 348 148" fill="none" stroke="#304FE8" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.4" />

                  {/* Right Column Graphic: Interactive Pillars / Nodes */}
                  <rect x="250" y="86" width="98" height="36" rx="8" fill="url(#warmGrad)" opacity="0.9" />
                  <circle cx="272" cy="104" r="8" fill="#FA7317" opacity="0.4" />
                  <rect x="288" y="100" width="46" height="8" rx="4" fill="#FA7317" opacity="0.7" />

                  {/* Floating geometric dots */}
                  <circle cx="330" cy="140" r="4" fill="#304FE8" />
                  <circle cx="330" cy="140" r="8" fill="#304FE8" opacity="0.2" />
                  <circle cx="160" cy="145" r="4" fill="#17A34A" />
                </svg>

                {/* Minimalist Bottom Status Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--r-md)',
                    border: '1px solid var(--line)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--green)' }} />
                    <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--muted)' }}>{t.hero.canvasStatus}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: 'var(--lav)' }} />
                    <span style={{ width: '28px', height: '6px', borderRadius: '3px', backgroundColor: 'var(--blue)' }} />
                    <span style={{ width: '16px', height: '6px', borderRadius: '3px', backgroundColor: 'var(--mint)' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Status Badges (as in original design) */}
            <div
              className="animate-float-delayed"
              style={{
                position: 'absolute',
                top: '20px',
                right: '-15px',
                backgroundColor: 'var(--mint)',
                color: 'var(--green)',
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                fontSize: '13px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 10px 24px rgba(11, 18, 47, 0.12)',
                zIndex: 3,
                border: '1px solid rgba(23, 163, 74, 0.2)',
              }}
            >
              <Star size={14} fill="currentColor" />
              <span>{t.hero.canvasTop}</span>
            </div>

            <div
              className="animate-float"
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '-18px',
                backgroundColor: 'var(--cream)',
                color: '#8A5300',
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                fontSize: '13px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 10px 24px rgba(11, 18, 47, 0.12)',
                zIndex: 3,
                border: '1px solid rgba(246, 157, 11, 0.25)',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--amber)' }} />
              <span>{t.hero.canvasApplied}</span>
            </div>

            <div
              className="animate-float-delayed"
              style={{
                position: 'absolute',
                bottom: '-12px',
                right: '18px',
                backgroundColor: 'var(--peach)',
                color: '#B83800',
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                fontSize: '13px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 10px 24px rgba(11, 18, 47, 0.12)',
                zIndex: 3,
                border: '1px solid rgba(250, 115, 23, 0.25)',
              }}
            >
              <Wrench size={14} />
              <span>{t.hero.canvasPortfolio}</span>
            </div>
          </div>
        </div>

        {/* Bottom subtle indicator line */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.12)', marginTop: 'auto' }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-panel .container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-visual {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
