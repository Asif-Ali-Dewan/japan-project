import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Play,
  Clock,
  Award,
  ArrowRight,
  Search,
  CheckCircle2,
  Check,
  ChevronRight,
  Video,
  FileText,
  Download,
  X,
  ClipboardCheck,
  ExternalLink,
  Layers
} from 'lucide-react';
import { courseContentService } from '../../data/courseContentService';

export default function MyLearningView({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'in-progress' | 'not-started' | 'completed'
  const [searchQuery, setSearchQuery] = useState('');

  // Classroom viewer modal state
  const [selectedCourseForClassroom, setSelectedCourseForClassroom] = useState(null);
  const [classroomMaterials, setClassroomMaterials] = useState([]);
  const [activeLesson, setActiveLesson] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleOpenClassroom = (course) => {
    setSelectedCourseForClassroom(course);
    // Find matching materials by title or fallback to relevant track
    let mats = courseContentService.getMaterialsByCourse(course.title);
    if (!mats || mats.length === 0) {
      const all = courseContentService.getAllMaterials();
      const keys = Object.keys(all);
      const matchedKey = keys.find(k => k.toLowerCase().includes(course.title.toLowerCase().split(' ')[0])) || keys[0];
      mats = all[matchedKey] || [];
    }
    setClassroomMaterials(mats);
    setActiveLesson(mats.length > 0 ? mats[0] : null);
  };

  // -------------------------------------------------------------------------
  // 1. ENROLLED COURSES DATASET (Matching Dashboard visual design system)
  // -------------------------------------------------------------------------
  const courses = [
    {
      id: 'automotive',
      title: 'Automotive Mechanic & Engine Diagnostics',
      category: 'Mechanical & Auto',
      instructor: 'Yuki Matsuoka',
      phaseTag: 'Week 8 of 12',
      progress: 76,
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'electrical',
      title: 'Electrical Installation & Repair',
      category: 'Electrical & HVAC',
      instructor: 'Hiroshi Sato',
      phaseTag: 'Week 4 of 12',
      progress: 48,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'ac-refrigeration',
      title: 'AC & Refrigeration Technician (HVAC)',
      category: 'Electrical & HVAC',
      instructor: 'Daiki Watanabe',
      phaseTag: 'Final Capstone',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'welding',
      title: 'Welding & Metal Fabrication',
      category: 'Welding & Piping',
      instructor: 'Takeshi Mori',
      phaseTag: 'Module 1 of 12',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'plumbing',
      title: 'Plumbing Systems & Hydraulic Pipework',
      category: 'Welding & Piping',
      instructor: 'Kenji Takahashi',
      phaseTag: 'Week 6 of 10',
      progress: 60,
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'carpentry',
      title: 'Carpentry & Architectural Woodworking',
      category: 'Construction & Finishing',
      instructor: 'Kazuki Tanaka',
      phaseTag: 'Completed',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'pipe-fitting',
      title: 'Pipe Fitting & Maintenance',
      category: 'Welding & Piping',
      instructor: 'Shinjiro Inoue',
      phaseTag: 'Module 1 of 10',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'motorcycle',
      title: 'Motorcycle Mechanic & Small Engine Repair',
      category: 'Mechanical & Auto',
      instructor: 'Kenzo Honda',
      phaseTag: 'Week 3 of 8',
      progress: 35,
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Dynamic KPI counts based on courses
  const activeEnrollmentsCount = courses.length;
  const inProgressCount = courses.filter((c) => c.progress > 0 && c.progress < 100).length;
  const notStartedCount = courses.filter((c) => c.progress === 0).length;
  const completedCount = courses.filter((c) => c.progress === 100).length;
  const pendingAssessmentsCount = 2;

  // Filter items
  const filteredCourses = courses.filter((c) => {
    if (activeFilter === 'in-progress' && !(c.progress > 0 && c.progress < 100)) return false;
    if (activeFilter === 'not-started' && c.progress !== 0) return false;
    if (activeFilter === 'completed' && c.progress !== 100) return false;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = c.title.toLowerCase().includes(q);
      const matchCategory = c.category.toLowerCase().includes(q);
      const matchInstructor = c.instructor.toLowerCase().includes(q);
      return matchTitle || matchCategory || matchInstructor;
    }

    return true;
  });

  // KPI Metric Cards directly matching Dashboard
  const kpiCards = [
    {
      id: 'active-enrollments',
      label: 'Active Enrollments',
      value: activeEnrollmentsCount,
      icon: BookOpen,
      iconColor: '#304FE8',
      bg: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      badge: 'All Tracks',
      badgeBg: 'rgba(255, 255, 255, 0.9)',
      badgeColor: '#304FE8',
    },
    {
      id: 'courses-in-progress',
      label: 'Courses In Progress',
      value: inProgressCount,
      icon: Play,
      iconColor: '#EA580C',
      bg: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
      border: '1px solid rgba(249, 115, 22, 0.22)',
      badge: 'Active',
      badgeBg: 'rgba(255, 255, 255, 0.9)',
      badgeColor: '#EA580C',
    },
    {
      id: 'pending-assessments',
      label: 'Pending Assessments',
      value: pendingAssessmentsCount,
      icon: Clock,
      iconColor: '#7C3AED',
      bg: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
      border: '1px solid rgba(139, 92, 246, 0.22)',
      badge: 'This Week',
      badgeBg: 'rgba(255, 255, 255, 0.9)',
      badgeColor: '#7C3AED',
    },
    {
      id: 'completed-certified',
      label: 'Completed & Certified',
      value: completedCount,
      icon: Award,
      iconColor: '#059669',
      bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
      border: '1px solid rgba(16, 185, 129, 0.22)',
      badge: 'Verified',
      badgeBg: 'rgba(255, 255, 255, 0.9)',
      badgeColor: '#059669',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* =================================================================== */}
      {/* 1. TOP STAT CARDS: Course Card like dashboard (4 KPI Cards)         */}
      {/* =================================================================== */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
        className="kpi-grid"
      >
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
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
                cursor: 'pointer',
              }}
              onClick={() => {
                if (card.id === 'courses-in-progress') setActiveFilter('in-progress');
                else if (card.id === 'completed-certified') setActiveFilter('completed');
                else if (card.id === 'active-enrollments') setActiveFilter('all');
                else if (card.id === 'pending-assessments' && onNavigate) onNavigate('assignments');
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

      {/* =================================================================== */}
      {/* 2. ENROLLED CURRICULUM: Grid of Course Cards with Progress & Tabs   */}
      {/* =================================================================== */}
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
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <div style={{ width: '16px', height: '2px', backgroundColor: 'var(--blue)', borderRadius: '2px' }} />
              <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                Enrolled Curriculum
              </span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '-0.01em', margin: 0 }}>
              My Learning & Active Tracks
            </h2>
          </div>

          {/* Quick Search */}
          <div style={{ position: 'relative', width: '250px' }}>
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
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
              style={{
                paddingLeft: '38px',
                paddingTop: '7px',
                paddingBottom: '7px',
                borderRadius: 'var(--r-pill)',
                fontSize: '13px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--line)',
              }}
            />
          </div>
        </div>

        {/* Filter Tabs: All , Progress , Not Started , Completed */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--line)',
            marginBottom: '26px',
            overflowX: 'auto',
          }}
        >
          {[
            { id: 'all', label: 'All', count: activeEnrollmentsCount },
            { id: 'in-progress', label: 'Progress', count: inProgressCount },
            { id: 'not-started', label: 'Not Started', count: notStartedCount },
            { id: 'completed', label: 'Completed', count: completedCount },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--r-pill)',
                  border: isActive ? '1.5px solid var(--navy)' : '1px solid var(--line)',
                  backgroundColor: isActive ? 'var(--navy)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--navy)',
                  fontSize: '13px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--surface)';
                    e.currentTarget.style.borderColor = 'rgba(11, 18, 47, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'var(--line)';
                  }
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '2px 7px',
                    borderRadius: 'var(--r-pill)',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'var(--surface)',
                    color: isActive ? '#FFFFFF' : 'var(--muted)',
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 4 Cards Responsive Grid matching Dashboard Course Cards */}
        {filteredCourses.length === 0 ? (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--r-lg)',
              border: '1px dashed var(--line)',
            }}
          >
            <BookOpen size={36} color="var(--muted)" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--navy)', marginBottom: '4px' }}>
              No courses found
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
              There are no courses matching the selected filter.
            </p>
            {activeFilter !== 'all' && (
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className="btn btn-outline"
                style={{ marginTop: '16px', fontSize: '13px', padding: '6px 16px' }}
              >
                Show All Courses
              </button>
            )}
          </div>
        ) : (
          <div className="course-cards-grid-4">
            {filteredCourses.map((c) => {
              const isCompleted = c.progress === 100;
              const isNotStarted = c.progress === 0;
              const isInProgress = c.progress > 0 && c.progress < 100;

              return (
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
                    e.currentTarget.style.borderColor = isCompleted
                      ? 'rgba(16, 185, 129, 0.4)'
                      : 'rgba(48, 79, 232, 0.3)';
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
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(11, 18, 47, 0.15) 0%, rgba(11, 18, 47, 0.45) 100%)',
                      }}
                    />

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

                    {/* Phase / Status tag (bottom right) */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '12px',
                        backgroundColor: isCompleted
                          ? 'rgba(16, 185, 129, 0.9)'
                          : isNotStarted
                          ? 'rgba(11, 18, 47, 0.8)'
                          : 'rgba(48, 79, 232, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '3px 9px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {isCompleted ? (
                        <>
                          <Check size={11} strokeWidth={3} /> Certified
                        </>
                      ) : (
                        c.phaseTag
                      )}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div
                    style={{
                      padding: '18px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '15.5px',
                          fontWeight: '800',
                          color: 'var(--navy)',
                          lineHeight: '1.3',
                          marginBottom: '6px',
                        }}
                      >
                        {c.title}
                      </h3>
                      <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.4' }}>
                        Instructor: {c.instructor}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          fontWeight: '700',
                          marginBottom: '6px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)' }}>Progress</span>
                        <span style={{ color: isCompleted ? '#059669' : isNotStarted ? 'var(--muted)' : 'var(--blue)' }}>
                          {c.progress}%
                        </span>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '6px',
                          backgroundColor: 'var(--surface)',
                          borderRadius: 'var(--r-pill)',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: `${c.progress}%`,
                            height: '100%',
                            backgroundColor: isCompleted ? '#059669' : 'var(--blue)',
                            borderRadius: 'var(--r-pill)',
                            transition: 'width 0.4s ease',
                          }}
                        />
                      </div>
                    </div>

                    {/* Dynamic Action Button:
                        - start learning if progress 0 (Dark Navy for fresh start)
                        - continue if in progress (Pulse Blue for active momentum)
                        - certificate if complete (Emerald Green for verified credential)
                    */}
                    {isNotStarted && (
                      <button
                        type="button"
                        onClick={() => handleOpenClassroom(c)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          minHeight: '38px',
                          borderRadius: '10px',
                          border: 'none',
                          backgroundColor: '#0B122F',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          boxShadow: '0 3px 10px rgba(11, 18, 47, 0.22)',
                          transition: 'all 0.18s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#1C2954';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#0B122F';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <Play size={13} fill="#FFFFFF" color="#FFFFFF" />
                        <span>Start learning</span>
                      </button>
                    )}

                    {isInProgress && (
                      <button
                        type="button"
                        onClick={() => handleOpenClassroom(c)}
                        className="btn btn-primary"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          minHeight: '38px',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          boxShadow: '0 3px 10px rgba(48, 79, 232, 0.22)',
                        }}
                      >
                        <span>Continue</span>
                        <ArrowRight size={14} />
                      </button>
                    )}

                    {isCompleted && (
                      <button
                        type="button"
                        onClick={() => {
                          if (onNavigate) onNavigate('certificates');
                          else alert(`Viewing Certificate for ${c.title}`);
                        }}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          minHeight: '38px',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          backgroundColor: '#ECFDF5',
                          color: '#059669',
                          border: '1.5px solid #A7F3D0',
                          cursor: 'pointer',
                          boxShadow: '0 2px 8px rgba(5, 150, 105, 0.12)',
                          transition: 'all 0.18s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#D1FAE5';
                          e.currentTarget.style.borderColor = '#059669';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#ECFDF5';
                          e.currentTarget.style.borderColor = '#A7F3D0';
                        }}
                      >
                        <Award size={15} />
                        <span>Certificate</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Classroom Content & Lesson Viewer Modal */}
      {selectedCourseForClassroom && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 18, 47, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2500,
            padding: '20px'
          }}
          onClick={() => setSelectedCourseForClassroom(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              width: '1000px',
              maxWidth: '100%',
              height: '85vh',
              maxHeight: '750px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.3)',
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Classroom Header */}
            <div
              style={{
                padding: '20px 28px',
                borderBottom: '1px solid #E2E8F0',
                backgroundColor: '#F8FAFC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#304FE8', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#EEF2FF', color: '#304FE8' }}>
                      {selectedCourseForClassroom.category}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>• {selectedCourseForClassroom.instructor}</span>
                  </div>
                  <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0B122F', margin: '2px 0 0' }}>
                    {selectedCourseForClassroom.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedCourseForClassroom(null)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#64748B'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Classroom Body (Left Syllabus, Right Player / Viewer) */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
              {/* Left Column: Syllabus Material List */}
              <div
                style={{
                  width: '320px',
                  borderRight: '1px solid #E2E8F0',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  flexShrink: 0
                }}
              >
                <div style={{ padding: '14px 18px', borderBottom: '1px solid #F1F5F9', fontSize: '12px', fontWeight: '800', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Course Syllabus ({classroomMaterials.length} Lessons)
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {classroomMaterials.map((mat, idx) => {
                    const isSelected = activeLesson && activeLesson.id === mat.id;
                    return (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setActiveLesson(mat)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: 'none',
                          backgroundColor: isSelected ? '#EEF2FF' : 'transparent',
                          color: isSelected ? '#304FE8' : '#334155',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          width: '100%'
                        }}
                        onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = '#F8FAFC'; }}
                        onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent'; }}
                      >
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                            backgroundColor:
                              mat.type === 'video' ? '#DBEAFE' :
                              mat.type === 'pdf' ? '#FEE2E2' :
                              mat.type === 'text' ? '#D1FAE5' : '#FEF3C7',
                            color:
                              mat.type === 'video' ? '#2563EB' :
                              mat.type === 'pdf' ? '#DC2626' :
                              mat.type === 'text' ? '#059669' : '#D97706',
                          }}
                        >
                          {mat.type === 'video' && <Video size={14} />}
                          {mat.type === 'pdf' && <FileText size={14} />}
                          {mat.type === 'text' && <BookOpen size={14} />}
                          {mat.type === 'assignment' && <ClipboardCheck size={14} />}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '13px', fontWeight: isSelected ? '800' : '600', lineHeight: '1.35' }}>
                            {idx + 1}. {mat.title}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748B', marginTop: '3px' }}>
                            {mat.duration || mat.readTime || mat.fileSize || mat.dueDate}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Active Content Viewer */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '28px 32px', backgroundColor: '#F8FAFC' }}>
                {activeLesson ? (
                  <div>
                    {/* Header of Active Lesson */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '800', padding: '3px 9px', borderRadius: '4px', backgroundColor: '#EEF2FF', color: '#304FE8', textTransform: 'uppercase' }}>
                        {activeLesson.badge || activeLesson.type}
                      </span>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>
                        {activeLesson.duration || activeLesson.readTime || activeLesson.fileSize}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0B122F', margin: '0 0 16px' }}>
                      {activeLesson.title}
                    </h2>

                    {/* 1. VIDEO VIEWER */}
                    {activeLesson.type === 'video' && (
                      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '20px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.04)' }}>
                        <div style={{ position: 'relative', width: '100%', height: '360px', backgroundColor: '#0B122F', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
                          <iframe
                            src={activeLesson.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
                            title={activeLesson.title}
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#0B122F', margin: '0 0 6px' }}>
                          Instructor Laboratory Briefing
                        </h4>
                        <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: '0 0 16px' }}>
                          {activeLesson.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => triggerToast(`Marked "${activeLesson.title}" as completed!`)}
                          style={{ padding: '9px 18px', borderRadius: '8px', border: 'none', backgroundColor: '#10B981', color: '#FFFFFF', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <CheckCircle2 size={15} /> Mark Lesson as Watched
                        </button>
                      </div>
                    )}

                    {/* 2. TEXT THEORY VIEWER */}
                    {activeLesson.type === 'text' && (
                      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '26px 30px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.04)' }}>
                        <div style={{ fontSize: '14px', color: '#1E293B', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                          {activeLesson.content}
                        </div>
                        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'flex-end' }}>
                          <button
                            type="button"
                            onClick={() => triggerToast(`Marked "${activeLesson.title}" as read!`)}
                            style={{ padding: '9px 18px', borderRadius: '8px', border: 'none', backgroundColor: '#304FE8', color: '#FFFFFF', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                          >
                            <CheckCircle2 size={15} /> Mark Theory as Read
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 3. PDF VIEWER */}
                    {activeLesson.type === 'pdf' && (
                      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '26px 30px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.04)' }}>
                        <div style={{ padding: '24px', borderRadius: '14px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '52px', height: '52px', borderRadius: '12px', backgroundColor: '#DC2626', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <FileText size={26} />
                            </div>
                            <div>
                              <div style={{ fontSize: '15px', fontWeight: '800', color: '#991B1B' }}>
                                {activeLesson.fileName}
                              </div>
                              <div style={{ fontSize: '12.5px', color: '#B91C1C', marginTop: '3px' }}>
                                {activeLesson.fileSize} • {activeLesson.pageCount} • Japanese Industrial Standard (JIS)
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => triggerToast(`Downloading ${activeLesson.fileName}...`)}
                            style={{ padding: '10px 18px', borderRadius: '8px', border: '1px solid #DC2626', backgroundColor: '#FFFFFF', color: '#DC2626', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 2px 6px rgba(220, 38, 38, 0.15)' }}
                          >
                            <Download size={15} /> Download PDF
                          </button>
                        </div>

                        <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#0B122F', margin: '0 0 6px' }}>
                          Technical Document Scope
                        </h4>
                        <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                          {activeLesson.description}
                        </p>
                      </div>
                    )}

                    {/* 4. ASSIGNMENT / LAB VIEWER */}
                    {activeLesson.type === 'assignment' && (
                      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '26px 30px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.04)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D97706', marginBottom: '10px' }}>
                          <ClipboardCheck size={20} />
                          <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase' }}>
                            Mandatory Practical Capstone Lab
                          </span>
                        </div>
                        <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: '1.6', margin: '0 0 18px' }}>
                          {activeLesson.description}
                        </p>
                        <div style={{ padding: '12px 16px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '13px', color: '#0B122F', marginBottom: '20px' }}>
                          <strong>Submission Deadline:</strong> {activeLesson.dueDate}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCourseForClassroom(null);
                            if (onNavigate) onNavigate('assignments');
                          }}
                          style={{ padding: '11px 22px', borderRadius: '10px', border: 'none', backgroundColor: '#304FE8', color: '#FFFFFF', fontSize: '13.5px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(48, 79, 232, 0.25)' }}
                        >
                          <ClipboardCheck size={16} /> Open in Assignments Workspace
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748B' }}>
                    Select a lesson from the syllabus on the left to begin.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
