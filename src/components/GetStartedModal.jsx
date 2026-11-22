import React, { useState, useEffect } from 'react';
import {
  Zap,
  X,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Presentation,
  Briefcase,
  Check,
  Eye,
  EyeOff,
  PlayCircle,
  Users,
  MessageSquare,
  Compass,
  Code2,
  Award,
  UserCheck,
  Clock,
  Sparkles,
  Wrench,
  ShieldCheck,
} from 'lucide-react';

export default function GetStartedModal({
  isOpen,
  onClose,
  onSwitchToLogin,
  onComplete,
}) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('student'); // 'student' | 'instructor' | 'employer'
  const [focus, setFocus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [track, setTrack] = useState('Automotive & Mechanical');
  const [domain, setDomain] = useState('Automotive & Engine Diagnostics');
  const [hiringNeed, setHiringNeed] = useState('Immediate (Next 30 days)');

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFocus(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectRole = (r) => {
    setRole(r);
    setFocus(null);
    setStep(2);
  };

  const handleSelectFocus = (f) => {
    setFocus(f);
  };

  const handleBack = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      if (onComplete) {
        onComplete({ role, focus, fullName, email });
      }
    }, 450);
  };

  // -------------------------------------------------------------------------
  // ROLE & FOCUS DATA (MINIMAL, FRESH, NO EMOJIS)
  // -------------------------------------------------------------------------
  const roleOptions = [
    {
      id: 'student',
      title: 'Apprentice / Trainee',
      description: 'Learn trades & get certified',
      icon: GraduationCap,
    },
    {
      id: 'instructor',
      title: 'Instructor / Master',
      description: 'Teach & guide apprentices',
      icon: Presentation,
    },
    {
      id: 'employer',
      title: 'Employer / Contractor',
      description: 'Hire verified technicians',
      icon: Briefcase,
    },
  ];

  const focusOptions = {
    student: [
      {
        id: 'mechanical-auto',
        title: 'Automotive & Motorcycle',
        desc: 'Engines, diagnostics & mechanical repair',
        icon: Wrench,
        iconBg: '#EEF2FF',
        iconColor: '#304FE8',
      },
      {
        id: 'electrical-hvac',
        title: 'Electrical & HVAC',
        desc: 'Wiring, circuits & climate systems',
        icon: Zap,
        iconBg: '#ECFDF5',
        iconColor: '#059669',
      },
      {
        id: 'welding-plumbing',
        title: 'Welding & Plumbing',
        desc: 'Metal fabrication & pipe installations',
        icon: Award,
        iconBg: '#FFF7ED',
        iconColor: '#EA580C',
      },
    ],
    instructor: [
      {
        id: 'video-courses',
        title: 'Video Courses',
        desc: 'Publish hands-on trade curriculums',
        icon: PlayCircle,
        iconBg: '#EEF2FF',
        iconColor: '#304FE8',
      },
      {
        id: 'live-cohorts',
        title: 'Live Cohorts & Labs',
        desc: 'Lead interactive shop sessions',
        icon: Users,
        iconBg: '#ECFDF5',
        iconColor: '#059669',
      },
      {
        id: 'mentorship',
        title: '1-on-1 Apprenticeship',
        desc: 'Inspect projects & sign off practicals',
        icon: MessageSquare,
        iconBg: '#FFF7ED',
        iconColor: '#EA580C',
      },
    ],
    employer: [
      {
        id: 'full-time',
        title: 'Full-Time Technicians',
        desc: 'Hire certified trade specialists',
        icon: UserCheck,
        iconBg: '#EEF2FF',
        iconColor: '#304FE8',
      },
      {
        id: 'contract',
        title: 'Contract Specialists',
        desc: 'Staff short-term industrial projects',
        icon: Clock,
        iconBg: '#ECFDF5',
        iconColor: '#059669',
      },
      {
        id: 'internship',
        title: 'Apprentice Pipeline',
        desc: 'Sponsor trained trade interns',
        icon: GraduationCap,
        iconBg: '#FFF7ED',
        iconColor: '#EA580C',
      },
    ],
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 18, 47, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {/* 
        Fixed Consistent Dimension Card (520px width x 630px height) 
        Strictly locked dimensions across ALL 3 steps.
        Zero layout shifts, zero scrollbars.
      */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '520px',
          minWidth: '520px',
          maxWidth: '520px',
          height: '630px',
          minHeight: '630px',
          maxHeight: '630px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1.5px solid var(--line)',
          boxShadow: '0 24px 60px rgba(11, 18, 47, 0.16), 0 4px 16px rgba(11, 18, 47, 0.05)',
          padding: '28px 36px 22px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          boxSizing: 'border-box',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          position: 'relative',
        }}
      >
        {/* ================================================================= */}
        {/* TOP BAR: Back button (if step > 1), Centered Logo, Close button   */}
        {/* ================================================================= */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '40px',
            width: '100%',
            flexShrink: 0,
          }}
        >
          {/* Back button */}
          <div style={{ width: '36px', display: 'flex', alignItems: 'center' }}>
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                aria-label="Previous step"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--line)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--surface)';
                  e.currentTarget.style.borderColor = 'var(--blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'var(--line)';
                }}
              >
                <ArrowLeft size={16} />
              </button>
            ) : null}
          </div>

          {/* Centered Brand Icon */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px',
              boxShadow: '0 2px 8px rgba(11, 18, 47, 0.06)',
            }}
          >
            <img
              src="/logo.png"
              alt="SAMURAI TALENT Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Close button */}
          <div style={{ width: '36px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid var(--line)',
                backgroundColor: '#FFFFFF',
                color: 'var(--muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--surface)';
                e.currentTarget.style.color = 'var(--navy)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = 'var(--muted)';
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* STEP 1: ROLE SELECTION ("What will you use SAMURAI TALENT for?") */}
        {/* ================================================================= */}
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: 'var(--navy)',
                  letterSpacing: '-0.025em',
                  marginBottom: '6px',
                  lineHeight: '1.25',
                }}
              >
                What will you use SAMURAI TALENT for?
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                Choose your primary role.
              </p>
            </div>

            {/* 3 Selectable Role Cards (Simple Black & White Radio Selection, No Icons) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '16px' }}>
              {roleOptions.map((opt) => {
                const isSelected = role === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setRole(opt.id)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '16px',
                      backgroundColor: '#FFFFFF',
                      border: isSelected ? '2px solid #0B122F' : '1.5px solid #E2E8F0',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.18s ease',
                      boxSizing: 'border-box',
                      boxShadow: isSelected ? '0 4px 14px rgba(11, 18, 47, 0.08)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = '#94A3B8';
                        e.currentTarget.style.backgroundColor = '#F8FAFC';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                      }
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.015em' }}>
                        {opt.title}
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#687588', marginTop: '3px', lineHeight: '1.35' }}>
                        {opt.description}
                      </div>
                    </div>

                    {/* Simple Black & White Radio Button */}
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: isSelected ? '2px solid #0B122F' : '1.5px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginLeft: '12px',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#0B122F',
                          }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Continue Button */}
            <button
              type="button"
              onClick={() => {
                setFocus(null);
                setStep(2);
              }}
              style={{
                width: '100%',
                height: '46px',
                borderRadius: 'var(--r-pill)',
                backgroundColor: '#0B122F',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '14px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(11, 18, 47, 0.18)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1E293B';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0B122F';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <span>Continue</span>
              <ArrowRight size={15} />
            </button>

            <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--muted)', margin: 0 }}>
              You can switch roles anytime.
            </p>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 2: FOCUS SELECTION ("What is your primary focus?")           */}
        {/* ================================================================= */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: 'var(--navy)',
                  letterSpacing: '-0.025em',
                  marginBottom: '6px',
                  lineHeight: '1.25',
                }}
              >
                {role === 'student'
                  ? 'What is your primary goal?'
                  : role === 'instructor'
                  ? 'What will you teach?'
                  : 'What are your hiring needs?'}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                {role === 'instructor'
                  ? 'Select your teaching format.'
                  : role === 'student'
                  ? 'Select your target trade track.'
                  : 'Select your hiring focus.'}
              </p>
            </div>

            {/* Focus Options (Simple Black & White Radio Selection, No Icons) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '16px' }}>
              {focusOptions[role]?.map((item) => {
                const isSelected = focus === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectFocus(item.id)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '16px',
                      backgroundColor: '#FFFFFF',
                      border: isSelected ? '2px solid #0B122F' : '1.5px solid #E2E8F0',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.18s ease',
                      boxSizing: 'border-box',
                      boxShadow: isSelected
                        ? '0 4px 14px rgba(11, 18, 47, 0.08)'
                        : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = '#FAFBFD';
                        e.currentTarget.style.borderColor = '#94A3B8';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#E2E8F0';
                      }
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: '800',
                          color: '#0B122F',
                          letterSpacing: '-0.015em',
                          lineHeight: '1.25',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: '12.5px',
                          color: '#687588',
                          marginTop: '3px',
                          lineHeight: '1.35',
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>

                    {/* Simple Black & White Radio Button */}
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: isSelected ? '2px solid #0B122F' : '1.5px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginLeft: '12px',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#0B122F',
                          }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Continue Button */}
            <button
              type="button"
              disabled={!focus}
              onClick={() => {
                if (focus) setStep(3);
              }}
              style={{
                width: '100%',
                height: '46px',
                borderRadius: 'var(--r-pill)',
                backgroundColor: focus ? '#0B122F' : '#E2E4EE',
                color: focus ? '#FFFFFF' : '#8F9BB3',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                cursor: focus ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '14px',
                transition: 'all 0.2s ease',
                boxShadow: focus ? '0 4px 14px rgba(11, 18, 47, 0.18)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (focus) {
                  e.currentTarget.style.backgroundColor = '#1E293B';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (focus) {
                  e.currentTarget.style.backgroundColor = '#0B122F';
                  e.currentTarget.style.transform = 'none';
                }
              }}
            >
              <span>Continue</span>
              <ArrowRight size={15} />
            </button>

            <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--muted)', margin: 0 }}>
              You can adjust this anytime in settings.
            </p>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 3: ROLE-SPECIFIC SIGNUP FORM (FITS 100% WITHOUT SCROLLING)   */}
        {/* ================================================================= */}
        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: 'var(--navy)',
                  letterSpacing: '-0.025em',
                  marginBottom: '6px',
                  lineHeight: '1.25',
                }}
              >
                {role === 'student'
                  ? 'Create Student Account'
                  : role === 'instructor'
                  ? 'Apply as Educator'
                  : 'Register as Employer'}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                {role === 'student'
                  ? 'Start your practical trade training today.'
                  : role === 'instructor'
                  ? 'Share your expertise with trade apprentices.'
                  : 'Hire certified trade technicians.'}
              </p>
            </div>

            {/* Custom Form Built to Fit Completely Without Scrolling */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px', width: '100%' }}>
              {/* Row 1: Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                  {role === 'employer' ? 'Your Name & Title' : 'Full Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={role === 'employer' ? 'e.g. Kenji Sato, Operations Director' : 'e.g. Kenji Sato'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    padding: '0 13px',
                    borderRadius: '10px',
                    border: '1.5px solid var(--line)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--navy)',
                    fontSize: '13px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.18s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--blue)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                />
              </div>

              {/* Row 2: Email (or Company & Email for Employer) */}
              {role === 'employer' ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Toyota, Daikin"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '0 12px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--line)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--navy)',
                        fontSize: '13px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '0 12px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--line)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--navy)',
                        fontSize: '13px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      height: '40px',
                      padding: '0 13px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--line)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--navy)',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--blue)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                  />
                </div>
              )}

              {/* Row 3: 2-Column Grid: Password (Left) + Role Selection (Right) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                    Password
                  </label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Min 8 chars"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '0 36px 0 13px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--line)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--navy)',
                        fontSize: '13px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: 'var(--muted)',
                        cursor: 'pointer',
                        padding: '3px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {role === 'student' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                      Primary Track
                    </label>
                    <select
                      value={track}
                      onChange={(e) => setTrack(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '0 10px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--line)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--navy)',
                        fontSize: '12.5px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="Automotive & Mechanical">Automotive & Mechanical</option>
                      <option value="Electrical Installation & Repair">Electrical Installation & Repair</option>
                      <option value="AC & Refrigeration (HVAC)">AC & Refrigeration (HVAC)</option>
                      <option value="Welding & Metal Fabrication">Welding & Fabrication</option>
                      <option value="Plumbing & Pipe Fitting">Plumbing & Pipe Fitting</option>
                      <option value="Carpentry, Masonry & Wall Finishing">Carpentry & Masonry</option>
                    </select>
                  </div>
                )}

                {role === 'instructor' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                      Teaching Domain
                    </label>
                    <select
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '0 10px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--line)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--navy)',
                        fontSize: '12.5px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="Automotive & Engine Diagnostics">Automotive & Engine Diagnostics</option>
                      <option value="Electrical & Power Systems">Electrical & Power Systems</option>
                      <option value="HVAC & Commercial Refrigeration">HVAC & Refrigeration</option>
                      <option value="MIG, TIG & Structural Welding">MIG/TIG/Structural Welding</option>
                      <option value="Plumbing & Industrial Pipe Fitting">Plumbing & Pipe Fitting</option>
                      <option value="Architectural Carpentry & Masonry">Carpentry & Woodworking</option>
                    </select>
                  </div>
                )}

                {role === 'employer' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                      Hiring Timeline
                    </label>
                    <select
                      value={hiringNeed}
                      onChange={(e) => setHiringNeed(e.target.value)}
                      style={{
                        width: '100%',
                        height: '40px',
                        padding: '0 10px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--line)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--navy)',
                        fontSize: '12.5px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="Immediate (Next 30 days)">Immediate (Next 30d)</option>
                      <option value="Ongoing (1-3 months)">Next 1–3 months</option>
                      <option value="Future pipeline">Future pipeline</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  marginTop: '6px',
                  height: '44px',
                  fontSize: '14px',
                  fontWeight: '700',
                  borderRadius: 'var(--r-pill)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxSizing: 'border-box',
                  boxShadow: '0 4px 14px rgba(48, 79, 232, 0.28)',
                }}
              >
                {isSubmitting ? (
                  <span>Setting up account...</span>
                ) : (
                  <>
                    <span>
                      {role === 'student'
                        ? 'Create Student Account'
                        : role === 'instructor'
                        ? 'Submit Application'
                        : 'Access Talent Pipeline'}
                    </span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* ================================================================= */}
        {/* FOOTER: Minimalist 3-Segment Progress Indicator & Log In link      */}
        {/* ================================================================= */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', width: '100%', flexShrink: 0 }}>
          {/* Segmented Progress Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '3.5px',
                borderRadius: '999px',
                backgroundColor: step >= 1 ? 'var(--navy)' : 'var(--line)',
                transition: 'background-color 0.25s ease',
              }}
            />
            <div
              style={{
                width: '32px',
                height: '3.5px',
                borderRadius: '999px',
                backgroundColor: step >= 2 ? 'var(--navy)' : 'var(--line)',
                transition: 'background-color 0.25s ease',
              }}
            />
            <div
              style={{
                width: '32px',
                height: '3.5px',
                borderRadius: '999px',
                backgroundColor: step >= 3 ? 'var(--navy)' : 'var(--line)',
                transition: 'background-color 0.25s ease',
              }}
            />
          </div>

          <div style={{ textAlign: 'center', fontSize: '12.5px', color: 'var(--muted)' }}>
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => {
                onClose();
                onSwitchToLogin();
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--blue)',
                fontWeight: '700',
                cursor: 'pointer',
                padding: '0 2px',
                textDecoration: 'underline',
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
