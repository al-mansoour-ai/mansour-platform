import React, { useState } from 'react';
import Head from 'next/head';

// المرجعية العلمية للأسئلة (عينة لتقرير ختام المشروع وتقرير التدريب)
const scientificMethodology = {
  "3": [ // تقرير ختام المشروع - معايير OECD-DAC
    { q: "إلى أي مدى حقق المشروع أهدافه المسطرة (Effectiveness)؟", hint: "مثال: تم تحقيق 90% من المستهدفات الميدانية لتدريب 500 شاب." },
    { q: "ما هي كفاءة استخدام الموارد المادية والبشرية (Efficiency)؟", hint: "مثال: تم تنفيذ الأنشطة بوفورات مالية بلغت 15% من الميزانية المرصودة." },
    { q: "ما هو الأثر الاستراتيجي غير المتوقع للمشروع (Impact)؟", hint: "مثال: نشوء تعاون بين القطاع الخاص والمستفيدين خارج إطار المشروع." },
    { q: "ما هي خطة الاستدامة المالية والتشغيلية بعد الإغلاق (Sustainability)؟", hint: "مثال: تسليم المبادرة لجمعية محلية قادرة على التمويل الذاتي." }
  ],
  "2": [ // تقرير تقييم التدريب - نموذج Kirkpatrick
    { q: "رد فعل المتدربين على بيئة التدريب (Reaction)؟", hint: "مثال: قياس مستوى الرضا عن المحتوى والمدرب واللوجستيات." },
    { q: "مدى اكتساب المعرفة والمهارات الجديدة (Learning)؟", hint: "مثال: نتائج الاختبار القبلي والبعدي أظهرت تحسناً بنسبة 40%." },
    { q: "تغيير السلوك الملحوظ في بيئة العمل (Behavior)؟", hint: "مثال: رصد استخدام الأدوات التقنية الجديدة من قبل الموظفين." }
  ]
};

export default function SovereignScientificUI() {
  const [activeTab, setActiveTab] = useState('platform');
  const [activeType, setActiveType] = useState("3"); // افتراضياً ختام المشروع

  return (
    <div dir="rtl" style={{ backgroundColor: "#f1f2f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", textAlign: "right" }}>
      <Head>
        <title>منصة المنصور - الإصدار المنهجي</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر السيادي */}
      <div style={{ background: "linear-gradient(135deg, #0a192f 0%, #1c3d6e 100%)", color: "white", padding: "40px 20px", textAlign: "center", borderBottom: "5px solid #d4af37" }}>
        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 900 }}>🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37", marginTop: "10px", fontWeight: 700 }}>محرك الأتمتة المنهجي وفق المعايير الدولية</p>
      </div>

      <div style={{ maxWidth: "700px", margin: "-20px auto 40px auto", padding: "0 15px" }}>
        {activeTab === 'platform' && (
          <>
            {/* اختيار المسار */}
            <div style={{ background: "white", borderRadius: "15px", padding: "20px", marginBottom: "20px", boxShadow: "0 5px 20px rgba(0,0,0,0.1)" }}>
              <label style={{ fontWeight: 900, color: "#0a192f", display: "block", marginBottom: "10px" }}>المنهجية العلمية المختارة:</label>
              <select style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "2px solid #eee", fontWeight: 700 }} value={activeType} onChange={(e) => setActiveType(e.target.value)}>
                <option value="3">🏁 تقرير ختام المشروع (OECD-DAC)</option>
                <option value="2">🎓 تقرير تقييم التدريب (Kirkpatrick)</option>
              </select>
            </div>

            {/* عرض الأسئلة العلمية */}
            <div style={{ background: "white", borderRadius: "15px", padding: "30px", borderTop: "8px solid #d4af37" }}>
              <h2 style={{ color: "#0a192f", fontWeight: 900, fontSize: "20px", marginBottom: "30px" }}>الأبعاد المنهجية للتحقيق الاستشاري</h2>

              {(scientificMethodology[activeType] || []).map((item, i) => (
                <div key={i} style={{ marginBottom: "35px" }}>
                  <label style={{ fontWeight: 900, color: "#0a192f", display: "block", fontSize: "16px" }}>
                    {i + 1}. {item.q}
                  </label>
                  <p style={{ color: "#7f8c8d", fontSize: "13px", margin: "5px 0 10px 0", fontStyle: "italic", borderRight: "3px solid #d4af37", paddingRight: "10px" }}>
                    <b>إرشاد استشاري:</b> {item.hint}
                  </p>
                  <textarea 
                    style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "2px solid #f1f2f6", fontSize: "15px", boxSizing: "border-box" }}
                    rows="4"
                    placeholder="اكتب البيانات الفنية هنا..."
                  ></textarea>
                </div>
              ))}

              <button style={{ backgroundColor: "#0a192f", color: "white", padding: "20px", borderRadius: "10px", width: "100%", fontWeight: 900, fontSize: "18px", border: "2px solid #d4af37", cursor: "pointer" }}>
                توليد التقرير المنهجي 📄
              </button>
            </div>
          </>
        )}

        {activeTab === 'admin' && (
          <div style={{ background: "white", padding: "40px", borderRadius: "15px", textAlign: "center" }}>
            <h2 style={{ fontWeight: 900, color: "#0a192f" }}>مركز التحكم السيادي (الإدارة)</h2>
            <div style={{ marginTop: "20px", padding: "20px", background: "#fff5d7", borderRadius: "10px", border: "1px dashed #d4af37" }}>
              <p style={{ fontWeight: 700 }}>هنا يتم توليد أكواد الاشتراك (Voucher Code Generator)</p>
              <button style={{ background: "#0a192f", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none" }}>توليد كود باقة احترافية</button>
            </div>
          </div>
        )}
      </div>

      {/* التنقل السفلي */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", background: "#0a192f", height: "70px", display: "flex", borderTop: "4px solid #d4af37" }}>
        <button className="nav-btn" onClick={() => setActiveTab('platform')} style={{ flex: 1, color: activeTab === 'platform' ? '#d4af37' : 'white', background: "none", border: "none", fontWeight: 700, cursor: "pointer" }}>🏠 المنصة</button>
        <button className="nav-btn" onClick={() => setActiveTab('admin')} style={{ flex: 1, color: activeTab === 'admin' ? '#d4af37' : 'white', background: "none", border: "none", fontWeight: 700, cursor: "pointer" }}>⚙️ الإدارة</button>
      </nav>
    </div>
  );
}
