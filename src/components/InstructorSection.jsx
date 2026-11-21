import React from 'react';
import { ArrowRight, Video, Users, DollarSign, Sparkles } from 'lucide-react';

export default function InstructorSection({ onOpenAuth }) {
  const benefits = [
    {
      title: 'Full workshop production support',
      desc: 'Our technical media team assists with step-by-step workshop demonstrations, tool breakdown diagrams, and curriculum structuring.',
      bg: 'var(--lav)',
      icon: Video,
      color: 'var(--blue)',
      metric: 'Zero recording stress',
    },
    {
      title: 'Reach 60,000+ technical learners',
      desc: 'Mentor eager technical apprentices and future licensed technicians preparing for Japanese and global industrial careers.',
      bg: 'var(--mint)',
      icon: Users,
      color: 'var(--green)',
      metric: 'Top talent trade community',
    },
    {
      title: 'Competitive master royalties',
      desc: 'Earn recurring monthly revenue and performance bonuses tied to apprentice practical completion and job placements.',
      bg: 'var(--cream)',
      icon: DollarSign,
      color: 'var(--amber)',
      metric: 'Average $4,800/mo payout',
    },
  ];

  return (
    <section className="section section-mist" id="teach">
      <div className="container">
        {/* Section Header: Clean Left Title & Right Action Button Only, No paragraph text */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="eyebrow">BECOME A MASTER INSTRUCTOR</div>
            <h2 className="heading-2">
              Train the next generation of certified technical tradesmen
            </h2>
          </div>
          <button
            onClick={() => onOpenAuth('teach')}
            className="btn btn-primary"
            style={{ fontSize: '14px' }}
          >
            <span>Teach with us</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 3 Pastel Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="instructor-grid"
        >
          {benefits.map((b, i) => {
            const IconComp = b.icon;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: b.bg,
                  borderRadius: 'var(--r-lg)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  border: '1px solid rgba(11, 18, 47, 0.05)',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--r-sm)',
                      backgroundColor: '#FFFFFF',
                      color: b.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 4px 10px rgba(11, 18, 47, 0.04)',
                    }}
                  >
                    <IconComp size={20} />
                  </div>

                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'var(--navy)',
                      marginBottom: '10px',
                    }}
                  >
                    {b.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--muted)' }}>
                    {b.desc}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(11, 18, 47, 0.08)' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--navy)' }}>
                    {b.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .instructor-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
