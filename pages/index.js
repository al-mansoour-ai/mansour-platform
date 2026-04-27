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

export default function SovereignFinalV3() {
  const [activeTab, setActiveTab] = useState('platform');
  const [activeType, setActiveType] = useState("1");

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingBottom: "100px", fontFamily: "'Cairo', sans-serif" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <style dangerouslySetInnerHTML={{__html: `
        .header-sovereign { background-color: #0a192f; color: white; padding: 40px 20px; text-align: center; border-bottom: 5px solid #d4af37; }
        .card-container { max-width: 600px; margin: -30px auto 20px auto; padding: 0 15px; position: relative; z-index: 10; }
        .sovereign-card { background: white; border-radius: 15px; padding: 25px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.08); border: 1px solid #eee; }
        .label-gold { color: #d4af37; font-weight: 900; font-size: 14px; margin-bottom: 10px; display: block; }
        .report-title { color: #0a192f; font-weight: 900; font-size: 22px; margin-bottom: 15px; border-bottom: 2px solid #f8f9fa; padding-bottom: 10px; }
        .sovereign-input { width: 100%; padding: 15px; border: 2px solid #f1f2f6; border-radius: 10px; font-family: 'Cairo'; font-size: 16px; margin-top: 10px; background: #fafafa; transition: 0.3s; box-sizing: border-box; }
        .sovereign-input:focus { border-color: #d4af37; background: white; outline: none; }
        .btn-submit { background-color: #0a192f; color: white; padding: 20px; border-radius: 12px; width: 100%; font-weight: 900; font-size: 18px; border: 2px solid #d4af37; cursor: pointer; transition: 0.3s; margin-top: 20px; }
        .btn-submit:active { transform: scale(0.98); }
        .bottom-nav { position: fixed; bottom: 0; left: 0; width: 100%; background: #0a192f; height: 80px; display: flex; border-top: 4px solid #d4af37; z-index: 1000; }
        .nav-btn { flex: 1; border: none; background: none; color: white; opacity: 0.6; font-family: 'Cairo'; font-weight: 700; font-size: 14px; cursor: pointer; }
        .nav-btn.active { opacity: 1; color: #d4af37; }
        .package-row { display: flex; gap: 10px; margin-bottom: 25px; }
        .package-mini { flex: 1; background: white; padding: 15px; border-radius: 10px; text-align: center; border: 2px solid #eee; }
        .package-mini.active { border-color: #d4af37; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
      `}} />

      <div className="header-sovereign">
        <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 900 }}>🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37", marginTop: "10px", fontWeight: 700 }}>نظام الأتمتة المنهجية للتقارير الدولية</p>
      </div>

      <div className="card-container">
        {activeTab === 'platform' && (
          <>
            {/* عرض الباقات المدمج */}
            <div className="package-row">
              <div className="package-mini">
                <div style={{ fontSize: "11px", color: "#999" }}>مجانية</div>
                <div style={{ fontWeight: 900 }}>0$</div>
              </div>
              <div className="package-mini active">
                <div style={{ fontSize: "11px", color: "#d4af37", fontWeight: 900 }}>احترافية</div>
                <div style={{ fontWeight: 900, color: "#0a192f" }}>50$</div>
              </div>
              <div className="package-mini">
                <div style={{ fontSize: "11px", color: "#999" }}>مؤسسية</div>
                <div style={{ fontWeight: 900 }}>200$</div>
              </div>
            </div>

            {/* بطاقة اختيار المسار */}
            <div className="sovereign-card">
              <span className="label-gold">1. تحديد المسار الاستراتيجي</span>
              <select className="sovereign-input" value={activeType} onChange={(e) => setActiveType(e.target.value)}>
                {Object.entries(reportConfig).map(([id, cfg]) => (
                  <option key={id} value={id}>{cfg.icon} {cfg.name}</option>
                ))}
              </select>
              <div style={{ marginTop: "15px", fontSize: "13px", color: "#666", background: "#f8f9fa", padding: "10px", borderRadius: "8px" }}>
                <b>المنهجية:</b> {reportConfig[activeType].desc}
              </div>
            </div>

            {/* بطاقة الأسئلة الديناميكية */}
            <div className="sovereign-card" style={{ borderTop: "6px solid #d4af37" }}>
              <div className="report-title">
                📝 {reportConfig[activeType].name}
                <div style={{ fontSize: "12px", color: "#888", fontWeight: 400 }}>استكمال الأبعاد المنهجية ({reportConfig[activeType].questions} حقول)</div>
              </div>

              {[...Array(reportConfig[activeType].questions)].map((_, i) => (
                <div key={i} style={{ marginBottom: "25px" }}>
                  <label style={{ fontWeight: 900, color: "#0a192f", display: "block" }}>
                    {i + 1}. بُعد التحقيق الاستراتيجي رقم {i + 1}:
                  </label>
                  <textarea className="sovereign-input" rows="3" placeholder="أدخل البيانات والوقائع الفنية هنا..."></textarea>
                </div>
              ))}

              <button className="btn-submit" onClick={() => alert("جاري المعالجة السيادية وتوليد التقرير...")}>
                توليد وحفظ الوثيقة الاستراتيجية 📄
              </button>
            </div>
          </>
        )}

        {activeTab === 'packages' && (
          <div className="sovereign-card" style={{ textAlign: "center", padding: "40px 20px" }}>
            <h2 style={{ color: "#0a192f", fontWeight: 900 }}>إدارة الاشتراكات</h2>
            <p style={{ color: "#666", marginBottom: "30px" }}>باقة المنصور الاحترافية تمكنك من إصدار 10 تقارير شهرياً بدعم كامل للذكاء الاصطناعي.</p>
            <button className="btn-submit">ترقية الحساب الآن</button>
          </div>
        )}
      </div>

      <nav className="bottom-nav">
        <button className={`nav-btn ${activeTab === 'platform' ? 'active' : ''}`} onClick={() => setActiveTab('platform')}>🏠 المنصة</button>
        <button className={`nav-btn ${activeTab === 'packages' ? 'active' : ''}`} onClick={() => setActiveTab('packages')}>💳 الباقات</button>
        <button className={`nav-btn ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')}>⚙️ الإدارة</button>
      </nav>
    </div>
  );
}
