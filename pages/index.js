import React, { useState } from 'react';
import Head from 'next/head';

const reportConfig = {
  "1": { name: "تقرير النزول الميداني", questions: 12, icon: "🏗️", desc: "فحص المشاريع الإنشائية والتنفيذية" },
  "2": { name: "تقرير تقييم التدريب", questions: 10, icon: "🎓", desc: "قياس أثر البرامج التدريبية (Kirkpatrick)" },
  "3": { name: "تقرير ختام المشروع", questions: 15, icon: "🏁", desc: "تقييم نهائي شامل للمبادرات" },
  "4": { name: "تقرير الامتثال", questions: 14, icon: "⚖️", desc: "مراجعة السياسات والإجراءات المالية" },
  "5": { name: "تقرير الجودة", questions: 11, icon: "✅", desc: "فحص جودة المنتجات والخدمات (QA)" },
  "6": { name: "تقرير الاستدامة", questions: 13, icon: "🌿", desc: "قياس الأثر البيئي والاجتماعي" },
  "7": { name: "تقرير المسح القبلي", questions: 12, icon: "📊", desc: "تحديد الوضع الأساسي والاحتياجات" },
  "8": { name: "تقرير الجرد", questions: 10, icon: "📦", desc: "مطابقة الأصول والمخزون فعلياً" }
};

export default function SovereignFinalUI() {
  const [activeTab, setActiveTab] = useState('platform');
  const [activeType, setActiveType] = useState("1");

  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", paddingBottom: "100px", fontFamily: "'Cairo', sans-serif", textAlign: "right" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر التنفيذي */}
      <div style={{ backgroundColor: "#0a192f", color: "white", padding: "50px 20px", textAlign: "center", borderBottom: "6px solid #d4af37" }}>
        <h1 style={{ margin: 0, fontSize: "26px", fontWeight: 900, letterSpacing: "1px" }}>🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37", marginTop: "12px", fontWeight: 700, fontSize: "15px", opacity: 0.9 }}>نظام الأتمتة المنهجية للتقارير الدولية</p>
      </div>

      <div style={{ maxWidth: "650px", margin: "-30px auto 20px auto", padding: "0 20px" }}>
        {activeTab === 'platform' && (
          <>
            {/* بطاقة اختيار المسار الاستراتيجي */}
            <div style={{ background: "white", borderRadius: "15px", padding: "25px", marginBottom: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #e1e8ed" }}>
              <label style={{ color: "#d4af37", fontWeight: 900, fontSize: "13px", display: "block", marginBottom: "12px", textTransform: "uppercase" }}>1. المسار المنهجي المعتمد</label>
              <select 
                style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "2px solid #f1f2f6", fontSize: "16px", fontFamily: "inherit", fontWeight: 700, color: "#0a192f", cursor: "pointer", background: "#fcfcfc" }}
                value={activeType} 
                onChange={(e) => setActiveType(e.target.value)}
              >
                {Object.entries(reportConfig).map(([id, cfg]) => (
                  <option key={id} value={id}>{cfg.icon} {cfg.name}</option>
                ))}
              </select>
              <div style={{ marginTop: "15px", fontSize: "13px", color: "#576574", background: "#f8f9fa", padding: "12px", borderRadius: "8px", borderRight: "4px solid #d4af37", lineHeight: "1.6" }}>
                <b>نطاق العمل:</b> {reportConfig[activeType].desc}
              </div>
            </div>

            {/* بطاقة الإدخال الفني */}
            <div style={{ background: "white", borderRadius: "15px", padding: "30px", borderTop: "8px solid #0a192f", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              <h3 style={{ color: "#0a192f", fontWeight: 900, fontSize: "20px", margin: "0 0 25px 0", borderBottom: "2px solid #f1f2f6", paddingBottom: "15px" }}>
                📝 إدخال بيانات التقرير ({reportConfig[activeType].questions} محوراً)
              </h3>

              {[...Array(reportConfig[activeType].questions)].map((_, i) => (
                <div key={i} style={{ marginBottom: "30px" }}>
                  <label style={{ fontWeight: 900, color: "#0a192f", display: "block", marginBottom: "12px", fontSize: "15px" }}>
                    {i + 1}. بُعد التحقيق الاستراتيجي رقم {i + 1}:
                  </label>
                  <textarea 
                    style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "2px solid #eee", fontSize: "15px", fontFamily: "inherit", boxSizing: "border-box", background: "#fdfdfd", transition: "0.3s", minHeight: "100px" }}
                    placeholder="يرجى تدوين الوقائع الميدانية المرصودة بدقة..."
                  ></textarea>
                </div>
              ))}

              <button style={{ backgroundColor: "#0a192f", color: "white", padding: "20px", borderRadius: "12px", width: "100%", fontWeight: 900, fontSize: "18px", border: "2px solid #d4af37", cursor: "pointer", boxShadow: "0 5px 15px rgba(10,25,47,0.3)", transition: "0.3s" }}>
                توليد وحفظ الوثيقة الاستراتيجية 📄
              </button>
              <p style={{ textAlign: "center", fontSize: "11px", color: "#bdc3c7", marginTop: "20px", fontWeight: 700, textTransform: "uppercase" }}>تم التطوير وفق معايير المنظمات الدولية (INGOs)</p>
            </div>
          </>
        )}
      </div>

      {/* التنقل السفلي */}
      <nav style={{ position: "fixed", bottom: 0, left: 0, width: "100%", background: "#0a192f", height: "80px", display: "flex", borderTop: "4px solid #d4af37", zIndex: 1000, boxShadow: "0 -5px 20px rgba(0,0,0,0.2)" }}>
        <button style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? '#d4af37' : 'white', fontWeight: 900, fontFamily: "inherit", fontSize: "15px", cursor: "pointer" }} onClick={() => setActiveTab('platform')}>🏠 المنصة</button>
        <button style={{ flex: 1, border: "none", background: "none", color: activeTab === 'packages' ? '#d4af37' : 'white', fontWeight: 900, fontFamily: "inherit", fontSize: "15px", cursor: "pointer" }} onClick={() => setActiveTab('packages')}>💳 الباقات</button>
        <button style={{ flex: 1, border: "none", background: "none", color: 'white', opacity: 0.5, fontWeight: 900, fontFamily: "inherit", fontSize: "15px" }}>⚙️ الإدارة</button>
      </nav>
    </div>
  );
}
