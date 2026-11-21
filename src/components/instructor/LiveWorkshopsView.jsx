import React, { useState } from 'react';
import {
  Video,
  Calendar,
  Users,
  Clock,
  Play,
  CheckCircle2,
  Plus,
  X,
  Check
} from 'lucide-react';

const INITIAL_WORKSHOPS = [
  {
    id: 'ws-1',
    title: '3-Phase Commercial Power Distribution & Conduit Bending',
    cohort: 'Cohort 26-B Technical Trainees',
    track: 'Electrical & HVAC Track',
    time: 'Monday · 10:00 AM - 12:00 PM JST',
    registered: 284,
    status: 'Upcoming',
    description: 'Live workshop broadcast with multi-angle workshop cameras. Demonstrating EMT conduit offset calculations, wire pulling, and safety disconnect switch wiring.'
  },
  {
    id: 'ws-2',
    title: 'ECU Can-Bus Oscilloscope Deep Dive & Signal Decryption',
    cohort: 'Advanced Automotive Apprentices',
    track: 'Automotive & Mechanical Track',
    time: 'Wednesday · 2:00 PM - 4:00 PM JST',
    registered: 195,
    status: 'Upcoming',
    description: 'Hooking up 4-channel PicoScope to Toyota hybrid CAN-H and CAN-L bus lines to diagnose intermittent transmission communication loss.'
  },
  {
    id: 'ws-3',
    title: 'Master Inspection Q&A: Common Pipe Welding Flaws & JIS Fixes',
    cohort: 'Welding Cohort 24',
    track: 'Welding & Heavy Piping Track',
    time: 'Friday · 4:00 PM - 5:30 PM JST',
    registered: 160,
    status: 'Upcoming',
    description: 'Analyzing X-ray and macro-etch weld test failures from last week’s apprentice submissions. How to prevent slag inclusions on 3G vertical-up passes.'
  }
];

export default function LiveWorkshopsView() {
  const [workshops, setWorkshops] = useState(INITIAL_WORKSHOPS);
  const [activeStudioSession, setActiveStudioSession] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleStartBroadcast = (ws) => {
    setActiveStudioSession(ws);
    triggerToast(`Live broadcast studio initiated for: "${ws.title}"`);
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '60px' }}>
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
            Live Master Workshops & Broadcast Studio
          </h1>
          <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0' }}>
            Host live practical training sessions from your certified workshop studio with real-time apprentice telemetry and Q&A.
          </p>
        </div>

        <button
          onClick={() => triggerToast('Opening workshop scheduler modal...')}
          style={{
            padding: '9px 18px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#FFFFFF',
            backgroundColor: '#304FE8',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Plus size={15} /> Schedule Workshop
        </button>
      </div>

      {/* Live Broadcast Banner Card */}
      <div
        style={{
          backgroundColor: '#0B122F',
          borderRadius: '16px',
          padding: '24px 28px',
          color: '#FFFFFF',
          marginBottom: '26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        <div>
          <span
            style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#EF4444',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              padding: '3px 8px',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              marginBottom: '8px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
            4K Virtual Workshop Studio Ready
          </span>
          <h2 style={{ fontSize: '18px', fontWeight: '800', margin: '4px 0 6px 0' }}>
            Next Broadcast: 3-Phase Commercial Power Distribution
          </h2>
          <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
            Monday at 10:00 AM JST · 284 apprentices registered · Multi-angle overhead & oscilloscope feeds connected.
          </p>
        </div>

        <button
          onClick={() => handleStartBroadcast(workshops[0])}
          style={{
            padding: '10px 22px',
            fontSize: '13.5px',
            fontWeight: '700',
            color: '#FFFFFF',
            backgroundColor: '#304FE8',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(48, 79, 232, 0.4)'
          }}
        >
          <Play size={16} /> Enter Studio & Start Test Feed
        </button>
      </div>

      {/* Workshop Schedule Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {workshops.map((ws) => (
          <div
            key={ws.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E4EE',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#304FE8',
                    backgroundColor: '#EEF2FF',
                    padding: '2px 7px',
                    borderRadius: '4px'
                  }}
                >
                  {ws.track}
                </span>
                <span style={{ fontSize: '12px', color: '#64748B' }}>
                  {ws.cohort}
                </span>
              </div>

              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0B122F', margin: '4px 0 8px 0' }}>
                {ws.title}
              </h3>

              <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.45', margin: '0 0 12px 0' }}>
                {ws.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: '#64748B' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#304FE8', fontWeight: '600' }}>
                  <Calendar size={13} /> {ws.time}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Users size={13} /> {ws.registered} apprentices attending
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={() => handleStartBroadcast(ws)}
                style={{
                  padding: '8px 18px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  backgroundColor: '#0B122F',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Video size={14} /> Open Studio
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Active Studio Modal / Live Stream Preview */}
      {activeStudioSession && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 18, 47, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050,
            padding: '20px'
          }}
          onClick={() => setActiveStudioSession(null)}
        >
          <div
            style={{
              backgroundColor: '#0B122F',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '780px',
              color: '#FFFFFF',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
              padding: '28px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStudioSession(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#FFFFFF'
              }}
            >
              <X size={16} />
            </button>

            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                padding: '3px 8px',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '8px'
              }}
            >
              Master Virtual Studio Online
            </span>

            <h2 style={{ fontSize: '18px', fontWeight: '800', margin: '4px 0 16px' }}>
              {activeStudioSession.title}
            </h2>

            {/* Video Canvas Mock */}
            <div
              style={{
                width: '100%',
                height: '320px',
                backgroundColor: '#1E293B',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #334155',
                marginBottom: '20px',
                position: 'relative'
              }}
            >
              <Video size={42} color="#64748B" />
              <div style={{ fontSize: '14px', fontWeight: '600', marginTop: '10px' }}>
                Master Studio Camera Feed Active (1080p60 JIS Shop Cam)
              </div>
              <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                Overhead workbench & diagnostic oscilloscope telemetry synced.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '13px', color: '#94A3B8' }}>
                Registered Attendees: <strong style={{ color: '#FFFFFF' }}>{activeStudioSession.registered} apprentices</strong>
              </div>
              <button
                onClick={() => {
                  triggerToast('Broadcasting live to all enrolled cohort apprentices!');
                  setActiveStudioSession(null);
                }}
                style={{
                  padding: '9px 24px',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  backgroundColor: '#EF4444',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Go Live Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
