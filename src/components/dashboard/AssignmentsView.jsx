import React, { useState, useEffect } from 'react';
import {
  ClipboardCheck,
  Clock,
  Calendar,
  Play,
  MessageSquare,
  Search,
  User,
  ArrowRight,
  Award,
  ChevronRight,
  X,
  FileCode,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Send,
  UploadCloud,
  FileText,
  Check
} from 'lucide-react';
import { assignmentService } from '../../data/assignmentService';

export default function AssignmentsView() {
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'pending' | 'completed'
  const [courseFilter, setCourseFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected assignment for Feedback Modal
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  // Selected assignment for Start Assignment Modal
  const [selectedStart, setSelectedStart] = useState(null);

  // Student submission form states
  const [studentNotes, setStudentNotes] = useState('');
  const [studentArtifacts, setStudentArtifacts] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // -------------------------------------------------------------------------
  // ASSIGNMENTS DATASET (Synced with assignmentService)
  // -------------------------------------------------------------------------
  const [assignments, setAssignments] = useState(() => assignmentService.getAssignments());

  useEffect(() => {
    setAssignments(assignmentService.getAssignments());
  }, []);

  const handleOpenStart = (asg) => {
    setSelectedStart(asg);
    setStudentNotes(`Completed diagnostic inspection according to ${asg.jisStandard || 'JIS standards'}. All mechanical readings and sensor waveforms are within certified tolerances.`);
    setStudentArtifacts([
      { name: 'oscilloscope_sensor_wave.png', type: 'Waveform Capture' },
      { name: 'jis_inspection_checklist.pdf', type: 'JIS Checklist' },
      { name: 'telemetry_log_readings.csv', type: 'Telemetry Log' }
    ]);
  };

  const handleSubmitLab = (e) => {
    e.preventDefault();
    if (!selectedStart) return;

    assignmentService.submitAssignment(selectedStart.id, {
      studentName: 'Alex Morgan',
      apprenticeId: '#ST-88291',
      notes: studentNotes,
      artifacts: studentArtifacts
    });

    setAssignments(assignmentService.getAssignments());
    triggerToast(`Submitted "${selectedStart.assignmentTitle}" for Master Inspection!`);
    setSelectedStart(null);
  };


  // Unique list of courses for course-wise filtering
  const courseOptions = [
    'all',
    ...Array.from(new Set(assignments.map((a) => a.courseName))),
  ];

  // Dynamic Metrics
  const totalCount = assignments.length;
  const pendingCount = assignments.filter((a) => !a.taken).length;
  const completedCount = assignments.filter((a) => a.taken).length;
  const averageScore = '97.5%';

  // Filtered dataset
  const filteredAssignments = assignments.filter((a) => {
    if (statusFilter === 'pending' && a.taken) return false;
    if (statusFilter === 'completed' && !a.taken) return false;

    if (courseFilter !== 'all' && a.courseName !== courseFilter) return false;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = a.assignmentTitle.toLowerCase().includes(q);
      const matchCourse = a.courseName.toLowerCase().includes(q);
      const matchInstructor = a.instructorName.toLowerCase().includes(q);
      return matchTitle || matchCourse || matchInstructor;
    }

    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '24px',
            right: '24px',
            backgroundColor: '#0B122F',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(11, 18, 47, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '13.5px',
            fontWeight: '600',
            zIndex: 3000
          }}
        >
          <Check size={16} color="#10B981" />
          <span>{toastMessage}</span>
        </div>
      )}
      {/* =================================================================== */}
      {/* 1. TOP METRIC CARDS (Dashboard KPI Style)                           */}
      {/* =================================================================== */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
        className="kpi-grid"
      >
        {/* KPI 1: Total Assignments */}
        <div
          style={{
            background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
            borderRadius: 'var(--r-lg)',
            padding: '22px 24px',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            boxShadow: '0 4px 16px rgba(11, 18, 47, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '138px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onClick={() => setStatusFilter('all')}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                color: 'var(--blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(11, 18, 47, 0.06)',
              }}
            >
              <ClipboardCheck size={18} />
            </div>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--blue)',
                fontSize: '11px',
                fontWeight: '700',
                padding: '3px 10px',
                borderRadius: 'var(--r-pill)',
              }}
            >
              Curriculum
            </span>
          </div>
          <div>
            <div style={{ fontSize: '30px', fontWeight: '800', color: 'var(--navy)', lineHeight: '1.1' }}>
              {totalCount}
            </div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(11, 18, 47, 0.75)', marginTop: '4px' }}>
              Total Assignments
            </div>
          </div>
        </div>

        {/* KPI 2: Pending (Not Taken) */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
            borderRadius: 'var(--r-lg)',
            padding: '22px 24px',
            border: '1px solid rgba(249, 115, 22, 0.22)',
            boxShadow: '0 4px 16px rgba(11, 18, 47, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '138px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onClick={() => setStatusFilter('pending')}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                color: '#EA580C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(11, 18, 47, 0.06)',
              }}
            >
              <Clock size={18} />
            </div>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#EA580C',
                fontSize: '11px',
                fontWeight: '700',
                padding: '3px 10px',
                borderRadius: 'var(--r-pill)',
              }}
            >
              Action Needed
            </span>
          </div>
          <div>
            <div style={{ fontSize: '30px', fontWeight: '800', color: 'var(--navy)', lineHeight: '1.1' }}>
              {pendingCount}
            </div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(11, 18, 47, 0.75)', marginTop: '4px' }}>
              Pending (Not Taken)
            </div>
          </div>
        </div>

        {/* KPI 3: Completed & Graded (Taken) */}
        <div
          style={{
            background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
            borderRadius: 'var(--r-lg)',
            padding: '22px 24px',
            border: '1px solid rgba(16, 185, 129, 0.22)',
            boxShadow: '0 4px 16px rgba(11, 18, 47, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '138px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onClick={() => setStatusFilter('completed')}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(11, 18, 47, 0.06)',
              }}
            >
              <CheckCircle2 size={18} />
            </div>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#059669',
                fontSize: '11px',
                fontWeight: '700',
                padding: '3px 10px',
                borderRadius: 'var(--r-pill)',
              }}
            >
              Completed
            </span>
          </div>
          <div>
            <div style={{ fontSize: '30px', fontWeight: '800', color: 'var(--navy)', lineHeight: '1.1' }}>
              {completedCount}
            </div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(11, 18, 47, 0.75)', marginTop: '4px' }}>
              Submitted & Graded
            </div>
          </div>
        </div>

        {/* KPI 4: Average Score */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FEFCE8 0%, #FEF08A 100%)',
            borderRadius: 'var(--r-lg)',
            padding: '22px 24px',
            border: '1px solid rgba(234, 179, 8, 0.28)',
            boxShadow: '0 4px 16px rgba(11, 18, 47, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '138px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                color: '#B45309',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(11, 18, 47, 0.06)',
              }}
            >
              <Sparkles size={18} />
            </div>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#B45309',
                fontSize: '11px',
                fontWeight: '700',
                padding: '3px 10px',
                borderRadius: 'var(--r-pill)',
              }}
            >
              Overall
            </span>
          </div>
          <div>
            <div style={{ fontSize: '30px', fontWeight: '800', color: 'var(--navy)', lineHeight: '1.1' }}>
              {averageScore}
            </div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(11, 18, 47, 0.75)', marginTop: '4px' }}>
              Average Capstone Score
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. RECTANGULAR CARDS SECTION: Minimal, Fresh & Clean                */}
      {/* =================================================================== */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--r-xl)',
          padding: '32px',
          border: '1px solid var(--line)',
          boxShadow: '0 10px 30px rgba(11, 18, 47, 0.05)',
        }}
      >
        {/* Header & Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '26px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <div style={{ width: '16px', height: '2px', backgroundColor: 'var(--blue)', borderRadius: '2px' }} />
              <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                Course-Wise Submissions
              </span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '-0.01em', margin: 0 }}>
              Assignments
            </h2>
          </div>

          {/* Search bar */}
          <div style={{ position: 'relative', width: '260px' }}>
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
              placeholder="Search assignments or courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
              style={{
                paddingLeft: '38px',
                paddingTop: '8px',
                paddingBottom: '8px',
                borderRadius: 'var(--r-pill)',
                fontSize: '13px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--line)',
              }}
            />
          </div>
        </div>

        {/* Filter Controls: Status Tabs on Left + Course Dropdown on Right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--line)',
            marginBottom: '26px',
            flexWrap: 'wrap',
          }}
        >
          {/* Status Filter Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {[
              { id: 'all', label: 'All Assignments', count: totalCount },
              { id: 'pending', label: 'Pending (Not Taken)', count: pendingCount },
              { id: 'completed', label: 'Completed (Taken)', count: completedCount },
            ].map((tab) => {
              const isActive = statusFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id)}
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

          {/* Course-Wise Dropdown Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>Course:</span>
            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              style={{
                height: '38px',
                padding: '0 14px',
                borderRadius: '10px',
                border: '1.5px solid var(--line)',
                backgroundColor: '#FFFFFF',
                color: 'var(--navy)',
                fontSize: '13px',
                fontWeight: '600',
                outline: 'none',
                cursor: 'pointer',
                maxWidth: '280px',
              }}
            >
              <option value="all">All Courses</option>
              {courseOptions
                .filter((c) => c !== 'all')
                .map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. RECTANGULAR CARDS LIST (Fresh, Minimalist, Perfectly Aligned)   */}
        {/* ================================================================= */}
        {filteredAssignments.length === 0 ? (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--r-lg)',
              border: '1px dashed var(--line)',
            }}
          >
            <ClipboardCheck size={36} color="var(--muted)" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--navy)', marginBottom: '4px' }}>
              No assignments found
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
              There are no assignments matching your current search or filter criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatusFilter('all');
                setCourseFilter('all');
                setSearchQuery('');
              }}
              className="btn btn-outline"
              style={{ marginTop: '16px', fontSize: '13px', padding: '6px 16px' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredAssignments.map((asg) => {
              const isTaken = asg.taken;

              return (
                <div
                  key={asg.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    padding: '24px 28px',
                    minHeight: '136px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '28px',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.02)',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = isTaken ? '#10B981' : '#304FE8';
                    e.currentTarget.style.boxShadow = '0 10px 28px rgba(15, 23, 42, 0.06)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.02)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  className="rectangular-assignment-card"
                >
                  {/* Left Section: Course Tag, Title, and Clean Minimal Details */}
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {/* Row 1: Clean Course Tag & Score Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: '#475569',
                          backgroundColor: '#F1F5F9',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {asg.courseName}
                      </span>

                      {/* If taken: Subtle score badge right alongside course */}
                      {isTaken && (
                        asg.status === 'Awaiting Inspection' ? (
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: '700',
                              color: '#D97706',
                              backgroundColor: '#FFFBEB',
                              padding: '3px 10px',
                              borderRadius: '999px',
                              border: '1px solid #FDE68A',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <Clock size={13} />
                            <span>Awaiting Inspection</span>
                          </span>
                        ) : (
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: '700',
                              color: '#059669',
                              backgroundColor: '#ECFDF5',
                              padding: '3px 10px',
                              borderRadius: '999px',
                              border: '1px solid #A7F3D0',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <Award size={13} />
                            <span>Score: {asg.score || '98.5 / 100'}</span>
                          </span>
                        )
                      )}
                    </div>

                    {/* Row 2: Assignment Title */}
                    <h3
                      style={{
                        fontSize: '17.5px',
                        fontWeight: '800',
                        color: 'var(--navy)',
                        margin: 0,
                        lineHeight: '1.3',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {asg.assignmentTitle}
                    </h3>

                    {/* Row 3: Minimal, Fresh Metadata */}
                    {!isTaken ? (
                      /* STATE 1: NOT TAKEN (course name, instructor name, submission last date) */
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          fontSize: '13px',
                          color: '#64748B',
                          marginTop: '2px',
                          flexWrap: 'wrap',
                        }}
                      >
                        {/* Instructor Name with Clean Round Avatar */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                          <img
                            src={asg.instructorAvatar}
                            alt={asg.instructorName}
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                            }}
                          />
                          <span style={{ fontWeight: '600', color: 'var(--navy)' }}>
                            Instructor: {asg.instructorName}
                          </span>
                        </div>

                        <span style={{ color: '#CBD5E1' }}>·</span>

                        {/* Submission Last Date */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569' }}>
                          <Calendar size={14} color="#64748B" />
                          <span>
                            Submission Last Date:{' '}
                            <strong style={{ color: '#0F172A', fontWeight: '600' }}>
                              {asg.submissionLastDate}
                            </strong>
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* STATE 2: TAKEN (course name, assignment title, submission date, score) */
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          fontSize: '13px',
                          color: '#64748B',
                          marginTop: '2px',
                          flexWrap: 'wrap',
                        }}
                      >
                        {/* Submission Date (ex: 2 days ago) */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Clock size={14} color="#64748B" />
                          <span>
                            Submitted:{' '}
                            <strong style={{ color: '#0F172A', fontWeight: '600' }}>
                              {asg.submissionDate}
                            </strong>
                          </span>
                        </div>

                        <span style={{ color: '#CBD5E1' }}>·</span>

                        {/* Instructor Context */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                          <img
                            src={asg.instructorAvatar}
                            alt={asg.instructorName}
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                            }}
                          />
                          <span>Instructor: {asg.instructorName}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Section: Crisp Action CTA Buttons */}
                  <div
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      minWidth: '160px',
                    }}
                    className="rectangular-card-cta"
                  >
                    {/* CTA 1: IF NOT TAKEN -> "Start assignment" */}
                    {!isTaken && (
                      <button
                        type="button"
                        onClick={() => handleOpenStart(asg)}
                        style={{
                          padding: '11px 22px',
                          fontSize: '13.5px',
                          fontWeight: '700',
                          borderRadius: '10px',
                          backgroundColor: '#304FE8',
                          color: '#FFFFFF',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          boxShadow: '0 4px 14px rgba(48, 79, 232, 0.22)',
                          transition: 'all 0.18s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#2340D3';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#304FE8';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <Play size={13} fill="#FFFFFF" color="#FFFFFF" />
                        <span>Start assignment</span>
                      </button>
                    )}

                    {/* CTA 2: IF TAKEN -> Awaiting or View feedback */}
                    {isTaken && (
                      asg.status === 'Awaiting Inspection' ? (
                        <div
                          style={{
                            padding: '10px 18px',
                            fontSize: '13px',
                            fontWeight: '700',
                            borderRadius: '10px',
                            backgroundColor: '#FFFBEB',
                            color: '#B45309',
                            border: '1px solid #FDE68A',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <Clock size={14} />
                          <span>Pending Review</span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedFeedback(asg)}
                          style={{
                            padding: '11px 20px',
                            fontSize: '13.5px',
                            fontWeight: '700',
                            borderRadius: '10px',
                            backgroundColor: '#F8FAFC',
                            color: '#0F172A',
                            border: '1px solid #E2E8F0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.18s ease',
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFFFFF';
                            e.currentTarget.style.borderColor = '#304FE8';
                            e.currentTarget.style.color = '#304FE8';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(48, 79, 232, 0.08)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#F8FAFC';
                            e.currentTarget.style.borderColor = '#E2E8F0';
                            e.currentTarget.style.color = '#0F172A';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <MessageSquare size={14} />
                          <span>View feedback</span>
                        </button>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* 4. MODAL: VIEW FEEDBACK POPUP                                      */}
      {/* =================================================================== */}
      {selectedFeedback && (
        <div
          onClick={() => setSelectedFeedback(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 18, 47, 0.65)',
            backdropFilter: 'blur(10px)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '560px',
              maxWidth: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid var(--line)',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.2)',
              padding: '32px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxSizing: 'border-box',
              animation: 'fadeIn 0.2s ease-out',
            }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#059669',
                    backgroundColor: '#ECFDF5',
                    padding: '3px 9px',
                    borderRadius: 'var(--r-pill)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Evaluated Submission
                </span>
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: '800',
                    color: 'var(--navy)',
                    marginTop: '8px',
                    marginBottom: '4px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {selectedFeedback.assignmentTitle}
                </h3>
                <div style={{ fontSize: '12.5px', color: 'var(--muted)' }}>
                  {selectedFeedback.courseName} · Submitted {selectedFeedback.submissionDate}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedFeedback(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--line)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Score Highlight Box */}
            <div
              style={{
                padding: '18px 20px',
                borderRadius: '16px',
                backgroundColor: 'var(--surface)',
                border: '1.5px solid rgba(16, 185, 129, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--muted)' }}>Final Evaluation Score</div>
                <div style={{ fontSize: '26px', fontWeight: '800', color: '#059669', marginTop: '2px' }}>
                  {selectedFeedback.score}
                </div>
              </div>
            </div>

            {/* Rubric Breakdown */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--navy)', marginBottom: '10px' }}>
                Rubric Criteria Breakdown
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedFeedback.feedback.rubric.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12.5px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--line)',
                    }}
                  >
                    <span style={{ color: 'var(--navy)', fontWeight: '600' }}>{r.category}</span>
                    <span style={{ color: '#059669', fontWeight: '700' }}>{r.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Notes */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                Feedback from {selectedFeedback.instructorName}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(11, 18, 47, 0.85)',
                  lineHeight: '1.5',
                  padding: '14px 16px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                }}
              >
                {selectedFeedback.feedback.overall}
                <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--muted)', fontStyle: 'italic' }}>
                  "{selectedFeedback.feedback.reviewerNotes}"
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedFeedback(null)}
              className="btn btn-primary"
              style={{ width: '100%', height: '42px', fontSize: '13.5px', fontWeight: '700', borderRadius: 'var(--r-pill)' }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 5. MODAL: START & SUBMIT ASSIGNMENT POPUP                          */}
      {/* =================================================================== */}
      {selectedStart && (
        <div
          onClick={() => setSelectedStart(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 18, 47, 0.65)',
            backdropFilter: 'blur(10px)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '600px',
              maxWidth: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid var(--line)',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.2)',
              padding: '30px 34px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxSizing: 'border-box',
              animation: 'fadeIn 0.2s ease-out',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--blue)',
                    backgroundColor: 'rgba(48, 79, 232, 0.08)',
                    padding: '3px 9px',
                    borderRadius: 'var(--r-pill)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {selectedStart.courseName}
                </span>
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: '800',
                    color: 'var(--navy)',
                    marginTop: '8px',
                    marginBottom: '4px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {selectedStart.assignmentTitle}
                </h3>
                <div style={{ fontSize: '12.5px', color: 'var(--muted)' }}>
                  Lead Instructor: {selectedStart.instructorName} · Standards: <strong>{selectedStart.jisStandard || 'JIS Standard'}</strong>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStart(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--line)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Due Date & Scope */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '600' }}>SUBMISSION DEADLINE</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#B45309', marginTop: '2px' }}>
                  {selectedStart.submissionLastDate}
                </div>
              </div>
              <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#FEF3C7', color: '#92400E' }}>
                JIS Certified Lab
              </span>
            </div>

            {/* Description */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--navy)', marginBottom: '4px' }}>
                Laboratory Instructions & Procedure
              </div>
              <p style={{ fontSize: '12.5px', color: 'rgba(11, 18, 47, 0.8)', lineHeight: '1.5', margin: 0 }}>
                {selectedStart.description}
              </p>
            </div>

            {/* Student Submission Form */}
            <form onSubmit={handleSubmitLab} style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Apprentice Field Observations & Sensor Log Notes *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Record your findings, measured tolerances, calibration numbers, and procedural observations..."
                  value={studentNotes}
                  onChange={(e) => setStudentNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13px',
                    border: '1px solid #CBD5E1',
                    borderRadius: '10px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Uploaded Artifacts List */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#0B122F' }}>
                    Technical Proof Deliverables (Attached)
                  </label>
                  <span style={{ fontSize: '11px', color: '#10B981', fontWeight: '700' }}>
                    ✓ 3 files ready
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {studentArtifacts.map((art, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', color: '#0B122F' }}>
                        <FileText size={14} color="#304FE8" />
                        <span>{art.name}</span>
                      </div>
                      <span style={{ fontSize: '11px', color: '#64748B', backgroundColor: '#FFFFFF', padding: '2px 8px', borderRadius: '4px', border: '1px solid #E2E8F0' }}>
                        {art.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setSelectedStart(null)}
                  className="btn btn-outline"
                  style={{ height: '42px', padding: '0 20px', fontSize: '13px', fontWeight: '600', borderRadius: '10px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    height: '42px',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    borderRadius: '10px',
                    backgroundColor: '#304FE8',
                    color: '#FFFFFF',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(48, 79, 232, 0.25)'
                  }}
                >
                  <Send size={15} />
                  <span>Submit for Master Inspection</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 860px) {
          .rectangular-assignment-card {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .rectangular-card-cta {
            align-items: stretch !important;
            width: 100% !important;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
}
