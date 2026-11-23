import React, { useState } from 'react';
import { Zap, Eye, EyeOff, X, Star, Wrench, Briefcase, GraduationCap, Check } from 'lucide-react';

export default function AuthModal({ isOpen, initialMode = 'login', onClose, onLoginSuccess, onSwitchToGetStarted }) {
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (onLoginSuccess) {
      onLoginSuccess(email);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1060px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1.08fr',
          minHeight: '660px',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 50,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            border: 'none',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
          }}
        >
          <X size={18} />
        </button>

        {/* LEFT COLUMN: The Login / Signup Form (Matching Image 1) */}
        <div
          style={{
            padding: '38px 44px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            boxSizing: 'border-box',
          }}
        >
          <div>
            {/* Top Brand Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  padding: '5px',
                  boxShadow: '0 2px 6px rgba(11, 18, 47, 0.05)',
                }}
              >
                <img
                  src="/logo.png"
                  alt="SAMURAI TALENT Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                  SAMURAI TALENT
                </div>
                <div style={{ fontSize: '10px', fontWeight: '700', color: '#7E8BA6', letterSpacing: '0.08em', marginTop: '2px' }}>
                  LEARNING & CAREER OS
                </div>
              </div>
            </div>

            {/* Form Headline */}
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: '6px' }}>
              {mode === 'login' ? 'Welcome back!' : 'Create your account'}
            </h2>
            <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: '1.45', marginBottom: '18px' }}>
              {mode === 'login'
                ? 'Please login to access your learner portal, courses, and job tracker.'
                : 'Join over 60,000 learners mastering in-demand technical trades and certified craftsman skills.'}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {mode === 'signup' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="input-field"
                    />
                  </div>
                )}

                {/* Username or Email Input */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                    Username or Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Type your username or student email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                  />
                </div>

                {/* Password Input (with inside eye icon) */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--navy)', marginBottom: '6px' }}>
                    Password
                  </label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Type your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-field"
                      style={{ paddingRight: '42px', width: '100%', boxSizing: 'border-box' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px',
                      }}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Remember me & Forgot Password row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--muted)' }}>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{ accentColor: 'var(--blue)', width: '16px', height: '16px', borderRadius: '4px' }}
                    />
                    <span>Remember me</span>
                  </label>

                  {mode === 'login' && (
                    <a
                      href="#forgot"
                      onClick={(e) => e.preventDefault()}
                      style={{ color: 'var(--blue)', fontWeight: '600', textDecoration: 'none' }}
                    >
                      Forgot Password?
                    </a>
                  )}
                </div>

                {/* Main Action Button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '13px',
                    fontSize: '15px',
                    fontWeight: '700',
                    boxShadow: '0 8px 20px rgba(48, 79, 232, 0.28)',
                  }}
                >
                  {mode === 'login' ? 'Log In' : 'Sign Up'}
                </button>

                {/* OR CONTINUE WITH Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '4px 0' }}>
                  <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--line)' }} />
                  <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.06em', color: '#94A3B8' }}>
                    OR CONTINUE WITH
                  </span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--line)' }} />
                </div>

                {/* Social Button: Continue with Google Workspace */}
                <button
                  type="button"
                  onClick={() => {
                    setEmail('alex.student@gmail.com');
                    setPassword('••••••••••••');
                  }}
                  style={{
                    width: '100%',
                    minHeight: '48px',
                    padding: '13px 20px',
                    borderRadius: 'var(--r-pill)',
                    border: '1.5px solid var(--line)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--navy)',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
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
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.36 7.35 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                    />
                  </svg>
                  <span>Continue with Google Workspace</span>
                </button>
              </form>

              {/* Switcher directly with padding/margin of 12px below Continue with Google */}
              <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '13.5px', color: 'var(--muted)' }}>
                {mode === 'login' ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        if (onSwitchToGetStarted) {
                          onSwitchToGetStarted();
                        } else {
                          setMode('signup');
                        }
                      }}
                      style={{ background: 'none', border: 'none', color: 'var(--blue)', fontWeight: '700', cursor: 'pointer', padding: 0 }}
                    >
                      Get Started
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => setMode('login')}
                      style={{ background: 'none', border: 'none', color: 'var(--blue)', fontWeight: '700', cursor: 'pointer', padding: 0 }}
                    >
                      Log In
                    </button>
                  </>
                )}
              </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Exact Visual graphic from Image 1 */}
        <div
          className="auth-showcase-panel"
          style={{
            background: 'linear-gradient(135deg, #1833C5 0%, #294DE8 50%, #4468F8 100%)',
            padding: '48px 40px',
            color: '#FFFFFF',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          {/* Subtle curved dotted flight trail SVG */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              opacity: 0.35,
            }}
          >
            <path
              d="M 50 200 C 150 120, 350 160, 460 280 S 300 480, 100 420"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          {/* Sparkles ✨ */}
          <div style={{ position: 'absolute', top: '70px', left: '40px', opacity: 0.7 }}>
            <Star size={12} fill="#FFFFFF" color="#FFFFFF" />
          </div>
          <div style={{ position: 'absolute', top: '180px', right: '40px', opacity: 0.5 }}>
            <Star size={10} fill="#FFFFFF" color="#FFFFFF" />
          </div>
          <div style={{ position: 'absolute', bottom: '160px', left: '20px', opacity: 0.6 }}>
            <Star size={14} fill="#FFFFFF" color="#FFFFFF" />
          </div>

          {/* Top Headline from Image 1 */}
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '380px' }}>
            <h2
              style={{
                fontSize: '34px',
                fontWeight: '800',
                lineHeight: '1.2',
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
              }}
            >
              Master In-Demand Skills. Land Your Dream Job.
            </h2>
          </div>

          {/* Floating badges & center card cluster (Matching Image 1 layout) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '30px 0',
            }}
          >
            {/* 1. Top-Left Yellow Badge: Applied Learning */}
            <div
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                backgroundColor: '#FFCB2B',
                color: '#1A1800',
                padding: '10px 18px',
                borderRadius: 'var(--r-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 24px rgba(11, 18, 47, 0.15)',
                zIndex: 3,
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#422800',
                }}
              >
                <GraduationCap size={18} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Applied Learning</span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00853B' }} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#523A00' }}>
                  Project-based mastery
                </div>
              </div>
            </div>

            {/* 2. Top-Right Green Badge: Top 5% Talent Ready */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '0px',
                backgroundColor: '#1FD866',
                color: '#FFFFFF',
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                fontSize: '12px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 8px 20px rgba(11, 18, 47, 0.12)',
                zIndex: 3,
              }}
            >
              <Star size={14} fill="currentColor" />
              <span>Top 5% Talent Ready</span>
            </div>

            {/* 3. Center White Hero Card: "From Courses to Contracts" */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--r-xl)',
                padding: '28px 24px',
                color: 'var(--navy)',
                maxWidth: '300px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 20px 48px rgba(11, 18, 47, 0.22)',
                zIndex: 2,
                position: 'relative',
              }}
            >
              {/* Center icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px auto',
                  padding: '6px',
                  boxShadow: '0 4px 12px rgba(11, 18, 47, 0.06)',
                }}
              >
                <img
                  src="/logo.png"
                  alt="SAMURAI TALENT Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* Verified Career Pathway Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--mint)',
                  color: 'var(--green)',
                  padding: '4px 12px',
                  borderRadius: 'var(--r-pill)',
                  fontSize: '11px',
                  fontWeight: '700',
                  marginBottom: '12px',
                }}
              >
                <span>✓</span>
                <span>Verified Career Pathway</span>
              </div>

              <h4 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                From Courses to Contracts
              </h4>

              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.5' }}>
                Build real-world trade portfolios, match with top industrial employers, and unlock certified technician careers.
              </p>
            </div>

            {/* 4. Bottom-Left Coral/Red Badge: Master Craft Portfolio */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '-10px',
                backgroundColor: '#F43F37',
                color: '#FFFFFF',
                padding: '8px 16px',
                borderRadius: 'var(--r-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(11, 18, 47, 0.15)',
                zIndex: 3,
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Wrench size={16} />
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '800' }}>Master Craft Portfolio</div>
                <div style={{ fontSize: '10px', opacity: 0.9 }}>Inspected by Licensed Masters</div>
              </div>
            </div>

            {/* 5. Bottom-Right Teal/Green Badge: Direct Interview Fast-Track */}
            <div
              style={{
                position: 'absolute',
                bottom: '0px',
                right: '-10px',
                backgroundColor: '#05B67A',
                color: '#FFFFFF',
                padding: '8px 16px',
                borderRadius: 'var(--r-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(11, 18, 47, 0.15)',
                zIndex: 3,
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Briefcase size={16} />
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '800' }}>Direct Interview Fast-Track</div>
                <div style={{ fontSize: '10px', opacity: 0.9 }}>Instant Recruiter Match</div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .modal-content {
            grid-template-columns: 1fr !important;
            max-height: 95vh;
            overflow-y: auto;
          }
          .auth-showcase-panel {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
