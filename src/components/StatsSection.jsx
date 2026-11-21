import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Zap, Check } from 'lucide-react';

export default function StatsSection({ onOpenAuth }) {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredCompany, setHoveredCompany] = useState(null);

  const interactiveZoneRef = useRef(null);
  const cursorCircleRef = useRef(null);
  const mouseTarget = useRef({ x: -150, y: -150 });
  const circleCurrent = useRef({ x: -150, y: -150 });
  const animFrameId = useRef(null);
  const targetScale = useRef(1);

  const stats = [
    {
      value: '10 Core',
      label: 'Technical trades',
      color: '#304FE8', // Electric Blue
      hoverBg: 'rgba(48, 79, 232, 0.05)',
    },
    {
      value: '60,000+',
      label: 'Active learners',
      color: '#10B981', // Emerald Green
      hoverBg: 'rgba(16, 185, 129, 0.05)',
    },
    {
      value: '4.9/5',
      label: 'Average rating',
      color: '#FA7317', // Vivid Orange
      hoverBg: 'rgba(250, 115, 23, 0.05)',
    },
    {
      value: '94%',
      label: 'Trade placement',
      color: '#EF4444', // Red
      hoverBg: 'rgba(239, 68, 68, 0.05)',
    },
  ];

  const hiringCompanies = [
    { name: 'Toyota', color: '#DC2626' },
    { name: 'Daikin', color: '#0284C7' },
    { name: 'Komatsu', color: '#D97706' },
    { name: 'Mitsubishi', color: '#E11D48' },
    { name: 'Panasonic', color: '#2563EB' },
    { name: 'Kubota', color: '#EA580C' },
    { name: 'Honda', color: '#DC2626' },
  ];

  // Fluid physics loop matching reference video with lerp easing
  useEffect(() => {
    const updatePhysics = () => {
      const speed = 0.16; // trailing organic spring
      circleCurrent.current.x += (mouseTarget.current.x - circleCurrent.current.x) * speed;
      circleCurrent.current.y += (mouseTarget.current.y - circleCurrent.current.y) * speed;

      if (cursorCircleRef.current) {
        cursorCircleRef.current.style.transform = `translate3d(${circleCurrent.current.x}px, ${circleCurrent.current.y}px, 0) translate(-50%, -50%) scale(${targetScale.current})`;
      }

      animFrameId.current = requestAnimationFrame(updatePhysics);
    };

    animFrameId.current = requestAnimationFrame(updatePhysics);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!interactiveZoneRef.current) return;
    const rect = interactiveZoneRef.current.getBoundingClientRect();
    mouseTarget.current.x = e.clientX - rect.left;
    mouseTarget.current.y = e.clientY - rect.top;
  };

  const handleMouseEnter = (e) => {
    if (!interactiveZoneRef.current) return;
    const rect = interactiveZoneRef.current.getBoundingClientRect();
    mouseTarget.current.x = e.clientX - rect.left;
    mouseTarget.current.y = e.clientY - rect.top;
    circleCurrent.current.x = mouseTarget.current.x;
    circleCurrent.current.y = mouseTarget.current.y;
    targetScale.current = 1;
    if (cursorCircleRef.current) {
      cursorCircleRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    targetScale.current = 0.4;
    setHoveredStat(null);
    setHoveredCompany(null);
    if (cursorCircleRef.current) {
      cursorCircleRef.current.style.opacity = '0';
    }
  };

  const setCircleColor = (color, scale = 1.25) => {
    targetScale.current = scale;
    if (cursorCircleRef.current) {
      cursorCircleRef.current.style.backgroundColor = color;
    }
  };

  const resetCircleColor = () => {
    targetScale.current = 1;
    if (cursorCircleRef.current) {
      cursorCircleRef.current.style.backgroundColor = '#FA7317';
    }
  };

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

        {/* Interactive Stats & Hiring Partners Zone with Circular Physics Follower (Reference Video Style) */}
        <div
          ref={interactiveZoneRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{
            position: 'relative',
            isolation: 'isolate',
            padding: '16px 0 28px 0',
            overflow: 'hidden',
            borderRadius: '24px',
          }}
        >
          {/* Smooth Trailing Filled Circle with Difference Blend (Exact Reference Video Interaction) */}
          <div
            ref={cursorCircleRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              backgroundColor: '#FA7317',
              mixBlendMode: 'difference',
              pointerEvents: 'none',
              zIndex: 30,
              opacity: 0,
              transform: 'translate3d(-150px, -150px, 0) translate(-50%, -50%) scale(1)',
              transition: 'opacity 0.25s ease, background-color 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform',
            }}
          />

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
            {stats.map((s, idx) => {
              const isStatActive = hoveredStat === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    setHoveredStat(idx);
                    setCircleColor(s.color, 1.3);
                  }}
                  onMouseLeave={() => {
                    setHoveredStat(null);
                    resetCircleColor();
                  }}
                  style={{
                    padding: '16px 8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: '44px',
                      fontWeight: '800',
                      lineHeight: '1.1',
                      color: isStatActive ? s.color : 'var(--navy)',
                      marginBottom: '8px',
                      letterSpacing: '-0.02em',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: isStatActive ? s.color : 'var(--muted)',
                      transition: 'color 0.25s ease',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              );
            })}
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
              {hiringCompanies.map((c, i) => {
                const isCompActive = hoveredCompany === i;
                return (
                  <span
                    key={i}
                    onMouseEnter={() => {
                      setHoveredCompany(i);
                      setCircleColor(c.color, 1.25);
                    }}
                    onMouseLeave={() => {
                      setHoveredCompany(null);
                      resetCircleColor();
                    }}
                    style={{
                      fontSize: '18px',
                      fontWeight: '800',
                      color: isCompActive ? c.color : '#94A3B8',
                      letterSpacing: '-0.01em',
                      transition: 'color 0.25s ease',
                      display: 'inline-block',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    {c.name}
                  </span>
                );
              })}
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
