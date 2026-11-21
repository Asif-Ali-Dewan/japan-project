import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Play,
  Calendar,
  ShieldCheck,
  ChevronRight,
  User,
  Sparkles,
  Flame,
  Check
} from 'lucide-react';

export default function DashboardHome({ onNavigate }) {
  // 1. CARDS: Standard, professional pastel KPI cards matching user screenshot
  const metricCards = [
    {
      label: 'Active courses',
      value: '4',
      icon: BookOpen,
      iconColor: '#304FE8',
      bg: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      badge: 'In Progress',
      badgeBg: 'rgba(255, 255, 255, 0.9)',
      badgeColor: '#304FE8',
    },
    {
      label: 'Completed',
      value: '8',
      icon: CheckCircle2,
      iconColor: '#059669',
      bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
      border: '1px solid rgba(16, 185, 129, 0.22)',
      badge: 'Passed',
      badgeBg: 'rgba(255, 255, 255, 0.9)',
      badgeColor: '#059669',
    },
    {
      label: 'Pending assessments',
      value: '2',
      icon: Clock,
      iconColor: '#EA580C',
      bg: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
      border: '1px solid rgba(249, 115, 22, 0.22)',
      badge: 'This Week',
      badgeBg: 'rgba(255, 255, 255, 0.9)',
      badgeColor: '#EA580C',
    },
    {
      label: 'Certificates earned',
      value: '4',
      icon: Award,
      iconColor: '#B45309',
      bg: 'linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)',
      border: '1px solid rgba(234, 179, 8, 0.28)',
      badge: 'Verified',
      badgeBg: 'rgba(255, 255, 255, 0.9)',
      badgeColor: '#B45309',
    },
  ];

  // 2. MY LEARNING & ACTIVE COURSES: Exactly 4 standard proportioned cards per user specification
  const enrolledCourses = [
    {
      id: 'automotive',
      title: 'Automotive Mechanic & Engine Diagnostics',
      category: 'Mechanical & Auto',
      instructor: 'Yuki Matsuoka',
      currentModule: 'Module 4: OBD-II Electronic Control & Fuel Injection Overhaul',
      phaseTag: 'Week 8 of 12',
      progress: 76,
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'electrical',
      title: 'Electrical Installation & Repair',
      category: 'Electrical & HVAC',
      instructor: 'Hiroshi Sato',
      currentModule: 'Module 3: 3-Phase Commercial Panel Wiring & Conduit',
      phaseTag: 'Week 4 of 12',
      progress: 48,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'ac-refrigeration',
      title: 'AC & Refrigeration Technician (HVAC)',
      category: 'Electrical & HVAC',
      instructor: 'Daiki Watanabe',
      currentModule: 'Final Capstone: R-410A Chiller Recovery & Vacuum Test',
      phaseTag: 'Final Capstone',
      progress: 92,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'welding',
      title: 'Welding & Metal Fabrication',
      category: 'Welding & Piping',
      instructor: 'Takeshi Mori',
      currentModule: 'Module 5: Precision TIG Root Pass on Stainless Pipe',
      phaseTag: 'Week 6 of 12',
      progress: 64,
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // 3. RECENT ACTIVITY: Latest verified milestones
  const recentActivities = [
    {
      id: 1,
      title: 'Passed Capstone 02: High-Pressure Welded Flange Assembly',
      time: '2 hours ago',
      badge: 'Verified',
      badgeBg: 'var(--mint)',
      badgeColor: 'var(--green)',
      icon: CheckCircle2,
    },
    {
      id: 2,
      title: 'Electrical Panel Safety Credential Issued',
      time: 'Yesterday',
      badge: 'Credential',
      badgeBg: 'var(--lav)',
      badgeColor: 'var(--blue)',
      icon: Award,
    },
    {
      id: 3,
      title: 'Refrigerant Recovery & Pressure Exam Passed',
      time: '3 days ago',
      badge: 'Score 98%',
      badgeBg: 'var(--mint)',
      badgeColor: 'var(--green)',
      icon: Sparkles,
    },
  ];

  // 4. UPCOMING MILESTONES: Pending requirements & deadlines
  const upcomingMilestones = [
    {
      id: 1,
      title: 'Capstone 03: 3-Phase Motor Control Wiring Lab',
      deadline: 'Friday, 11:59 PM',
      urgent: true,
      tag: 'Workshop Lab',
    },
    {
      id: 2,
      title: 'Master Craftsman Workshop Review',
      deadline: 'Thursday, 4:00 PM',
      urgent: false,
      tag: 'Live Session',
    },
    {
      id: 3,
      title: 'Hydraulic Pressure Testing Assessment',
      deadline: 'In 5 days',
      urgent: false,
      tag: 'Trade Exam',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* 1. TOP CARDS: Refined Pastel Stat Cards matching screenshot standard */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
        className="kpi-grid"
      >
        {metricCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              style={{
                background: card.bg,
                borderRadius: 'var(--r-lg)',
                padding: '22px 24px',
                border: card.border,
                boxShadow: '0 4px 16px rgba(11, 18, 47, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '138px',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(11, 18, 47, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(11, 18, 47, 0.04)';
              }}
            >
              {/* Header: White square icon tile on left + status pill on right */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: '#FFFFFF',
                    color: card.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(11, 18, 47, 0.06)',
                  }}
                >
                  <Icon size={18} />
                </div>

                <span
                  style={{
                    backgroundColor: card.badgeBg,
                    color: card.badgeColor,
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 10px',
                    borderRadius: 'var(--r-pill)',
                    boxShadow: '0 1px 4px rgba(11, 18, 47, 0.05)',
                  }}
                >
                  {card.badge}
                </span>
              </div>

              {/* Stat number & label */}
              <div>
                <div style={{ fontSize: '30px', fontWeight: '800', color: 'var(--navy)', lineHeight: '1.1' }}>
                  {card.value}
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(11, 18, 47, 0.75)', marginTop: '4px' }}>
                  {card.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. ENROLLED TRACKS: Standard Standard LMS Cards (4 Cards + Lively Learning Momentum) */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--r-xl)',
          padding: '30px 32px',
          border: '1px solid var(--line)',
          boxShadow: '0 10px 30px rgba(11, 18, 47, 0.05)',
        }}
      >
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <div style={{ width: '16px', height: '2px', backgroundColor: 'var(--blue)', borderRadius: '2px' }} />
              <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                Enrolled Tracks
              </span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '-0.01em' }}>
              My Learning & Active Courses
            </h2>
          </div>

          <button
            onClick={() => onNavigate('explore')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--blue)',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = '7px')}
            onMouseLeave={(e) => (e.currentTarget.style.gap = '4px')}
          >
            <span>Browse catalog</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="course-cards-grid-4">
          {enrolledCourses.map((c) => (
            <div
              key={c.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(226, 228, 238, 0.9)',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(11, 18, 47, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(11, 18, 47, 0.09)';
                e.currentTarget.style.borderColor = 'rgba(48, 79, 232, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(11, 18, 47, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(226, 228, 238, 0.9)';
              }}
            >
              {/* Card Media Header with Category pill on left & Phase pill on right */}
              <div style={{ position: 'relative', height: '144px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={c.image}
                  alt={c.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11, 18, 47, 0.15) 0%, rgba(11, 18, 47, 0.45) 100%)' }} />

                {/* Category tag (top left) */}
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--navy)',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 11px',
                    borderRadius: 'var(--r-pill)',
                    boxShadow: '0 2px 6px rgba(11, 18, 47, 0.12)',
                  }}
                >
                  {c.category}
                </span>

                {/* Phase tag (bottom right) */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '12px',
                    backgroundColor: 'rgba(11, 18, 47, 0.8)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 9px',
                    borderRadius: '6px',
                  }}
                >
                  {c.phaseTag}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: '800', color: 'var(--navy)', lineHeight: '1.3', marginBottom: '6px' }}>
                    {c.title}
                  </h3>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.4' }}>
                    Instructor: {c.instructor}
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--muted)' }}>Progress</span>
                    <span style={{ color: 'var(--blue)' }}>{c.progress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--surface)', borderRadius: 'var(--r-pill)', overflow: 'hidden' }}>
                    <div style={{ width: `${c.progress}%`, height: '100%', backgroundColor: 'var(--blue)', borderRadius: 'var(--r-pill)' }} />
                  </div>
                </div>

                {/* Full-width Standard Continue Button matching screenshot */}
                <button
                  onClick={() => onNavigate('my-learning')}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    minHeight: '38px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: 'var(--blue)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 3px 10px rgba(48, 79, 232, 0.22)',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1C36D0';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(48, 79, 232, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--blue)';
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(48, 79, 232, 0.22)';
                  }}
                >
                  <span>Continue</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* 2-Column Split: 3. Recent Activity & 4. Upcoming Milestones */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}
        className="activity-grid"
      >
        {/* 3. RECENT ACTIVITY: Latest Verified Milestones */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--r-xl)',
            padding: '28px',
            border: '1px solid var(--line)',
            boxShadow: '0 6px 20px rgba(11, 18, 47, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--navy)' }}>
                Recent Activity
              </h2>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                Latest verified learning milestones
              </div>
            </div>
            <span className="badge badge-green">Verified</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentActivities.map((act) => {
              const Icon = act.icon;
              return (
                <div
                  key={act.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 16px',
                    borderRadius: 'var(--r-md)',
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--line)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: '#FFFFFF',
                        color: act.badgeColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--line)',
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>
                        {act.title}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                        {act.time}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      backgroundColor: act.badgeBg,
                      color: act.badgeColor,
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '3px 10px',
                      borderRadius: 'var(--r-pill)',
                    }}
                  >
                    {act.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. UPCOMING MILESTONES: Pending Requirements & Deadlines */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--r-xl)',
            padding: '28px',
            border: '1px solid var(--line)',
            boxShadow: '0 6px 20px rgba(11, 18, 47, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--navy)' }}>
                Upcoming Milestones
              </h2>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                Assessments, live sprints & projects
              </div>
            </div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: 'var(--orange)',
                backgroundColor: 'var(--peach)',
                padding: '3px 10px',
                borderRadius: 'var(--r-pill)',
              }}
            >
              Action Required
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {upcomingMilestones.map((ms) => (
              <div
                key={ms.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  borderRadius: 'var(--r-md)',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: '#FFFFFF',
                      color: ms.urgent ? 'var(--orange)' : 'var(--blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--line)',
                    }}
                  >
                    <Calendar size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>
                      {ms.title}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: ms.urgent ? 'var(--orange)' : 'var(--muted)',
                        fontWeight: ms.urgent ? '700' : '500',
                        marginTop: '2px',
                      }}
                    >
                      Due: {ms.deadline}
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--muted)',
                    backgroundColor: '#FFFFFF',
                    padding: '3px 10px',
                    borderRadius: 'var(--r-pill)',
                    border: '1px solid var(--line)',
                  }}
                >
                  {ms.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
