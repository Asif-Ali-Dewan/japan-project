import React from 'react';
import { learnerNotes } from '../data/courses';

const learnerPhotos = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // Daisuke Ogawa
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', // Ren Kobayashi
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', // Shota Watanabe
];

// Refined Palette: Deep Charcoal / Black, Crisp White, and Ash Neutral Grey
const cardStyles = [
  {
    bg: '#0E1118', // Deep Charcoal / Black
    text: '#FFFFFF',
    desc: '#94A3B8', // Ash text
    muted: '#64748B',
    accent: '#FFFFFF',
    border: '1px solid #1E2333',
    divider: '1px solid rgba(255, 255, 255, 0.12)',
    badgeBg: 'rgba(14, 17, 24, 0.88)',
    badgeText: '#FFFFFF',
    badgeBorder: '1px solid rgba(255, 255, 255, 0.18)',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.16)',
    hoverShadow: '0 16px 36px rgba(0, 0, 0, 0.28)',
  },
  {
    bg: '#FFFFFF', // Pure White
    text: '#0E1118', // Deep Charcoal
    desc: '#64748B', // Ash text
    muted: '#94A3B8',
    accent: '#0E1118',
    border: '1px solid #E2E8F0',
    divider: '1px solid #E2E8F0',
    badgeBg: 'rgba(255, 255, 255, 0.95)',
    badgeText: '#0E1118',
    badgeBorder: '1px solid #E2E8F0',
    shadow: '0 4px 20px rgba(11, 18, 47, 0.05)',
    hoverShadow: '0 16px 36px rgba(11, 18, 47, 0.12)',
  },
  {
    bg: '#F1F4F8', // Ash Neutral Grey
    text: '#0E1118', // Deep Charcoal
    desc: '#64748B', // Ash text
    muted: '#94A3B8',
    accent: '#0E1118',
    border: '1px solid #E2E8F0',
    divider: '1px solid #E2E8F0',
    badgeBg: '#FFFFFF',
    badgeText: '#0E1118',
    badgeBorder: '1px solid #CBD5E1',
    shadow: '0 4px 20px rgba(11, 18, 47, 0.05)',
    hoverShadow: '0 16px 36px rgba(11, 18, 47, 0.12)',
  },
];

export default function LearnerNotesSection() {
  return (
    <section className="section section-white" id="stories">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow">PROOF OF TRANSFORMATION</div>
          <h2 className="heading-2">
            Notes from our learners
          </h2>
        </div>

        {/* 3 Learner Cards in Black, White, Deep Charcoal, and Ash */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="learner-notes-grid"
        >
          {learnerNotes.map((note, index) => {
            const theme = cardStyles[index % cardStyles.length];
            return (
              <div
                key={index}
                style={{
                  backgroundColor: theme.bg,
                  borderRadius: 'var(--r-lg)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  border: theme.border,
                  boxShadow: theme.shadow,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = theme.hoverShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = theme.shadow;
                }}
              >
                {/* Real Learner Photo Header */}
                <div
                  style={{
                    height: '150px',
                    borderRadius: 'var(--r-md)',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={learnerPhotos[index]}
                    alt={note.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(11, 18, 47, 0.45) 100%)',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '12px',
                      backgroundColor: theme.badgeBg,
                      backdropFilter: 'blur(8px)',
                      color: theme.badgeText,
                      border: theme.badgeBorder,
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 11px',
                      borderRadius: 'var(--r-pill)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {note.company} Alumnus
                  </span>
                </div>

                <div>
                  <p style={{ fontSize: '15px', fontWeight: '500', color: theme.text, lineHeight: '1.6', marginBottom: '20px' }}>
                    "{note.quote}"
                  </p>

                  <div style={{ borderTop: theme.divider, paddingTop: '16px' }}>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: theme.text }}>
                      {note.name}
                    </div>
                    <div style={{ fontSize: '12px', color: theme.desc, marginTop: '3px' }}>
                      <span style={{ color: theme.desc, fontWeight: '600' }}>{note.from}</span>
                      <span style={{ margin: '0 6px', color: theme.muted }}>→</span>
                      <span style={{ color: theme.accent, fontWeight: '700' }}>{note.to}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .learner-notes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
