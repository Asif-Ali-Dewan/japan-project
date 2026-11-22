import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CtaSection({ onOpenAuth }) {
  const { language } = useLanguage();
  const isJa = language === 'ja';

  return (
    <section
      id="cta"
      style={{
        backgroundColor: '#0E1017',
        width: '100%',
        padding: '96px 24px 80px 24px',
        boxSizing: 'border-box',
        borderTop: '1px solid #1D212C',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
        {/* Minimalist Editorial Kicker - No AI Badges or Star Icons */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '12.5px',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#9CA3AF',
            marginBottom: '24px',
          }}
        >
          <span>{isJa ? '公式認定プログラム' : 'Practical Trade Careers'}</span>
          <span style={{ width: '24px', height: '1px', backgroundColor: '#374151' }} />
          <span style={{ color: '#E5E7EB', fontWeight: '500', textTransform: 'none', letterSpacing: 'normal' }}>
            {isJa ? '日本全国・海外から受講可能' : 'Enrollment Open Nationwide & Overseas'}
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(36px, 4.5vw, 52px)',
            fontWeight: '800',
            lineHeight: '1.18',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            marginBottom: '20px',
          }}
        >
          {isJa ? '日本の本物の技術で、確かな未来を。' : "Let's build your future in precision trades."}
        </h2>

        {/* Support copy */}
        <p
          style={{
            fontSize: '17px',
            lineHeight: '1.65',
            color: '#9CA3AF',
            maxWidth: '680px',
            margin: '0 auto 40px auto',
          }}
        >
          {isJa
            ? '60,000人以上の受講生が現場即戦力の専門技能と公式認定を取得。熟練マイスターの直接添削で、日本の一流産業へのキャリアを切り拓きます。'
            : 'Join over 60,000 ambitious learners gaining in-demand technical trade skills, 1-on-1 master inspections, and direct pathways to top industrial employers in Japan.'}
        </p>

        {/* Action Buttons: Solid High-Contrast White + Minimalist Charcoal Outline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '44px',
          }}
        >
          <button
            onClick={() => onOpenAuth('signup')}
            className="btn"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0E1017',
              fontSize: '15px',
              fontWeight: '700',
              padding: '14px 34px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
            }}
          >
            <span>{isJa ? '学習をスタート' : 'Start learning'}</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => onOpenAuth('login')}
            className="btn"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              fontSize: '15px',
              fontWeight: '600',
              padding: '14px 28px',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>{isJa ? '指導者として応募' : 'Teach with us'}</span>
          </button>
        </div>

        {/* Clean, Human Trust Proofs (No glowing boxes) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            fontSize: '13px',
            color: '#9CA3AF',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Check size={15} color="#10B981" strokeWidth={2.5} />
            <span>{isJa ? '14日間全額返金保証' : '14-day money-back guarantee'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Check size={15} color="#10B981" strokeWidth={2.5} />
            <span>{isJa ? '日本企業直接採用ネットワーク' : 'Verified industry hiring network'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Check size={15} color="#10B981" strokeWidth={2.5} />
            <span>{isJa ? 'マイスター公式資格認定' : 'Accredited trade credentials'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
