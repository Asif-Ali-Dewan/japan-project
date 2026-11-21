import React, { useState, useMemo } from 'react';
import {
  User,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  Plus,
  Trash2,
  Camera,
  X,
  Check
} from 'lucide-react';

const INITIAL_PROFILE = {
  firstName: 'Alex',
  lastName: 'Morgan',
  email: 'alex.morgan@samuraitalent.io',
  headline: 'Automotive Diagnostic Technician & Electrical Systems Specialist',
  bio: 'Specializing in internal combustion overhaul, OBD-II diagnostics, 3-phase electrical troubleshooting, and Japanese Industrial Standards (JIS) workshop safety.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80',
  skills: [
    'OBD-II Diagnostics',
    'Engine Disassembly',
    'CAN-Bus Testing',
    'Hydraulic Braking',
    '3-Phase Wiring',
    'TIG & MIG Welding'
  ],
  certifications: [
    {
      id: 1,
      title: 'Automotive Electrical Systems Level 2',
      issuer: 'Japan Technical Skills Association',
      date: 'Oct 2025',
      credentialId: 'JIS-AUT-2025-882'
    },
    {
      id: 2,
      title: 'Occupational Safety & Hazardous Materials Protocol',
      issuer: 'Ministry of Health, Labour and Welfare (Japan)',
      date: 'Jan 2025',
      credentialId: 'MHLW-SAFE-9941'
    }
  ],
  interests: [
    'Electric Vehicle Powertrains',
    'Robotics Automation',
    'Renewable Microgrids'
  ],
  education: [
    {
      id: 1,
      school: 'Tokyo Technical Polytechnic Institute',
      degree: 'Associate Diploma',
      field: 'Applied Automotive & Mechanical Engineering',
      period: '2022 - 2024'
    }
  ],
  experiences: [
    {
      id: 1,
      role: 'Junior Diagnostic Apprentice',
      company: 'Yokohama Precision Motors Lab',
      location: 'Yokohama, Japan',
      period: 'Jan 2024 - Present',
      description: 'Performed OBD-II diagnostics, engine sensor troubleshooting, and scheduled maintenance under master technicians.'
    }
  ]
};

