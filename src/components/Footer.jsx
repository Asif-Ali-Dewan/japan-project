import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenAuth }) {
  const { language } = useLanguage();
  const isJa = language === 'ja';

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: '0 16px 24px 16px',
        boxSizing: 'border-box',
      }}
      className="bottom-card-wrapper"
    >
      {/* Dark Charcoal Footer Card with 28px Rounded Corners */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#08090C',
          borderRadius: '28px',
          padding: '64px 44px 36px 44px',
          boxSizing: 'border-box',
          border: '1px solid #1A1D26',
          color: '#FFFFFF',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.12)',
        }}
      >
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', width: '100%' }}>
          {/* Main Footer Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr repeat(4, 1fr)',
              gap: '48px',
              marginBottom: '64px',
            }}
            className="footer-grid"
          >
            {/* Brand info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '9px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="SAMURAI TALENT Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                  SAMURAI TALENT
                </span>
              </div>

              <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#9CA3AF', maxWidth: '320px', marginBottom: '24px' }}>
                {isJa
                  ? '現代の技術・職業キャリアを支援する実践型ラーニングOS。日本の熟練マイスターと世界を結び、確かな技能を証明します。'
                  : 'The premier technical trade & vocational learning operating system. Built for ambitious craftsmen, verified by leading industrial and manufacturing employers.'}
              </p>

              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SAMURAI TALENT GitHub"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#08090C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SAMURAI TALENT Twitter"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#08090C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SAMURAI TALENT LinkedIn"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#08090C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Links Column 1: Technical Programs */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '18px' }}>
                {isJa ? '技術プログラム' : 'Programs'}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a href="#courses" className="footer-link">
                    {isJa ? '自動車工学・整備' : 'Automotive & Motorcycle'}
                  </a>
                </li>
                <li>
                  <a href="#courses" className="footer-link">
                    {isJa ? '電気設備・制御技術' : 'Electrical & Automation'}
                  </a>
                </li>
                <li>
                  <a href="#courses" className="footer-link">
                    {isJa ? 'HVAC・空調冷凍技術' : 'HVAC & Refrigeration'}
                  </a>
                </li>
                <li>
                  <a href="#courses" className="footer-link">
                    {isJa ? 'JIS精密溶接・製缶' : 'Welding & Metal Fabrication'}
                  </a>
                </li>
                <li>
                  <a href="#courses" className="footer-link">
                    {isJa ? '建築大工・木工施工' : 'Carpentry & Construction'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 2: Platform */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '18px' }}>
                {isJa ? '学習プラットフォーム' : 'Platform'}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a href="#career-acceleration" className="footer-link">
                    {isJa ? 'キャリア養成トラック' : 'Trade Pathways'}
                  </a>
                </li>
                <li>
                  <a href="#curriculum" className="footer-link">
                    {isJa ? 'JIS技能認定基準' : 'Trade Credentials'}
                  </a>
                </li>
                <li>
                  <a href="#steps" className="footer-link">
                    {isJa ? '日本企業求人ボード' : 'Direct Hiring Board'}
                  </a>
                </li>
                <li>
                  <a href="#teach" className="footer-link">
                    {isJa ? '熟練講師募集' : 'Teach with Us'}
                  </a>
                </li>
                <li>
                  <a href="#career-acceleration" className="footer-link">
                    {isJa ? 'マイスター添削システム' : 'Master Inspection'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 3: Company */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '18px' }}>
                {isJa ? '企業情報' : 'Company'}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a href="#about" className="footer-link">
                    {isJa ? '運営概要' : 'About Samurai Talent'}
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="footer-link">
                    {isJa ? '修了生ストーリー' : 'Alumni Stories'}
                  </a>
                </li>
                <li>
                  <a href="#teach" className="footer-link">
                    {isJa ? '採用情報' : 'Careers'}
                  </a>
                </li>
                <li>
                  <a href="#teach" className="footer-link">
                    {isJa ? '企業向け研修' : 'Enterprise Training'}
                  </a>
                </li>
                <li>
                  <a href="#cta" className="footer-link">
                    {isJa ? 'お問い合わせ' : 'Contact Support'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 4: Trust & Legal */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '18px' }}>
                {isJa ? '信頼・コンプライアンス' : 'Trust & Legal'}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a href="#privacy" className="footer-link">
                    {isJa ? 'プライバシーポリシー' : 'Privacy Policy'}
                  </a>
                </li>
                <li>
                  <a href="#terms" className="footer-link">
                    {isJa ? '利用規約' : 'Terms of Service'}
                  </a>
                </li>
                <li>
                  <a href="#security" className="footer-link">
                    {isJa ? '安全・品質管理基準' : 'Safety & Code Standards'}
                  </a>
                </li>
                <li>
                  <a href="#compliance" className="footer-link">
                    {isJa ? 'JIS規格準拠' : 'JIS Compliance'}
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="footer-link">
                    {isJa ? 'クッキー設定' : 'Cookie Settings'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Standards */}
          <div
            style={{
              borderTop: '1px solid #1A1D26',
              paddingTop: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              fontSize: '12.5px',
              color: '#6B7280',
            }}
          >
            <div>
              © {new Date().getFullYear()} SAMURAI TALENT Inc. {isJa ? '無断転載を禁じます。' : 'All rights reserved.'}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span>{isJa ? '日本産業規格（JIS）準拠' : 'Japanese Industrial Standards (JIS) Aligned'}</span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#374151' }} />
              <span>{isJa ? '公認技術者育成プラットフォーム' : 'Verified Trade Career OS'}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #9CA3AF;
          font-size: 13.5px;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #FFFFFF;
          transform: translateX(2px);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
