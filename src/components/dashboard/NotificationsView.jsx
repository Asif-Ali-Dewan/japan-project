import React, { useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';

const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    category: 'jobs',
    title: 'Profile Viewed: Toyota Motor Corporation',
    message: 'A technical recruiter reviewed your apprentice portfolio for the Automotive Diagnostic Specialist position.',
    timestamp: '15m ago',
    read: false,
    actionLabel: 'View job match',
    actionTab: 'jobs'
  },
  {
    id: 'notif-2',
    category: 'inspections',
    title: 'Lab Inspection Passed: OBD-II Diagnostics',
    message: 'Master Craftsman Kenji Takahashi inspected your capstone wiring and awarded Grade A (100% JIS compliance).',
    timestamp: '2h ago',
    read: false,
    actionLabel: 'View inspection report',
    actionTab: 'assignments'
  },
  {
    id: 'notif-3',
    category: 'certificates',
    title: 'New Credential Issued: JIS Electrical Safety',
    message: 'Your official certificate for Japanese Industrial Standards Electrical Safety is ready to download.',
    timestamp: 'Yesterday',
    read: false,
    actionLabel: 'Download certificate',
    actionTab: 'certificates'
  },
  {
    id: 'notif-4',
    category: 'cohort',
    title: 'Live Workshop: 3-Phase Commercial Power',
    message: 'Broadcast begins this Monday at 10:00 AM JST covering conduit bending and breaker sizing.',
    timestamp: '2 days ago',
    read: true,
    actionLabel: 'View schedule',
    actionTab: 'dashboard'
  },
  {
    id: 'notif-5',
    category: 'jobs',
    title: 'Application Routed: Daikin Industries, Ltd.',
    message: 'Your Commercial HVAC Technician application was forwarded to the Kansai Regional Service Division.',
    timestamp: '3 days ago',
    read: true,
    actionLabel: 'Track application',
    actionTab: 'jobs'
  },
  {
    id: 'notif-6',
    category: 'system',
    title: 'Security Alert: Password Changed',
    message: 'Your portal account password was updated from Chrome on Windows (Yokohama, Japan).',
    timestamp: '5 days ago',
    read: true,
    actionLabel: 'Review settings',
    actionTab: 'profile'
  }
];

