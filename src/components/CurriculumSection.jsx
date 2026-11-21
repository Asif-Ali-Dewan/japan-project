import React, { useState } from 'react';
import { curriculumAccordion } from '../data/courses';
import { Minus, Plus, CheckCircle, Award, ShieldCheck, QrCode, Sparkles, Check } from 'lucide-react';

export default function CurriculumSection({ onOpenAuth }) {
  const [activeId, setActiveId] = useState('courses');

  const toggleAccordion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section section-mist" id="curriculum">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '48px' }}>
          <div className="eyebrow">CURRICULUM ARCHITECTURE</div>
          <h2 className="heading-2">
            Everything you need, under one roof
          </h2>
        </div>

        {/* 2-Column: Accordion Left + Portrait Certificate Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '36px',
            alignItems: 'center',
          }}
          className="curriculum-grid"
        >
          {/* Left Column: Expandable list rows with Slow Smooth Animation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {curriculumAccordion.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <div
                  key={item.id}
                  className="accordion-item"
                  onClick={() => toggleAccordion(item.id)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--r-md)',
                    padding: '24px 28px',
                    border: '1px solid',
                    borderColor: isOpen ? 'var(--blue)' : 'var(--line)',
                    cursor: 'pointer',
                    boxShadow: isOpen ? '0 12px 28px rgba(11, 18, 47, 0.07)' : '0 2px 8px rgba(11, 18, 47, 0.02)',
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  {/* Row Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: isOpen ? 'var(--blue)' : 'var(--navy)',
                          transition: 'color 0.4s ease',
                        }}
                      >
                        {item.title}
                      </span>
                      {isOpen && (
                        <span className="badge badge-blue" style={{ fontSize: '11px', transition: 'all 0.4s ease' }}>
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Smooth Rotating / Morphing Toggle Button */}
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'var(--lav)' : 'var(--surface)',
                        color: isOpen ? 'var(--blue)' : 'var(--navy)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>

                  {/* Smooth Slowly Animating Collapsible Drawer (CSS Grid 0fr -> 1fr) */}
                  <div className={`accordion-content-wrapper ${isOpen ? 'is-open' : ''}`}>
                    <div className="accordion-inner">
                      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                        <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--muted)', marginBottom: '16px' }}>
                          {item.content}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {item.metrics.map((m, i) => (
                            <span
                              key={i}
                              style={{
                                fontSize: '12px',
                                fontWeight: '600',
                                padding: '4px 12px',
                                borderRadius: 'var(--r-pill)',
                                backgroundColor: 'var(--surface)',
                                color: 'var(--navy)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                              }}
                            >
                              <CheckCircle size={12} color="var(--green)" />
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Realistic Portrait Certificate Card matching original design */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Background subtle glowing accent */}
            <div
              style={{
                position: 'absolute',
                width: '360px',
                height: '480px',
                borderRadius: 'var(--r-xl)',
                background: 'linear-gradient(135deg, rgba(48, 79, 232, 0.12) 0%, rgba(23, 163, 74, 0.08) 100%)',
                filter: 'blur(24px)',
                pointerEvents: 'none',
              }}
            />

            {/* The Portrait Certificate Document */}
            <div
              className="floating-card"
              style={{
                width: '100%',
                maxWidth: '480px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--r-xl)',
                padding: '36px 32px',
                border: '1px solid var(--line)',
                boxShadow: '0 24px 48px rgba(11, 18, 47, 0.12)',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '540px',
              }}
            >
              {/* Inner Decorative Double-Border */}
              <div
                style={{
                  position: 'absolute',
                  inset: '12px',
                  borderRadius: '20px',
                  border: '1px solid #EBEFF8',
                  pointerEvents: 'none',
                }}
              />

              {/* Certificate Top Header */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--navy)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Award size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '0.04em' }}>
                        SAMURAI TALENT
                      </div>
                      <div style={{ fontSize: '9px', fontWeight: '700', color: 'var(--muted)', letterSpacing: '0.08em' }}>
                        VERIFIED CREDENTIAL
                      </div>
                    </div>
                  </div>

                  {/* Green Verified Pill Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      backgroundColor: 'var(--mint)',
                      color: 'var(--green)',
                      padding: '5px 12px',
                      borderRadius: 'var(--r-pill)',
                      fontSize: '11px',
                      fontWeight: '700',
                      boxShadow: '0 2px 6px rgba(23, 163, 74, 0.12)',
                    }}
                  >
                    <ShieldCheck size={13} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Certificate Title */}
                <div style={{ textAlign: 'center', padding: '12px 0 16px 0' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--blue)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Certificate of Mastery
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', fontStyle: 'italic', marginBottom: '14px' }}>
                    This is proudly awarded to
                  </div>
                  <div
                    style={{
                      fontSize: '24px',
                      fontWeight: '800',
                      color: 'var(--navy)',
                      letterSpacing: '-0.02em',
                      paddingBottom: '8px',
                      borderBottom: '2px solid var(--lav)',
                      display: 'inline-block',
                      minWidth: '220px',
                    }}
                  >
                    Kenji Sato
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '12px', lineHeight: '1.5' }}>
                    for successfully completing the rigorous 12-week workshop curriculum & master-inspected practicals in
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--navy)', marginTop: '6px' }}>
                    Industrial Electrical & HVAC Systems
                  </div>
                </div>
              </div>

              {/* Certificate Middle: Seal & Verification Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '24px',
                  margin: '16px 0',
                }}
              >
                {/* Gold Embossed Medallion */}
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #FFE494 0%, #F5B025 70%, #D48806 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(245, 176, 37, 0.35)',
                    border: '3px solid #FFF8E1',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      border: '1px dashed #FFFFFF',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#653C00',
                    }}
                  >
                    <Award size={20} />
                    <span style={{ fontSize: '7px', fontWeight: '800', letterSpacing: '0.05em' }}>HONORS</span>
                  </div>
                </div>

                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>
                    Top 2% Graduate Rank
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                    Master Inspection Score: 98.6 / 100
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--green)', fontWeight: '600', marginTop: '2px' }}>
                    ✓ 18/18 Workshop Lab Practicals Passed
                  </div>
                </div>
              </div>

              {/* Certificate Bottom Signatures & QR Hash */}
              <div
                style={{
                  borderTop: '1px solid var(--line)',
                  paddingTop: '18px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'serif',
                      fontSize: '18px',
                      fontStyle: 'italic',
                      color: 'var(--navy)',
                      lineHeight: '1.1',
                    }}
                  >
                    David Miller
                  </div>
                  <div style={{ width: '100px', height: '1px', backgroundColor: 'var(--navy)', opacity: 0.4, margin: '4px 0' }} />
                  <div style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: '600' }}>
                    Staff Engineer & Lead Instructor
                  </div>
                </div>

                {/* Cryptographic hash and verification mini QR */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--muted)' }}>
                    HASH: 0x8F9B...4AE2
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--blue)', marginTop: '2px' }}>
                    ID: EDP-2026-8849
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--muted)', marginTop: '2px' }}>
                    Issued: Nov 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .curriculum-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
