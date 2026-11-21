import React from 'react';
import { getLocalizedSteps } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Check } from 'lucide-react';

export default function StepsSection({ onOpenAuth }) {
  const { t, language } = useLanguage();
  const isJa = language === 'ja';
  const steps = getLocalizedSteps(language);

  return (
    <section className="section section-mist" id="steps">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow">{t.steps.eyebrow}</div>
          <h2 className="heading-2">
            {t.steps.heading}
          </h2>
        </div>

        {/* 4 Steps Grid (Each with pastel tint & blue numbered circle per PDF rule) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '48px',
          }}
          className="steps-grid"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                backgroundColor: step.bg,
                borderRadius: 'var(--r-lg)',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
                border: '1px solid rgba(11, 18, 47, 0.05)',
                position: 'relative',
              }}
            >
              <div>
                {/* Blue numbered circle matching the PDF requirement */}
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
                    boxShadow: '0 4px 12px rgba(48, 79, 232, 0.25)',
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'var(--navy)',
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--muted)' }}>
                  {step.description}
                </p>
              </div>

              <div style={{ marginTop: '20px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--navy)',
                    backgroundColor: '#FFFFFF',
                    padding: '4px 10px',
                    borderRadius: 'var(--r-pill)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Check size={12} color="var(--blue)" />
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
              {isJa ? '現在のあなたのスキルランクを診断しませんか？' : 'Want to see where your skills rank right now?'}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
              {isJa ? '5分間の無料実技適性診断を受けて、あなた専用の学習ロードマップを受け取りましょう。' : 'Take our 5-minute diagnostic assessment to receive a customized curriculum roadmap.'}
            </div>
          </div>

          <button
            onClick={() => onOpenAuth('signup')}
            className="btn btn-primary"
            style={{ fontSize: '14px' }}
          >
            <span>{isJa ? '無料スキル診断を受ける' : 'Take free diagnostic'}</span>
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
