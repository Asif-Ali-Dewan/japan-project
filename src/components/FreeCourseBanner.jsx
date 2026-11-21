import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export default function FreeCourseBanner({ onOpenAuth }) {
  const { t, language } = useLanguage();
  const isJa = language === 'ja';

  const freeTracks = isJa ? [
    { title: '安全衛生規則・OSHA基準', tag: '安全管理', bg: 'var(--lav)' },
    { title: '手工具・電動工具基礎101', tag: '基本工具', bg: 'var(--mint)' },
    { title: '配管・電気設計図面読解', tag: '図面設計', bg: 'var(--peach)' },
    { title: 'テスター測定・電圧基礎', tag: '電気測定', bg: 'var(--cream)' },
    { title: '配管寸法採寸・継手加工', tag: '衛生配管', bg: 'var(--lav)' },
  ] : [
    { title: 'Workshop Safety & OSHA', tag: 'Safety', bg: 'var(--lav)' },
    { title: 'Hand & Power Tool 101', tag: 'Tools', bg: 'var(--mint)' },
    { title: 'Technical Blueprint Reading', tag: 'Blueprints', bg: 'var(--peach)' },
    { title: 'Multimeter & Voltage Basics', tag: 'Electrical', bg: 'var(--cream)' },
    { title: 'Pipe Measurements & Fittings', tag: 'Plumbing', bg: 'var(--lav)' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--surface)', padding: '64px 0 112px 0' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--blue)',
            borderRadius: 'var(--r-xl)',
            padding: '64px 40px 0 40px',
            color: '#FFFFFF',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
          }}
        >
          {/* Subtle pill tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: 'var(--r-pill)',
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} color="#FFF1D2" />
            <span>{t.freeCourse.tag}</span>
          </div>

          <h2
            style={{
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            {t.freeCourse.title}
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#DCE3FF',
              maxWidth: '560px',
              margin: '0 auto 32px auto',
              lineHeight: '1.6',
            }}
          >
            {t.freeCourse.subtitle}
          </p>

          <button
            onClick={() => onOpenAuth('signup')}
            className="btn btn-dark"
            style={{
              fontSize: '15px',
              fontWeight: '600',
              padding: '12px 32px',
              marginBottom: '48px',
            }}
          >
            <span>{isJa ? '15以上の無料ミニ講座を体験' : 'Explore 15+ free mini-courses'}</span>
            <ArrowRight size={16} />
          </button>

          {/* Fanned-out pastel preview cards array matching Image 2 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '12px',
              position: 'relative',
              bottom: '-20px',
              overflow: 'hidden',
              paddingTop: '20px',
            }}
          >
            {freeTracks.map((track, i) => {
              // Create gentle fan rotation
              const rot = (i - 2) * 5;
              const translateY = Math.abs(i - 2) * 8;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: track.bg,
                    borderRadius: '16px 16px 0 0',
                    width: '180px',
                    height: '140px',
                    padding: '16px',
                    transform: `rotate(${rot}deg) translateY(${translateY}px)`,
                    boxShadow: '0 -8px 24px rgba(11, 18, 47, 0.15)',
                    border: '1px solid rgba(11, 18, 47, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexShrink: 0,
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `rotate(0deg) translateY(-8px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${rot}deg) translateY(${translateY}px)`;
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--navy)',
                      padding: '3px 8px',
                      borderRadius: 'var(--r-pill)',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {track.tag}
                  </span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>
                      {track.title}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>
                      {isJa ? '無料修了証付き' : 'Free Certificate'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
