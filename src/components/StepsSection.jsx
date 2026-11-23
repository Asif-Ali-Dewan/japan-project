import React from 'react';
import { stepsData } from '../data/courses';
import { ArrowRight, Check } from 'lucide-react';

export default function StepsSection({ onOpenAuth }) {
  return (
    <section className="section section-mist" id="steps">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow">THE JOURNEY</div>
          <h2 className="heading-2">
            Four steps from sign-up to first job
          </h2>
        </div>

        {/* 4 Steps Grid (Ash Neutral Grey Cards with Blue 1, 2, 3, 4 Circles) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '48px',
          }}
          className="steps-grid"
        >
          {stepsData.map((step) => (
            <div
              key={step.number}
              style={{
                backgroundColor: '#F1F4F8',
                borderRadius: '20px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '290px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(11, 18, 47, 0.04)',
                transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                boxSizing: 'border-box',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(11, 18, 47, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(11, 18, 47, 0.04)';
              }}
            >
              <div>
                {/* 1 2 3 4 in Royal Blue circle */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--blue)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: '700',
                    marginBottom: '28px',
                    boxShadow: '0 4px 14px rgba(48, 79, 232, 0.35)',
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#0E1118',
                    marginBottom: '12px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#556477' }}>
                  {step.description}
                </p>
              </div>

              <div style={{ marginTop: '24px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#0E1118',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    padding: '5px 12px',
                    borderRadius: 'var(--r-pill)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <Check size={13} color="var(--blue)" strokeWidth={2.5} />
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Step Banner / Callout */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--r-xl)',
            padding: '32px 40px',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
              Want to see where your skills rank right now?
            </div>
            <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
              Take our 5-minute diagnostic assessment to receive a customized curriculum roadmap.
            </div>
          </div>

          <button
            onClick={() => onOpenAuth('signup')}
            className="btn btn-primary"
            style={{ fontSize: '14px' }}
          >
            <span>Take free diagnostic</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
