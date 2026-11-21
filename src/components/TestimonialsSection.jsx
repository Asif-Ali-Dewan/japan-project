import React from 'react';
import { testimonialsData } from '../data/courses';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="section section-white" id="testimonials">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow">STUDENT VOICES</div>
          <h2 className="heading-2">
            Rated 4.9 out of 5 by learners worldwide
          </h2>
        </div>

        {/* 3 Testimonials Grid matching Page 8 of PDF */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="testimonials-grid"
        >
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--r-lg)',
                padding: '32px 28px',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div>
                {/* 5 Stars Rating as formatted in PDF */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="#F69D0B" color="#F69D0B" />
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'var(--navy)',
                    fontStyle: 'normal',
                    marginBottom: '24px',
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer: Learner name · Role */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--lav)',
                    color: 'var(--blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: '700',
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
