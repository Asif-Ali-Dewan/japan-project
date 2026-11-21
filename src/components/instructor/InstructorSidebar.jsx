import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
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
  const { t, language } = useLanguage();
  const isJa = language === 'ja';

  const menuGroups = [
    {
      title: t.instructorPortal.menuGroups.teaching,
      items: [
        { id: 'dashboard', label: t.instructorPortal.menu.dashboard, icon: LayoutDashboard },
        { id: 'courses', label: t.instructorPortal.menu.courses, icon: BookOpen, badge: '4' },
        { id: 'workshops', label: t.instructorPortal.menu.workshops, icon: Video, badge: 'Live' },
        { id: 'inspections', label: t.instructorPortal.menu.inspections, icon: ClipboardCheck, badge: '5' },
        { id: 'apprentices', label: t.instructorPortal.menu.apprentices, icon: Users }
      ]
    },
    {
      title: t.instructorPortal.menuGroups.finance,
      items: [
        { id: 'earnings', label: t.instructorPortal.menu.earnings, icon: DollarSign }
      ]
    },
    {
      title: t.instructorPortal.menuGroups.account,
      items: [
        { id: 'notifications', label: t.instructorPortal.menu.notifications, icon: Bell, badge: '3' },
        { id: 'profile', label: t.instructorPortal.menu.profile, icon: User },
        { id: 'settings', label: t.instructorPortal.menu.settings, icon: Settings },
        { id: 'support', label: t.instructorPortal.menu.support, icon: LifeBuoy }
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
              alt={isJa ? "サムライタレント ロゴ" : "SAMURAI TALENT Logo"}
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
              {isJa ? 'サムライタレント' : 'SAMURAI TALENT'}
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
              {isJa ? '指導員ポータル' : 'INSTRUCTOR PORTAL'}
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

      {/* 2. Status Pill */}
      <div style={{ padding: '16px 20px 8px' }}>
        <div
          style={{
            padding: '10px 14px',
            backgroundColor: '#F8FAFC',
            borderRadius: '10px',
            border: '1px solid #E2E4EE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.2)'
              }}
            />
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#0B122F' }}>
              Instructor Mode
            </span>
          </div>
          <span
            style={{
              fontSize: '10.5px',
              fontWeight: '700',
              color: '#304FE8',
              backgroundColor: '#EEF2FF',
              padding: '2px 6px',
              borderRadius: '4px'
            }}
          >
            Active
          </span>
        </div>
      </div>

      {/* 3. Navigation Links List */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        {menuGroups.map((group, groupIdx) => (
          <div key={groupIdx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div
              style={{
                fontSize: '10.5px',
                fontWeight: '700',
                color: '#94A3B8',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '6px 12px 4px'
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
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: isActive ? '#EEF2FF' : 'transparent',
                    color: isActive ? '#304FE8' : '#475569',
                    fontWeight: isActive ? '700' : '500',
                    fontSize: '13px',
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                    <Icon size={16} color={isActive ? '#304FE8' : '#64748B'} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: '700',
                        padding: '2px 7px',
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

      {/* 4. Bottom Language Toggle & Sign Out */}
      <div
        style={{
          padding: '14px 16px',
          borderTop: '1px solid rgba(226, 228, 238, 0.85)',
        }}
      >
        <button
          onClick={onLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#64748B',
            fontSize: '13px',
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
          <span>{t.instructorPortal.menu.logout}</span>
        </button>
      </div>
    </aside>
  );
}
