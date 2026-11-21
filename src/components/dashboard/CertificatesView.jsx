import React, { useState } from 'react';
import {
  Award,
  Download,
  Eye,
  Calendar,
  User,
  Hash,
  CheckCircle2,
  X,
  ExternalLink,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function CertificatesView() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [downloadToast, setDownloadToast] = useState(null);

  const certificates = [
    {
      id: 'ST-CERT-2026-8849',
      title: 'Automotive Mechanic & Engine Diagnostics',
      issuedTo: 'Olivia Martin',
      completionDate: 'November 14, 2026',
      instructor: 'Yuki Matsuoka',
      hours: '96 Workshop Hours',
    },
    {
      id: 'ST-CERT-2026-7210',
      title: 'AC & Refrigeration Technician (HVAC)',
      issuedTo: 'Olivia Martin',
      completionDate: 'October 28, 2026',
      instructor: 'Daiki Watanabe',
      hours: '80 Workshop Hours',
    },
    {
      id: 'ST-CERT-2026-6401',
      title: 'Welding & Structural Metal Fabrication',
      issuedTo: 'Olivia Martin',
      completionDate: 'September 19, 2026',
      instructor: 'Takeshi Mori',
      hours: '96 Workshop Hours',
    },
    {
      id: 'ST-CERT-2026-5128',
      title: 'Electrical Installation & 3-Phase Power Distribution',
      issuedTo: 'Olivia Martin',
      completionDate: 'August 05, 2026',
      instructor: 'Hiroshi Sato',
      hours: '96 Workshop Hours',
    },
  ];

  const handleDownload = (cert) => {
    setDownloadToast(`Preparing PDF download for ${cert.id}...`);

    // Create a printable certificate window
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Certificate - ${cert.id}</title>
          <style>
            @page { size: landscape; margin: 0; }
            body {
              margin: 0;
              padding: 40px;
              background-color: #F8FAFC;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              box-sizing: border-box;
            }
            .certificate-frame {
              width: 900px;
              background: #FFFFFF;
              border: 12px solid #0B122F;
              outline: 2px solid #304FE8;
              outline-offset: -8px;
              padding: 60px 50px;
              text-align: center;
              position: relative;
              box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            }
            .header-brand {
              font-size: 16px;
              letter-spacing: 0.25em;
              color: #304FE8;
              font-weight: 800;
              text-transform: uppercase;
              margin-bottom: 24px;
            }
            .main-title {
              font-size: 32px;
              color: #0B122F;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              margin: 0 0 16px 0;
            }
            .presented-to {
              font-size: 14px;
              color: #64748B;
              font-style: italic;
              margin-bottom: 8px;
            }
            .recipient-name {
              font-size: 36px;
              font-family: Georgia, serif;
              font-weight: 700;
              color: #0B122F;
              margin: 12px 0 20px 0;
              border-bottom: 2px solid #E2E8F0;
              display: inline-block;
              padding: 0 40px 8px 40px;
            }
            .for-completion {
              font-size: 14px;
              color: #64748B;
              margin-bottom: 12px;
            }
            .project-title {
              font-size: 20px;
              font-weight: 700;
              color: #304FE8;
              margin: 0 auto 36px auto;
              max-width: 650px;
            }
            .footer-meta {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              border-top: 1px solid #E2E8F0;
              padding-top: 24px;
              margin-top: 24px;
              text-align: left;
            }
            .meta-item {
              font-size: 12px;
              color: #64748B;
              line-height: 1.6;
            }
            .meta-item strong {
              color: #0B122F;
            }
            .signature-block {
              text-align: center;
            }
            .signature-line {
              width: 160px;
              border-bottom: 1px solid #0B122F;
              margin-bottom: 6px;
            }
            @media print {
              body { background: white; padding: 0; }
              .certificate-frame { box-shadow: none; width: 100%; border-width: 8px; }
            }
          </style>
        </head>
        <body>
          <div class="certificate-frame">
            <div class="header-brand">SAMURAI TALENT Academy · Official Credential</div>
            <h1 class="main-title">Certificate of Completion</h1>
            <div class="presented-to">This certifies that</div>
            <div class="recipient-name">${cert.issuedTo}</div>
            <div class="for-completion">has successfully fulfilled all industry requirements and completed the capstone project for</div>
            <div class="project-title">${cert.title}</div>
            
            <div class="footer-meta">
              <div class="meta-item">
                <div><strong>Completion Date:</strong> ${cert.completionDate}</div>
                <div><strong>Certificate ID:</strong> ${cert.id}</div>
                <div><strong>Verification:</strong> Cryptographically Verified</div>
              </div>
              <div class="signature-block">
                <div class="signature-line"></div>
                <div class="meta-item"><strong>Academic Director</strong><br/>SAMURAI TALENT Credential Ledger</div>
              </div>
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }

    setTimeout(() => {
      setDownloadToast(null);
    }, 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Toast Notification */}
      {downloadToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            backgroundColor: '#0B122F',
            color: '#FFFFFF',
            padding: '14px 22px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <CheckCircle2 size={18} color="#10B981" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0B122F', letterSpacing: '-0.02em', margin: 0 }}>
          Certificate centre
        </h2>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '20px',
        }}
      >
        {certificates.map((cert) => (
          <div
            key={cert.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#CBD5E1';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 18, 47, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.03)';
            }}
          >
            <div>
              {/* Top Row: Icon + Verified Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#EFF6FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#304FE8',
                  }}
                >
                  <Award size={22} strokeWidth={2.2} />
                </div>

                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#059669',
                    backgroundColor: '#ECFDF5',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <CheckCircle2 size={12} strokeWidth={2.5} />
                  Verified
                </span>
              </div>

              {/* 1) Project name / title */}
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.4',
                  margin: '0 0 18px 0',
                  minHeight: '48px',
                }}
              >
                {cert.title}
              </h3>

              {/* 2) Metadata Box */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '14px 16px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '12px',
                  border: '1px solid #F1F5F9',
                  marginBottom: '22px',
                }}
              >
                {/* Issued to */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '13px',
                  }}
                >
                  <span
                    style={{
                      color: '#64748B',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                    }}
                  >
                    <User size={14} color="#94A3B8" />
                    Issued to
                  </span>
                  <span style={{ fontWeight: '600', color: '#0F172A' }}>
                    {cert.issuedTo}
                  </span>
                </div>

                {/* Completion date */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '13px',
                  }}
                >
                  <span
                    style={{
                      color: '#64748B',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                    }}
                  >
                    <Calendar size={14} color="#94A3B8" />
                    Completion date
                  </span>
                  <span style={{ fontWeight: '500', color: '#334155' }}>
                    {cert.completionDate}
                  </span>
                </div>

                {/* Certificate reference / ID */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '13px',
                  }}
                >
                  <span
                    style={{
                      color: '#64748B',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                    }}
                  >
                    <Hash size={14} color="#94A3B8" />
                    Certificate ID
                  </span>
                  <span
                    style={{
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#304FE8',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {cert.id}
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs : 1) View, 2) Download */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '7px',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  backgroundColor: '#FFFFFF',
                  color: '#0F172A',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
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
                <Eye size={15} color="#475569" />
                <span>View</span>
              </button>

              <button
                type="button"
                onClick={() => handleDownload(cert)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '7px',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#304FE8',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: '0 2px 4px rgba(48, 79, 232, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#253db5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#304FE8';
                }}
              >
                <Download size={15} color="#FFFFFF" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px',
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '720px',
              width: '100%',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              animation: 'fadeIn 0.2s ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
                borderBottom: '1px solid #E2E8F0',
                backgroundColor: '#F8FAFC',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="#059669" />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#0B122F' }}>
                  Verified Certificate Preview
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748B',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate Parchment Box */}
            <div style={{ padding: '32px' }}>
              <div
                style={{
                  border: '8px solid #0B122F',
                  outline: '2px solid #304FE8',
                  outlineOffset: '-6px',
                  padding: '36px 28px',
                  textAlign: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.22em',
                    color: '#304FE8',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  SAMURAI TALENT Academy · Official Credential
                </div>

                <h1
                  style={{
                    fontSize: '22px',
                    color: '#0B122F',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    margin: '0 0 10px 0',
                  }}
                >
                  Certificate of Completion
                </h1>

                <p style={{ fontSize: '13px', color: '#64748B', fontStyle: 'italic', margin: '0 0 4px 0' }}>
                  This certifies that
                </p>

                <div
                  style={{
                    fontSize: '28px',
                    fontFamily: 'Georgia, serif',
                    fontWeight: '700',
                    color: '#0B122F',
                    margin: '8px 0 14px 0',
                    borderBottom: '2px solid #E2E8F0',
                    display: 'inline-block',
                    padding: '0 28px 6px 28px',
                  }}
                >
                  {selectedCert.issuedTo}
                </div>

                <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 8px 0' }}>
                  has successfully fulfilled all industry requirements and completed the capstone project for
                </p>

                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#304FE8',
                    maxWidth: '520px',
                    margin: '0 auto 24px auto',
                    lineHeight: '1.4',
                  }}
                >
                  {selectedCert.title}
                </div>

                {/* Footer Metadata in Certificate */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderTop: '1px solid #E2E8F0',
                    paddingTop: '18px',
                    textAlign: 'left',
                    fontSize: '11px',
                    color: '#64748B',
                    lineHeight: '1.6',
                  }}
                >
                  <div>
                    <div>
                      <strong style={{ color: '#0B122F' }}>Completion Date:</strong>{' '}
                      {selectedCert.completionDate}
                    </div>
                    <div>
                      <strong style={{ color: '#0B122F' }}>Certificate ID:</strong>{' '}
                      {selectedCert.id}
                    </div>
                    <div>
                      <strong style={{ color: '#0B122F' }}>Status:</strong>{' '}
                      <span style={{ color: '#059669', fontWeight: '700' }}>Cryptographically Verified</span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '120px',
                        borderBottom: '1px solid #0B122F',
                        marginBottom: '4px',
                      }}
                    />
                    <div style={{ fontSize: '10px', fontWeight: '700', color: '#0B122F' }}>
                      Academic Director
                    </div>
                    <div style={{ fontSize: '9px', color: '#94A3B8' }}>SAMURAI TALENT Ledger</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '12px',
                padding: '16px 24px',
                borderTop: '1px solid #E2E8F0',
                backgroundColor: '#F8FAFC',
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  backgroundColor: '#FFFFFF',
                  color: '#475569',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => handleDownload(selectedCert)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#304FE8',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(48, 79, 232, 0.2)',
                }}
              >
                <Download size={14} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
