import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  Download,
  Calendar,
  CreditCard,
  Building,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

const PAYOUT_HISTORY = [
  {
    id: 'pay-104',
    date: 'Nov 15, 2026',
    period: 'Oct 01 - Oct 31, 2026',
    category: 'Curriculum Royalties + Capstone Sign-offs',
    breakdown: '¥980,000 Course Royalties + ¥500,000 Inspections',
    amount: '¥1,480,000',
    method: 'MUFG Bank (***4920)',
    status: 'Paid',
    invoiceNumber: 'INV-JP-2026-1182'
  },
  {
    id: 'pay-103',
    date: 'Oct 15, 2026',
    period: 'Sep 01 - Sep 30, 2026',
    category: 'Curriculum Royalties + 4K Workshop Stream',
    breakdown: '¥920,000 Course Royalties + ¥420,000 Workshops',
    amount: '¥1,340,000',
    method: 'MUFG Bank (***4920)',
    status: 'Paid',
    invoiceNumber: 'INV-JP-2026-1045'
  },
  {
    id: 'pay-102',
    date: 'Sep 15, 2026',
    period: 'Aug 01 - Aug 31, 2026',
    category: 'Curriculum Royalties + Capstone Sign-offs',
    breakdown: '¥850,000 Course Royalties + ¥360,000 Inspections',
    amount: '¥1,210,000',
    method: 'MUFG Bank (***4920)',
    status: 'Paid',
    invoiceNumber: 'INV-JP-2026-0914'
  },
  {
    id: 'pay-101',
    date: 'Aug 15, 2026',
    period: 'Jul 01 - Jul 31, 2026',
    category: 'Curriculum Royalties + Enterprise Consulting',
    breakdown: '¥800,000 Course Royalties + ¥300,000 Denso Sponsor',
    amount: '¥1,100,000',
    method: 'MUFG Bank (***4920)',
    status: 'Paid',
    invoiceNumber: 'INV-JP-2026-0810'
  }
];

