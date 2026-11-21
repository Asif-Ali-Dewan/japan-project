import React from 'react';
import { getLocalizedFeatures } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Wrench, ShieldCheck, Users } from 'lucide-react';

const iconMap = {
  GraduationCap: GraduationCap,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Users: Users,
};

export default function FeaturesSection({ onOpenAuth }) {
  const { t, language } = useLanguage();
  const features = getLocalizedFeatures(language);

  return (
    <section className="section section-white" id="features">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow">{t.features.eyebrow}</div>
          <h2 className="heading-2">
            {t.features.heading}
          </h2>
        </div>

        {/* 4 Clean Minimal Cards: Spacious, Zero Clustery Text, High Polish */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="features-grid-four"
        >
          {features.map((f, i) => {
            const IconComp = iconMap[f.icon] || GraduationCap;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--r-xl)',
                  padding: '36px 28px',
                  border: '1px solid var(--line)',
                  boxShadow: 'var(--shadow)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--blue)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--line)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  {/* Clean Icon Tile (8px radius) */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--surface)',
                      color: f.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '28px',
                      border: '1px solid var(--line)',
                    }}
                  >
                    <IconComp size={26} />
                  </div>

                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '800',
                      color: 'var(--navy)',
                      lineHeight: '1.25',
                      marginBottom: '12px',
                    }}
                  >
                    {f.title}
                  </h3>
                </div>

                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--navy)',
                      fontSize: '12px',
                      fontWeight: '700',
                      padding: '5px 12px',
                      borderRadius: 'var(--r-pill)',
                      border: '1px solid var(--line)',
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .features-grid-four {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .features-grid-four {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
