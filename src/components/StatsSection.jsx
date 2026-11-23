import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Zap, Check } from 'lucide-react';

export default function StatsSection({ onOpenAuth }) {
  const stats = [
    {
      value: '10 Core',
      label: 'Technical trades',
    },
    {
      value: '60,000+',
      label: 'Active learners',
    },
    {
      value: '4.9/5',
      label: 'Average rating',
    },
    {
      value: '94%',
      label: 'Trade placement',
    },
  ];

  const hiringCompanies = [
    { name: 'Toyota' },
    { name: 'Daikin' },
    { name: 'Komatsu' },
    { name: 'Mitsubishi' },
    { name: 'Panasonic' },
    { name: 'Kubota' },
    { name: 'Honda' },
  ];

  return (
    <section className="section section-white" id="career-acceleration">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow">CAREER ACCELERATION</div>
          <h2 className="heading-2">
            We coach, certify and <span style={{ color: 'var(--blue)' }}>connect learners to careers</span>.
          </h2>
        </div>

        {/* 2 Clean Visual Cards: Ultra-Minimal, No Text Clutter, Sleek Diagrams */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginBottom: '64px',
          }}
          className="stats-visual-grid"
        >
          {/* Card 1 (Lavender): Minimal Visual Pipeline */}
          <div
            style={{
              backgroundColor: 'var(--lav)',
              borderRadius: 'var(--r-xl)',
              padding: '36px',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'var(--blue)',
                  padding: '6px 14px',
                  borderRadius: 'var(--r-pill)',
                  fontSize: '12px',
                  fontWeight: '700',
                  boxShadow: '0 2px 6px rgba(48, 79, 232, 0.08)',
                }}
              >
                LIVE FEEDBACK
              </span>
              <span style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: '700' }}>
                4h Response Time
              </span>
            </div>

            {/* Visual Process Flow Diagram */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--r-lg)',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 8px 20px rgba(11, 18, 47, 0.05)',
                border: '1px solid var(--line)',
                margin: '20px 0',
              }}
            >
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--surface)', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto', fontWeight: '800', fontSize: '13px' }}>
                  01
                </div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>Workshop Lab</div>
              </div>

              <div style={{ height: '2px', flex: 0.6, backgroundColor: 'var(--line)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-4px', right: 0, width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--blue)' }} />
              </div>

              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--lav)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto', fontWeight: '800', fontSize: '13px' }}>
                  02
                </div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--blue)' }}>Master Inspection</div>
              </div>

              <div style={{ height: '2px', flex: 0.6, backgroundColor: 'var(--line)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-4px', right: 0, width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--green)' }} />
              </div>

              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--mint)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto', fontWeight: '800', fontSize: '13px' }}>
                  ✓
                </div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--green)' }}>Certified</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--navy)' }}>
                Master Craft Inspections
              </h3>
              <span className="badge badge-blue">100% Pass Rate</span>
            </div>
          </div>

          {/* Card 2 (Mint): Minimal Credential Seal */}
          <div
            style={{
              backgroundColor: 'var(--mint)',
              borderRadius: 'var(--r-xl)',
              padding: '36px',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'var(--green)',
                  padding: '6px 14px',
                  borderRadius: 'var(--r-pill)',
                  fontSize: '12px',
                  fontWeight: '700',
                  boxShadow: '0 2px 6px rgba(23, 163, 74, 0.08)',
                }}
              >
                PROOF OF SKILL
              </span>
              <span style={{ fontSize: '13px', color: 'var(--green)', fontWeight: '700' }}>
                JIS Certified Standard
              </span>
            </div>

            {/* Clean Floating Badge Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--r-lg)',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 8px 20px rgba(11, 18, 47, 0.05)',
                border: '1px solid var(--line)',
                margin: '20px 0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--cream)',
                    color: 'var(--amber)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Award size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--navy)' }}>
                    Verified Trade Portfolio
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--green)', fontWeight: '700', marginTop: '2px' }}>
                    Direct Contractor Placement
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--mint)',
                  color: 'var(--green)',
                  padding: '6px 14px',
                  borderRadius: 'var(--r-pill)',
                  fontSize: '12px',
                  fontWeight: '800',
                }}
              >
                <ShieldCheck size={14} />
                <span>Verified</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--navy)' }}>
                Industry Employer Network
              </h3>
              <span className="badge badge-green">Direct Hiring</span>
            </div>
          </div>
        </div>

        {/* Clean Stats & Hiring Partners Zone (No Trailing Mouse Follower) */}
        <div
          style={{
            padding: '16px 0 28px 0',
            borderRadius: '24px',
          }}
        >
          {/* 4-Column Stats Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              padding: '28px 0',
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              marginBottom: '44px',
            }}
            className="stats-strip"
          >
            {stats.map((s, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px 8px',
                  textAlign: 'center',
                  userSelect: 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '44px',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    color: 'var(--navy)',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'var(--muted)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Company hiring logos */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '36px',
                flexWrap: 'wrap',
              }}
            >
              {hiringCompanies.map((c, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#94A3B8',
                    letterSpacing: '-0.01em',
                    display: 'inline-block',
                    userSelect: 'none',
                  }}
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .stats-visual-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-strip {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .stats-strip {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
