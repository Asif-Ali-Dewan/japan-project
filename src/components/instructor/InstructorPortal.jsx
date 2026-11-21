import React, { useState, useRef, useEffect } from 'react';
import InstructorSidebar from './InstructorSidebar';
import InstructorHome from './InstructorHome';
import ManageCoursesView from './ManageCoursesView';
import InspectionsGradingView from './InspectionsGradingView';
import LiveWorkshopsView from './LiveWorkshopsView';
import ApprenticesView from './ApprenticesView';
import InstructorEarningsView from './InstructorEarningsView';
import NotificationsView from '../dashboard/NotificationsView';
import {
  Search,
  Bell,
  Menu,
  LogOut,
  User,
  ChevronDown,
  ShieldCheck,
  Award,
  Settings,
  LifeBuoy,
  Check,
  Video,
  FileCheck
} from 'lucide-react';

export default function InstructorPortal({ onLogout, onSelectCourse }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const instructorAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80';

  const tabTitles = {
    dashboard: 'Instructor Dashboard',
    courses: 'My Courses & Labs',
    inspections: 'Assignments & Grading Queue',
    workshops: 'Live Workshops Studio',
    apprentices: 'Students & Apprentice Roster',
    earnings: 'Earnings & Payouts',
    notifications: 'Notifications',
    profile: 'Instructor Profile',
    settings: 'Instructor Settings',
    support: 'Help & Faculty Support'
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#F7F8FC',
        fontFamily: 'var(--font, system-ui, sans-serif)',
      }}
    >
      {/* Desktop Persistent Sidebar */}
      <div className="portal-desktop-sidebar">
        <InstructorSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={onLogout}
        />
      </div>

      {/* Mobile Drawer Sidebar */}
      {mobileSidebarOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(11, 18, 47, 0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
          }}
          onClick={() => setMobileSidebarOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <InstructorSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onLogout={onLogout}
              onCloseMobile={() => setMobileSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          minHeight: '100vh',
        }}
      >
        {/* Top Header Floating Pill */}
        <header
          style={{
            position: 'sticky',
            top: '16px',
            zIndex: 500,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 32px',
            marginBottom: '36px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              backdropFilter: 'blur(16px)',
              borderRadius: '100px',
              padding: '8px 12px 8px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              boxShadow: '0 10px 30px rgba(11, 18, 47, 0.08)',
              border: '1px solid rgba(226, 228, 238, 0.85)',
            }}
          >
            {/* Left: Mobile Toggle + Tab Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                className="portal-mobile-toggle"
                onClick={() => setMobileSidebarOpen(true)}
                style={{
                  display: 'none',
                  background: 'none',
                  border: 'none',
                  color: '#0B122F',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <Menu size={22} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.01em' }}>
                  {tabTitles[activeTab] || 'Instructor Dashboard'}
                </div>
              </div>
            </div>

            {/* Right: Search Pill + Notification Icon + Profile Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Quick Search */}
              <div className="portal-search-wrapper" style={{ position: 'relative', width: '250px' }}>
                <Search
                  size={15}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9CA3AF',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search labs, apprentices..."
                  style={{
                    width: '100%',
                    paddingLeft: '38px',
                    paddingRight: '14px',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    borderRadius: '100px',
                    border: '1px solid rgba(226, 228, 238, 0.9)',
                    fontSize: '13px',
                    backgroundColor: '#F8FAFC',
                    outline: 'none',
                    color: '#0B122F',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Notification Pill Button */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: activeTab === 'notifications' ? '#EEF2FF' : '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activeTab === 'notifications' ? '#304FE8' : '#0B122F',
                  cursor: 'pointer',
                  position: 'relative',
                  border: '1px solid rgba(226, 228, 238, 0.9)',
                  transition: 'background-color 0.2s',
                }}
                onClick={() => setActiveTab('notifications')}
                title="Notifications"
              >
                <Bell size={16} />
                <span
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#304FE8',
                  }}
                />
              </div>

              {/* Master Profile Dropdown Button */}
              <div ref={profileDropdownRef} style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setProfileDropdownOpen((prev) => !prev);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '5px 14px 5px 6px',
                    borderRadius: '100px',
                    backgroundColor: profileDropdownOpen ? 'rgba(48, 79, 232, 0.08)' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: profileDropdownOpen ? '#304FE8' : 'rgba(226, 228, 238, 0.9)',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(11, 18, 47, 0.04)',
                    transition: 'all 0.18s ease',
                  }}
                >
                  <div style={{ position: 'relative', width: '34px', height: '34px' }}>
                    <img
                      src={instructorAvatar}
                      alt="Master Kenji Takahashi"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #FFFFFF',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        width: '9px',
                        height: '9px',
                        borderRadius: '50%',
                        backgroundColor: '#10B981',
                        border: '2px solid #FFFFFF',
                      }}
                    />
                  </div>

                  <div style={{ textAlign: 'left', lineHeight: '1.2' }}>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#0B122F' }}>
                      Kenji Takahashi
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#687588', fontWeight: '600' }}>
                      Instructor
                    </div>
                  </div>

                  <ChevronDown size={14} style={{ color: '#687588', marginLeft: '4px' }} />
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 'calc(100% + 8px)',
                      width: '280px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '12px',
                      boxShadow: '0 20px 40px rgba(11, 18, 47, 0.12), 0 1px 3px rgba(11, 18, 47, 0.05)',
                      border: '1px solid rgba(226, 228, 238, 0.9)',
                      zIndex: 600,
                    }}
                  >
                    {/* Header info */}
                    <div style={{ padding: '8px 12px 12px', borderBottom: '1px solid #E2E8F0', marginBottom: '8px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: '#0B122F' }}>
                        Kenji Takahashi
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#687588', marginTop: '2px' }}>
                        kenji.takahashi@toyota-denso.org
                      </div>
                      <div style={{ marginTop: '6px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#ECFDF5', color: '#059669', fontSize: '10.5px', fontWeight: '700' }}>
                        <ShieldCheck size={11} /> Verified Instructor
                      </div>
                    </div>

                    {/* Profile */}
                    <button
                      onClick={() => {
                        setActiveTab('profile');
                        setProfileDropdownOpen(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: '#4B5563',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <User size={15} /> Instructor Profile & JIS Seal
                    </button>

                    {/* Settings */}
                    <button
                      onClick={() => {
                        setActiveTab('settings');
                        setProfileDropdownOpen(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: '#4B5563',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <Settings size={15} /> Instructor Preferences
                    </button>

                    <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '6px 0' }} />

                    {/* Logout */}
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        if (onLogout) onLogout();
                      }}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: '#DC2626',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FEF2F2')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <LogOut size={15} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Tab Content Renderer */}
        <div style={{ flex: 1, padding: '0 32px 64px' }}>
          {activeTab === 'dashboard' && (
            <InstructorHome onNavigate={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'courses' && (
            <ManageCoursesView onSelectCourse={onSelectCourse} />
          )}

          {activeTab === 'inspections' && (
            <InspectionsGradingView />
          )}

          {activeTab === 'workshops' && (
            <LiveWorkshopsView />
          )}

          {activeTab === 'apprentices' && (
            <ApprenticesView />
          )}

          {activeTab === 'earnings' && (
            <InstructorEarningsView />
          )}

          {activeTab === 'notifications' && (
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
              <NotificationsView onNavigateTab={(tab) => setActiveTab(tab)} />
            </div>
          )}

          {activeTab === 'profile' && (
            <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '64px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '32px', border: '1px solid rgba(226, 228, 238, 0.85)', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '28px' }}>
                  <img
                    src={instructorAvatar}
                    alt="Master Kenji Takahashi"
                    style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #EEF2FF', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
                        Master Kenji Takahashi
                      </h2>
                      <span style={{ padding: '3px 10px', borderRadius: '100px', backgroundColor: '#ECFDF5', color: '#059669', fontSize: '11px', fontWeight: '700' }}>
                        JIS Certified Master Level 1
                      </span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#687588', margin: '6px 0 0' }}>
                      Former Lead Diagnostics Director, Toyota & Denso Corp (Yokohama Plant) • 28 Years Apprenticeship Mentorship
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px', fontSize: '12px', color: '#4B5563' }}>
                      <span><strong>Credential:</strong> #JIS-M-90241-TY</span>
                      <span>•</span>
                      <span><strong>Accredited Authority:</strong> Ministry of Health, Labour & Welfare (MHLW Japan)</span>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0B122F', marginBottom: '12px' }}>
                    Digital Master Craftsman Seal (認印 / 実印)
                  </h3>
                  <p style={{ fontSize: '13px', color: '#687588', lineHeight: '1.6', marginBottom: '18px' }}>
                    Your cryptographic Hanko seal is automatically embedded onto JIS inspection certificates and apprentice capstone sign-offs.
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '14px 20px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626', fontWeight: '900', fontSize: '14px' }}>
                      高橋印
                    </div>
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#991B1B' }}>Verified Seal: Takahashi Kenji (高橋 健二)</div>
                      <div style={{ fontSize: '11.5px', color: '#B91C1C' }}>Cryptographic Hash: 0x9f4a...e12d • Valid until Nov 2030</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'settings' || activeTab === 'support') && (
            <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '64px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '32px', border: '1px solid rgba(226, 228, 238, 0.85)', textAlign: 'center' }}>
                <ShieldCheck size={40} style={{ color: '#304FE8', margin: '0 auto 16px' }} />
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0B122F', marginBottom: '8px' }}>
                  {activeTab === 'settings' ? 'Instructor System Preferences' : 'Faculty Guild Concierge'}
                </h2>
                <p style={{ fontSize: '13.5px', color: '#687588', maxWidth: '500px', margin: '0 auto 20px', lineHeight: '1.6' }}>
                  {activeTab === 'settings'
                    ? 'Automated inspection SLA is active (12h limit). 4K OBS Studio stream configuration is verified.'
                    : 'Direct master line to Tokyo Samurai Talent Faculty Coordination. Response time under 15 minutes.'}
                </p>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '100px',
                    border: 'none',
                    backgroundColor: '#304FE8',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
