import React, { useState } from 'react';
import { coursesData } from '../data/courses';
import { ArrowRight, Search, Play, Clock, BarChart, User } from 'lucide-react';

export default function CoursesSection({ onSelectCourse, onOpenAuth }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Mechanical & Auto', 'Electrical & HVAC', 'Construction & Finishing', 'Welding & Piping'];

  const filteredCourses = coursesData.filter((c) => {
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section section-white" id="courses">
      <div className="container">
        {/* Section Header: Clean Left Only, No Right-side text paragraph */}
        <div style={{ marginBottom: '40px' }}>
          <div className="eyebrow">POPULAR TRADE PROGRAMS</div>
          <h2 className="heading-2">
            Master in-demand technical trades
          </h2>
        </div>

        {/* Filter and Search Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '13.5px',
                    fontWeight: '600',
                    border: '1px solid',
                    borderColor: isSelected ? '#111827' : '#E5E7EB',
                    backgroundColor: isSelected ? '#111827' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#4B5563',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 2px 6px rgba(0, 0, 0, 0.12)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#111827';
                      e.currentTarget.style.color = '#111827';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.color = '#4B5563';
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6B7280',
              }}
            />
            <input
              type="text"
              placeholder="Search technical trades or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
              style={{
                paddingLeft: '40px',
                paddingTop: '9px',
                paddingBottom: '9px',
                borderRadius: 'var(--r-pill)',
                border: '1px solid #E5E7EB',
                backgroundColor: '#FFFFFF',
                color: '#111827',
                fontSize: '13.5px',
              }}
            />
          </div>
        </div>

        {/* Grid of Clean Minimalist Black & White Course Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            marginBottom: '48px',
          }}
          className="courses-grid"
        >
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
              }}
              onClick={() => onSelectCourse(course)}
            >
              <div>
                {/* Top Row: Clean Minimal Tag Left & Monochrome Arrow Right */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                  <span
                    style={{
                      backgroundColor: '#F3F4F6',
                      color: '#111827',
                      border: '1px solid #E5E7EB',
                      padding: '5px 14px',
                      borderRadius: 'var(--r-pill)',
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {course.category}
                  </span>

                  <div
                    className="course-arrow-btn"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#F9FAFB',
                      border: '1px solid #E5E7EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#111827',
                      transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
                    }}
                  >
                    <ArrowRight size={17} />
                  </div>
                </div>

                {/* Title & Description in High-Contrast Monochrome */}
                <h3
                  className="heading-3"
                  style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '10px',
                    lineHeight: '1.3',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {course.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '20px', lineHeight: '1.55' }}>
                  {course.description}
                </p>
              </div>

              {/* Minimal Monochrome Pill Chips Meta Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  paddingTop: '16px',
                  borderTop: '1px solid #F3F4F6',
                  marginTop: '16px',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#F9FAFB',
                    padding: '5px 13px',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#374151',
                    border: '1px solid #E5E7EB',
                  }}
                >
                  <Clock size={13} color="#4B5563" strokeWidth={2} />
                  <span>{course.duration}</span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#F9FAFB',
                    padding: '5px 13px',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#374151',
                    border: '1px solid #E5E7EB',
                  }}
                >
                  <BarChart size={13} color="#4B5563" strokeWidth={2} />
                  <span>{course.level}</span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#F9FAFB',
                    padding: '5px 13px',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#374151',
                    border: '1px solid #E5E7EB',
                  }}
                >
                  <User size={13} color="#4B5563" strokeWidth={2} />
                  <span>{course.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Showcase / Student Transition Video Banner */}
        <div
          style={{
            backgroundColor: 'var(--blue)',
            borderRadius: 'var(--r-xl)',
            padding: '64px 56px',
            color: '#FFFFFF',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '340px',
          }}
          className="featured-video-banner"
        >
          {/* Subtle concentric rings */}
          <div
            style={{
              position: 'absolute',
              right: '-80px',
              top: '-80px',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              pointerEvents: 'none',
            }}
          />

          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '6px 14px',
                borderRadius: 'var(--r-pill)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.04em',
                marginBottom: '18px',
              }}
            >
              ALUMNI SPOTLIGHT
            </span>
            <h3 style={{ fontSize: '32px', fontWeight: '800', lineHeight: '1.25', marginBottom: '18px', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              How Kenji transitioned from retail to Certified HVAC & Refrigeration Technician at Daikin in 4 months.
            </h3>
            <p style={{ fontSize: '16px', color: '#DCE3FF', marginBottom: '28px', lineHeight: '1.6', maxWidth: '640px' }}>
              "The hands-on workshop capstones were the only thing hiring managers cared about. I skipped 2 screening rounds because my portfolio had master craftsman inspection sign-offs."
            </p>
            <button
              onClick={() => onOpenAuth('signup')}
              className="btn btn-dark"
              style={{ fontSize: '15px', padding: '12px 28px', fontWeight: '600' }}
            >
              Start your career pivot
            </button>
          </div>

          {/* Right Video Play Mockup with Student Silhouette */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '52px 36px',
              border: '1.5px solid rgba(255, 255, 255, 0.22)',
              position: 'relative',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 12px 32px rgba(11, 18, 47, 0.15)',
            }}
          >
            {/* Play Button */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                color: 'var(--blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 28px rgba(11, 18, 47, 0.3)',
                cursor: 'pointer',
                marginBottom: '18px',
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
            </div>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF' }}>Watch Kenji's Story (4 min)</span>
            <span style={{ fontSize: '12.5px', color: '#DCE3FF', marginTop: '6px' }}>Recorded with Technical Placement Lead at Daikin</span>
          </div>
        </div>
      </div>

      <style>{`
        .course-card:hover {
          border-color: #111827 !important;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08) !important;
          transform: translateY(-2px);
        }
        .course-card:hover .course-arrow-btn {
          background-color: #111827 !important;
          color: #FFFFFF !important;
          border-color: #111827 !important;
          transform: scale(1.05);
        }
        @media (max-width: 860px) {
          .courses-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-video-banner {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
