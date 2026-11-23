import React, { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  Briefcase,
  Users,
  CheckCircle2,
  Clock,
  Building2,
  X,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Filter,
  Check,
  AlertCircle
} from 'lucide-react';

const INITIAL_JOBS = [
  {
    id: 'job-1',
    title: 'Automotive & Powertrain Diagnostic Specialist',
    company: 'Toyota Motor Corporation',
    initials: 'TY',
    brandColor: '#E11D48',
    location: 'Yokohama, Kanagawa',
    jobType: 'Full Time',
    applicants: 42,
    matchPercentage: 98,
    salary: '¥5,200,000 - ¥6,800,000 / year',
    postedTime: '2 days ago',
    description: 'Lead ECU scanning, OBD-II oscilloscope diagnostics, and hybrid powertrain circuit troubleshooting for production vehicles adhering to Japanese Industrial Standards.',
    requirements: [
      'Certified Apprentice in Automotive Systems or equivalent',
      'Hands-on experience with OBD-II diagnostic tooling & oscilloscope readouts',
      'Familiarity with JIS workshop safety and hybrid high-voltage safety',
      'Basic Japanese conversational ability for technical floor coordination'
    ],
    benefits: [
      'Full health, pension, and employment insurance coverage',
      'Relocation assistance & subsidized technical apprentice housing',
      'Annual tooling stipend and JIS master certification support'
    ]
  },
  {
    id: 'job-2',
    title: 'Commercial HVAC & Heat Pump Field Technician',
    company: 'Daikin Industries, Ltd.',
    initials: 'DK',
    brandColor: '#0284C7',
    location: 'Osaka, Japan',
    jobType: 'Full Time',
    applicants: 34,
    matchPercentage: 96,
    salary: '¥4,800,000 - ¥6,200,000 / year',
    postedTime: '1 day ago',
    description: 'Install, commission, and maintain large-scale VRV/VRF heat pump systems and thermodynamic chillers across commercial high-rises and factories.',
    requirements: [
      'EPA / Japanese Refrigerant Recovery Certification (R-410A / R-32)',
      'Practical brazing, vacuum decay testing, and manifold gauge diagnostics',
      'Knowledge of inverter compressor troubleshooting',
      'Valid driver license for Kansai regional service dispatch'
    ],
    benefits: [
      'Company utility vehicle provided',
      'Twice-yearly bonus structure',
      'Direct pathway to Daikin Master Technician sign-off'
    ]
  },
  {
    id: 'job-3',
    title: 'Heavy Plant Welder & Hydraulic Pipework Specialist',
    company: 'Komatsu Industrial Ltd.',
    initials: 'KM',
    brandColor: '#D97706',
    location: 'Oyama, Tochigi',
    jobType: 'Contractual',
    applicants: 28,
    matchPercentage: 94,
    salary: '¥4,500,000 - ¥5,800,000 / year',
    postedTime: '3 days ago',
    description: 'Execute SMAW and GTAW pipe joints on hydraulic reservoirs, high-pressure line manifolds, and heavy crawler excavator sub-assemblies.',
    requirements: [
      'JIS Z 3801 manual welding qualification or international 3G/4G equivalent',
      'Ability to interpret hydraulic schematics and fabrication blueprints',
      'Experience in high-pressure leak testing up to 350 bar',
      'Rigorous compliance with shop 5S and protective equipment standards'
    ],
    benefits: [
      'High overtime pay multiplier for scheduled plant turnarounds',
      'Contract-to-hire option after 12 months with strong appraisal',
      'On-site canteen and wellness facilities'
    ]
  },
  {
    id: 'job-4',
    title: 'Lithium Battery Assembly Maintenance Electrician',
    company: 'Panasonic Energy Co.',
    initials: 'PS',
    brandColor: '#2563EB',
    location: 'Tokushima, Japan',
    jobType: 'Full Time',
    applicants: 52,
    matchPercentage: 92,
    salary: '¥4,900,000 - ¥6,400,000 / year',
    postedTime: '4 days ago',
    description: 'Diagnose and maintain automated cell winding, ultrasonic welding stations, and 3-phase automated conveyor distribution panels in cleanroom environments.',
    requirements: [
      'Electrical installation & maintenance certification (Type 2 Electrician equivalent)',
      'Experience with PLC I/O diagnostic checks and multimeter isolation',
      'Comfort working in ESD-protected cleanroom facilities',
      'Solid troubleshooting discipline with documented root cause reports'
    ],
    benefits: [
      'Cleanroom premium allowance',
      'Comprehensive pension and stock purchase plan',
      'Structured technical advancement roadmap'
    ]
  },
  {
    id: 'job-5',
    title: 'Cryogenic & Industrial Refrigeration Pipe Fitter',
    company: 'Mitsubishi Heavy Industries',
    initials: 'MH',
    brandColor: '#DC2626',
    location: 'Yokohama, Kanagawa',
    jobType: 'Contractual',
    applicants: 22,
    matchPercentage: 91,
    salary: '¥5,500,000 - ¥7,000,000 / year',
    postedTime: 'Just now',
    description: 'Perform precision pipe fitting, flange alignment, and silver brazing on liquid nitrogen and ammonia commercial refrigeration pipelines.',
    requirements: [
      'Proven experience in commercial copper and stainless steel piping',
      'Familiarity with hydrostatic pressure testing procedures',
      'Blueprint reading and isometric pipe routing capabilities',
      'Commitment to Japanese industrial safety protocols'
    ],
    benefits: [
      'Specialized hazardous trade allowance',
      'Housing subsidy in the Greater Tokyo/Yokohama area',
      'Full equipment and customized PPE provided'
    ]
  },
  {
    id: 'job-6',
    title: 'Agricultural Machinery Overhaul Mechanic',
    company: 'Kubota Corporation',
    initials: 'KB',
    brandColor: '#16A34A',
    location: 'Tsukuba, Ibaraki',
    jobType: 'Hourly',
    applicants: 19,
    matchPercentage: 89,
    salary: '¥2,600 / hour',
    postedTime: '5 days ago',
    description: 'Overhaul diesel engines, hydrostatic transmissions, and PTO drive shafts for combine harvesters and utility tractors.',
    requirements: [
      'Hands-on mechanical repair background with 4-stroke small diesel units',
      'Proficiency in torque wrench calibration and gear tolerance measurement',
      'Ability to test run machinery safely on test tracks',
      'Enthusiasm for Japanese agricultural precision technology'
    ],
    benefits: [
      'Flexible hourly shift patterns',
      'Tooling allowances and overtime pay',
      'Employee machinery discount program'
    ]
  },
  {
    id: 'job-7',
    title: 'EV Wire Harness & Battery Pack Apprentice',
    company: 'Honda R&D Tochigi Center',
    initials: 'HD',
    brandColor: '#EA580C',
    location: 'Haga, Tochigi',
    jobType: 'Part Time',
    applicants: 31,
    matchPercentage: 88,
    salary: '¥2,400 / hour',
    postedTime: '1 week ago',
    description: 'Assist prototype build engineers with wire routing, CAN bus connector pinouts, and test bench harness assembly under senior mentor guidance.',
    requirements: [
      'Basic electrical schematic reading and crimping proficiency',
      'High attention to detail with wire bundling and heat shrink tubing',
      'Current learner or recent graduate in electrical or automotive trade track',
      'Team-first attitude and eagerness to learn prototype R&D workflows'
    ],
    benefits: [
      'Flexible part-time schedule (20-25 hrs/week)',
      'Free commuter shuttle from Utsunomiya Station',
      'Direct exposure to future EV prototype development'
    ]
  },
  {
    id: 'job-8',
    title: 'Municipal Pumping & Hydraulic Valve Inspector',
    company: 'Ebara Corporation',
    initials: 'EB',
    brandColor: '#0D9488',
    location: 'Tokyo, Japan',
    jobType: 'Hourly',
    applicants: 15,
    matchPercentage: 85,
    salary: '¥2,750 / hour',
    postedTime: '3 days ago',
    description: 'Inspect municipal wastewater pumps, impellers, mechanical seals, and automated butterfly valves across Tokyo metropolitan treatment stations.',
    requirements: [
      'Practical background in mechanical pumps and fluid conveyance',
      'Proficiency with dial indicators, feeler gauges, and vibration pens',
      'JIS-compliant safety harness and confined space awareness',
      'Clear documentation of inspection checklists'
    ],
    benefits: [
      'Metropolitan transit expense fully reimbursed',
      'Generous hourly night differential',
      'Public infrastructure contractor credential upon 6 months'
    ]
  }
];

