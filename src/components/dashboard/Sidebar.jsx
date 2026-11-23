import React from 'react';
import {
  LayoutDashboard,
  Compass,
  GraduationCap,
  ClipboardCheck,
  HelpCircle,
  Award,
  History,
  Briefcase,
  Bell,
  User,
  Settings,
  LifeBuoy,
  LogOut,
  Zap,
  X
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, onLogout, onCloseMobile }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'explore', label: 'Explore Courses', icon: Compass },
    { id: 'my-learning', label: 'My learning', icon: GraduationCap },
    { id: 'assignments', label: 'Assignments', icon: ClipboardCheck, badge: '2' },
    { id: 'quizzes', label: 'Quizzes & Assessments', icon: HelpCircle },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'history', label: 'Learning History', icon: History },
    { id: 'jobs', label: 'Jobs', icon: Briefcase, badge: 'New' },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: '3' },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'support', label: 'Support', icon: LifeBuoy },
  ];

  return (
    <aside
      style={{
        width: '280px',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid rgba(226, 228, 238, 0.85)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxSizing: 'border-box',
        boxShadow: '2px 0 16px rgba(11, 18, 47, 0.02)',
      }}
    >
      {/* Brand Header */}
      <div
        style={{
          padding: '24px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(226, 228, 238, 0.85)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--line)',
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
          <div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              SAMURAI TALENT
            </div>
            <div style={{ fontSize: '9.5px', fontWeight: '700', color: 'var(--muted)', letterSpacing: '0.08em', marginTop: '3px' }}>
              LEARNER PORTAL
            </div>
          </div>
        </div>

        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--muted)',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Spacious, Re-designed Navigation List */}
      <nav
        style={{
          padding: '18px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px', // Balanced breathing space between buttons
          flex: 1,
          overflowY: 'auto',
        }}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (onCloseMobile) onCloseMobile();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px', // Generous, comfortable click area
                minHeight: '48px',    // Slightly larger button size per user request
                borderRadius: '12px',
                border: 'none',
                backgroundColor: isActive ? 'rgba(48, 79, 232, 0.08)' : 'transparent',
                color: isActive ? 'var(--blue)' : 'var(--muted)',
                fontSize: '14px',
                fontWeight: isActive ? '700' : '600',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                position: 'relative',
                transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                  e.currentTarget.style.color = 'var(--navy)';
                  e.currentTarget.style.transform = 'translateX(2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--muted)';
                  e.currentTarget.style.transform = 'none';
                }
              }}
            >
              {/* Subtle left active bar indicator */}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    bottom: '8px',
                    width: '3.5px',
                    backgroundColor: 'var(--blue)',
                    borderRadius: '0 4px 4px 0',
                  }}
                />
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Icon
                  size={19}
                  color={isActive ? 'var(--blue)' : 'currentColor'}
                  strokeWidth={isActive ? 2.2 : 1.9}
                />
                <span style={{ letterSpacing: '-0.01em' }}>{item.label}</span>
              </div>

              {item.badge && (
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 9px',
                    borderRadius: 'var(--r-pill)',
                    backgroundColor: item.badge === 'New' ? '#ECFDF5' : 'var(--blue)',
                    color: item.badge === 'New' ? '#059669' : '#FFFFFF',
                    border: item.badge === 'New' ? '1px solid rgba(16, 185, 129, 0.25)' : 'none',
                    boxShadow: item.badge === 'New' ? 'none' : '0 2px 6px rgba(48, 79, 232, 0.25)',
                    lineHeight: '1',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Re-designed Bottom Logout Button (Same feature, larger & spacious) */}
      <div
        style={{
          padding: '16px 14px 20px 14px',
          borderTop: '1px solid rgba(226, 228, 238, 0.85)',
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
        }}
      >
        <button
          onClick={onLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '12px 16px',
            minHeight: '48px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#DC2626',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            textAlign: 'left',
            width: '100%',
            transition: 'all 0.18s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FEE2E2';
            e.currentTarget.style.color = '#B91C1C';
            e.currentTarget.style.transform = 'translateX(2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#DC2626';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <LogOut size={19} strokeWidth={2} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
