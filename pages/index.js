import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import engineData from '../src/data/sovereign_engine.json';

export default function SovereignMasterFix() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0); 
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [formData, setFormData] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);
  if (!isClient) return null;

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8fafc", minHeight: "100vh", paddingBottom: "110px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        * { font-family: 'Cairo', sans-serif !important; }
        .example-card { background: #f0fdf4; border-right: 4px solid #22c55e; padding: 12px; border-radius: 10px; margin-bottom: 12px; font-size: 13px; }
        .track-btn { width: 100%; padding: 15px; margin-bottom: 10px; border: 1px solid #eee; border-radius: 12px; background: white; text-align: right; cursor: pointer; transition: 0.2s; }
        .track-btn:hover { border-color: #d4af37; background: #fffdf5; }
        @media print { .no-print { display: none !important; } }
      `}</style>

      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "20px", textAlign: "center", borderBottom: "5px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ محرك التقارير السيادية (25 مساراً)</h2>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        
        {activeTab === 'platform' && (
          <>
            {/* الخطوة 1: اختيار الركيزة */}
            {currentStep === 0 && (
              <div style={{ background: "white", padding: "25px", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontWeight: 900, color: "#0a192f", marginBottom: "20px" }}>🛡️ اختر الركيزة الاستراتيجية:</h3>
                {engineData.pillars.map(p => (
                  <button key={p.id} onClick={() => { setSelectedPillar(p); setCurrentStep(1); }} className="track-btn">
                    <b>{p.name}</b>
                  </button>
                ))}
              </div>
            )}

            {/* الخطوة 2: اختيار المسار (لحل مشكلة الفراغ) */}
            {currentStep === 1 && selectedPillar && (
              <div style={{ background: "white", padding: "25px", borderRadius: "25px" }}>
                <h3 style={{ color: "#d4af37", fontWeight: 900 }}>{selectedPillar.name}</h3>
                <p style={{ fontSize: "13px", marginBottom: "20px" }}>اختر المسار التخصصي المطلوب:</p>
                {selectedPillar.tracks.map(t => (
                  <button key={t.id} onClick={() => { setSelectedTrack(t); setCurrentStep(2); }} className="track-btn">
                    {t.name}
                  </button>
                ))}
                <button onClick={() => setCurrentStep(0)} style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "10px", border: "none" }}>تراجع</button>
              </div>
            )}

            {/* الخطوة 3: الأسئلة (الآن تظهر كاملة) */}
            {currentStep === 2 && selectedTrack && (
              <div style={{ background: "white", padding: "25px", borderRadius: "25px" }}>
                <h3 style={{ color: "#0a192f", fontWeight: 900 }}>{selectedTrack.name}</h3>
                {selectedTrack.questions.map((q, idx) => (
                  <div key={idx} style={{ marginBottom: "30px" }}>
                    <label style={{ fontWeight: 900, display: "block", marginBottom: "10px" }}>{idx + 1}. {q.q}</label>
                    <div className="example-card">💡 مثال: {q.example}</div>
                    <textarea rows="4" style={{ width: "100%", padding: "15px", borderRadius: "15px", border: "1px solid #cbd5e1" }} placeholder="أدخل البيانات الخام هنا..."></textarea>
                  </div>
                ))}
                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => setCurrentStep(1)} style={{ flex: 1, padding: "15px", borderRadius: "12px", border: "1px solid #ddd" }}>السابق</button>
                  <button onClick={() => window.print()} style={{ flex: 2, padding: "15px", background: "#d4af37", color: "#0a192f", borderRadius: "12px", fontWeight: 900, border: "none" }}>توليد التقرير 📄</button>
                </div>
              </div>
            )}
          </>
        )}

        {/* إصلاح تبويب الباقات */}
        {activeTab === 'pricing' && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px", textAlign: "center" }}>
            <h3 style={{ fontWeight: 900, color: "#0a192f" }}>💰 باقات المنصور السيادية</h3>
            <div style={{ border: "2px solid #d4af37", padding: "20px", borderRadius: "20px", margin: "20px 0", background: "#fffdf5" }}>
              <h4 style={{ margin: 0 }}>الباقة الاحترافية (Pro)</h4>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#d4af37", margin: "10px 0" }}>$29 / شهر</div>
              <ul style={{ textAlign: "right", fontSize: "14px" }}>
                <li>50 تقرير احترافي</li><li>تحسين بالذكاء الاصطناعي</li><li>دعم فني مخصص</li>
              </ul>
              <button style={{ background: "#0a192f", color: "white", padding: "10px 30px", borderRadius: "10px", border: "none", fontWeight: 900 }}>اشترك الآن</button>
            </div>
          </div>
        )}
      </main>

      {/* شريط التنقل السفلي الفعال */}
      <nav className="no-print" style={{ position: "fixed", bottom: 0, width: "100%", height: "85px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        <button onClick={() => { setActiveTab('platform'); setCurrentStep(0); }} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? "#0a192f" : "#adb5bd" }}>
          <div style={{ fontSize: "22px" }}>🏠</div><div style={{ fontSize: "11px", fontWeight: 900 }}>المنصة</div>
        </button>
        <button onClick={() => setActiveTab('pricing')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'pricing' ? "#0a192f" : "#adb5bd" }}>
          <div style={{ fontSize: "22px" }}>💳</div><div style={{ fontSize: "11px", fontWeight: 900 }}>الباقات</div>
        </button>
      </nav>
    </div>
  );
}
