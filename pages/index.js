import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// ربط الجسم بالمخ الجديد الذي صنعته
import engineData from '../src/data/sovereign_engine.json';

export default function SovereignV2Final() {
  const [currentStep, setCurrentStep] = useState(0); // 0: دخول، 1: اختيار ركيزة، 2: تعبئة، 3: طباعة
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [formData, setFormData] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);
  if (!isClient) return null;

  // شاشة الدخول الفخمة
  if (currentStep === 0) {
    return (
      <div dir="rtl" style={{ background: "#0a192f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif" }}>
        <div style={{ background: "white", padding: "40px", borderRadius: "30px", width: "90%", maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ fontWeight: 900, color: "#0a192f" }}>🏛️ منصة المنصور الاستراتيجية</h2>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "25px" }}>الإصدار الثاني: المحرك السيادي الموحد</p>
          <button onClick={() => setCurrentStep(1)} style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", borderRadius: "15px", fontWeight: 900, border: "none" }}>دخول النظام 🛡️</button>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "100px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية V2</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "20px", textAlign: "center", borderBottom: "5px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ محرك التقارير السيادية (25 مساراً)</h2>
      </div>

      <main style={{ maxWidth: "700px", margin: "25px auto", padding: "0 15px" }}>
        
        {/* اختيار الركيزة (Pillars) من ملف JSON مباشرة */}
        {currentStep === 1 && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontWeight: 900, color: "#0a192f", marginBottom: "20px" }}>🎯 اختر الركيزة المنهجية الدولية:</h3>
            <div style={{ display: "grid", gap: "15px" }}>
              {engineData.pillars.map(p => (
                <div key={p.id} onClick={() => { setSelectedPillar(p); setCurrentStep(2); }} style={{ padding: "20px", border: "1px solid #eee", borderRadius: "15px", cursor: "pointer", background: "#fff", transition: "0.3s" }}>
                  <div style={{ fontWeight: 900, color: "#0a192f" }}>{p.name}</div>
                  <div style={{ fontSize: "11px", color: "#d4af37" }}>تتضمن مسارات دولية معتمدة ومعالجة AI</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* تعبئة البيانات والأسئلة الاستشارية الفخمة */}
        {currentStep === 2 && selectedPillar && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px" }}>
            <h3 style={{ color: "#0a192f", fontWeight: 900, borderBottom: "2px solid #f1f5f9", paddingBottom: "10px", marginBottom: "20px" }}>{selectedPillar.name}</h3>
            
            {/* هنا الموقع يقرأ الأسئلة تلقائياً من "المخ" */}
            {selectedPillar.tracks[0].reports[0]?.questions.map((q, idx) => (
              <div key={idx} style={{ marginBottom: "35px" }}>
                <label style={{ fontWeight: 900, display: "block", marginBottom: "10px" }}>{idx + 1}. {q.q}</label>
                <div style={{ background: "#f0fdf4", padding: "12px", borderRadius: "10px", marginBottom: "10px", fontSize: "12px", color: "#166534" }}>💡 مثال: {q.example}</div>
                <textarea rows="4" style={{ width: "100%", padding: "15px", borderRadius: "15px", border: "1px solid #cbd5e1", boxSizing: "border-box" }} placeholder="أدخل بياناتك الخام هنا..."></textarea>
              </div>
            ))}

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setCurrentStep(1)} style={{ flex: 1, padding: "18px", borderRadius: "15px", background: "#f1f5f9", fontWeight: 700, border: "none" }}>السابق</button>
              <button onClick={() => window.print()} style={{ flex: 2, padding: "18px", background: "#d4af37", color: "#0a192f", borderRadius: "15px", fontWeight: 900, border: "none" }}>توليد التقرير النهائي 📄</button>
            </div>
          </div>
        )}
      </main>

      {/* زر الواتساب وتذييل التنقل */}
      <a href="https://wa.me/967774575749" target="_blank" className="no-print" style={{ position: "fixed", bottom: "100px", left: "20px", width: "65px", height: "65px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.2)", zIndex: 9999 }}><span style={{ fontSize: "35px", color: "white" }}>💬</span></a>
      
      <nav className="no-print" style={{ position: "fixed", bottom: 0, width: "100%", height: "85px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        <button onClick={() => setCurrentStep(1)} style={{ flex: 1, border: "none", background: "none", color: "#0a192f" }}><div style={{ fontSize: "24px" }}>🏠</div><div style={{ fontSize: "12px", fontWeight: 900 }}>المنصة</div></button>
        <button style={{ flex: 1, border: "none", background: "none", color: "#adb5bd" }}><div style={{ fontSize: "24px" }}>💳</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الباقات</div></button>
      </nav>
    </div>
  );
}
