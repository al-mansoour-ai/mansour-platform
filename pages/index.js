import React, { useState } from 'react';
import Head from 'next/head';
// استيراد المنهجيات العلمية من الملفات التي أنشأتها
import { trainingMethodology } from '../src/data/training'; 
import { projectsMethodology } from '../src/data/projects';
import PricingSection from '../src/components/Pricing';

export default function SovereignFinalPlatform() {
  const [activeTab, setActiveTab] = useState('platform');
  const [reportType, setReportType] = useState('training'); // التبديل بين المسارات

  // اختيار البيانات بناءً على النوع المختار
  const currentData = reportType === 'training' ? trainingMethodology : projectsMethodology;

  return (
    <div dir="rtl" style={{ backgroundColor: "#f1f2f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", textAlign: "right", paddingBottom: "80px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر التنفيذي */}
      <div style={{ background: "linear-gradient(135deg, #0a192f 0%, #1a3c6d 100%)", color: "white", padding: "40px 20px", textAlign: "center", borderBottom: "5px solid #d4af37", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37", marginTop: "8px", fontWeight: 700, fontSize: "14px" }}>نظام الأتمتة المنهجي وفق المعايير الدولية</p>
      </div>

      <div style={{ maxWidth: "750px", margin: "-25px auto 20px auto", padding: "0 20px" }}>
        {activeTab === 'platform' && (
          <>
            {/* عرض الباقات - تأكد من وجود ملف Pricing.js في مكانه */}
            <PricingSection />

            {/* صندوق اختيار المسار العلمي */}
            <div style={{ background: "white", borderRadius: "15px", padding: "20px", marginBottom: "20px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", border: "1px solid #e1e8ed" }}>
              <label style={{ fontWeight: 900, color: "#0a192f", display: "block", marginBottom: "10px", fontSize: "14px" }}>📍 اختر المسار المنهجي المعتمد:</label>
              <select 
                style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "2px solid #f1f2f6", fontWeight: 700, fontFamily: "inherit", cursor: "pointer" }}
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="training">🎓 تقرير تقييم الأثر التدريبي</option>
                <option value="projects">🏁 تقرير ختام المشروع الدولي</option>
              </select>
            </div>

            {/* نموذج الإدخال العلمي */}
            <div style={{ background: "white", borderRadius: "20px", padding: "30px", borderTop: "8px solid #0a192f", boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}>
              <h2 style={{ color: "#0a192f", fontWeight: 900, fontSize: "20px", marginBottom: "10px" }}>📝 {currentData.title}</h2>
              <p style={{ fontSize: "12px", color: "#d4af37", fontWeight: 700, marginBottom: "25px", borderBottom: "1px solid #f1f2f6", paddingBottom: "15px" }}>المرجع العلمي: {currentData.reference}</p>
              
              {currentData.questions.map((item) => (
                <div key={item.id} style={{ marginBottom: "35px" }}>
                  <label style={{ fontWeight: 900, color: "#0a192f", display: "block", fontSize: "16px", marginBottom: "8px" }}>{item.id}. {item.q}</label>
                  <div style={{ color: "#7f8c8d", fontSize: "12px", marginBottom: "12px", background: "#f8f9fa", padding: "10px", borderRadius: "8px", borderRight: "4px solid #ced4da" }}>
                    <b>💡 إرشاد استشاري ثابت:</b> {item.hint}
                  </div>
                  <textarea 
                    style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "2px solid #eee", fontSize: "15px", fontFamily: "inherit", boxSizing: "border-box" }} 
                    rows="3" 
                    placeholder="ادخل التحليلات الفنية هنا..."
                  ></textarea>
                </div>
              ))}

              <button style={{ backgroundColor: "#0a192f", color: "white", padding: "18px", borderRadius: "12px", width: "100%", fontWeight: 900, fontSize: "18px", border: "2px solid #d4af37", cursor: "pointer" }}>
                توليد الوثيقة السيادية 📄
              </button>
            </div>
          </>
        )}
      </div>

      {/* الشريط السفلي - تم تصغيره ليكون أنيقاً (65px) */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", background: "#0a192f", height: "65px", display: "flex", borderTop: "4px solid #d4af37", zIndex: 1000, boxShadow: "0 -5px 15px rgba(0,0,0,0.2)" }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? '#d4af37' : 'white', fontWeight: 900, fontSize: "14px", cursor: "pointer" }}>🏠 المنصة</button>
        <button onClick={() => setActiveTab('admin')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'admin' ? '#d4af37' : 'white', fontWeight: 900, fontSize: "14px", cursor: "pointer" }}>⚙️ الإدارة</button>
      </nav>
    </div>
  );
}
