import React, { useState, useEffect } from 'react';
import {
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  ShieldCheck,
  X,
  Check,
  Search,
  Filter,
  Eye,
  Award
} from 'lucide-react';
import { assignmentService } from '../../data/assignmentService';

const INITIAL_SUBMISSIONS = [
  {
    id: 'sub-1',
    studentName: 'Alex Morgan',
    studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-88291',
    courseTitle: 'Automotive Diagnostic Specialist',
    labTitle: 'Lab 04: OBD-II Oscilloscope Sensor Waveform Testing',
    submittedAt: '35m ago',
    status: 'pending',
    notes: 'Uploaded crank/cam synchronization capture and 3-pin Hall effect sensor duty cycle logs under 2,500 RPM.',
    artifacts: [
      { name: 'cam_crank_sync_scope.png', type: 'Oscilloscope Image' },
      { name: 'hall_effect_duty_cycle.csv', type: 'Telemetry Log' },
      { name: 'jis_d1601_checklist.pdf', type: 'Inspection Form' }
    ]
  },
  {
    id: 'sub-2',
    studentName: 'Marcus Vance',
    studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-90142',
    courseTitle: 'Commercial HVAC & Heat Pump Technician',
    labTitle: 'Lab 03: R-410A Deep Vacuum Decay & Micron Evacuation',
    submittedAt: '2h ago',
    status: 'pending',
    notes: 'System evacuated to 240 microns and held for 15 minutes. Standing pressure decay test passed within JIS B 8607 standards.',
    artifacts: [
      { name: 'micron_gauge_holding_decay.mp4', type: 'Video Demo' },
      { name: 'manifold_pressure_log.png', type: 'Sensor Capture' }
    ]
  },
  {
    id: 'sub-3',
    studentName: 'Kenichi Sato',
    studentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-78219',
    courseTitle: 'Hydraulic Pipework & Plant Welder',
    labTitle: 'Lab 05: JIS Z 3801 3G Multi-Pass Pipe Root Welding',
    submittedAt: '4h ago',
    status: 'pending',
    notes: 'Completed 6-inch schedule 40 root pass with GTAW (Argon backing gas) and completed fill & cap with E7018 low-hydrogen electrodes.',
    artifacts: [
      { name: 'weld_root_penetration.jpg', type: 'Macro Photo' },
      { name: 'xray_radiography_pass.pdf', type: 'Lab Report' }
    ]
  },
  {
    id: 'sub-4',
    studentName: 'Yuki Tanaka',
    studentAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-82914',
    courseTitle: 'Industrial Robotics & Automation',
    labTitle: 'Lab 02: 6-Axis Articulated Arm Kinematic Calibration',
    submittedAt: 'Yesterday',
    status: 'graded',
    grade: 'Grade A (Pass)',
    feedback: 'Flawless tool center point (TCP) calibration. Repeatability measured at +/-0.03mm which exceeds JIS B 8432 standards.',
    notes: 'Calibrated Fanuc 6-axis robot TCP using 4-point tip method and validated trajectory velocity profile.',
    artifacts: [
      { name: 'tcp_accuracy_matrix.pdf', type: 'Calibration Data' }
    ]
  }
];

