import React from 'react';
import {
  Users,
  ClipboardCheck,
  Award,
  DollarSign,
  Video,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Play,
  Calendar,
  ChevronRight,
  Sparkles,
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function InstructorHome({ onNavigate }) {
  const kpiMetrics = [
    {
      title: 'Active Apprentices',
      value: '1,420',
      change: '+14% this cohort',
      isPositive: true,
      icon: Users,
      color: '#304FE8',
      bg: '#EEF2FF'
    },
    {
      title: 'Pending Inspections',
      value: '18',
      change: '5 urgent (< 12h)',
      isWarning: true,
      icon: ClipboardCheck,
      color: '#F59E0B',
      bg: '#FFFBEB'
    },
    {
      title: 'JIS Credentials Issued',
      value: '642',
      change: '96.8% First-time pass',
      isPositive: true,
      icon: Award,
      color: '#10B981',
      bg: '#ECFDF5'
    },
    {
      title: 'Monthly Royalties',
      value: '¥1,480,000',
      change: 'Next payout in 6 days',
      isPositive: true,
      icon: DollarSign,
      color: '#0B122F',
      bg: '#F1F5F9'
    }
  ];

  const pendingSubmissions = [
    {
      id: 'sub-1',
      studentName: 'Alex Morgan',
      studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      apprenticeId: '#ST-88291',
      courseTitle: 'Automotive Diagnostic Specialist',
      labTitle: 'Lab 04: OBD-II Oscilloscope Sensor Waveform Testing',
      submittedAt: '35m ago',
      status: 'Awaiting Inspection',
      filesCount: '3 Schematics · 2 Oscillograms'
    },
    {
      id: 'sub-2',
      studentName: 'Marcus Vance',
      studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      apprenticeId: '#ST-90142',
      courseTitle: 'Commercial HVAC & Heat Pump Technician',
      labTitle: 'Lab 03: R-410A Deep Vacuum Decay & Micron Evacuation',
      submittedAt: '2h ago',
      status: 'Awaiting Inspection',
      filesCount: '1 Video Demo · Micron Log'
    },
    {
      id: 'sub-3',
      studentName: 'Kenichi Sato',
      studentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      apprenticeId: '#ST-78219',
      courseTitle: 'Hydraulic Pipework & Plant Welder',
      labTitle: 'Lab 05: JIS Z 3801 3G Multi-Pass Pipe Root Welding',
      submittedAt: '4h ago',
      status: 'Awaiting Inspection',
      filesCount: 'X-Ray Scan Photo · Spec Sheet'
    }
  ];

  const liveWorkshops = [
    {
      id: 'ws-1',
      title: '3-Phase Commercial Power Distribution & Conduit Bending',
      cohort: 'Cohort 26-B Technical Trainees',
      time: 'Monday · 10:00 AM JST',
      registered: 284,
      status: 'Scheduled'
    },
    {
      id: 'ws-2',
      title: 'ECU Can-Bus Oscilloscope Deep Dive & Signal Decryption',
      cohort: 'Advanced Automotive Apprentices',
      time: 'Wednesday · 2:00 PM JST',
      registered: 195,
      status: 'Scheduled'
    }
  ];

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '60px' }}>
      {/* 1. Master Identity Welcome Banner */}
      <div
        className="instructor-welcome-banner"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E4EE',
          boxShadow: '0 2px 10px rgba(11, 18, 47, 0.03)',
          padding: '24px 28px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80"
              alt="Master Kenji Takahashi"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                objectFit: 'cover',
                border: '2px solid #FFFFFF',
                boxShadow: '0 2px 8px rgba(11, 18, 47, 0.1)'
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '-4px',
                right: '-4px',
                backgroundColor: '#10B981',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #FFFFFF'
              }}
              title="Verified JIS Master Instructor"
            >
              <CheckCircle2 size={11} />
            </span>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '20px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
                Kenji Takahashi
              </h1>
            </div>
            <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0 0' }}>
              Faculty Lead · Automotive Powertrain Systems & Industrial Robotics (22 Yrs Industry Experience)
            </p>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="instructor-banner-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => onNavigate('inspections')}
            style={{
              padding: '9px 18px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#304FE8',
              backgroundColor: '#EEF2FF',
              border: '1px solid #D9E2FF',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ClipboardCheck size={15} />
            <span>Review Queue (18)</span>
          </button>

          <button
            onClick={() => onNavigate('workshops')}
            style={{
              padding: '9px 20px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#FFFFFF',
              backgroundColor: '#304FE8',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 6px rgba(48, 79, 232, 0.25)'
            }}
          >
            <Video size={15} />
            <span>Go Live / Workshop</span>
          </button>
        </div>
      </div>

      {/* 2. Key Metrics Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}
      >
        {kpiMetrics.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E4EE',
                padding: '20px 22px',
                boxShadow: '0 1px 4px rgba(11, 18, 47, 0.03)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>
                  {kpi.title}
                </span>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: kpi.bg,
                    color: kpi.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={18} />
                </div>
              </div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#0B122F', marginBottom: '4px' }}>
                {kpi.value}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: kpi.isWarning ? '#D97706' : kpi.isPositive ? '#10B981' : '#64748B'
                }}
              >
                {kpi.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Main Content Split: Inspection Queue (Left) & Upcoming Live Workshops (Right) */}
      <div
        className="instructor-main-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Urgent Capstone Inspection Queue */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            border: '1px solid #E2E4EE',
            padding: '22px 24px',
            boxShadow: '0 1px 4px rgba(11, 18, 47, 0.03)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #F1F5F9'
            }}
          >
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
                Pending Apprentice Inspections
              </h2>
              <p style={{ fontSize: '12.5px', color: '#64748B', margin: '2px 0 0' }}>
                Requires your master craftsman sign-off for JIS certification
              </p>
            </div>
            <button
              onClick={() => onNavigate('inspections')}
              style={{
                background: 'none',
                border: 'none',
                color: '#304FE8',
                fontSize: '12.5px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '3px'
              }}
            >
              View All (18) <ChevronRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {pendingSubmissions.map((sub) => (
              <div
                key={sub.id}
                className="instructor-sub-card"
                style={{
                  padding: '14px 16px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  <img
                    src={sub.studentAvatar}
                    alt={sub.studentName}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1px solid #E2E8F0'
                    }}
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#0B122F' }}>
                        {sub.studentName}
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                        {sub.apprenticeId}
                      </span>
                      <span style={{ fontSize: '11px', color: '#F59E0B', fontWeight: '600' }}>
                        • {sub.submittedAt}
                      </span>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginTop: '2px' }}>
                      {sub.labTitle}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                      {sub.courseTitle} · <span style={{ color: '#0B122F' }}>{sub.filesCount}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('inspections')}
                  style={{
                    padding: '7px 16px',
                    fontSize: '12.5px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    backgroundColor: '#304FE8',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Inspect
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Workshop Schedule & Broadcasts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Live Studio Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E2E4EE',
              padding: '22px 24px',
              boxShadow: '0 1px 4px rgba(11, 18, 47, 0.03)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid #F1F5F9'
              }}
            >
              <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
                Upcoming Live Workshops
              </h2>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#EF4444',
                  backgroundColor: '#FEF2F2',
                  border: '1px solid #FECACA',
                  padding: '2px 7px',
                  borderRadius: '4px'
                }}
              >
                Broadcast Studio
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {liveWorkshops.map((ws) => (
                <div
                  key={ws.id}
                  style={{
                    padding: '14px 16px',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0B122F', marginBottom: '4px' }}>
                    {ws.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '8px' }}>
                    {ws.cohort}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#304FE8', fontWeight: '600' }}>
                      <Calendar size={13} /> {ws.time}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>
                      {ws.registered} apprentices registered
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('workshops')}
              style={{
                width: '100%',
                padding: '9px 16px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#304FE8',
                backgroundColor: '#EEF2FF',
                border: '1px solid #D9E2FF',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <Calendar size={14} /> Schedule New Workshop
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .instructor-main-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .instructor-welcome-banner {
            padding: 18px 16px !important;
          }
          .instructor-banner-actions {
            width: 100% !important;
          }
          .instructor-banner-actions button {
            flex: 1 !important;
            justify-content: center !important;
          }
          .instructor-sub-card {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .instructor-sub-card button {
            width: 100% !important;
            padding: 9px !important;
          }
        }
      `}</style>
    </div>
  );
}