export default function InstructorEarningsView() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadInvoice = (inv) => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '60px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '100px', backgroundColor: '#ECFDF5', color: '#059669', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>
            <DollarSign size={14} />
            Master Craftsman Compensation
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.02em', margin: 0 }}>
            Earnings & Payout Statements
          </h1>
          <p style={{ fontSize: '14px', color: '#687588', margin: '6px 0 0' }}>
            Automated monthly payouts for JIS trade curriculum enrollments, capstone inspection seal verifications, and enterprise sponsor royalties.
          </p>
        </div>

        {/* Invoice Download Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => handleDownloadInvoice('ALL')}
            style={{
              padding: '10px 18px',
              borderRadius: '100px',
              border: '1px solid rgba(226, 228, 238, 0.9)',
              backgroundColor: '#FFFFFF',
              color: '#0B122F',
              fontSize: '13.5px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 6px rgba(11, 18, 47, 0.03)'
            }}
          >
            <Download size={15} />
            {downloadSuccess ? 'Downloaded!' : 'Export All Tax Invoices (適格請求書)'}
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '20px', marginBottom: '32px' }}>
        {/* Card 1: Accrued this month */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid rgba(226, 228, 238, 0.85)', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#687588', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Nov 2026 Estimated</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.02em' }}>
            ¥1,480,000
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#059669', fontWeight: '600', marginTop: '6px' }}>
            <ArrowUpRight size={14} /> +12.4% vs last month
          </div>
        </div>

        {/* Card 2: Next Payout Date */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid rgba(226, 228, 238, 0.85)', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#687588', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Next Direct Deposit</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#EEF2FF', color: '#304FE8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.02em' }}>
            Dec 15, 2026
          </div>
          <div style={{ fontSize: '12.5px', color: '#687588', fontWeight: '500', marginTop: '6px' }}>
            Auto-transfers to MUFG Bank Ltd.
          </div>
        </div>

        {/* Card 3: Career Total */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid rgba(226, 228, 238, 0.85)', boxShadow: '0 2px 8px rgba(11, 18, 47, 0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#687588', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Total Career Earnings</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} />
            </div>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.02em' }}>
            ¥18,450,000
          </div>
          <div style={{ fontSize: '12.5px', color: '#687588', fontWeight: '500', marginTop: '6px' }}>
            1,420 apprentices mentored & verified
          </div>
        </div>
      </div>

      {/* Linked Bank Account Card */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(226, 228, 238, 0.85)', padding: '20px 24px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B122F' }}>
            <Building size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '15px', fontWeight: '800', color: '#0B122F' }}>Mitsubishi UFJ Financial Group (MUFG Bank)</span>
              <span style={{ padding: '2px 8px', borderRadius: '100px', backgroundColor: '#ECFDF5', color: '#059669', fontSize: '11px', fontWeight: '700' }}>Primary Deposit</span>
            </div>
            <div style={{ fontSize: '12.5px', color: '#687588', marginTop: '3px' }}>
              Account: Ordinary (Futsu) • Branch: Marunouchi Tokyo (#001) • Acct No: ••••-4920 • Beneficiary: TAKAHASHI KENJI
            </div>
          </div>
        </div>

        <button
          style={{
            padding: '8px 16px',
            borderRadius: '100px',
            border: '1px solid rgba(226, 228, 238, 0.85)',
            backgroundColor: '#FFFFFF',
            color: '#304FE8',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          Manage Payout Account
        </button>
      </div>

      {/* Payout History Ledger */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(226, 228, 238, 0.85)', boxShadow: '0 4px 16px rgba(11, 18, 47, 0.03)', overflow: 'hidden' }}>
        <div style={{ padding: '18px 24px', borderBottom: '1px solid rgba(226, 228, 238, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0B122F', margin: 0 }}>
              Monthly Payout Records
            </h3>
            <p style={{ fontSize: '12.5px', color: '#687588', margin: '4px 0 0' }}>
              Compliant with National Tax Agency of Japan (NTA) Qualified Invoicing System.
            </p>
          </div>
        </div>

        <div style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
          <div style={{ minWidth: '700px' }}>
            <div style={{ divideY: '1px solid rgba(226, 228, 238, 0.6)' }}>
              {PAYOUT_HISTORY.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: '18px 24px',
                    display: 'grid',
                    gridTemplateColumns: '2fr 3fr 1.5fr 1.5fr 1fr',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(226, 228, 238, 0.6)',
                    gap: '16px'
                  }}
                >
                  {/* Date & Period */}
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#0B122F' }}>{item.date}</div>
                    <div style={{ fontSize: '12px', color: '#687588', marginTop: '2px' }}>{item.period}</div>
                  </div>

                  {/* Description & Breakdown */}
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#0B122F' }}>{item.category}</div>
                    <div style={{ fontSize: '11.5px', color: '#687588', marginTop: '2px' }}>{item.breakdown}</div>
                  </div>

                  {/* Amount */}
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: '#0B122F' }}>{item.amount}</div>
                    <div style={{ fontSize: '11px', color: '#687588', marginTop: '2px' }}>{item.method}</div>
                  </div>

                  {/* Status */}
                  <div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 10px', borderRadius: '100px', backgroundColor: '#ECFDF5', color: '#059669', fontSize: '11.5px', fontWeight: '700' }}>
                      <CheckCircle2 size={12} /> {item.status}
                    </span>
                    <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '3px' }}>{item.invoiceNumber}</div>
                  </div>

                  {/* Action */}
                  <div style={{ textAlign: 'right' }}>
                    <button
                      onClick={() => handleDownloadInvoice(item.invoiceNumber)}
                      style={{
                        padding: '7px 12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(226, 228, 238, 0.85)',
                        backgroundColor: '#FFFFFF',
                        color: '#304FE8',
                        fontSize: '12px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Download size={13} /> PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
