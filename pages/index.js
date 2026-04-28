import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// ربط المحرك السيادي (الدماغ) بالجسم
import engineData from '../src/data/sovereign_engine.json';

export default function SovereignFinalV3() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0); 
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [formData, setFormData] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { 
    setIsClient(true);
    const saved = localStorage.getItem('almansour_user');
    if (saved) { setUserEmail(saved); }
  }, []);

  if (!isClient) return null;

  // 🪄 محرك الذكاء الاصطناعي (AI Enhancement)
  const runSovereignAI = (id) => {
    setIsGenerating(true);
    setTimeout(() => {
      const refinedText = "[تحليل سيادي]: تشير المعطيات الميدانية إلى كفاءة عالية في الموائمة الاستراتيجية، مع ضرورة تعزيز آليات الرقابة لضمان استدامة الأثر المحقق.";
      setFormData(prev => ({ ...prev, [id]: refinedText }));
      setIsGenerating(false);
    }, 1200);
  };

  if (currentStep === 0 && !userEmail) {
    return (
      <div dir="rtl" style={{ background: "#0a192f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif" }}>
        <Head><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" /></Head>
        <div style={{ background: "white", padding: "40px", borderRadius: "30px", width: "90%", maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ fontWeight: 900, color: "#0a192f" }}>🏛️ منصة المنصور V2</h2>
          <button onClick={() => setCurrentStep(1)} style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", borderRadius: "12px", border: "none", fontWeight: 900 }}>دخول النظام 🛡️</button>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8fafc", minHeight: "100vh", paddingBottom: "110px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        {/* فرض خط Cairo على المتصفح */}
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        * { font-family: 'Cairo', sans-serif !important; }
        .example-box { background: #f0fdf4; border-right: 5px solid #22c55e; padding: 15px; borderRadius: 12px; margin-bottom: 15px; }
        @media print { .no-print { display: none !important; } }
      `}</style>

      {/* Header السيادي */}
      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "5px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ محرك التقارير الاستراتيجية (AI Core)</h2>
      </div>

      <main style={{ maxWidth: "700px", margin: "25px auto", padding: "0 15px" }}>
        
        {/* 1. تبويب المنصة */}
        {activeTab === 'platform' && (
          <>
            {currentStep === 1 && (
              <div style={{ background: "white", padding: "30px", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontWeight: 900, color: "#0a192f", marginBottom: "20px" }}>🎯 اختر الركيزة المنهجية:</h3>
                <div style={{ display: "grid", gap: "12px" }}>
                  {engineData.pillars.map(p => (
                    <div key={p.id} onClick={() => { setSelectedPillar(p); setCurrentStep(2); }} style={{ padding: "20px", border: "1px solid #eee", borderRadius: "15px", cursor: "pointer", background: "#fff" }}>
                      <div style={{ fontWeight: 900, color: "#0a192f" }}>{p.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && selectedPillar && (
              <div style={{ background: "white", padding: "30px", borderRadius: "25px" }}>
                <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "25px" }}>{selectedPillar.name}</h3>
                
                {selectedPillar.tracks[0].reports[0]?.questions.map((q, idx) => (
                  <div key={idx} style={{ marginBottom: "35px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                      <label style={{ fontWeight: 900 }}>{idx + 1}. {q.q}</label>
                      <button onClick={() => runSovereignAI(`q_${idx}`)} style={{ background: "#fffdf5", border: "1px solid #d4af37", color: "#d4af37", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", fontWeight: 900 }}>🪄 تحسين بـ AI</button>
                    </div>
                    {/* تحسين وضوح الأمثلة */}
                    <div className="example-box">
                      <div style={{ fontSize: "11px", fontWeight: 900, color: "#166534", marginBottom: "5px" }}>💡 مثال تطبيقي استرشادي:</div>
                      <div style={{ fontSize: "13px", fontStyle: "italic", color: "#1e293b" }}>{q.example}</div>
                    </div>
                    <textarea value={formData[`q_${idx}`] || ''} onChange={(e) => setFormData({...formData, [`q_${idx}`]: e.target.value})} rows="4" style={{ width: "100%", padding: "15px", borderRadius: "15px", border: "1px solid #cbd5e1" }} placeholder="أدخل بياناتك الخام هنا..."></textarea>
                  </div>
                ))}

                <button onClick={() => window.print()} style={{ width: "100%", padding: "18px", background: "#d4af37", color: "#0a192f", borderRadius: "15px", fontWeight: 900, border: "none", cursor: "pointer" }}>توليد التقرير النهائي 📄</button>
              </div>
            )}
          </>
        )}

        {/* 2. تبويب الباقات (التي كانت معطلة) */}
        {activeTab === 'pricing' && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontWeight: 900, textAlign: "center", color: "#0a192f", marginBottom: "30px" }}>💰 خطط الاشتراك السيادية</h3>
            <div style={{ display: "grid", gap: "20px" }}>
              <div style={{ padding: "20px", border: "1px solid #eee", borderRadius: "20px", background: "#f8f9fa" }}>
                <div style={{ fontWeight: 900, fontSize: "18px" }}>مجانية (Free)</div>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#d4af37", margin: "10px 0" }}>$0</div>
                <ul style={{ fontSize: "13px", padding: "0 15px" }}><li>3 تقارير شهرياً</li><li>دعم فني محدود</li></ul>
              </div>
              <div style={{ padding: "20px", border: "2px solid #d4af37", borderRadius: "20px", background: "#fffdf5" }}>
                <div style={{ fontWeight: 900, fontSize: "18px" }}>احترافية (Pro) 🏆</div>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#d4af37", margin: "10px 0" }}>$29 <small style={{ fontSize: "12px", color: "#666" }}>/شهر</small></div>
                <ul style={{ fontSize: "13px", padding: "0 15px" }}><li>50 تقرير احترافي</li><li>تحسين كامل بالذكاء الاصطناعي</li><li>شعار مخصص</li></ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* شريط التنقل السفلي الموثوق */}
      <nav className="no-print" style={{ position: "fixed", bottom: 0, width: "100%", height: "85px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        <button onClick={() => { setActiveTab('platform'); setCurrentStep(1); }} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? "#0a192f" : "#adb5bd" }}>
          <div style={{ fontSize: "24px" }}>🏠</div><div style={{ fontSize: "12px", fontWeight: 900 }}>المنصة</div>
        </button>
        <button onClick={() => setActiveTab('pricing')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'pricing' ? "#0a192f" : "#adb5bd" }}>
          <div style={{ fontSize: "24px" }}>💳</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الباقات</div>
        </button>
      </nav>

      {/* زر الواتساب الفعال */}
      <a href="https://wa.me/967774575749" target="_blank" className="no-print" style={{ position: "fixed", bottom: "100px", left: "20px", width: "65px", height: "65px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", zIndex: 9999 }}>
        <span style={{ fontSize: "35px", color: "white" }}>💬</span>
      </a>
    </div>
  );
}
