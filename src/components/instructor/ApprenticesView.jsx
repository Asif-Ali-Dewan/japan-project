import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Award,
  CheckCircle2,
  Clock,
  Briefcase,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Star,
  X,
  FileText
} from 'lucide-react';

const APPRENTICE_DATA = [
  {
    id: 'app-1',
    name: 'Alex Morgan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-88291',
    email: 'alex.morgan@samuraitalent.io',
    track: 'Automotive Diagnostics',
    level: 'JIS Level 2 Technician',
    progress: 88,
    completedLabs: 14,
    totalLabs: 16,
    qualityRating: '98.4%',
    passRate: '100%',
    status: 'Ready for Sponsor',
    employerInterest: 'Toyota Motor Corp (98% Match)',
    logbookSummary: 'Demonstrated superior mastery of high-voltage isolation fault diagnostics and oscilloscope signal analysis.',
    endorsed: true
  },
  {
    id: 'app-2',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-90142',
    email: 'm.vance@samuraitalent.io',
    track: 'Commercial HVAC & Heat Pumps',
    level: 'JIS Level 2 Technician',
    progress: 75,
    completedLabs: 12,
    totalLabs: 16,
    qualityRating: '94.2%',
    passRate: '92%',
    status: 'Active Training',
    employerInterest: 'Daikin Industries (96% Match)',
    logbookSummary: 'Strong brazing technique under nitrogen purge. Currently completing vacuum decay under 300 microns.',
    endorsed: false
  },
  {
    id: 'app-3',
    name: 'Kenzo Shiraishi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-87114',
    email: 'kenzo.s@samuraitalent.io',
    track: 'Hydraulic & Pressure Welding',
    level: 'JIS Master Candidate',
    progress: 96,
    completedLabs: 18,
    totalLabs: 18,
    qualityRating: '99.1%',
    passRate: '100%',
    status: 'Placed / Hired',
    employerInterest: 'Komatsu Industrial Ltd (Hired)',
    logbookSummary: 'Radiographic testing 100% defect-free on 6G pipe joints. JIS Z 3801 certification authorized.',
    endorsed: true
  },
  {
    id: 'app-4',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-91204',
    email: 'e.rostova@samuraitalent.io',
    track: 'Industrial EV Battery Assembly',
    level: 'JIS Level 1 Trainee',
    progress: 62,
    completedLabs: 10,
    totalLabs: 16,
    qualityRating: '96.5%',
    passRate: '95%',
    status: 'Active Training',
    employerInterest: 'Panasonic Energy Co. (92% Match)',
    logbookSummary: 'Strict adherence to ESD and high-voltage PPE protocols. High precision in busbar torque calibration.',
    endorsed: false
  },
  {
    id: 'app-5',
    name: 'Tariq Al-Mansoor',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-89552',
    email: 't.almansoor@samuraitalent.io',
    track: 'Automotive Diagnostics',
    level: 'JIS Level 2 Technician',
    progress: 82,
    completedLabs: 13,
    totalLabs: 16,
    qualityRating: '95.0%',
    passRate: '93%',
    status: 'Ready for Sponsor',
    employerInterest: 'Denso Corporation (95% Match)',
    logbookSummary: 'High proficiency in CAN FD packet capture and sensor decoding under live dyno runs.',
    endorsed: true
  }
];

