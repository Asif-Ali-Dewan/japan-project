import React from 'react';
import { learnerNotes } from '../data/courses';

const learnerPhotos = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // Daisuke Ogawa
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', // Ren Kobayashi
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', // Shota Watanabe
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

        {/* 3 Identical Minimalist Cards Designed with Black, White, Deep Charcoal & Ash */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="learner-notes-grid"
        >
          {learnerNotes.map((note, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(11, 18, 47, 0.04)',
                transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                boxSizing: 'border-box',
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
              {/* Real Learner Photo Header */}
              <div
                style={{
                  height: '150px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  position: 'relative',
                  border: '1px solid #E2E8F0',
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
                    backgroundColor: '#0E1118',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 11px',
                    borderRadius: 'var(--r-pill)',
                    letterSpacing: '-0.01em',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {note.company} Alumnus
                </span>
              </div>

              <div>
                <p style={{ fontSize: '15px', fontWeight: '500', color: '#0E1118', lineHeight: '1.6', marginBottom: '20px' }}>
                  "{note.quote}"
                </p>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: '#0E1118' }}>
                    {note.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px' }}>
                    <span style={{ color: '#64748B', fontWeight: '500' }}>{note.from}</span>
                    <span style={{ margin: '0 6px', color: '#94A3B8' }}>→</span>
                    <span style={{ color: '#0E1118', fontWeight: '700' }}>{note.to}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
