import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle, Clock, BarChart, User, ShieldCheck, ArrowRight, Award } from 'lucide-react';

export default function CourseDetailModal({ course, onClose, onEnroll }) {
  const { language } = useLanguage();
  const isJa = language === 'ja';

  if (!course) return null;

  const title = isJa ? course.titleJa || course.title : course.title;
  const category = isJa ? course.categoryJa || course.category : course.category;
  const description = isJa ? course.descriptionJa || course.description : course.description;
  const modules = isJa ? course.modulesJa || course.modules : course.modules;
  const duration = isJa ? course.durationJa || course.duration : course.duration;
  const level = isJa ? course.levelJa || course.level : course.level;
  const instructor = isJa ? course.instructorJa || course.instructor : course.instructor;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '780px',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--r-xl)',
          padding: '40px',
          flexDirection: 'column',
          position: 'relative',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--surface)',
            border: 'none',
            color: 'var(--navy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Top Tag & Title */}
        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              backgroundColor: course.tagBg,
              color: course.tagColor,
              padding: '6px 14px',
              borderRadius: 'var(--r-pill)',
              fontSize: '12px',
              fontWeight: '700',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            {category}
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--navy)', marginBottom: '12px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.6' }}>
            {description}
          </p>
        </div>

        {/* Meta Specs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            padding: '20px',
            borderRadius: 'var(--r-md)',
            backgroundColor: 'var(--surface)',
            marginBottom: '32px',
            border: '1px solid var(--line)',
          }}
        >
          <div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '600' }}>
              {isJa ? '受講期間' : 'Duration'}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)', marginTop: '4px' }}>{duration}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '600' }}>
              {isJa ? '対象レベル' : 'Skill Level'}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)', marginTop: '4px' }}>{level}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '600' }}>
              {isJa ? '満足度' : 'Rating'}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--amber)', marginTop: '4px' }}>★ {course.rating} / 5.0</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: '600' }}>
              {isJa ? '受講生数' : 'Graduates'}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)', marginTop: '4px' }}>{course.students}</div>
          </div>
        </div>

        {/* Course Modules Syllabus */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
            {isJa ? '習得できる実践技術・制作課題:' : 'What you will master & build:'}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {modules?.map((mod, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--r-sm)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--line)',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--lav)',
                    color: 'var(--blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '700',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>
                  {mod}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
              {isJa ? '担当指導員:' : 'Taught by:'}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)' }}>{instructor}</div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={onClose} className="btn btn-secondary">
              {isJa ? '閉じる' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="btn btn-primary"
            >
              <span>{isJa ? '受講申込みへ進む' : 'Enroll in Winter Cohort'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}