import React, { useState, useRef } from 'react';
import {
  BookOpen,
  Plus,
  Users,
  Award,
  Star,
  DollarSign,
  ChevronRight,
  Clock,
  X,
  Check,
  ClipboardCheck,
  FileText,
  Calendar,
  Send,
  ShieldCheck,
  Video,
  File,
  Download,
  Play,
  Eye,
  Trash2,
  ExternalLink,
  Layers,
  Sparkles,
  UploadCloud,
  ArrowRight
} from 'lucide-react';
import { assignmentService } from '../../data/assignmentService';
import { courseContentService } from '../../data/courseContentService';

const INITIAL_COURSES = [
  {
    id: 'crs-1',
    title: 'Automotive Diagnostic Specialist & OBD-II Mastery',
    category: 'Automotive & Mechanical Track',
    apprenticesCount: 540,
    completionRate: '94%',
    rating: 4.96,
    reviewsCount: 328,
    monthlyRevenue: '¥620,000',
    totalModules: 14,
    capstonesCount: 4,
    status: 'Published'
  },
  {
    id: 'crs-2',
    title: 'Commercial HVAC & Inverter Heat Pump Systems',
    category: 'Electrical & HVAC Track',
    apprenticesCount: 410,
    completionRate: '91%',
    rating: 4.94,
    reviewsCount: 245,
    monthlyRevenue: '¥480,000',
    totalModules: 12,
    capstonesCount: 3,
    status: 'Published'
  },
  {
    id: 'crs-3',
    title: 'Hydraulic Pipework & JIS Low-Hydrogen Welding',
    category: 'Welding & Heavy Piping Track',
    apprenticesCount: 320,
    completionRate: '96%',
    rating: 4.98,
    reviewsCount: 198,
    monthlyRevenue: '¥380,000',
    totalModules: 10,
    capstonesCount: 3,
    status: 'Published'
  },
  {
    id: 'crs-4',
    title: 'Electric Vehicle High-Voltage Safety & Battery Servicing',
    category: 'Automotive & Mechanical Track',
    apprenticesCount: 0,
    completionRate: 'Draft',
    rating: 0,
    reviewsCount: 0,
    monthlyRevenue: '¥0',
    totalModules: 8,
    capstonesCount: 2,
    status: 'Draft'
  }
];

