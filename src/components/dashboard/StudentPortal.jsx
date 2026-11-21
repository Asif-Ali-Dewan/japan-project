import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../LanguageToggle';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome';
import CertificatesView from './CertificatesView';
import ExploreCoursesView from './ExploreCoursesView';
import MyLearningView from './MyLearningView';
import AssignmentsView from './AssignmentsView';
import ProfileView from './ProfileView';
import JobsView from './JobsView';
import NotificationsView from './NotificationsView';
import CoursesSection from '../CoursesSection';
import {
  Search,
  Bell,
  Menu,
  LogOut,
  User,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  Award,
  Check,
  ShieldCheck,
  Camera
} from 'lucide-react';

export default function StudentPortal({ onLogout, onSelectCourse }) {
  const { t, language } = useLanguage();
  const isJa = language === 'ja';
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const userAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80';

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'var(--surface)',
        fontFamily: 'var(--font)',
      }}
    >
      {/* Desktop Persistent Sidebar (All 13 Options Unnumbered) */}
      <div className="portal-desktop-sidebar">
        <Sidebar
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
            <Sidebar
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
        {/* Top Header Floating Pill inside Student Portal (Matching Landing Page Navbar Design) */}
        <header
          style={{
            position: 'sticky',
            top: '16px',
            zIndex: 500, // Elevated so dropdown floats cleanly over page content
            display: 'flex',
            justifyContent: 'center',
            padding: '0 32px',
            marginBottom: '8px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              backdropFilter: 'blur(16px)',
              borderRadius: 'var(--r-pill)',
              padding: '8px 12px 8px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              boxShadow: '0 10px 30px rgba(11, 18, 47, 0.08)',
              border: '1px solid var(--line)',
            }}
          >
            {/* Left: Mobile Toggle + Clean Context Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                className="portal-mobile-toggle"
                onClick={() => setMobileSidebarOpen(true)}
                style={{
                  display: 'none',
                  background: 'none',
                  border: 'none',
                  color: 'var(--navy)',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <Menu size={22} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '15px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '-0.01em' }}>
                  {t.studentPortal.tabTitles[activeTab] || 'Learner Dashboard'}
                </div>
              </div>
            </div>

            {/* Right: Search Pill + Notification Icon + My Profile Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <LanguageToggle />
              {/* Search Pill */}
              <div className="portal-search-wrapper" style={{ position: 'relative', width: '240px' }}>
                <Search
                  size={15}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--muted)',
                  }}
                />
                <input
                  type="text"
                  placeholder={t.studentPortal.searchPlaceholder}
                  className="input-field"
                  style={{
                    paddingLeft: '38px',
                    paddingTop: '7px',
                    paddingBottom: '7px',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '13px',
                    backgroundColor: 'var(--surface)',
                  }}
                />
              </div>

              {/* Notification Pill Button */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--navy)',
                  cursor: 'pointer',
                  position: 'relative',
                  border: '1px solid var(--line)',
                  transition: 'background-color 0.2s',
                }}
                onClick={() => setActiveTab('notifications')}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--surface)')}
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
                    backgroundColor: 'var(--blue)',
                  }}
                />
              </div>

              {/* My Profile Section: Platform-Standard Rich Profile & Proper Frosted Glass Dropdown */}
              <div ref={profileDropdownRef} style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setProfileDropdownOpen((prev) => !prev);
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '5px 14px 5px 6px',
                    borderRadius: 'var(--r-pill)',
                    background: profileDropdownOpen
                      ? 'linear-gradient(135deg, rgba(48, 79, 232, 0.12) 0%, rgba(48, 79, 232, 0.05) 100%)'
                      : 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid',
                    borderColor: profileDropdownOpen ? 'var(--blue)' : 'rgba(226, 228, 238, 0.9)',
                    cursor: 'pointer',
                    boxShadow: profileDropdownOpen
                      ? '0 0 0 3px rgba(48, 79, 232, 0.15), 0 4px 14px rgba(11, 18, 47, 0.06)'
                      : '0 2px 8px rgba(11, 18, 47, 0.04)',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!profileDropdownOpen) {
                      e.currentTarget.style.borderColor = 'var(--blue)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(48, 79, 232, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!profileDropdownOpen) {
                      e.currentTarget.style.borderColor = 'rgba(226, 228, 238, 0.9)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 18, 47, 0.04)';
                    }
                  }}
                >
                  {/* Avatar photo with refined dual ring & online badge */}
                  <div style={{ position: 'relative', width: '36px', height: '36px' }}>
                    <img
                      src={userAvatar}
                      alt="Alex Morgan"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                        border: '2px solid #FFFFFF',
                        boxShadow: '0 2px 8px rgba(11, 18, 47, 0.12)',
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

                  {/* Student Identity: Name as Main Content & Email as Sub Content per user specification */}
                  <div style={{ textAlign: 'left', lineHeight: '1.2' }}>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: '800',
                        color: 'var(--navy)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Alex Morgan
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: '500',
                        color: 'var(--muted)',
                        marginTop: '2px',
                      }}
                    >
                      alex.morgan@samuraitalent.io
                    </div>
                  </div>

                  {/* Dropdown Chevron with smooth rotation circle */}
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: profileDropdownOpen ? 'var(--blue)' : 'var(--surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      marginLeft: '4px',
                    }}
                  >
                    <ChevronDown
                      size={13}
                      color={profileDropdownOpen ? '#FFFFFF' : 'var(--muted)'}
                      style={{
                        transform: profileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>
                </button>

                {/* True Apple UI Frosted Glass Dropdown Menu */}
                {profileDropdownOpen && (
                  <div
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 12px)',
                      right: 0,
                      width: '270px',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.90) 0%, rgba(247, 249, 255, 0.84) 100%)',
                      backdropFilter: 'blur(36px) saturate(190%)',
                      WebkitBackdropFilter: 'blur(36px) saturate(190%)',
                      border: '1px solid rgba(255, 255, 255, 0.95)',
                      borderRadius: '22px',
                      boxShadow:
                        '0 24px 50px -10px rgba(11, 18, 47, 0.16), 0 8px 24px -4px rgba(48, 79, 232, 0.08), inset 0 1.5px 1px 0 rgba(255, 255, 255, 1), inset 0 -1px 1px 0 rgba(11, 18, 47, 0.03)',
                      padding: '10px',
                      zIndex: 1000,
                      animation: 'dropdownFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* User Identity Header */}
                    <div
                      style={{
                        padding: '12px 14px',
                        borderBottom: '1px solid rgba(226, 228, 238, 0.85)',
                        marginBottom: '8px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ position: 'relative' }}>
                          <img
                            src={userAvatar}
                            alt="Alex Morgan"
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '2px solid #FFFFFF',
                              boxShadow: '0 4px 12px rgba(11, 18, 47, 0.14)',
                            }}
                          />
                          <span
                            style={{
                              position: 'absolute',
                              bottom: '0',
                              right: '0',
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              backgroundColor: '#10B981',
                              border: '2px solid #FFFFFF',
                            }}
                          />
                        </div>

                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--navy)', lineHeight: '1.2' }}>
                            Alex Morgan
                          </div>
                          <div
                            style={{
                              fontSize: '11px',
                              color: 'var(--muted)',
                              marginTop: '2px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            alex.morgan@samuraitalent.io
                          </div>
                          <div style={{ marginTop: '5px' }}>
                            <span
                              style={{
                                fontSize: '10px',
                                fontWeight: '700',
                                color: 'var(--blue)',
                                backgroundColor: 'rgba(48, 79, 232, 0.1)',
                                padding: '2px 8px',
                                borderRadius: 'var(--r-pill)',
                              }}
                            >
                              {t.studentPortal.profileVerifiedBadge || (isJa ? '公認受講生' : 'Verified Learner')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 1. Edit Profile Option */}
                    <button
                      onClick={() => {
                        setActiveTab('profile');
                        setProfileDropdownOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        width: '100%',
                        borderRadius: 'var(--r-md)',
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: 'var(--navy)',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.18s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(48, 79, 232, 0.08)';
                        e.currentTarget.style.color = 'var(--blue)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--navy)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <User size={16} />
                        <span>{t.studentPortal.editProfile || 'Edit Profile'}</span>
                      </div>
                      <ChevronRight size={14} color="var(--muted)" />
                    </button>

                    <div style={{ height: '1px', backgroundColor: 'rgba(226, 228, 238, 0.8)', margin: '4px 6px' }} />

                    {/* 2. Logout Option */}
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onLogout();
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 14px',
                        width: '100%',
                        borderRadius: 'var(--r-md)',
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: '#DC2626',
                        fontSize: '13px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.18s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(254, 226, 226, 0.85)';
                        e.currentTarget.style.color = '#B91C1C';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#DC2626';
                      }}
                    >
                      <LogOut size={16} />
                      <span>{t.studentPortal.logout || 'Log out'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Portal Body Content */}
        <div style={{ padding: '32px', flex: 1 }}>
          {activeTab === 'dashboard' && (
            <DashboardHome onNavigate={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'certificates' && (
            <CertificatesView />
          )}

          {activeTab === 'explore' && (
            <ExploreCoursesView />
          )}

          {activeTab === 'my-learning' && (
            <MyLearningView onNavigate={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'assignments' && (
            <AssignmentsView />
          )}

          {activeTab === 'jobs' && (
            <JobsView />
          )}

          {activeTab === 'quizzes' && (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--r-xl)', padding: '36px', border: '1px solid var(--line)' }}>
              <div className="eyebrow">{t.studentPortal.quizzesEyebrow || 'COMPETENCY CHECKS'}</div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--navy)', marginBottom: '20px' }}>{t.studentPortal.quizzesTitle || 'Quizzes & Assessments'}</h2>
              <div style={{ padding: '20px', borderRadius: 'var(--r-md)', backgroundColor: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--navy)' }}>{t.studentPortal.quizItemTitle || 'Quiz 04: Database Concurrency & Circuit Control'}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{t.studentPortal.quizItemDesc || '15 Questions · Due in 5 days'}</div>
                </div>
                <button className="btn btn-primary" style={{ fontSize: '13px', padding: '6px 16px', minHeight: '36px' }}>
                  {t.studentPortal.startQuiz || 'Start Quiz'}
                </button>
              </div>
            </div>
          )}

          {/* Edit Profile Tab View */}
          {activeTab === 'profile' && (
            <ProfileView onBackToDashboard={() => setActiveTab('dashboard')} />
          )}

          {/* Notifications Tab View */}
          {activeTab === 'notifications' && (
            <NotificationsView onNavigateTab={(tab) => setActiveTab(tab)} />
          )}

          {['history', 'settings', 'support'].includes(activeTab) && (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--r-xl)', padding: '36px', border: '1px solid var(--line)' }}>
              <div className="eyebrow">{isJa ? '受講生アカウント' : 'LEARNER ACCOUNT'}</div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--navy)', textTransform: 'capitalize' }}>
                {activeTab.replace('-', ' ')}
              </h2>
            </div>
          )}
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .portal-desktop-sidebar {
            display: none !important;
          }
          .portal-mobile-toggle {
            display: block !important;
          }
          .portal-search-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
