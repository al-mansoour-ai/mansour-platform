import React, { useState } from 'react';
import Head from 'next/head';
// استدعاء المنهجيات من المجلدات التي أنشأتها
import { trainingMethodology } from '../src/data/training'; 
import { projectsMethodology } from '../src/data/projects';
import PricingSection from '../src/components/Pricing';

export default function SovereignPlatform() {
  const [activeTab, setActiveTab] = useState('platform');
  const [type, setType] = useState('training');

  const data = type === 'training' ? trainingMethodology : projectsMethodology;

  return (
    <div dir="rtl" style={{ backgroundColor: "#f0f2f5", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", textAlign: "right" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر السيادي */}
      <header style={{ background: "#0a192f", color: "white", padding: "40px 20px", textAlign: "center", borderBottom: "5px solid #d4af37" }}>
        <h1 style={{ fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37", fontWeight: 700, marginTop: "10px" }}>الإصدار المنهجي المطور</p>
      </header>

      <main style={{ maxWidth: "800px", margin: "20px auto", padding: "0 20px" }}>
        <PricingSection />

        <div style={{ background: "white", padding: "25px", borderRadius: "15px", marginBottom: "20px", border: "1px solid #ddd" }}>
          <label style={{ fontWeight: 900, display: "block", marginBottom: "10px" }}>📍 اختر المسار:</label>
          <select 
            style={{ width: "100%", padding: "12px", borderRadius: "8px", fontWeight: 700, fontFamily: "inherit" }}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="training">🎓 تقييم الأثر التدريبي</option>
            <option value="projects">🏁 تقرير ختام المشروع (OECD)</option>
          </select>
        </div>

        <div style={{ background: "white", padding: "30px", borderRadius: "20px", borderTop: "8px solid #0a192f", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontWeight: 900 }}>{data.title}</h2>
          <p style={{ color: "#d4af37", fontWeight: 700, fontSize: "12px" }}>المرجع: {data.reference}</p>
          
          {data.questions.map((q) => (
            <div key={q.id} style={{ marginTop: "30px" }}>
              <label style={{ fontWeight: 900, display: "block", marginBottom: "10px" }}>{q.id}. {q.q}</label>
              <div style={{ fontSize: "12px", color: "#7f8c8d", background: "#f9f9f9", padding: "10px", borderRadius: "5px", borderRight: "4px solid #ddd", marginBottom: "10px" }}>
                <b>إرشاد استشاري:</b> {q.hint}
              </div>
              <textarea style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "1px solid #eee" }} rows="3"></textarea>
            </div>
          ))}
          
          <button style={{ width: "100%", background: "#0a192f", color: "white", padding: "20px", marginTop: "30px", borderRadius: "15px", fontWeight: 900, border: "2px solid #d4af37" }}>
            توليد التقرير السيادي 📄
          </button>
        </div>
      </main>

      {/* الشريط السفلي */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", height: "65px", background: "#0a192f", display: "flex", borderTop: "4px solid #d4af37" }}>
        <button style={{ flex: 1, background: "none", border: "none", color: "white", fontWeight: 900 }}>🏠 المنصة</button>
        <button style={{ flex: 1, background: "none", border: "none", color: "white", opacity: 0.5 }}>⚙️ الإدارة</button>
      </nav>
    </div>
  );
}