export default function ManageCoursesView() {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Automotive & Mechanical Track');
  const [toastMessage, setToastMessage] = useState('');

  // Assign lab form state
  const [assignCourse, setAssignCourse] = useState(INITIAL_COURSES[0].title);
  const [assignTitle, setAssignTitle] = useState('');
  const [assignDueDate, setAssignDueDate] = useState('Friday, Dec 05, 2026 · 11:59 PM');
  const [assignJis, setAssignJis] = useState('JIS D 1601 Technical Standard');
  const [assignDesc, setAssignDesc] = useState('');
  const [assignArtifacts, setAssignArtifacts] = useState('Oscilloscope Capture, Telemetry Log (CSV), JIS Inspection Form');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newCourse = {
      id: `crs-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      apprenticesCount: 0,
      completionRate: 'Draft',
      rating: 0,
      reviewsCount: 0,
      monthlyRevenue: '¥0',
      totalModules: 1,
      capstonesCount: 1,
      status: 'Draft'
    };

    setCourses([newCourse, ...courses]);
    triggerToast(`Created curriculum: "${newTitle}"`);
    setNewTitle('');
    setShowAddModal(false);
  };

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (!assignTitle.trim()) return;

    assignmentService.createAssignment({
      title: assignTitle.trim(),
      courseName: assignCourse,
      dueDate: assignDueDate,
      jisStandard: assignJis,
      description: assignDesc || 'Complete required practical laboratory procedure and upload verifiable technical evidence.',
      requiredArtifacts: assignArtifacts.split(',').map(s => s.trim()).filter(Boolean)
    });

    triggerToast(`Assigned "${assignTitle}" to enrolled learners!`);
    setAssignTitle('');
    setAssignDesc('');
    setShowAssignModal(false);
  };

  // Content manager modal state
  const [contentModalCourse, setContentModalCourse] = useState(null);
  const [courseMaterials, setCourseMaterials] = useState([]);
  const [contentTab, setContentTab] = useState('list'); // 'list' | 'add'
  const [addMaterialType, setAddMaterialType] = useState('video'); // 'video' | 'text' | 'pdf'

  // Form states for new video
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoDuration, setVideoDuration] = useState('35 min');
  const [videoBadge, setVideoBadge] = useState('4K Workshop Studio');
  const [videoDesc, setVideoDesc] = useState('');
  const [uploadedVideoFile, setUploadedVideoFile] = useState(null);
  const [uploadedVideoName, setUploadedVideoName] = useState('');
  const [uploadedVideoSize, setUploadedVideoSize] = useState('');
  const [showVideoUrlInput, setShowVideoUrlInput] = useState(false);
  const videoInputRef = useRef(null);

  // Form states for new text
  const [textTitle, setTextTitle] = useState('');
  const [textReadTime, setTextReadTime] = useState('12 min read');
  const [textContent, setTextContent] = useState('');
  const [uploadedTextFileName, setUploadedTextFileName] = useState('');
  const textInputRef = useRef(null);

  // Form states for new PDF
  const [pdfTitle, setPdfTitle] = useState('');
  const [uploadedPdfFile, setUploadedPdfFile] = useState(null);
  const [uploadedPdfName, setUploadedPdfName] = useState('');
  const [uploadedPdfSize, setUploadedPdfSize] = useState('');
  const pdfInputRef = useRef(null);

  // Handlers for file uploads
  const handleVideoFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedVideoFile(file);
    setUploadedVideoName(file.name);
    const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
    setUploadedVideoSize(`${sizeMb} MB`);
    const objUrl = URL.createObjectURL(file);
    setVideoUrl(objUrl);
    if (!videoTitle.trim()) {
      const clean = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setVideoTitle(clean.charAt(0).toUpperCase() + clean.slice(1));
    }
  };

  const handleTextFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const sizeKb = (file.size / 1024).toFixed(1);
    setUploadedTextFileName(`${file.name} (${sizeKb} KB)`);
    if (!textTitle.trim()) {
      const clean = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setTextTitle(clean.charAt(0).toUpperCase() + clean.slice(1));
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result || '';
      setTextContent(content);
      const words = content.trim().split(/\s+/).length;
      const mins = Math.max(1, Math.round(words / 180));
      setTextReadTime(`${mins} min read`);
    };
    reader.readAsText(file);
  };

  const handlePdfFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedPdfFile(file);
    setUploadedPdfName(file.name);
    const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
    const sizeStr = file.size > 1024 * 1024 ? `${sizeMb} MB` : `${(file.size / 1024).toFixed(1)} KB`;
    setUploadedPdfSize(sizeStr);
    if (!pdfTitle.trim()) {
      const clean = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setPdfTitle(clean.charAt(0).toUpperCase() + clean.slice(1));
    }
  };

  // Material preview modal
  const [previewMaterial, setPreviewMaterial] = useState(null);

  // Apprentice View Preview modal
  const [apprenticePreviewCourse, setApprenticePreviewCourse] = useState(null);
  const [previewApprenticeMaterials, setPreviewApprenticeMaterials] = useState([]);
  const [selectedApprenticeMaterial, setSelectedApprenticeMaterial] = useState(null);

  const handleOpenApprenticePreview = (course) => {
    setApprenticePreviewCourse(course);
    let mats = courseContentService.getMaterialsByCourse(course.title);
    if (!mats || mats.length === 0) {
      mats = courseContentService.getAllMaterials();
    }
    setPreviewApprenticeMaterials(mats || []);
    setSelectedApprenticeMaterial(mats && mats.length > 0 ? mats[0] : null);
  };

  const handleOpenContentModal = (course) => {
    setContentModalCourse(course);
    setCourseMaterials(courseContentService.getMaterialsByCourse(course.title));
    setContentTab('list');
    setAddMaterialType('video');
  };

  const handleAddMaterial = (e) => {
    e.preventDefault();
    if (!contentModalCourse) return;

    let newMatData = null;
    if (addMaterialType === 'video') {
      if (!videoTitle.trim()) return;
      newMatData = {
        type: 'video',
        title: videoTitle.trim(),
        duration: videoDuration || '30 min',
        videoUrl: videoUrl.trim() || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        fileName: uploadedVideoName || '',
        fileSize: uploadedVideoSize || '',
        badge: videoBadge || '4K Workshop Studio',
        description: videoDesc || (uploadedVideoName ? `Directly uploaded master video: ${uploadedVideoName}` : 'Practical diagnostic and workshop demonstration.')
      };
      setVideoTitle('');
      setVideoUrl('');
      setVideoDesc('');
      setUploadedVideoFile(null);
      setUploadedVideoName('');
      setUploadedVideoSize('');
    } else if (addMaterialType === 'text') {
      if (!textTitle.trim()) return;
      newMatData = {
        type: 'text',
        title: textTitle.trim(),
        readTime: textReadTime || '10 min read',
        content: textContent || 'Theoretical background and procedural standards.',
        fileName: uploadedTextFileName || '',
        badge: 'Theory Guide'
      };
      setTextTitle('');
      setTextContent('');
      setUploadedTextFileName('');
    } else if (addMaterialType === 'pdf') {
      if (!pdfTitle.trim()) return;
      newMatData = {
        type: 'pdf',
        title: pdfTitle.trim(),
        fileName: uploadedPdfName || 'JIS_Schematic_Blueprint.pdf',
        fileSize: uploadedPdfSize || '3.8 MB',
        badge: 'Official JIS PDF'
      };
      setPdfTitle('');
      setUploadedPdfFile(null);
      setUploadedPdfName('');
      setUploadedPdfSize('');
    }

    if (newMatData) {
      courseContentService.addMaterial(contentModalCourse.title, newMatData);
      setCourseMaterials(courseContentService.getMaterialsByCourse(contentModalCourse.title));
      triggerToast(`Added ${addMaterialType.toUpperCase()} content to ${contentModalCourse.title}!`);
      setContentTab('list');
    }
  };

  const handleDeleteMaterial = (matId) => {
    if (!contentModalCourse) return;
    courseContentService.deleteMaterial(contentModalCourse.title, matId);
    setCourseMaterials(courseContentService.getMaterialsByCourse(contentModalCourse.title));
    triggerToast('Removed course material');
  };

  const handleOpenAssignForCourse = (courseTitle) => {
    setAssignCourse(courseTitle);
    setShowAssignModal(true);
  };

  const handleTogglePublish = (courseId) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id === courseId) {
          const nextStatus = c.status === 'Published' ? 'Draft' : 'Published';
          triggerToast(
            nextStatus === 'Published'
              ? `Published "${c.title}" to public catalog!`
              : `Switched "${c.title}" to Draft mode`
          );
          if (contentModalCourse && contentModalCourse.id === c.id) {
            setContentModalCourse({ ...contentModalCourse, status: nextStatus });
          }
          return {
            ...c,
            status: nextStatus,
            completionRate: nextStatus === 'Published' && c.completionRate === 'Draft' ? '94%' : c.completionRate
          };
        }
        return c;
      })
    );
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
            My Courses & Workshop Curriculums
          </h1>
          <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0' }}>
            Manage published technical training tracks, syllabus modules, and apprentice progress metrics.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Main Action: Assign New Lab to Learners */}
          <button
            type="button"
            onClick={() => setShowAssignModal(true)}
            style={{
              padding: '9px 18px',
              fontSize: '13px',
              fontWeight: '700',
              color: '#FFFFFF',
              backgroundColor: '#304FE8',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              boxShadow: '0 2px 8px rgba(48, 79, 232, 0.3)'
            }}
          >
            <ClipboardCheck size={16} /> Assign New Lab to Learners
          </button>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            style={{
              padding: '9px 16px',
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
            <Plus size={15} /> Create Curriculum
          </button>
        </div>
      </div>

      {/* Courses Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '22px' }}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(11, 18, 47, 0.04)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Category Pill + Status Badge Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#475569',
                    backgroundColor: '#F1F5F9',
                    padding: '4px 12px',
                    borderRadius: '100px'
                  }}
                >
                  {course.category}
                </span>

                <button
                  type="button"
                  onClick={() => handleTogglePublish(course.id)}
                  title={course.status === 'Published' ? 'Click to unpublish / switch to Draft' : 'Click to publish curriculum to students'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: course.status === 'Published' ? '#059669' : '#64748B',
                    backgroundColor: course.status === 'Published' ? '#ECFDF5' : '#F1F5F9',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    border: course.status === 'Published' ? '1px solid #A7F3D0' : '1px solid #E2E8F0',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                    if (course.status === 'Draft') {
                      e.currentTarget.style.backgroundColor = '#ECFDF5';
                      e.currentTarget.style.color = '#059669';
                      e.currentTarget.style.borderColor = '#A7F3D0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    if (course.status === 'Draft') {
                      e.currentTarget.style.backgroundColor = '#F1F5F9';
                      e.currentTarget.style.color = '#64748B';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: course.status === 'Published' ? '#10B981' : '#94A3B8'
                    }}
                  />
                  {course.status}
                </button>
              </div>

              {/* Course Title */}
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  color: '#0B122F',
                  lineHeight: '1.35',
                  letterSpacing: '-0.01em',
                  marginBottom: '8px'
                }}
              >
                {course.title}
              </h3>

              {/* Curriculum Structure / Details */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontSize: '12.5px',
                  color: '#64748B',
                  marginBottom: '18px'
                }}
              >
                <BookOpen size={14} style={{ color: '#64748B', flexShrink: 0 }} />
                <span>
                  Curriculum Structure: <strong>{course.totalModules} modules</strong> • <strong>{course.capstonesCount} JIS capstones</strong>
                </span>
              </div>

              {/* 2x2 Stats Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                {/* 1. APPRENTICES */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.05em' }}>
                    APPRENTICES
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.01em' }}>
                    {course.apprenticesCount}
                  </div>
                </div>

                {/* 2. PASS RATE */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.05em' }}>
                    PASS RATE
                  </div>
                  <div
                    style={{
                      fontSize: '20px',
                      fontWeight: '800',
                      color: course.status === 'Draft' ? '#64748B' : '#059669',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {course.status === 'Draft' ? 'Draft' : course.completionRate}
                  </div>
                </div>

                {/* 3. RATING */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.05em' }}>
                    RATING
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#0B122F', display: 'flex', alignItems: 'center', gap: '5px', letterSpacing: '-0.01em' }}>
                    {course.rating > 0 ? (
                      <>
                        <span style={{ color: '#F59E0B' }}>★</span>
                        <span>{course.rating}</span>
                      </>
                    ) : (
                      <span style={{ color: '#64748B', fontSize: '16px' }}>New</span>
                    )}
                  </div>
                </div>

                {/* 4. MONTHLY REVENUE */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.05em' }}>
                    MONTHLY REVENUE
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.01em' }}>
                    {course.monthlyRevenue}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div>
              {course.status === 'Draft' ? (
                /* Draft Status: Publish to Learners Primary CTA */
                <button
                  type="button"
                  onClick={() => handleTogglePublish(course.id)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#059669',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    marginBottom: '10px',
                    boxShadow: '0 4px 14px rgba(5, 150, 105, 0.25)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#047857')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
                >
                  <Send size={15} />
                  <span>Publish Curriculum to Learners</span>
                </button>
              ) : (
                /* Published Status: Apprentice View Primary Action */
                <button
                  type="button"
                  onClick={() => handleOpenApprenticePreview(course)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#0F172A',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    marginBottom: '10px',
                    transition: 'background-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1E293B')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
                >
                  <span>Apprentice View</span>
                  <ArrowRight size={15} />
                </button>
              )}

              {/* Two split buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {course.status === 'Draft' ? (
                  <button
                    type="button"
                    onClick={() => handleOpenApprenticePreview(course)}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '10px',
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: '#334155',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.borderColor = '#CBD5E1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    <Eye size={14} style={{ color: '#64748B' }} />
                    <span>Preview Draft</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleOpenAssignForCourse(course.title)}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '10px',
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: '#334155',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.borderColor = '#CBD5E1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    <Plus size={14} style={{ color: '#64748B' }} />
                    <span>Assign Lab</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleOpenContentModal(course)}
                  style={{
                    padding: '10px 14px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '10px',
                    fontSize: '12.5px',
                    fontWeight: '600',
                    color: '#334155',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.style.borderColor = '#CBD5E1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <Layers size={14} style={{ color: '#64748B' }} />
                  <span>Manage Content</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Course Content & Materials Manager Modal */}
      {contentModalCourse && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 18, 47, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            padding: '20px'
          }}
          onClick={() => setContentModalCourse(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '860px',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: '#F8FAFC' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#EEF2FF', color: '#304FE8' }}>
                  {contentModalCourse.category}
                </span>
                <h2 style={{ fontSize: '19px', fontWeight: '800', color: '#0B122F', margin: '8px 0 4px' }}>
                  {contentModalCourse.title}
                </h2>
                <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0 }}>
                  Upload video lectures, text theory, PDF blueprints, or assign practical labs for learners.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => handleTogglePublish(contentModalCourse.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    backgroundColor: contentModalCourse.status === 'Published' ? '#059669' : '#304FE8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: contentModalCourse.status === 'Published' ? 'none' : '0 2px 8px rgba(48, 79, 232, 0.25)',
                    transition: 'all 0.15s ease'
                  }}
                  title={contentModalCourse.status === 'Published' ? 'Click to unpublish back to Draft' : 'Click to publish curriculum to students'}
                >
                  <Send size={13} />
                  <span>{contentModalCourse.status === 'Published' ? 'Status: Published' : 'Publish Curriculum'}</span>
                </button>

                <button
                  onClick={() => setContentModalCourse(null)}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
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
              </div>
            </div>

            {/* Inner Navigation Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', padding: '0 28px', backgroundColor: '#FFFFFF' }}>
              <button
                onClick={() => setContentTab('list')}
                style={{
                  padding: '12px 18px',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: 'none',
                  borderBottom: contentTab === 'list' ? '2.5px solid #304FE8' : '2.5px solid transparent',
                  color: contentTab === 'list' ? '#304FE8' : '#64748B',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Layers size={15} />
                <span>Published Materials ({courseMaterials.length})</span>
              </button>

              <button
                onClick={() => setContentTab('add')}
                style={{
                  padding: '12px 18px',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: 'none',
                  borderBottom: contentTab === 'add' ? '2.5px solid #304FE8' : '2.5px solid transparent',
                  color: contentTab === 'add' ? '#304FE8' : '#64748B',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <UploadCloud size={15} />
                <span>Upload Content</span>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
              {contentTab === 'list' ? (
                <div>
                  {courseMaterials.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748B' }}>
                      <FileText size={36} color="#CBD5E1" style={{ margin: '0 auto 12px' }} />
                      <div style={{ fontSize: '15px', fontWeight: '700', color: '#0B122F' }}>No materials published yet</div>
                      <p style={{ fontSize: '13px', margin: '6px 0 16px' }}>Click below to upload videos, text lessons, or PDF schematics.</p>
                      <button
                        onClick={() => setContentTab('add')}
                        style={{ padding: '8px 18px', borderRadius: '8px', border: 'none', backgroundColor: '#304FE8', color: '#FFFFFF', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                      >
                        + Add First Material
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {courseMaterials.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            padding: '16px 20px',
                            borderRadius: '12px',
                            border: '1px solid #E2E8F0',
                            backgroundColor: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '16px',
                            boxShadow: '0 1px 3px rgba(11, 18, 47, 0.03)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                            {/* Icon Type Box */}
                            <div
                              style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                backgroundColor:
                                  item.type === 'video' ? '#EFF6FF' :
                                  item.type === 'pdf' ? '#FEF2F2' :
                                  item.type === 'text' ? '#ECFDF5' : '#FFFBEB',
                                color:
                                  item.type === 'video' ? '#2563EB' :
                                  item.type === 'pdf' ? '#DC2626' :
                                  item.type === 'text' ? '#059669' : '#D97706',
                              }}
                            >
                              {item.type === 'video' && <Video size={20} />}
                              {item.type === 'pdf' && <FileText size={20} />}
                              {item.type === 'text' && <BookOpen size={20} />}
                              {item.type === 'assignment' && <ClipboardCheck size={20} />}
                            </div>

                            {/* Details */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                <span style={{ fontSize: '14.5px', fontWeight: '700', color: '#0B122F', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span style={{ fontSize: '10.5px', fontWeight: '700', padding: '2px 7px', borderRadius: '4px', backgroundColor: '#F1F5F9', color: '#475569', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <div style={{ fontSize: '12.5px', color: '#64748B', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                {item.duration && (
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    <Clock size={13} style={{ color: '#94A3B8' }} />
                                    <span>{item.duration}</span>
                                  </span>
                                )}
                                {item.readTime && (
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    <BookOpen size={13} style={{ color: '#94A3B8' }} />
                                    <span>{item.readTime}</span>
                                  </span>
                                )}
                                {item.fileName && (
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    <FileText size={13} style={{ color: '#94A3B8' }} />
                                    <span style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                      {item.fileName} {item.fileSize ? `(${item.fileSize})` : ''}
                                    </span>
                                  </span>
                                )}
                                {item.dueDate && (
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#D97706', fontWeight: '600' }}>
                                    <Calendar size={13} style={{ color: '#D97706' }} />
                                    <span>Due: {item.dueDate}</span>
                                  </span>
                                )}
                                <span style={{ color: '#CBD5E1' }}>•</span>
                                <span>Uploaded by {item.instructorName || 'Master Kenji Takahashi'}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                            <button
                              type="button"
                              onClick={() => setPreviewMaterial(item)}
                              style={{
                                padding: '7px 14px',
                                fontSize: '12.5px',
                                fontWeight: '700',
                                color: '#304FE8',
                                backgroundColor: '#EEF2FF',
                                border: '1px solid #D9E2FF',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                transition: 'all 0.15s ease'
                              }}
                            >
                              <Eye size={13} /> Preview
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteMaterial(item.id)}
                              style={{
                                padding: '7px 8px',
                                fontSize: '12px',
                                color: '#94A3B8',
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.15s ease'
                              }}
                              title="Delete Material"
                              onMouseEnter={(e) => { e.currentTarget.style.color = '#EF4444'; e.currentTarget.style.backgroundColor = '#FEE2E2'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Tab 2: Upload / Add Material Form */
                <form onSubmit={handleAddMaterial}>
                  {/* Select Material Type */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '8px' }}>
                      Choose Content Format *
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                      {[
                        { id: 'video', label: 'Video Lecture', icon: Video, desc: '4K Studio / MP4 Stream' },
                        { id: 'text', label: 'Text Theory Guide', icon: BookOpen, desc: 'Prose & Diagnostics' },
                        { id: 'pdf', label: 'PDF Document / JIS', icon: FileText, desc: 'Schematics & Codes' }
                      ].map((t) => {
                        const Icon = t.icon;
                        const active = addMaterialType === t.id;
                        return (
                          <div
                            key={t.id}
                            onClick={() => setAddMaterialType(t.id)}
                            style={{
                              padding: '12px 14px',
                              borderRadius: '10px',
                              border: active ? '2px solid #304FE8' : '1px solid #E2E8F0',
                              backgroundColor: active ? '#EEF2FF' : '#FFFFFF',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: active ? '#304FE8' : '#F1F5F9', color: active ? '#FFFFFF' : '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Icon size={16} />
                            </div>
                            <div>
                              <div style={{ fontSize: '13px', fontWeight: '700', color: active ? '#304FE8' : '#0B122F' }}>{t.label}</div>
                              <div style={{ fontSize: '10.5px', color: '#64748B' }}>{t.desc}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 1. VIDEO FIELDS */}
                  {addMaterialType === 'video' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Direct Video File Upload Area */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '8px' }}>
                          Upload Video File from Device *
                        </label>
                        <input
                          type="file"
                          ref={videoInputRef}
                          accept="video/mp4,video/webm,video/quicktime,video/*"
                          onChange={handleVideoFileUpload}
                          style={{ display: 'none' }}
                        />

                        {uploadedVideoName ? (
                          <div
                            style={{
                              padding: '14px 18px',
                              backgroundColor: '#EFF6FF',
                              border: '1.5px solid #BFDBFE',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#304FE8', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Video size={22} />
                              </div>
                              <div>
                                <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#1E3A8A' }}>
                                  {uploadedVideoName}
                                </div>
                                <div style={{ fontSize: '12px', color: '#3B82F6', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span>{uploadedVideoSize}</span>
                                  <span>•</span>
                                  <span style={{ color: '#059669', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    <Check size={13} /> Video Ready for Playback
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => videoInputRef.current?.click()}
                              style={{
                                padding: '7px 14px',
                                fontSize: '12.5px',
                                fontWeight: '600',
                                color: '#1E3A8A',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #BFDBFE',
                                borderRadius: '8px',
                                cursor: 'pointer'
                              }}
                            >
                              Change Video
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => videoInputRef.current?.click()}
                            style={{
                              padding: '24px 20px',
                              border: '2px dashed #CBD5E1',
                              borderRadius: '12px',
                              backgroundColor: '#F8FAFC',
                              textAlign: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = '#304FE8';
                              e.currentTarget.style.backgroundColor = '#EEF2FF';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = '#CBD5E1';
                              e.currentTarget.style.backgroundColor = '#F8FAFC';
                            }}
                          >
                            <UploadCloud size={30} color="#304FE8" style={{ margin: '0 auto 8px' }} />
                            <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0B122F' }}>
                              Click to upload MP4, WebM, or MOV video
                            </div>
                            <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>
                              Direct upload from your camera, vehicle diagnostics bench, or studio master
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Video Title */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                          Video Lecture Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Masterclass: Dual-Trace Oscilloscope Sensor Synchronization"
                          value={videoTitle}
                          onChange={(e) => setVideoTitle(e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', fontSize: '13.5px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                            Duration *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 38 min"
                            value={videoDuration}
                            onChange={(e) => setVideoDuration(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                            Quality / Badge
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 4K Workshop Studio"
                            value={videoBadge}
                            onChange={(e) => setVideoBadge(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>

                      {/* External Embed Toggle */}
                      <div>
                        <div
                          onClick={() => setShowVideoUrlInput(!showVideoUrlInput)}
                          style={{ fontSize: '12.5px', color: '#304FE8', fontWeight: '600', cursor: 'pointer', marginBottom: '6px', display: 'inline-block' }}
                        >
                          {showVideoUrlInput ? '- Hide external stream link' : '+ Or use external streaming / YouTube / Vimeo URL'}
                        </div>
                        {showVideoUrlInput && (
                          <input
                            type="text"
                            placeholder="https://www.youtube.com/embed/..."
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        )}
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                          Lesson Overview & Workshop Setup Notes
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Explain what the learner will see demonstrated on the bench or vehicle..."
                          value={videoDesc}
                          onChange={(e) => setVideoDesc(e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
                        />
                      </div>
                    </div>
                  )}

                  {/* 2. TEXT FIELDS */}
                  {addMaterialType === 'text' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Direct Text File Upload Option */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                          Upload Markdown or Text File (.txt, .md)
                        </label>
                        <input
                          type="file"
                          ref={textInputRef}
                          accept=".txt,.md,.text,text/plain,text/markdown"
                          onChange={handleTextFileUpload}
                          style={{ display: 'none' }}
                        />

                        {uploadedTextFileName ? (
                          <div
                            style={{
                              padding: '12px 16px',
                              backgroundColor: '#ECFDF5',
                              border: '1.5px solid #A7F3D0',
                              borderRadius: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#065F46', fontWeight: '600' }}>
                              <FileText size={18} color="#059669" />
                              <span>Loaded from file: <strong>{uploadedTextFileName}</strong></span>
                            </div>
                            <button
                              type="button"
                              onClick={() => textInputRef.current?.click()}
                              style={{ padding: '5px 12px', fontSize: '12px', fontWeight: '600', color: '#065F46', backgroundColor: '#FFFFFF', border: '1px solid #A7F3D0', borderRadius: '6px', cursor: 'pointer' }}
                            >
                              Upload Another File
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => textInputRef.current?.click()}
                            style={{
                              padding: '16px 20px',
                              border: '2px dashed #CBD5E1',
                              borderRadius: '10px',
                              backgroundColor: '#F8FAFC',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = '#059669';
                              e.currentTarget.style.backgroundColor = '#ECFDF5';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = '#CBD5E1';
                              e.currentTarget.style.backgroundColor = '#F8FAFC';
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <UploadCloud size={20} color="#059669" />
                              <span style={{ fontSize: '13px', fontWeight: '600', color: '#0B122F' }}>
                                Click to upload Markdown or Text file (.txt, .md) to auto-fill content
                              </span>
                            </div>
                            <span style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>Browse file</span>
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                            Theory Article Title *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. High-Voltage Isolation Fault Troubleshooting & Safety Interlocks"
                            value={textTitle}
                            onChange={(e) => setTextTitle(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', fontSize: '13.5px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                            Estimated Read Time *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 15 min read"
                            value={textReadTime}
                            onChange={(e) => setTextReadTime(e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                          Lesson Reading Body (Markdown / Technical Procedures) *
                        </label>
                        <textarea
                          rows={6}
                          required
                          placeholder="Write or edit the technical diagnostic theory, step-by-step pinout measurements, and code standards..."
                          value={textContent}
                          onChange={(e) => setTextContent(e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', fontSize: '13px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
                        />
                      </div>
                    </div>
                  )}

                  {/* 3. PDF FIELDS */}
                  {addMaterialType === 'pdf' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* PDF Document Title */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                          PDF Document / Schematic Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. JIS D 1601: Automotive Electronic Diagnostics & Fault Code Matrix"
                          value={pdfTitle}
                          onChange={(e) => setPdfTitle(e.target.value)}
                          style={{ width: '100%', padding: '10px 14px', fontSize: '13.5px', border: '1px solid #E2E4EE', borderRadius: '8px', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      {/* Direct PDF Upload Section */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '8px' }}>
                          Upload PDF File *
                        </label>
                        <input
                          type="file"
                          ref={pdfInputRef}
                          accept="application/pdf,.pdf"
                          onChange={handlePdfFileUpload}
                          style={{ display: 'none' }}
                        />

                        {uploadedPdfName ? (
                          <div
                            style={{
                              padding: '18px 22px',
                              backgroundColor: '#FEF2F2',
                              border: '1.5px solid #FECACA',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                              <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: '#DC2626', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FileText size={24} />
                              </div>
                              <div>
                                <div style={{ fontSize: '14.5px', fontWeight: '800', color: '#991B1B' }}>
                                  {uploadedPdfName}
                                </div>
                                <div style={{ fontSize: '12px', color: '#B91C1C', marginTop: '3px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span style={{ fontWeight: '700' }}>{uploadedPdfSize}</span>
                                  <span>•</span>
                                  <span style={{ color: '#059669', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    <Check size={13} /> PDF Loaded & Validated
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => pdfInputRef.current?.click()}
                              style={{
                                padding: '8px 16px',
                                fontSize: '12.5px',
                                fontWeight: '700',
                                color: '#991B1B',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #FECACA',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease'
                              }}
                            >
                              Change PDF
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => pdfInputRef.current?.click()}
                            style={{
                              padding: '36px 24px',
                              border: '2px dashed #CBD5E1',
                              borderRadius: '12px',
                              backgroundColor: '#F8FAFC',
                              textAlign: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = '#DC2626';
                              e.currentTarget.style.backgroundColor = '#FEF2F2';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = '#CBD5E1';
                              e.currentTarget.style.backgroundColor = '#F8FAFC';
                            }}
                          >
                            <FileText size={36} color="#DC2626" style={{ margin: '0 auto 10px' }} />
                            <div style={{ fontSize: '14px', fontWeight: '800', color: '#0B122F' }}>
                              Click to upload PDF Document or JIS Schematic (.pdf)
                            </div>
                            <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>
                              Select schematic blueprint, wiring diagram, or official Japanese Industrial Standard document
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Submit / Cancel Buttons */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                    <button
                      type="button"
                      onClick={() => setContentTab('list')}
                      style={{ padding: '9px 18px', fontSize: '13px', fontWeight: '600', color: '#475569', backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '8px', cursor: 'pointer' }}
                    >
                      Back to List
                    </button>
                    <button
                      type="submit"
                      style={{ padding: '9px 24px', fontSize: '13px', fontWeight: '700', color: '#FFFFFF', backgroundColor: '#304FE8', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px', boxShadow: '0 2px 8px rgba(48, 79, 232, 0.3)' }}
                    >
                      <UploadCloud size={15} /> Publish to Enrolled Learners
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Material Preview Modal */}
      {previewMaterial && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 18, 47, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1200,
            padding: '20px'
          }}
          onClick={() => setPreviewMaterial(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.3)',
              padding: '28px 32px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewMaterial(null)}
              style={{ position: 'absolute', top: '18px', right: '18px', background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748B' }}
            >
              <X size={16} />
            </button>

            <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#EEF2FF', color: '#304FE8' }}>
              {previewMaterial.badge || previewMaterial.type.toUpperCase()}
            </span>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0B122F', margin: '8px 0 16px' }}>
              {previewMaterial.title}
            </h3>

            {/* Video Preview */}
            {previewMaterial.type === 'video' && (
              <div>
                <div style={{ position: 'relative', width: '100%', height: '320px', backgroundColor: '#0B122F', borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <iframe
                    src={previewMaterial.videoUrl}
                    title={previewMaterial.title}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6' }}>{previewMaterial.description}</p>
              </div>
            )}

            {/* Text Preview */}
            {previewMaterial.type === 'text' && (
              <div>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={13} style={{ color: '#94A3B8' }} /> {previewMaterial.readTime}
                </div>
                <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '13.5px', color: '#1E293B', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
                  {previewMaterial.content}
                </div>
              </div>
            )}

            {/* PDF Preview */}
            {previewMaterial.type === 'pdf' && (
              <div>
                <div style={{ padding: '24px', borderRadius: '14px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#DC2626', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FileText size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: '#991B1B' }}>{previewMaterial.fileName}</div>
                      <div style={{ fontSize: '12px', color: '#B91C1C', marginTop: '2px' }}>{previewMaterial.fileSize} • {previewMaterial.pageCount}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => triggerToast(`Downloading ${previewMaterial.fileName}...`)}
                    style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #DC2626', backgroundColor: '#FFFFFF', color: '#DC2626', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Download size={14} /> Download PDF
                  </button>
                </div>
                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6' }}>{previewMaterial.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
      {showAssignModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 18, 47, 0.55)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050,
            padding: '20px'
          }}
          onClick={() => setShowAssignModal(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '620px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.25)',
              padding: '28px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAssignModal(false)}
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#304FE8', marginBottom: '6px' }}>
              <ClipboardCheck size={20} />
              <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Master Faculty Lab Assignment
              </span>
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0B122F', margin: '0 0 6px' }}>
              Assign Technical Lab to Learners
            </h2>
            <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 20px' }}>
              Broadcast a practical hands-on assignment with JIS rubric criteria to enrolled student cohorts.
            </p>

            <form onSubmit={handleCreateAssignment}>
              {/* Select Target Course */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Target Training Curriculum *
                </label>
                <select
                  value={assignCourse}
                  onChange={(e) => setAssignCourse(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13.5px',
                    border: '1px solid #E2E4EE',
                    borderRadius: '8px',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Assignment Title */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Lab / Capstone Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lab 05: High-Voltage Busbar Torque & Thermal Imaging"
                  value={assignTitle}
                  onChange={(e) => setAssignTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13.5px',
                    border: '1px solid #E2E4EE',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Due Date & JIS Standard */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                    Submission Deadline *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Friday, Dec 05, 2026 · 11:59 PM"
                    value={assignDueDate}
                    onChange={(e) => setAssignDueDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      fontSize: '13px',
                      border: '1px solid #E2E4EE',
                      borderRadius: '8px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                    JIS Reference Standard *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. JIS D 1601 / JIS Z 3801"
                    value={assignJis}
                    onChange={(e) => setAssignJis(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      fontSize: '13px',
                      border: '1px solid #E2E4EE',
                      borderRadius: '8px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Lab Description */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Laboratory Instructions & Objective *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail the procedural steps, mechanical tolerances, and safety instructions for the apprentices..."
                  value={assignDesc}
                  onChange={(e) => setAssignDesc(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13px',
                    border: '1px solid #E2E4EE',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Required Artifacts */}
              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Required Proof Deliverables (Comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Oscilloscope Waveform, Telemetry CSV Log, Video Demo, JIS Checklist"
                  value={assignArtifacts}
                  onChange={(e) => setAssignArtifacts(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13px',
                    border: '1px solid #E2E4EE',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowAssignModal(false)}
                  style={{
                    padding: '9px 18px',
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
                    padding: '9px 24px',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    backgroundColor: '#304FE8',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 8px rgba(48, 79, 232, 0.3)'
                  }}
                >
                  <Send size={14} /> Publish & Assign to Learners
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Curriculum Modal */}
      {showAddModal && (
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
          onClick={() => setShowAddModal(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '540px',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.25)',
              padding: '28px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAddModal(false)}
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

            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0B122F', marginBottom: '6px' }}>
              Create New Trade Curriculum
            </h2>
            <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>
              Design a hands-on technical workshop series with JIS certified capstones.
            </p>

            <form onSubmit={handleCreateCourse}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Curriculum Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Inverter Heat Pump Circuit Diagnostics"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13.5px',
                    border: '1px solid #E2E4EE',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#0B122F', marginBottom: '6px' }}>
                  Technical Trade Track
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '13.5px',
                    border: '1px solid #E2E4EE',
                    borderRadius: '8px',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Automotive & Mechanical Track">Automotive & Mechanical Track</option>
                  <option value="Electrical & HVAC Track">Electrical & HVAC Track</option>
                  <option value="Welding & Heavy Piping Track">Welding & Heavy Piping Track</option>
                  <option value="Construction & Finishing Track">Construction & Finishing Track</option>
                </select>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
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
                  Create Curriculum
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Apprentice View - Live Interactive Learner Preview Modal */}
      {apprenticePreviewCourse && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            backgroundColor: 'rgba(11, 18, 47, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setApprenticePreviewCourse(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '1100px',
              height: '88vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(11, 18, 47, 0.25)',
              border: '1px solid #E2E8F0'
            }}
          >
            {/* Top Preview Banner */}
            <div
              style={{
                padding: '10px 24px',
                backgroundColor: '#0F172A',
                color: '#CBD5E1',
                fontSize: '12.5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    backgroundColor: '#38BDF8',
                    color: '#0F172A',
                    fontSize: '10px',
                    fontWeight: '800',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  Apprentice View
                </span>
                <span style={{ color: '#F8FAFC', fontWeight: '600' }}>
                  Live Learner Perspective • You are previewing how enrolled students experience this curriculum.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setApprenticePreviewCourse(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <X size={14} /> Exit Preview
              </button>
            </div>

            {/* Course Header */}
            <div
              style={{
                padding: '18px 24px',
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#475569',
                    backgroundColor: '#F1F5F9',
                    padding: '3px 10px',
                    borderRadius: '100px'
                  }}
                >
                  {apprenticePreviewCourse.category}
                </span>
                <h2
                  style={{
                    fontSize: '19px',
                    fontWeight: '800',
                    color: '#0B122F',
                    margin: '6px 0 0'
                  }}
                >
                  {apprenticePreviewCourse.title}
                </h2>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: '#64748B' }}>
                <span><strong>{previewApprenticeMaterials.length}</strong> Learning Units</span>
                <span>•</span>
                <span>JIS Vocational Capstone Track</span>
              </div>
            </div>

            {/* Main Stage & Syllabus */}
            <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
              {/* Left Syllabus Navigation (360px) */}
              <div
                style={{
                  width: '360px',
                  borderRight: '1px solid #E2E8F0',
                  backgroundColor: '#F8FAFC',
                  overflowY: 'auto',
                  padding: '16px'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Curriculum Syllabus
                </div>

                {previewApprenticeMaterials.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '30px 10px', color: '#94A3B8', fontSize: '13px' }}>
                    No modules published yet. Use <strong>Manage Content</strong> to upload videos, texts, or PDFs.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {previewApprenticeMaterials.map((mat, idx) => {
                      const isSelected = selectedApprenticeMaterial?.id === mat.id;
                      return (
                        <div
                          key={mat.id || idx}
                          onClick={() => setSelectedApprenticeMaterial(mat)}
                          style={{
                            padding: '12px',
                            borderRadius: '10px',
                            backgroundColor: isSelected ? '#FFFFFF' : '#FFFFFF',
                            border: isSelected ? '2px solid #304FE8' : '1px solid #E2E8F0',
                            boxShadow: isSelected ? '0 4px 12px rgba(48, 79, 232, 0.12)' : 'none',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                            <span
                              style={{
                                fontSize: '10.5px',
                                fontWeight: '700',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                backgroundColor:
                                  mat.type === 'video'
                                    ? '#EFF6FF'
                                    : mat.type === 'text'
                                    ? '#F0FDF4'
                                    : mat.type === 'pdf'
                                    ? '#FEF2F2'
                                    : '#FAF5FF',
                                color:
                                  mat.type === 'video'
                                    ? '#1D4ED8'
                                    : mat.type === 'text'
                                    ? '#15803D'
                                    : mat.type === 'pdf'
                                    ? '#B91C1C'
                                    : '#7E22CE'
                              }}
                            >
                              {mat.type === 'video'
                                ? 'Video Lesson'
                                : mat.type === 'text'
                                ? 'Theory Guide'
                                : mat.type === 'pdf'
                                ? 'PDF Blueprint'
                                : 'Practical Lab'}
                            </span>
                            <span style={{ fontSize: '11px', color: '#94A3B8' }}>
                              {mat.duration || mat.readTime || mat.fileSize || 'Standard'}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: '13px',
                              fontWeight: isSelected ? '700' : '600',
                              color: isSelected ? '#304FE8' : '#0B122F',
                              lineHeight: '1.3'
                            }}
                          >
                            {mat.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Stage: Interactive Learner Content */}
              <div
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '28px 36px',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {selectedApprenticeMaterial ? (
                  <div>
                    {/* Material Title & Meta */}
                    <div style={{ marginBottom: '22px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          color: '#304FE8',
                          backgroundColor: '#EEF2FF',
                          padding: '3px 10px',
                          borderRadius: '100px'
                        }}
                      >
                        {selectedApprenticeMaterial.type?.toUpperCase()} UNIT
                      </span>
                      <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0B122F', margin: '10px 0 6px' }}>
                        {selectedApprenticeMaterial.title}
                      </h3>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>
                        {selectedApprenticeMaterial.duration || selectedApprenticeMaterial.readTime || selectedApprenticeMaterial.fileSize} • Japanese Industrial Standards (JIS) Accredited
                      </div>
                    </div>

                    {/* Video Player Preview */}
                    {selectedApprenticeMaterial.type === 'video' && (
                      <div>
                        <div
                          style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            backgroundColor: '#0F172A',
                            borderRadius: '14px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            position: 'relative',
                            boxShadow: '0 8px 24px rgba(11, 18, 47, 0.15)',
                            overflow: 'hidden'
                          }}
                        >
                          <div
                            style={{
                              width: '64px',
                              height: '64px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              backdropFilter: 'blur(4px)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: '12px',
                              cursor: 'pointer'
                            }}
                          >
                            <Play size={28} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '3px' }} />
                          </div>
                          <div style={{ fontSize: '14px', fontWeight: '700' }}>Streaming 4K Workshop Studio Master</div>
                          <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                            {selectedApprenticeMaterial.duration} • Interactive Playback
                          </div>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                          <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0B122F', marginBottom: '8px' }}>
                            Lesson Overview
                          </h4>
                          <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                            {selectedApprenticeMaterial.description ||
                              'Follow along with this step-by-step diagnostic and calibration procedure. Ensure proper JIS test equipment is connected.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Text / Markdown Guide Preview */}
                    {selectedApprenticeMaterial.type === 'text' && (
                      <div
                        style={{
                          backgroundColor: '#F8FAFC',
                          borderRadius: '12px',
                          padding: '24px',
                          border: '1px solid #E2E8F0',
                          lineHeight: '1.7',
                          color: '#334155'
                        }}
                      >
                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0B122F', marginBottom: '14px' }}>
                          Technical Standard Reference
                        </h4>
                        <div style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
                          {selectedApprenticeMaterial.content ||
                            '# Japanese Industrial Standard Diagnostic Framework\n\n1. Verify battery voltage before powering diagnostic units (>12.6V).\n2. Establish CAN-bus communication at 500 kbps.\n3. Verify zero DTC codes before sensor calibration.'}
                        </div>
                      </div>
                    )}

                    {/* PDF Document Preview */}
                    {selectedApprenticeMaterial.type === 'pdf' && (
                      <div
                        style={{
                          backgroundColor: '#FEF2F2',
                          borderRadius: '14px',
                          padding: '30px',
                          border: '1px solid #FECACA',
                          textAlign: 'center'
                        }}
                      >
                        <FileText size={48} color="#DC2626" style={{ margin: '0 auto 14px' }} />
                        <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#991B1B', marginBottom: '6px' }}>
                          {selectedApprenticeMaterial.fileName || 'Technical_Schematic.pdf'}
                        </h4>
                        <p style={{ fontSize: '13px', color: '#B91C1C', marginBottom: '20px' }}>
                          {selectedApprenticeMaterial.fileSize} • {selectedApprenticeMaterial.pageCount || 'Multi-page Blueprint'}
                        </p>
                        <button
                          type="button"
                          onClick={() => alert(`Simulated download for: ${selectedApprenticeMaterial.title}`)}
                          style={{
                            padding: '10px 22px',
                            backgroundColor: '#DC2626',
                            color: '#FFFFFF',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '13.5px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <Download size={15} /> Download PDF Schematic
                        </button>
                      </div>
                    )}

                    {/* Assignment / Practical Lab Preview */}
                    {selectedApprenticeMaterial.type === 'assignment' && (
                      <div
                        style={{
                          backgroundColor: '#F8FAFC',
                          borderRadius: '14px',
                          padding: '24px',
                          border: '1px solid #E2E8F0'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#304FE8', fontWeight: '700', fontSize: '13px', marginBottom: '10px' }}>
                          <ClipboardCheck size={16} /> Practical Inspection Lab
                        </div>
                        <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#0B122F', marginBottom: '10px' }}>
                          {selectedApprenticeMaterial.title}
                        </h4>
                        <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
                          {selectedApprenticeMaterial.description}
                        </p>
                        <div style={{ padding: '12px 16px', backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '12.5px', color: '#64748B' }}>
                          <strong>Required Artifacts for Hanko Sign-off:</strong> {selectedApprenticeMaterial.requiredArtifacts || 'Oscilloscope trace, Telemetry log'}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94A3B8' }}>
                    Select a syllabus item from the left panel to preview.
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