export default function ApprenticesView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [trackFilter, setTrackFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedApprentice, setSelectedApprentice] = useState(null);
  const [roster, setRoster] = useState(APPRENTICE_DATA);

  const trackOptions = [
    { value: 'All', label: 'All Tracks' },
    { value: 'Automotive', label: 'Automotive Diagnostics' },
    { value: 'HVAC', label: 'Commercial HVAC & Heat Pumps' },
    { value: 'Welding', label: 'Hydraulic & Pressure Welding' },
    { value: 'Battery', label: 'EV Battery Assembly' }
  ];

  const statusOptions = [
    { value: 'All', label: 'All Statuses' },
    { value: 'Active Training', label: 'Active Training' },
    { value: 'Ready for Sponsor', label: 'Ready for Sponsor' },
    { value: 'Placed / Hired', label: 'Placed / Hired' }
  ];

  const toggleEndorsement = (id) => {
    setRoster(prev => prev.map(app => {
      if (app.id === id) {
        return { ...app, endorsed: !app.endorsed };
      }
      return app;
    }));
    if (selectedApprentice && selectedApprentice.id === id) {
      setSelectedApprentice(prev => ({ ...prev, endorsed: !prev.endorsed }));
    }
  };

  const filteredApprentices = roster.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.apprenticeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.track.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrack = trackFilter === 'All' || app.track.toLowerCase().includes(trackFilter.toLowerCase());
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    return matchesSearch && matchesTrack && matchesStatus;
  });

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '60px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '100px', backgroundColor: '#EEF2FF', color: '#304FE8', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>
            <Users size={14} />
            Master Mentorship Roster
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.02em', margin: 0 }}>
            Learners & Apprentice Roster
          </h1>
          <p style={{ fontSize: '14px', color: '#687588', margin: '6px 0 0' }}>
            Monitor hands-on lab progress, verify technical logbooks, and endorse certified apprentices for Japanese enterprise hiring.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '100px', border: '1px solid rgba(226, 228, 238, 0.85)', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.04)' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#304FE8' }}>1,420</div>
            <div style={{ fontSize: '11px', color: '#687588', fontWeight: '600' }}>Active Trainees</div>
          </div>
          <div style={{ width: '1px', height: '24px', backgroundColor: '#E2E4EE' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#10B981' }}>98.6%</div>
            <div style={{ fontSize: '11px', color: '#687588', fontWeight: '600' }}>JIS Pass Rate</div>
          </div>
          <div style={{ width: '1px', height: '24px', backgroundColor: '#E2E4EE' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: '800', color: '#0B122F' }}>642</div>
            <div style={{ fontSize: '11px', color: '#687588', fontWeight: '600' }}>Placed in Japan</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '280px', maxWidth: '420px' }}>
          <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
          <input
            type="text"
            placeholder="Search apprentice name, ID, or trade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '11px 16px 11px 44px',
              borderRadius: '100px',
              border: '1px solid rgba(226, 228, 238, 0.9)',
              backgroundColor: '#FFFFFF',
              fontSize: '13.5px',
              color: '#0B122F',
              outline: 'none',
              boxShadow: '0 2px 6px rgba(11, 18, 47, 0.02)'
            }}
          />
        </div>

        {/* Filter Dropdowns */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Track Filter Dropdown */}
          <div style={{ position: 'relative', minWidth: '220px' }}>
            <div
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none',
                color: '#304FE8'
              }}
            >
              <Filter size={14} />
            </div>
            <select
              value={trackFilter}
              onChange={(e) => setTrackFilter(e.target.value)}
              aria-label="Filter by trade track"
              style={{
                width: '100%',
                height: '42px',
                paddingLeft: '38px',
                paddingRight: '36px',
                borderRadius: '100px',
                border: '1px solid rgba(226, 228, 238, 0.9)',
                backgroundColor: '#FFFFFF',
                color: '#0B122F',
                fontSize: '13px',
                fontWeight: '600',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                boxShadow: '0 2px 6px rgba(11, 18, 47, 0.02)',
                transition: 'border-color 0.15s ease'
              }}
            >
              {trackOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={15}
              color="#64748B"
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Status Filter Dropdown */}
          <div style={{ position: 'relative', minWidth: '170px' }}>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by placement status"
              style={{
                width: '100%',
                height: '42px',
                paddingLeft: '16px',
                paddingRight: '36px',
                borderRadius: '100px',
                border: '1px solid rgba(226, 228, 238, 0.9)',
                backgroundColor: '#FFFFFF',
                color: '#0B122F',
                fontSize: '13px',
                fontWeight: '600',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                boxShadow: '0 2px 6px rgba(11, 18, 47, 0.02)',
                transition: 'border-color 0.15s ease'
              }}
            >
              {statusOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={15}
              color="#64748B"
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>
      </div>

      {/* Apprentices Table / Cards */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(226, 228, 238, 0.85)', boxShadow: '0 4px 16px rgba(11, 18, 47, 0.03)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(226, 228, 238, 0.7)', display: 'grid', gridTemplateColumns: '2.5fr 2fr 1.5fr 1.5fr 1.5fr', fontSize: '12px', fontWeight: '700', color: '#687588', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          <div>Apprentice & Track</div>
          <div>JIS Milestone & Labs</div>
          <div>Quality & Pass Rate</div>
          <div>Employer Placement</div>
          <div style={{ textAlign: 'right' }}>Master Actions</div>
        </div>

        <div style={{ divideY: '1px solid rgba(226, 228, 238, 0.6)' }}>
          {filteredApprentices.map((app) => (
            <div
              key={app.id}
              style={{
                padding: '18px 24px',
                display: 'grid',
                gridTemplateColumns: '2.5fr 2fr 1.5fr 1.5fr 1.5fr',
                alignItems: 'center',
                borderBottom: '1px solid rgba(226, 228, 238, 0.6)',
                transition: 'background-color 0.15s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(248, 250, 252, 0.75)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              onClick={() => setSelectedApprentice(app)}
            >
              {/* Col 1: Apprentice info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src={app.avatar}
                  alt={app.name}
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: '700', color: '#0B122F' }}>{app.name}</span>
                    {app.endorsed && (
                      <span title="Master Endorsed" style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '2px 6px', borderRadius: '4px', backgroundColor: '#ECFDF5', color: '#059669', fontSize: '10.5px', fontWeight: '700' }}>
                        <ShieldCheck size={12} /> Master Seal
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '12px', color: '#687588', marginTop: '2px' }}>
                    {app.apprenticeId} • {app.track}
                  </div>
                </div>
              </div>

              {/* Col 2: Milestone & Labs */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', maxWidth: '180px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#0B122F' }}>{app.level}</span>
                  <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#304FE8' }}>{app.completedLabs}/{app.totalLabs} Labs</span>
                </div>
                <div style={{ width: '180px', height: '6px', borderRadius: '100px', backgroundColor: '#F1F5F9', overflow: 'hidden' }}>
                  <div style={{ width: `${app.progress}%`, height: '100%', backgroundColor: app.progress >= 90 ? '#10B981' : '#304FE8', borderRadius: '100px' }} />
                </div>
              </div>

              {/* Col 3: Quality Index */}
              <div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#0B122F' }}>{app.qualityRating}</div>
                <div style={{ fontSize: '11px', color: '#10B981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <CheckCircle2 size={12} /> {app.passRate} first-time pass
                </div>
              </div>

              {/* Col 4: Employer Placement */}
              <div>
                <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#0B122F' }}>
                  {app.employerInterest}
                </div>
                <div style={{ marginTop: '4px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '3px 8px',
                    borderRadius: '100px',
                    backgroundColor: app.status === 'Placed / Hired' ? '#ECFDF5' : app.status === 'Ready for Sponsor' ? '#EFF6FF' : '#F1F5F9',
                    color: app.status === 'Placed / Hired' ? '#059669' : app.status === 'Ready for Sponsor' ? '#2563EB' : '#4B5563'
                  }}>
                    {app.status}
                  </span>
                </div>
              </div>

              {/* Col 5: Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => toggleEndorsement(app.id)}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: app.endorsed ? '#10B981' : '#304FE8',
                    backgroundColor: app.endorsed ? '#ECFDF5' : '#FFFFFF',
                    color: app.endorsed ? '#059669' : '#304FE8',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Award size={13} />
                  {app.endorsed ? 'Endorsed' : 'Endorse'}
                </button>
                <button
                  onClick={() => setSelectedApprentice(app)}
                  style={{
                    padding: '7px 10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(226, 228, 238, 0.85)',
                    backgroundColor: '#FFFFFF',
                    color: '#687588',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                  title="View Logbook"
                >
                  <FileText size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logbook & Endorsement Detail Modal */}
      {selectedApprentice && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(11, 18, 47, 0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedApprentice(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '640px',
              width: '100%',
              padding: '28px 32px',
              boxShadow: '0 20px 40px rgba(11, 18, 47, 0.16)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedApprentice(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#687588', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            {/* Apprentice Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <img
                src={selectedApprentice.avatar}
                alt={selectedApprentice.name}
                style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #EEF2FF' }}
              />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
                  {selectedApprentice.name}
                </h3>
                <div style={{ fontSize: '13px', color: '#687588', marginTop: '2px' }}>
                  {selectedApprentice.apprenticeId} • {selectedApprentice.track}
                </div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
              <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', color: '#687588', fontWeight: '600', textTransform: 'uppercase' }}>Labs Completed</div>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#0B122F', marginTop: '4px' }}>
                  {selectedApprentice.completedLabs} / {selectedApprentice.totalLabs}
                </div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', color: '#687588', fontWeight: '600', textTransform: 'uppercase' }}>JIS Quality Index</div>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#304FE8', marginTop: '4px' }}>
                  {selectedApprentice.qualityRating}
                </div>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', color: '#687588', fontWeight: '600', textTransform: 'uppercase' }}>Employer Match</div>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#10B981', marginTop: '4px' }}>
                  98%
                </div>
              </div>
            </div>

            {/* Master Logbook Observations */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#0B122F', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '8px' }}>
                Master Craftsman Technical Logbook
              </h4>
              <div style={{ backgroundColor: '#F8FAFC', padding: '14px 18px', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '13.5px', color: '#334155', lineHeight: '1.6' }}>
                {selectedApprentice.logbookSummary}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
              <button
                onClick={() => setSelectedApprentice(null)}
                style={{ padding: '9px 18px', borderRadius: '100px', border: '1px solid #E2E4EE', backgroundColor: '#FFFFFF', color: '#4B5563', fontSize: '13.5px', fontWeight: '600', cursor: 'pointer' }}
              >
                Close
              </button>
              <button
                onClick={() => toggleEndorsement(selectedApprentice.id)}
                style={{
                  padding: '9px 22px',
                  borderRadius: '100px',
                  border: 'none',
                  backgroundColor: selectedApprentice.endorsed ? '#10B981' : '#304FE8',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Award size={15} />
                {selectedApprentice.endorsed ? 'Official Seal Endorsed' : 'Grant Master Recommendation'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
