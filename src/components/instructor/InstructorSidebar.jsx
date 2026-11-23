import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  Video,
  Users,
  DollarSign,
  Award,
  Bell,
  User,
  Settings,
  LifeBuoy,
  LogOut,
  Sparkles,
  X
} from 'lucide-react';

export default function InstructorSidebar({
  activeTab,
  setActiveTab,
  onLogout,
  onCloseMobile
}) {
  const menuGroups = [
    {
      title: 'Teaching & Classroom',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'courses', label: 'My Courses & Labs', icon: BookOpen, badge: '4' },
        { id: 'workshops', label: 'Live Workshops', icon: Video, badge: 'Live' },
        { id: 'inspections', label: 'Assignments & Grading', icon: ClipboardCheck, badge: '5' },
        { id: 'apprentices', label: 'Students & Apprentices', icon: Users }
      ]
    },
    {
      title: 'Finance & Earnings',
      items: [
        { id: 'earnings', label: 'Earnings & Payouts', icon: DollarSign }
      ]
    },
    {
      title: 'Account & Support',
      items: [
        { id: 'notifications', label: 'Notifications', icon: Bell, badge: '3' },
        { id: 'profile', label: 'Instructor Profile', icon: User },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'support', label: 'Help & Support', icon: LifeBuoy }
      ]
    }
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
        boxShadow: '2px 0 16px rgba(11, 18, 47, 0.02)'
      }}
    >
      {/* 1. Brand Logo Header */}
      <div
        style={{
          padding: '22px 24px',
          borderBottom: '1px solid rgba(226, 228, 238, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              boxShadow: '0 2px 6px rgba(11, 18, 47, 0.05)'
            }}
          >
            <img
              src="/logo.png"
              alt="SAMURAI TALENT Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: '800',
                color: 'var(--navy)',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}
            >
              SAMURAI TALENT
            </div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: '700',
                color: '#304FE8',
                letterSpacing: '0.06em',
                marginTop: '2px'
              }}
            >
              INSTRUCTOR PORTAL
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
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={20} />
          </button>
        )}
      </div>



      {/* 3. Navigation Links List */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 16px 20px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '22px'
        }}
      >
        {menuGroups.map((group, groupIdx) => (
          <div key={groupIdx} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#94A3B8',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '6px 12px 6px'
              }}
            >
              {group.title}
            </div>

            {group.items.map((item) => {
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
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: isActive ? '#EEF2FF' : 'transparent',
                    color: isActive ? '#304FE8' : '#475569',
                    fontWeight: isActive ? '700' : '500',
                    fontSize: '13.5px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.color = '#0B122F';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#475569';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon size={17} color={isActive ? '#304FE8' : '#64748B'} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '2.5px 8px',
                        borderRadius: '999px',
                        backgroundColor:
                          item.badge === 'Live'
                            ? '#EF4444'
                            : isActive
                            ? '#304FE8'
                            : '#E2E8F0',
                        color: item.badge === 'Live' || isActive ? '#FFFFFF' : '#334155'
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* 4. Bottom Sign Out */}
      <div
        style={{
          padding: '16px 16px',
          borderTop: '1px solid rgba(226, 228, 238, 0.85)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}
      >
        <button
          onClick={onLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '11px',
            width: '100%',
            padding: '11px 14px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#64748B',
            fontSize: '13.5px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FEE2E2';
            e.currentTarget.style.color = '#EF4444';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#64748B';
          }}
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
