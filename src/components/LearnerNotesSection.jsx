import React from 'react';
import { getLocalizedLearnerNotes } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';

const learnerPhotos = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // Tariq Mansoor
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', // Jessica Ramos
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', // Kenji Sato
];

export default function LearnerNotesSection() {
  const { t, language } = useLanguage();
  const notes = getLocalizedLearnerNotes(language);

  return (
    <section className="section section-white" id="stories">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow">{t.learnerNotes.eyebrow}</div>
          <h2 className="heading-2">
            {t.learnerNotes.heading}
          </h2>
        </div>

        {/* 3 Learner Cards with Real Relatable Photography (Zero Blobs) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="learner-notes-grid"
        >
          {notes.map((note, index) => (
            <div
              key={index}
              style={{
                backgroundColor: note.color,
                borderRadius: 'var(--r-lg)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px',
                border: '1px solid rgba(11, 18, 47, 0.05)',
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(11, 18, 47, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
            >
              {/* Real Learner Photo Header */}
              <div
                style={{
                  height: '150px',
                  borderRadius: 'var(--r-md)',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <img
                  src={learnerPhotos[index]}
                  alt={note.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: '1.6',
                  color: 'var(--navy)',
                  fontWeight: '500',
                  marginBottom: '24px',
                  flex: 1,
                }}
              >
                "{note.quote}"
              </p>

              {/* Career Pivot Transition & Tags */}
              <div style={{ borderTop: '1px solid rgba(11, 18, 47, 0.08)', paddingTop: '16px' }}>
                <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--navy)', marginBottom: '4px' }}>
                  {note.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--muted)', flexWrap: 'wrap' }}>
                  <span>{note.from}</span>
                  <span style={{ color: 'var(--blue)', fontWeight: '700' }}>→</span>
                  <span style={{ fontWeight: '700', color: 'var(--navy)' }}>{note.to}</span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--blue)', marginTop: '4px' }}>
                  @ {note.company}
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