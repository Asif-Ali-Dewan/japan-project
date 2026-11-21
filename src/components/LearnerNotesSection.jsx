import React from 'react';
import { learnerNotes } from '../data/courses';

const learnerPhotos = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', // Tariq Mansoor
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', // Jessica Ramos
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', // Kenji Sato
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

        {/* 3 Learner Cards with Real Relatable Photography (Zero Blobs) */}
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
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(6px)',
                    color: 'var(--navy)',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 10px',
                    borderRadius: 'var(--r-pill)',
                  }}
                >
                  {note.company} Alumnus
                </span>
              </div>

              <div>
                <p style={{ fontSize: '15px', fontWeight: '500', color: 'var(--navy)', lineHeight: '1.6', marginBottom: '20px' }}>
                  "{note.quote}"
                </p>

                <div style={{ borderTop: '1px solid rgba(11, 18, 47, 0.08)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--navy)' }}>
                    {note.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                    <span style={{ color: 'var(--blue)', fontWeight: '700' }}>{note.from}</span> → <span style={{ fontWeight: '600' }}>{note.to}</span>
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