export default function NotificationsView({ onNavigateTab }) {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState('all'); // all, unread, jobs, inspections, system

  // Unread Count
  const unreadCount = useMemo(() => {
    return notifications.filter((n) => !n.read).length;
  }, [notifications]);

  // Mark All As Read
  const handleMarkAllAsRead = () => {
    if (unreadCount === 0) return;
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  // Toggle or mark single notification as read on click
  const handleItemClick = (item) => {
    if (!item.read) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === item.id ? { ...n, read: true } : n))
      );
    }
    if (onNavigateTab && item.actionTab) {
      onNavigateTab(item.actionTab);
    }
  };

  // Filtered Notifications
  const filteredNotifications = useMemo(() => {
    return notifications.filter((n) => {
      if (activeFilter === 'unread') return !n.read;
      if (activeFilter === 'jobs') return n.category === 'jobs';
      if (activeFilter === 'inspections') return n.category === 'inspections' || n.category === 'certificates';
      if (activeFilter === 'system') return n.category === 'system' || n.category === 'cohort';
      return true;
    });
  }, [notifications, activeFilter]);

  const filterTabs = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: unreadCount },
    { id: 'jobs', label: 'Jobs' },
    { id: 'inspections', label: 'Inspections' },
    { id: 'system', label: 'System' }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', paddingBottom: '60px' }}>
      {/* Header Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          paddingTop: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
            Notifications
          </h1>
          {unreadCount > 0 && (
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#304FE8',
                backgroundColor: '#EEF2FF',
                padding: '3px 10px',
                borderRadius: '999px'
              }}
            >
              {unreadCount} unread
            </span>
          )}
        </div>

        {/* Mark All As Read Button */}
        <button
          type="button"
          onClick={handleMarkAllAsRead}
          disabled={unreadCount === 0}
          style={{
            padding: '8px 18px',
            fontSize: '13px',
            fontWeight: '600',
            color: unreadCount > 0 ? '#304FE8' : '#94A3B8',
            backgroundColor: unreadCount > 0 ? '#EEF2FF' : '#F1F5F9',
            border: unreadCount > 0 ? '1px solid #D9E2FF' : '1px solid #E2E8F0',
            borderRadius: '8px',
            cursor: unreadCount > 0 ? 'pointer' : 'default',
            transition: 'all 0.15s ease'
          }}
        >
          Mark all as read
        </button>
      </div>

      {/* Filter Tabs Navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '18px',
          borderBottom: '1px solid #E2E4EE',
          paddingBottom: '8px'
        }}
      >
        {filterTabs.map((tab) => {
          const active = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                padding: '6px 12px',
                fontSize: '12.5px',
                fontWeight: active ? '700' : '500',
                color: active ? '#0B122F' : '#64748B',
                backgroundColor: active ? '#F1F5F9' : 'transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.15s ease'
              }}
            >
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && tab.count > 0 && (
                <span
                  style={{
                    fontSize: '10.5px',
                    fontWeight: '700',
                    padding: '1px 5px',
                    borderRadius: '999px',
                    backgroundColor: active ? '#0B122F' : '#E2E8F0',
                    color: active ? '#FFFFFF' : '#475569'
                  }}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Clean & Fresh Notification Feed */}
      {filteredNotifications.length > 0 ? (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #EAECEF',
            overflow: 'hidden'
          }}
        >
          {filteredNotifications.map((item, index) => {
            const isUnread = !item.read;

            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '16px 20px',
                  backgroundColor: isUnread ? '#F8FAFF' : '#FFFFFF',
                  borderBottom:
                    index < filteredNotifications.length - 1 ? '1px solid #F1F5F9' : 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isUnread ? '#F0F4FF' : '#FAFAFA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isUnread ? '#F8FAFF' : '#FFFFFF';
                }}
              >
                {/* Left Side: Unread Dot + Title & Message */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', flex: 1 }}>
                  {/* Subtle Unread Dot */}
                  <div style={{ width: '8px', paddingTop: '6px', flexShrink: 0 }}>
                    {isUnread && (
                      <span
                        style={{
                          display: 'block',
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: '#304FE8'
                        }}
                      />
                    )}
                  </div>

                  {/* Body Content */}
                  <div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: isUnread ? '700' : '600',
                        color: isUnread ? '#0B122F' : '#334155',
                        marginBottom: '4px',
                        lineHeight: '1.3'
                      }}
                    >
                      {item.title}
                    </div>

                    <p
                      style={{
                        fontSize: '13px',
                        color: '#64748B',
                        lineHeight: '1.4',
                        margin: '0 0 6px 0'
                      }}
                    >
                      {item.message}
                    </p>

                    {item.actionLabel && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '2px',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#304FE8'
                        }}
                      >
                        {item.actionLabel} <ChevronRight size={12} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Side: Timestamp */}
                <div
                  style={{
                    fontSize: '12px',
                    color: '#94A3B8',
                    whiteSpace: 'nowrap',
                    paddingTop: '2px'
                  }}
                >
                  {item.timestamp}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #EAECEF',
            padding: '48px 24px',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '15px', fontWeight: '700', color: '#0B122F', marginBottom: '4px' }}>
            {activeFilter === 'unread' ? 'All caught up' : 'No notifications'}
          </div>
          <p style={{ fontSize: '13px', color: '#64748B', margin: '0 auto 14px' }}>
            {activeFilter === 'unread'
              ? 'You have read all your notifications.'
              : 'There are no notifications in this category.'}
          </p>
          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              style={{
                background: 'none',
                border: 'none',
                color: '#304FE8',
                fontSize: '12.5px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              View all
            </button>
          )}
        </div>
      )}
    </div>
  );
}