export default function JobsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [appliedJobs, setAppliedJobs] = useState(['job-2']);
  const [selectedJob, setSelectedJob] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const jobTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'full time', label: 'Full Time' },
    { id: 'contractual', label: 'Contractual' },
    { id: 'part time', label: 'Part Time' },
    { id: 'hourly', label: 'Hourly' }
  ];

  const statusFilters = [
    { id: 'all', label: 'All Jobs' },
    { id: 'applied job', label: 'Applied Jobs' },
    { id: 'most matched', label: 'Most Matched' }
  ];

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const handleToggleApply = (e, job) => {
    e.stopPropagation();
    if (appliedJobs.includes(job.id)) {
      setAppliedJobs(appliedJobs.filter((id) => id !== job.id));
      triggerToast(`Application withdrawn for ${job.title}`);
    } else {
      setAppliedJobs([...appliedJobs, job.id]);
      triggerToast(`Application submitted to ${job.company}!`);
    }
  };

  const filteredJobs = useMemo(() => {
    let result = INITIAL_JOBS.filter((job) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q);

      const matchesType =
        jobTypeFilter === 'all' ||
        job.jobType.toLowerCase() === jobTypeFilter.toLowerCase();

      const matchesApplied =
        statusFilter !== 'applied job' || appliedJobs.includes(job.id);

      return matchesSearch && matchesType && matchesApplied;
    });

    if (statusFilter === 'most matched') {
      result = [...result].sort((a, b) => b.matchPercentage - a.matchPercentage);
    }

    return result;
  }, [searchQuery, jobTypeFilter, statusFilter, appliedJobs]);

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

      {/* Clean Header */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
          Partner Job Board
        </h1>
      </div>

      {/* Search & Filters in a Single Line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}
      >
        {/* Search Bar */}
        <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
          <Search
            size={16}
            color="#94A3B8"
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by job title, company, or location..."
            style={{
              width: '100%',
              height: '42px',
              padding: '0 36px 0 38px',
              fontSize: '13.5px',
              color: '#0B122F',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E4EE',
              borderRadius: '8px',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              boxShadow: '0 1px 3px rgba(11, 18, 47, 0.04)',
              transition: 'border-color 0.15s ease'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#94A3B8',
                display: 'flex',
                alignItems: 'center',
                padding: '2px'
              }}
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Dropdown 1: Job Type Filter */}
        <div style={{ position: 'relative', minWidth: '160px' }}>
          <select
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
            style={{
              width: '100%',
              height: '42px',
              padding: '0 36px 0 14px',
              fontSize: '13.5px',
              fontWeight: '500',
              color: '#1E293B',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E4EE',
              borderRadius: '8px',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              boxShadow: '0 1px 3px rgba(11, 18, 47, 0.04)',
              transition: 'border-color 0.15s ease'
            }}
          >
            {jobTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={15}
            color="#64748B"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Dropdown 2: Status / Match Filter */}
        <div style={{ position: 'relative', minWidth: '160px' }}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              width: '100%',
              height: '42px',
              padding: '0 36px 0 14px',
              fontSize: '13.5px',
              fontWeight: '500',
              color: '#1E293B',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E4EE',
              borderRadius: '8px',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              boxShadow: '0 1px 3px rgba(11, 18, 47, 0.04)',
              transition: 'border-color 0.15s ease'
            }}
          >
            {statusFilters.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={15}
            color="#64748B"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none'
            }}
          />
        </div>
      </div>

      {/* Results Count Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', padding: '0 4px' }}>
        <div style={{ fontSize: '13px', color: '#64748B' }}>
          Showing <strong style={{ color: '#0B122F' }}>{filteredJobs.length}</strong> available positions
        </div>
        {(searchQuery || jobTypeFilter !== 'all' || statusFilter !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setJobTypeFilter('all');
              setStatusFilter('all');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#304FE8',
              fontSize: '12.5px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* 2. Redesigned Clean & Spacious Job Cards */}
      {filteredJobs.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '18px'
          }}
        >
          {filteredJobs.map((job) => {
            const isApplied = appliedJobs.includes(job.id);
            return (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: isApplied ? '1px solid #10B981' : '1px solid #EAECEF',
                  boxShadow: '0 1px 4px rgba(11, 18, 47, 0.03)',
                  padding: '20px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(11, 18, 47, 0.06)';
                  if (!isApplied) e.currentTarget.style.borderColor = '#CBD5E1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 4px rgba(11, 18, 47, 0.03)';
                  if (!isApplied) e.currentTarget.style.borderColor = '#EAECEF';
                }}
              >
                <div>
                  {/* Top Row: Company Info & Match Indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          backgroundColor: `${job.brandColor}12`,
                          color: job.brandColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '800',
                          fontSize: '12.5px',
                          letterSpacing: '-0.02em',
                          flexShrink: 0
                        }}
                      >
                        {job.initials}
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#0B122F', lineHeight: '1.2' }}>
                          {job.company}
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#94A3B8', marginTop: '2px' }}>
                          Posted {job.postedTime}
                        </div>
                      </div>
                    </div>

                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '11.5px',
                        fontWeight: '600',
                        color: job.matchPercentage >= 95 ? '#059669' : '#2563EB',
                        backgroundColor: job.matchPercentage >= 95 ? '#ECFDF5' : '#EFF6FF',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {job.matchPercentage}% Match
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3
                    style={{
                      fontSize: '15.5px',
                      fontWeight: '700',
                      color: '#0B122F',
                      lineHeight: '1.35',
                      marginBottom: '10px'
                    }}
                  >
                    {job.title}
                  </h3>

                  {/* Inline Clean Metadata: Location · Job Type · Applicants */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '12px',
                      fontSize: '12px',
                      color: '#64748B',
                      marginBottom: '12px'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} color="#94A3B8" /> {job.location}
                    </span>
                    <span style={{ color: '#CBD5E1' }}>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Briefcase size={12} color="#94A3B8" /> {job.jobType}
                    </span>
                    <span style={{ color: '#CBD5E1' }}>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Users size={12} color="#94A3B8" /> {job.applicants} applied
                    </span>
                  </div>

                  {/* Salary Line */}
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B' }}>
                    {job.salary}
                  </div>
                </div>

                {/* Bottom Row: Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '8px',
                    paddingTop: '14px',
                    borderTop: '1px solid #F1F5F9'
                  }}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                    }}
                    style={{
                      padding: '7px 14px',
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: '#475569',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    Details
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleToggleApply(e, job)}
                    style={{
                      padding: '7px 16px',
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: '#FFFFFF',
                      backgroundColor: isApplied ? '#10B981' : '#304FE8',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'background-color 0.15s ease'
                    }}
                  >
                    {isApplied ? (
                      <>
                        <Check size={13} /> Applied
                      </>
                    ) : (
                      'Apply'
                    )}
                  </button>
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
          <Briefcase size={36} color="#94A3B8" style={{ margin: '0 auto 12px' }} />
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
            No matching jobs found
          </h3>
          <p style={{ fontSize: '13px', color: '#64748B', maxWidth: '420px', margin: '0 auto 16px' }}>
            {statusFilter === 'applied job'
              ? "You haven't applied to any positions in this category yet. Explore available jobs and click Apply to track your submissions."
              : 'Try broadening your search term or selecting a different job type filter.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setJobTypeFilter('all');
              setStatusFilter('all');
            }}
            style={{
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#304FE8',
              backgroundColor: '#EEF2FF',
              border: '1px solid #D9E2FF',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* 3. Job Details Modal */}
      {selectedJob && (
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
          onClick={() => setSelectedJob(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.25)',
              padding: '32px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              <X size={16} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: `${selectedJob.brandColor}12`,
                  color: selectedJob.brandColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '16px',
                  flexShrink: 0
                }}
              >
                {selectedJob.initials}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0B122F' }}>
                  {selectedJob.company}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                  <MapPin size={12} color="#64748B" />
                  <span style={{ fontSize: '12.5px', color: '#64748B' }}>{selectedJob.location}</span>
                  <span style={{ color: '#CBD5E1' }}>•</span>
                  <span style={{ fontSize: '12.5px', color: '#64748B' }}>Posted {selectedJob.postedTime}</span>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0B122F', marginBottom: '14px' }}>
              {selectedJob.title}
            </h2>

            {/* Badges Bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: selectedJob.matchPercentage >= 95 ? '#047857' : '#304FE8',
                  backgroundColor: selectedJob.matchPercentage >= 95 ? '#ECFDF5' : '#EEF2FF',
                  border: selectedJob.matchPercentage >= 95 ? '1px solid #A7F3D0' : '1px solid #C7D2FE',
                  padding: '4px 10px',
                  borderRadius: '6px'
                }}
              >
                {selectedJob.matchPercentage}% Profile Match
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#334155',
                  backgroundColor: '#F1F5F9',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid #E2E8F0'
                }}
              >
                {selectedJob.jobType}
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: '#475569',
                  backgroundColor: '#F8FAFC',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid #E2E8F0'
                }}
              >
                {selectedJob.applicants} applied applicants
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#0B122F',
                  backgroundColor: '#F8FAFC',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid #E2E8F0'
                }}
              >
                {selectedJob.salary}
              </span>
            </div>

            {/* Role Overview */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#0B122F', textTransform: 'uppercase', marginBottom: '6px' }}>
                Role Overview
              </div>
              <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.55' }}>
                {selectedJob.description}
              </p>
            </div>

            {/* Requirements */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#0B122F', textTransform: 'uppercase', marginBottom: '8px' }}>
                Requirements & Trade Credentials
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedJob.requirements.map((req, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155' }}>
                    <CheckCircle2 size={15} color="#304FE8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#0B122F', textTransform: 'uppercase', marginBottom: '8px' }}>
                Apprentice Benefits & Placement
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedJob.benefits.map((ben, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155' }}>
                    <Check size={14} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid #E2E4EE'
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                style={{
                  padding: '9px 18px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#475569',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              <button
                type="button"
                onClick={(e) => {
                  handleToggleApply(e, selectedJob);
                }}
                style={{
                  padding: '9px 24px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  backgroundColor: appliedJobs.includes(selectedJob.id) ? '#10B981' : '#304FE8',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(48, 79, 232, 0.25)'
                }}
              >
                {appliedJobs.includes(selectedJob.id) ? (
                  <>
                    <Check size={14} /> Applied
                  </>
                ) : (
                  'Apply with JIS Profile'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
