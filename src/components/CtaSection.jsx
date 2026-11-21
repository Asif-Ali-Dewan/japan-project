import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CtaSection({ onOpenAuth }) {
  const { t } = useLanguage();

  return (
    <section
      id="cta"
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: '0 16px 16px 16px',
        boxSizing: 'border-box',
      }}
      className="bottom-card-wrapper"
    >
      {/* Dark CTA Card with 28px rounded corners & technical blueprint grid */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#0B122F',
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          borderRadius: 'var(--r-xl)',
          padding: '88px 32px',
          color: '#FFFFFF',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Top subtle linear border accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(48, 79, 232, 0.8) 50%, transparent 100%)',
          }}
        />

        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Eyebrow badge with Calendar icon */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--r-pill)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: '600',
              marginBottom: '24px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Calendar size={14} color="#93C5FD" strokeWidth={2.2} />
            <span>{t.cta.badge}</span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: '44px',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            {t.cta.heading}
          </h2>

          {/* One line of support copy */}
          <p
            style={{
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#DCE3FF',
              maxWidth: '680px',
              margin: '0 auto 40px auto',
            }}
          >
            {t.cta.subtitle}
          </p>

          {/* Two buttons matching PDF spec */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => onOpenAuth('signup')}
              className="btn btn-primary"
              style={{
                fontSize: '15px',
                padding: '12px 32px',
                minHeight: '48px',
                boxShadow: '0 8px 24px rgba(48, 79, 232, 0.4)',
              }}
            >
              <span>{t.cta.startLearning}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onOpenAuth('teach')}
              className="btn btn-ghost-dark"
              style={{
                fontSize: '15px',
                padding: '12px 28px',
                minHeight: '48px',
              }}
            >
              <span>{t.cta.teachWithUs}</span>
            </button>
          </div>

          <div
            style={{
              marginTop: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '28px',
              fontSize: '13px',
              color: '#8F9BB3',
              flexWrap: 'wrap',
            }}
          >
            <span>{t.cta.guarantee}</span>
            <span>{t.cta.alumni}</span>
            <span>{t.cta.career}</span>
          </div>
        </div>
      </div>
    </section>
  );
}