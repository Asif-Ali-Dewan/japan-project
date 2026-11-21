import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ className = '', style = {} }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className={`lang-toggle-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        borderRadius: '100px',
        padding: '3px',
        border: '1px solid #E2E8F0',
        boxShadow: 'inset 0 1px 2px rgba(11, 18, 47, 0.04)',
        gap: '2px',
        userSelect: 'none',
        flexShrink: 0,
        ...style
      }}
      role="group"
      aria-label="Language selection toggle"
    >
      <button
        type="button"
        onClick={() => toggleLanguage('en')}
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: language === 'en' ? '#FFFFFF' : 'transparent',
          color: language === 'en' ? '#304FE8' : '#64748B',
          fontWeight: language === 'en' ? '700' : '600',
          fontSize: '12px',
          padding: '4px 11px',
          borderRadius: '100px',
          cursor: 'pointer',
          boxShadow: language === 'en' ? '0 2px 6px rgba(11, 18, 47, 0.08)' : 'none',
          transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
        title="Switch to English"
      >
        <span>EN</span>
      </button>

      <button
        type="button"
        onClick={() => toggleLanguage('ja')}
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: language === 'ja' ? '#FFFFFF' : 'transparent',
          color: language === 'ja' ? '#304FE8' : '#64748B',
          fontWeight: language === 'ja' ? '700' : '600',
          fontSize: '12px',
          padding: '4px 11px',
          borderRadius: '100px',
          cursor: 'pointer',
          boxShadow: language === 'ja' ? '0 2px 6px rgba(11, 18, 47, 0.08)' : 'none',
          transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
        title="日本語に切り替え (Switch to Japanese)"
      >
        <span>日本語</span>
      </button>
    </div>
  );
}