export default function ProfileView() {
  // Saved snapshot for dirty detection
  const [savedData, setSavedData] = useState(INITIAL_PROFILE);

  // Form Fields State
  const [firstName, setFirstName] = useState(INITIAL_PROFILE.firstName);
  const [lastName, setLastName] = useState(INITIAL_PROFILE.lastName);
  const [email, setEmail] = useState(INITIAL_PROFILE.email);
  const [headline, setHeadline] = useState(INITIAL_PROFILE.headline);
  const [bio, setBio] = useState(INITIAL_PROFILE.bio);
  const [avatar, setAvatar] = useState(INITIAL_PROFILE.avatar);
  const [skills, setSkills] = useState(INITIAL_PROFILE.skills);
  const [certifications, setCertifications] = useState(INITIAL_PROFILE.certifications);
  const [interests, setInterests] = useState(INITIAL_PROFILE.interests);
  const [education, setEducation] = useState(INITIAL_PROFILE.education);
  const [experiences, setExperiences] = useState(INITIAL_PROFILE.experiences);

  // Input states for additions
  const [skillInput, setSkillInput] = useState('');
  const [interestInput, setInterestInput] = useState('');

  // Expandable form states
  const [showAddCert, setShowAddCert] = useState(false);
  const [newCert, setNewCert] = useState({ title: '', issuer: '', date: '', credentialId: '' });

  const [showAddEdu, setShowAddEdu] = useState(false);
  const [newEdu, setNewEdu] = useState({ school: '', degree: '', field: '', period: '' });

  const [showAddExp, setShowAddExp] = useState(false);
  const [newExp, setNewExp] = useState({ role: '', company: '', location: '', period: '', description: '' });

  // Save Feedback Toast
  const [showToast, setShowToast] = useState(false);

  // Check if any field has changed compared to savedData
  const isDirty = useMemo(() => {
    const currentSnapshot = {
      firstName,
      lastName,
      email,
      headline,
      bio,
      avatar,
      skills,
      certifications,
      interests,
      education,
      experiences
    };
    return JSON.stringify(currentSnapshot) !== JSON.stringify(savedData);
  }, [
    firstName,
    lastName,
    email,
    headline,
    bio,
    avatar,
    skills,
    certifications,
    interests,
    education,
    experiences,
    savedData
  ]);

  // Skills handlers
  const handleAddSkill = (e) => {
    e?.preventDefault();
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  // Certifications handlers
  const handleAddCertification = (e) => {
    e.preventDefault();
    if (!newCert.title.trim() || !newCert.issuer.trim()) return;
    setCertifications([
      ...certifications,
      { id: Date.now(), ...newCert }
    ]);
    setNewCert({ title: '', issuer: '', date: '', credentialId: '' });
    setShowAddCert(false);
  };

  const handleRemoveCert = (id) => {
    setCertifications(certifications.filter((c) => c.id !== id));
  };

  // Interests handlers
  const handleAddInterest = (e) => {
    e?.preventDefault();
    const trimmed = interestInput.trim();
    if (trimmed && !interests.includes(trimmed)) {
      setInterests([...interests, trimmed]);
      setInterestInput('');
    }
  };

  const handleRemoveInterest = (interestToRemove) => {
    setInterests(interests.filter((item) => item !== interestToRemove));
  };

  // Education handlers
  const handleAddEducation = (e) => {
    e.preventDefault();
    if (!newEdu.school.trim()) return;
    setEducation([
      ...education,
      { id: Date.now(), ...newEdu }
    ]);
    setNewEdu({ school: '', degree: '', field: '', period: '' });
    setShowAddEdu(false);
  };

  const handleRemoveEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  // Experience handlers
  const handleAddExperience = (e) => {
    e.preventDefault();
    if (!newExp.role.trim() || !newExp.company.trim()) return;
    setExperiences([
      ...experiences,
      { id: Date.now(), ...newExp }
    ]);
    setNewExp({ role: '', company: '', location: '', period: '', description: '' });
    setShowAddExp(false);
  };

  const handleRemoveExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  // Save handler
  const handleSave = (e) => {
    e?.preventDefault();
    if (!isDirty) return;

    setSavedData({
      firstName,
      lastName,
      email,
      headline,
      bio,
      avatar,
      skills,
      certifications,
      interests,
      education,
      experiences
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '14px',
    border: '1px solid #E2E4EE',
    boxShadow: '0 2px 12px rgba(11, 18, 47, 0.04)',
    padding: '24px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  const inputStyle = {
    width: '100%',
    padding: '9px 12px',
    fontSize: '13.5px',
    color: '#0B122F',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E4EE',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.15s ease'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12.5px',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '5px'
  };

  const sectionHeadingStyle = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#0B122F',
    paddingBottom: '8px',
    borderBottom: '1px solid #E2E4EE',
    marginBottom: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto', paddingBottom: '60px' }}>
      {/* Toast Notification */}
      {showToast && (
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
            fontSize: '14px',
            fontWeight: '600',
            zIndex: 1000
          }}
        >
          <Check size={16} color="#10B981" />
          <span>Profile changes saved successfully</span>
        </div>
      )}

      {/* Header Row: Title on Left, Save Profile Button on Top Right */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '22px',
          flexWrap: 'wrap'
        }}
      >
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0B122F', marginBottom: '4px' }}>
            My Profile
          </h1>
          <p style={{ fontSize: '13px', color: '#64748B' }}>
            Manage your personal details, technical skills, certifications, and experience.
          </p>
        </div>

        {/* Top-Right Save Profile Button: Enabled only if changes were made */}
        <button
          type="button"
          onClick={handleSave}
          disabled={!isDirty}
          style={{
            padding: '9px 20px',
            fontSize: '13px',
            fontWeight: '600',
            color: isDirty ? '#FFFFFF' : '#94A3B8',
            backgroundColor: isDirty ? '#304FE8' : '#F1F5F9',
            border: isDirty ? 'none' : '1px solid #E2E8F0',
            borderRadius: '8px',
            cursor: isDirty ? 'pointer' : 'not-allowed',
            boxShadow: isDirty ? '0 2px 8px rgba(48, 79, 232, 0.25)' : 'none',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title={isDirty ? 'Click to save changes' : 'No changes to save'}
        >
          <Check size={14} color={isDirty ? '#FFFFFF' : '#94A3B8'} />
          <span>Save Profile</span>
        </button>
      </div>

      {/* 2-Column Side-by-Side Cards Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        {/* Card 1 (Left): Personal Info, Skills & Interests */}
        <div style={cardStyle}>
          {/* Avatar / Photo Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '14px 18px',
              backgroundColor: '#F8FAFC',
              borderRadius: '10px',
              border: '1px solid #E2E4EE'
            }}
          >
            <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
              <img
                src={avatar}
                alt="Profile Avatar"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #FFFFFF'
                }}
              />
              <label
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  right: '-2px',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  backgroundColor: '#304FE8',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: '2px solid #FFFFFF'
                }}
                title="Change Photo"
              >
                <Camera size={11} />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setAvatar(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
              </label>
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#0B122F' }}>
                {firstName} {lastName}
              </div>
              <div style={{ fontSize: '12.5px', color: '#64748B', marginTop: '1px' }}>
                {headline || 'Technical Apprentice'}
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div>
            <div style={sectionHeadingStyle}>
              <span>Basic Information</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              <div>
                <label style={labelStyle}>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                required
              />
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={labelStyle}>Professional Headline</label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="e.g. Automotive Diagnostic Technician"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Bio & Learning Focus</label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Brief overview of your background and technical learning focus..."
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
          </div>

          {/* Interests */}
          <div>
            <div style={sectionHeadingStyle}>
              <span>Interests</span>
              <span style={{ fontSize: '12px', fontWeight: '500', color: '#64748B' }}>
                {interests.length} added
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <input
                type="text"
                value={interestInput}
                onChange={(e) => setInterestInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddInterest();
                  }
                }}
                placeholder="Type an interest and press Enter..."
                style={{ ...inputStyle, flex: 1 }}
              />
              <button
                type="button"
                onClick={handleAddInterest}
                style={{
                  padding: '0 14px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#304FE8',
                  backgroundColor: '#EEF2FF',
                  border: '1px solid #D9E2FF',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Plus size={13} /> Add
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {interests.map((interest) => (
                <span
                  key={interest}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '5px 10px',
                    backgroundColor: '#F1F5F9',
                    color: '#334155',
                    fontSize: '12.5px',
                    fontWeight: '500',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  {interest}
                  <button
                    type="button"
                    onClick={() => handleRemoveInterest(interest)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                      padding: 0
                    }}
                    title="Remove"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 (Right): Skills, Experience, Certifications & Education */}
        <div style={cardStyle}>
          {/* Skills */}
          <div>
            <div style={sectionHeadingStyle}>
              <span>Skills</span>
              <span style={{ fontSize: '12px', fontWeight: '500', color: '#64748B' }}>
                {skills.length} added
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill();
                  }
                }}
                placeholder="Type a skill and press Enter..."
                style={{ ...inputStyle, flex: 1 }}
              />
              <button
                type="button"
                onClick={handleAddSkill}
                style={{
                  padding: '0 14px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#304FE8',
                  backgroundColor: '#EEF2FF',
                  border: '1px solid #D9E2FF',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Plus size={13} /> Add
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '5px 10px',
                    backgroundColor: '#F1F5F9',
                    color: '#334155',
                    fontSize: '12.5px',
                    fontWeight: '500',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                      padding: 0
                    }}
                    title="Remove"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Work & Apprenticeship Experience */}
          <div>
            <div style={sectionHeadingStyle}>
              <span>Experience</span>
              {!showAddExp && (
                <button
                  type="button"
                  onClick={() => setShowAddExp(true)}
                  style={{
                    fontSize: '12.5px',
                    fontWeight: '600',
                    color: '#304FE8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Plus size={13} /> Add Experience
                </button>
              )}
            </div>

            {experiences.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: showAddExp ? '12px' : '0' }}>
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0B122F' }}>
                        {exp.role}
                      </div>
                      <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                        {exp.company} {exp.location ? `• ${exp.location}` : ''} {exp.period ? `• ${exp.period}` : ''}
                      </div>
                      {exp.description && (
                        <div style={{ fontSize: '12px', color: '#64748B', marginTop: '5px', lineHeight: '1.4' }}>
                          {exp.description}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(exp.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#94A3B8',
                        cursor: 'pointer',
                        padding: '3px'
                      }}
                      title="Delete experience"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              !showAddExp && (
                <div style={{ fontSize: '12.5px', color: '#94A3B8', fontStyle: 'italic', marginBottom: '6px' }}>
                  No experience added yet.
                </div>
              )
            )}

            {showAddExp && (
              <div
                style={{
                  padding: '14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px dashed #CBD5E1',
                  marginTop: '8px'
                }}
              >
                <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#0B122F', marginBottom: '10px' }}>
                  New Experience
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <label style={labelStyle}>Job Title *</label>
                    <input
                      type="text"
                      placeholder="e.g. Apprentice Tech"
                      value={newExp.role}
                      onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company *</label>
                    <input
                      type="text"
                      placeholder="e.g. Tokyo Motors"
                      value={newExp.company}
                      onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <label style={labelStyle}>Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Yokohama"
                      value={newExp.location}
                      onChange={(e) => setNewExp({ ...newExp, location: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Period</label>
                    <input
                      type="text"
                      placeholder="e.g. 2024 - Present"
                      value={newExp.period}
                      onChange={(e) => setNewExp({ ...newExp, period: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <label style={labelStyle}>Description</label>
                  <textarea
                    rows={2}
                    placeholder="Key responsibilities..."
                    value={newExp.description}
                    onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setShowAddExp(false)}
                    style={{
                      padding: '5px 12px',
                      fontSize: '12px',
                      borderRadius: '6px',
                      border: '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      cursor: 'pointer',
                      color: '#475569'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleAddExperience}
                    style={{
                      padding: '5px 14px',
                      fontSize: '12px',
                      fontWeight: '600',
                      borderRadius: '6px',
                      border: 'none',
                      background: '#304FE8',
                      color: '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Certifications */}
          <div>
            <div style={sectionHeadingStyle}>
              <span>Certifications</span>
              {!showAddCert && (
                <button
                  type="button"
                  onClick={() => setShowAddCert(true)}
                  style={{
                    fontSize: '12.5px',
                    fontWeight: '600',
                    color: '#304FE8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Plus size={13} /> Add Certification
                </button>
              )}
            </div>

            {certifications.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: showAddCert ? '12px' : '0' }}>
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#0B122F' }}>
                        {cert.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                        {cert.issuer} {cert.date ? `• ${cert.date}` : ''} {cert.credentialId ? `• ID: ${cert.credentialId}` : ''}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveCert(cert.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#94A3B8',
                        cursor: 'pointer',
                        padding: '3px'
                      }}
                      title="Delete certification"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              !showAddCert && (
                <div style={{ fontSize: '12.5px', color: '#94A3B8', fontStyle: 'italic', marginBottom: '6px' }}>
                  No certifications added yet.
                </div>
              )
            )}

            {showAddCert && (
              <div
                style={{
                  padding: '14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px dashed #CBD5E1',
                  marginTop: '8px'
                }}
              >
                <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#0B122F', marginBottom: '10px' }}>
                  New Certification
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <label style={labelStyle}>Title *</label>
                    <input
                      type="text"
                      placeholder="e.g. Electrical Safety License"
                      value={newCert.title}
                      onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Issuing Org *</label>
                    <input
                      type="text"
                      placeholder="e.g. JIS Technical Board"
                      value={newCert.issuer}
                      onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <label style={labelStyle}>Date</label>
                    <input
                      type="text"
                      placeholder="e.g. Oct 2025"
                      value={newCert.date}
                      onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>ID (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. CERT-2025-998"
                      value={newCert.credentialId}
                      onChange={(e) => setNewCert({ ...newCert, credentialId: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setShowAddCert(false)}
                    style={{
                      padding: '5px 12px',
                      fontSize: '12px',
                      borderRadius: '6px',
                      border: '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      cursor: 'pointer',
                      color: '#475569'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleAddCertification}
                    style={{
                      padding: '5px 14px',
                      fontSize: '12px',
                      fontWeight: '600',
                      borderRadius: '6px',
                      border: 'none',
                      background: '#304FE8',
                      color: '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Education (Not mandatory) */}
          <div>
            <div style={sectionHeadingStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Education</span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#64748B',
                    backgroundColor: '#F1F5F9',
                    padding: '2px 7px',
                    borderRadius: '4px'
                  }}
                >
                  Not mandatory
                </span>
              </div>
              {!showAddEdu && (
                <button
                  type="button"
                  onClick={() => setShowAddEdu(true)}
                  style={{
                    fontSize: '12.5px',
                    fontWeight: '600',
                    color: '#304FE8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Plus size={13} /> Add Education
                </button>
              )}
            </div>

            {education.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: showAddEdu ? '12px' : '0' }}>
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#0B122F' }}>
                        {edu.school}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                        {edu.degree} {edu.field ? `• ${edu.field}` : ''} {edu.period ? `• ${edu.period}` : ''}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveEducation(edu.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#94A3B8',
                        cursor: 'pointer',
                        padding: '3px'
                      }}
                      title="Delete education"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              !showAddEdu && (
                <div style={{ fontSize: '12.5px', color: '#94A3B8', fontStyle: 'italic', marginBottom: '6px' }}>
                  No education records added.
                </div>
              )
            )}

            {showAddEdu && (
              <div
                style={{
                  padding: '14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px dashed #CBD5E1',
                  marginTop: '8px'
                }}
              >
                <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#0B122F', marginBottom: '10px' }}>
                  New Education Entry
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <label style={labelStyle}>School / Institution</label>
                    <input
                      type="text"
                      placeholder="e.g. Tokyo Tech Institute"
                      value={newEdu.school}
                      onChange={(e) => setNewEdu({ ...newEdu, school: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Degree / Diploma</label>
                    <input
                      type="text"
                      placeholder="e.g. Trade Diploma"
                      value={newEdu.degree}
                      onChange={(e) => setNewEdu({ ...newEdu, degree: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <label style={labelStyle}>Field of Study</label>
                    <input
                      type="text"
                      placeholder="e.g. Mechanical Systems"
                      value={newEdu.field}
                      onChange={(e) => setNewEdu({ ...newEdu, field: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Period</label>
                    <input
                      type="text"
                      placeholder="e.g. 2022 - 2024"
                      value={newEdu.period}
                      onChange={(e) => setNewEdu({ ...newEdu, period: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setShowAddEdu(false)}
                    style={{
                      padding: '5px 12px',
                      fontSize: '12px',
                      borderRadius: '6px',
                      border: '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      cursor: 'pointer',
                      color: '#475569'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleAddEducation}
                    style={{
                      padding: '5px 14px',
                      fontSize: '12px',
                      fontWeight: '600',
                      borderRadius: '6px',
                      border: 'none',
                      background: '#304FE8',
                      color: '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
