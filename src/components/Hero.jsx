import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onOpenAuth }) {
  const { language } = useLanguage();
  const isJa = language === 'ja';

  const slides = [
    {
      id: 0,
      kickerEn: 'Robotics & Precision Manufacturing',
      kickerJa: '先端ロボティクス・精密製造',
      eyebrowEn: 'Accredited Japanese Trade Track',
      eyebrowJa: '日本国公認・実践型カリキュラム',
      titleEn: ['From Skills to', 'Career Success'],
      titleJa: ['本物の技術を、', '確かな未来へ。'],
      subEn: 'The modern technical & vocational career launchpad. Learn from master technicians, build real workshop installations, and land high-demand trade roles in Japan and worldwide.',
      subJa: '現代の技術・職業キャリアの起点。熟練の指導者から直接学び、実現場に即した設備で腕を磨き、日本の一流企業へ。',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85',
    },
    {
      id: 1,
      kickerEn: 'Automotive & Engine Systems',
      kickerJa: '自動車工学・エンジン整備',
      eyebrowEn: 'Accredited Japanese Trade Track',
      eyebrowJa: '日本国公認・実践型カリキュラム',
      titleEn: ['Craftsmanship Meets', 'Modern Engineering'],
      titleJa: ['匠の技と、', '先端テクノロジー。'],
      subEn: 'Develop certified hands-on skills in engine diagnostics, hybrid powertrains, and Japanese precision mechanical standards with 1-on-1 master inspection.',
      subJa: 'エンジン診断、ハイブリッド機関、日本の精密機械基準をマスター。第一線のプロによる直接指導で本物の技術者に。',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=2000&q=85',
    },
    {
      id: 2,
      kickerEn: 'Architecture & Technical Construction',
      kickerJa: '先進建築・施工マイスター',
      eyebrowEn: 'Accredited Japanese Trade Track',
      eyebrowJa: '日本国公認・実践型カリキュラム',
      titleEn: ['From Practical Skills to', 'Certified Mastery'],
      titleJa: ['現場での実践から、', '認定マイスターへ。'],
      subEn: 'Build real structural installations, earn accredited trade credentials, and fast-track to verified technician employment across Japan.',
      subJa: '本物の現場設計・施工課題に取り組み、公式認定資格を取得。日本全国の即戦力エンジニア採用へ直結。',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgressKey((prev) => prev + 1);
    }, 5500);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handleSelectSlide = (index) => {
    setCurrentSlide(index);
    setProgressKey((prev) => prev + 1);
  };

  const active = slides[currentSlide];

  return (
    <div className="hero-wrapper" id="top">
      <div className="hero-panel">
        {/* Full-bleed Background Images with Smooth Crossfade & Cinematic Scale */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1.03)' : 'scale(1)',
                transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 6s cubic-bezier(0.1, 0, 0.2, 1)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              <img
                src={slide.image}
                alt={slide.kickerEn}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          );
        })}

        {/* Moderate Blue Gradient: Perfectly balanced so the image is clearly visible while text stays readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(10, 24, 76, 0.80) 0%, rgba(16, 44, 150, 0.64) 35%, rgba(22, 58, 185, 0.36) 65%, rgba(12, 28, 85, 0.12) 85%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Top Vignette for Transparent Header */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '140px',
            background: 'linear-gradient(180deg, rgba(6, 14, 46, 0.35) 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Hero Content Area */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 10,
            paddingTop: '130px',
            paddingBottom: '80px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            {/* Clean Editorial Kicker (Framo-Style Minimal Typography) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '26px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                {isJa ? active.kickerJa : active.kickerEn}
              </span>

              <span
                style={{
                  width: '32px',
                  height: '1.5px',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  display: 'inline-block',
                }}
              />

              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#DCE3FF',
                  letterSpacing: '0.01em',
                }}
              >
                {isJa ? active.eyebrowJa : active.eyebrowEn}
              </span>
            </div>

            {/* Display Hero Title with smooth fade transition */}
            <h1
              className="display-hero"
              style={{
                color: '#FFFFFF',
                marginBottom: '22px',
                fontSize: 'clamp(40px, 5.2vw, 64px)',
                lineHeight: '1.14',
                letterSpacing: '-0.03em',
                fontWeight: '800',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.45)',
              }}
            >
              {isJa ? (
                <>
                  {active.titleJa[0]}
                  <br />
                  {active.titleJa[1]}
                </>
              ) : (
                <>
                  {active.titleEn[0]}
                  <br />
                  {active.titleEn[1]}
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.65',
                color: '#E0E7FF',
                marginBottom: '36px',
                maxWidth: '600px',
                fontWeight: '400',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
              }}
            >
              {isJa ? active.subJa : active.subEn}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenAuth('signup')}
                className="btn"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#111827',
                  fontSize: '15px',
                  fontWeight: '700',
                  padding: '13px 30px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22), 0 2px 6px rgba(0, 0, 0, 0.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.28)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.22), 0 2px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <span>{isJa ? '学習を始める' : 'Start learning'}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#steps"
                className="btn"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.14)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '15px',
                  fontWeight: '600',
                  padding: '13px 26px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.24)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>{isJa ? 'プログラムの特徴' : 'How it works'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Standard-Size Carousel Dots at Middle Down */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 20,
          }}
          role="tablist"
          aria-label="Hero background slides"
        >
          {slides.map((s, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => handleSelectSlide(idx)}
                aria-label={`Slide ${idx + 1}: ${isJa ? s.kickerJa : s.kickerEn}`}
                style={{
                  position: 'relative',
                  width: isActive ? '26px' : '8px',
                  height: '4px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.2, 0, 0, 1)',
                  boxShadow: isActive ? '0 0 8px rgba(255, 255, 255, 0.5)' : 'none',
                }}
              >
                {isActive && (
                  <div
                    key={progressKey}
                    className="hero-progress-active"
                    style={{
                      height: '100%',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '999px',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
