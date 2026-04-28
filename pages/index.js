import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import engineData from '../src/data/sovereign_engine.json';

export default function SovereignFinalEngine() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0); 
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [formData, setFormData] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);
  if (!isClient) return null;

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingBottom: "110px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        * { font-family: 'Cairo', sans-serif !important; color: #2d3436; }
        .pillar-card { width: 100%; padding: 20px; margin-bottom: 15px; border: 1px solid #eee; border-radius: 15px; background: white; text-align: right; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
        .pillar-card:hover { border-color: #d4af37; background: #fffdf5; }
        .example-hint { background: #f0fdf4; border-right: 4px solid #22c55e; padding: 12px; border-radius: 10px; margin-bottom: 12px; font-size: 13px; color: #166534; }
        .nav-link { flex: 1; border: none; background: none; transition: 0.3s; cursor: pointer; color: #adb5bd; }
        .nav-link.active { color: #0a192f; }
        @media print { .no-print { display: none !important; } }
      `}</style>

      {/* الرأس السيادي */}
      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "20px", textAlign: "center", borderBottom: "5px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0, color: "white" }}>🏛️ محرك التقارير السيادية (النسخة الاحترافية)</h2>
      </div>

      <main style={{ maxWidth: "650px", margin: "20px auto", padding: "0 15px" }}>
        
        {activeTab === 'platform' && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            
            {currentStep === 0 && (
              <>
                <h3 style={{ fontWeight: 900, color: "#0a192f", marginBottom: "25px" }}>🛡️ اختر الركيزة المنهجية الرئيسية:</h3>
                {engineData?.pillars?.map(p => (
                  <button key={p.id} onClick={() => { setSelectedPillar(p); setCurrentStep(1); }} className="pillar-card">
                    <b style={{ fontSize: "16px" }}>{p.name}</b>
                  </button>
                ))}
              </>
            )}

            {currentStep === 1 && selectedPillar && (
              <>
                <h3 style={{ color: "#d4af37", fontWeight: 900 }}>{selectedPillar.name}</h3>
                <p style={{ fontSize: "14px", marginBottom: "20px" }}>حدد المسار التخصصي المطلوب للتقرير:</p>
                {selectedPillar.tracks?.map(t => (
                  <button key={t.id} onClick={() => { setSelectedTrack(t); setCurrentStep(2); }} className="pillar-card">
                    {t.name}
                  </button>
                ))}
                <button onClick={() => setCurrentStep(0)} style={{ width: "100%", padding: "12px", background: "#f8f9fa", borderRadius: "10px", border: "none", cursor: "pointer" }}>تراجع</button>
              </>
            )}

            {currentStep === 2 && selectedTrack && (
              <>
                <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "25px" }}>{selectedTrack.name}</h3>
                {selectedTrack.questions?.map((q, idx) => (
                  <div key={idx} style={{ marginBottom: "35px" }}>
                    <label style={{ fontWeight: 900, display: "block", marginBottom: "10px" }}>{idx + 1}. {q.q}</label>
                    <div className="example-hint">💡 مثال استرشادي: {q.example}</div>
                    <textarea rows="4" style={{ width: "100%", padding: "15px", borderRadius: "15px", border: "1px solid #cbd5e1", boxSizing: "border-box" }} placeholder="أدخل الملاحظات والبيانات الخام هنا..."></textarea>
                  </div>
                ))}
                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => setCurrentStep(1)} style={{ flex: 1, padding: "18px", borderRadius: "15px", background: "#f1f5f9", fontWeight: 700, border: "none", cursor: "pointer" }}>السابق</button>
                  <button onClick={() => window.print()} style={{ flex: 2, padding: "18px", background: "#d4af37", color: "#0a192f", borderRadius: "15px", fontWeight: 900, border: "none", cursor: "pointer" }}>توليد التقرير النهائي 📄</button>
                </div>
              </>
            )}
          </div>
        )}

        {/* إصلاح تبويب الباقات */}
        {activeTab === 'pricing' && (
          <div style={{ background: "white", padding: "40px 30px", borderRadius: "25px", textAlign: "center" }}>
            <h3 style={{ fontWeight: 900, color: "#0a192f", fontSize: "22px" }}>💰 نظام الاشتراكات الاستراتيجية</h3>
            <div style={{ border: "2px solid #d4af37", padding: "25px", borderRadius: "25px", margin: "30px 0", background: "#fffdf5" }}>
              <h4 style={{ margin: 0, fontSize: "20px" }}>باقة الاحتراف (Pro)</h4>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#d4af37", margin: "15px 0" }}>$29 <small style={{ fontSize: "14px", color: "#666" }}>/ شهر</small></div>
              <ul style={{ textAlign: "right", fontSize: "14px", lineHeight: "2", marginBottom: "25px" }}>
                [span_5](start_span)<li>✅ 50 تقرير استراتيجي شهرياً[span_5](end_span)</li>
                [span_6](start_span)<li>✅ تحسين الصياغة عبر محرك AI[span_6](end_span)</li>
                [span_7](start_span)<li>✅ تصدير التقارير بشعار مخصص[span_7](end_span)</li>
              </ul>
              <button style={{ width: "100%", background: "#0a192f", color: "white", padding: "15px", borderRadius: "12px", border: "none", fontWeight: 900 }}>اشترك الآن</button>
            </div>
          </div>
        )}
      </main>

      {/* تذييل التنقل */}
      <nav className="no-print" style={{ position: "fixed", bottom: 0, width: "100%", height: "85px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        <button onClick={() => { setActiveTab('platform'); setCurrentStep(0); }} className={`nav-link ${activeTab === 'platform' ? 'active' : ''}`}>
          <div style={{ fontSize: "24px" }}>🏠</div><div style={{ fontSize: "12px", fontWeight: 900 }}>المنصة</div>
        </button>
        <button onClick={() => setActiveTab('pricing')} className={`nav-link ${activeTab === 'pricing' ? 'active' : ''}`}>
          <div style={{ fontSize: "24px" }}>💳</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الباقات</div>
        </button>
      </nav>
    </div>
  );
}