export default function InspectionsGradingView() {
  const [submissions, setSubmissions] = useState(() => assignmentService.getSubmissions());
  const [selectedSub, setSelectedSub] = useState(null);
  const [gradeChoice, setGradeChoice] = useState('Grade A (Pass with Distinction)');
  const [feedbackNotes, setFeedbackNotes] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, pending, graded

  useEffect(() => {
    setSubmissions(assignmentService.getSubmissions());
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleOpenInspect = (sub) => {
    setSelectedSub(sub);
    setGradeChoice('Grade A (Pass with Distinction)');
    setFeedbackNotes('');
  };

  const handleSubmitGrade = (e) => {
    e.preventDefault();
    if (!selectedSub) return;

    assignmentService.gradeSubmission(selectedSub.id, {
      grade: gradeChoice,
      feedback: feedbackNotes || 'Approved with Master Craftsman digital stamp according to JIS requirements.'
    });

    setSubmissions(assignmentService.getSubmissions());
    triggerToast(`Graded ${selectedSub.studentName} · ${gradeChoice}`);
    setSelectedSub(null);
  };

  const filtered = submissions.filter((s) => {
    if (filterStatus === 'pending') return s.status === 'pending';
    if (filterStatus === 'graded') return s.status === 'graded';
    return true;
  });

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '60px' }}>
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
            zIndex: 1000
          }}
        >
          <Check size={16} color="#10B981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
            Master Inspection Queue
          </h1>
          <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0' }}>
            Review, calibrate, and digitally stamp apprentice trade capstone assignments against Japanese Industrial Standards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'all', label: `All (${submissions.length})` },
            { id: 'pending', label: `Pending (${submissions.filter((s) => s.status === 'pending').length})` },
            { id: 'graded', label: `Graded (${submissions.filter((s) => s.status === 'graded').length})` }
          ].map((f) => {
            const active = filterStatus === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilterStatus(f.id)}
                style={{
                  padding: '7px 14px',
                  fontSize: '12.5px',
                  fontWeight: active ? '700' : '500',
                  color: active ? '#FFFFFF' : '#475569',
                  backgroundColor: active ? '#304FE8' : '#F1F5F9',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Submissions Cards Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.map((sub) => {
          const isGraded = sub.status === 'graded';
          return (
            <div
              key={sub.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E4EE',
                padding: '20px 24px',
                boxShadow: '0 1px 4px rgba(11, 18, 47, 0.03)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '20px',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: 1, minWidth: '280px' }}>
                <img
                  src={sub.studentAvatar}
                  alt={sub.studentName}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1px solid #E2E8F0',
                    flexShrink: 0
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#0B122F' }}>
                      {sub.studentName}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>
                      {sub.apprenticeId}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        backgroundColor: isGraded ? '#ECFDF5' : '#FFFBEB',
                        color: isGraded ? '#059669' : '#D97706'
                      }}
                    >
                      {isGraded ? sub.grade : 'Needs Master Sign-off'}
                    </span>
                  </div>

                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#304FE8', marginTop: '2px' }}>
                    {sub.labTitle}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#64748B', marginTop: '2px' }}>
                    Program: <strong style={{ color: '#0B122F' }}>{sub.courseTitle}</strong> · Submitted {sub.submittedAt}
                  </div>

                  <p style={{ fontSize: '13px', color: '#334155', margin: '8px 0 10px', lineHeight: '1.45' }}>
                    "{sub.notes}"
                  </p>

                  {/* Artifacts Attached */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {sub.artifacts.map((art, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11.5px',
                          color: '#475569',
                          backgroundColor: '#F8FAFC',
                          padding: '3px 8px',
                          borderRadius: '5px',
                          border: '1px solid #E2E8F0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <FileText size={12} color="#64748B" />
                        {art.name} ({art.type})
                      </span>
                    ))}
                  </div>

                  {isGraded && sub.feedback && (
                    <div
                      style={{
                        marginTop: '10px',
                        padding: '10px 14px',
                        backgroundColor: '#F0FDF4',
                        borderRadius: '8px',
                        border: '1px solid #BBF7D0',
                        fontSize: '12.5px',
                        color: '#166534'
                      }}
                    >
                      <strong>Master Feedback:</strong> {sub.feedback}
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleOpenInspect(sub)}
                  style={{
                    padding: '8px 18px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    backgroundColor: isGraded ? '#0B122F' : '#304FE8',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {isGraded ? 'Review / Edit Grade' : 'Inspect & Grade'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inspection & Grading Modal */}
      {selectedSub && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 18, 47, 0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050,
            padding: '20px'
          }}
          onClick={() => setSelectedSub(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '640px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.25)',
              padding: '28px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedSub(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              <X size={15} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <ShieldCheck size={20} color="#304FE8" />
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#304FE8', textTransform: 'uppercase' }}>
                Master Verification Protocol
              </span>
            </div>

            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0B122F', marginBottom: '8px' }}>
              {selectedSub.labTitle}
            </h2>
            <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>
              Apprentice: <strong>{selectedSub.studentName}</strong> ({selectedSub.apprenticeId})
            </div>

            <form onSubmit={handleSubmitGrade}>
              {/* Award Grade Selection */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Award JIS Competency Grade *
                </label>
                <select
                  value={gradeChoice}
                  onChange={(e) => setGradeChoice(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13.5px',
                    color: '#0B122F',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E4EE',
                    borderRadius: '8px',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Grade A (Pass with Distinction)">Grade A (Pass with Distinction - 100% JIS Code)</option>
                  <option value="Grade B (Pass)">Grade B (Pass - Standard Competency Confirmed)</option>
                  <option value="Revision Required (Re-weld / Retest)">Revision Required (Safety / Tolerance Variance)</option>
                </select>
              </div>

              {/* Master Feedback & Technical Sign-off Notes */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Master Craftsman Remarks & Guidance *
                </label>
                <textarea
                  rows={4}
                  value={feedbackNotes}
                  onChange={(e) => setFeedbackNotes(e.target.value)}
                  placeholder="Provide precise technical appraisal (e.g. waveform consistency, bevel angle accuracy, torque check, or recommendations for employer placement)..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13.5px',
                    color: '#0B122F',
                    border: '1px solid #E2E4EE',
                    borderRadius: '8px',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>

              {/* Digital Stamp Sign-off Notice */}
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E4EE',
                  marginBottom: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '12px',
                  color: '#475569'
                }}
              >
                <Award size={18} color="#10B981" />
                <span>
                  Submitting applies your verified Master Craftsman digital seal and updates the apprentice's recruiter-visible portfolio.
                </span>
              </div>

              {/* Modal Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setSelectedSub(null)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#475569',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '8px 20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    backgroundColor: '#304FE8',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Confirm & Apply Master Seal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
