import React, { useState } from 'react';
import Head from 'next/head';

// المرجعية العلمية الشاملة للمسارات الـ 8
const fullScientificMethodology = {
  "1": { 
    name: "تقرير النزول الميداني", icon: "🏗️", ref: "INGO Field Monitoring Standards",
    questions: [
      { q: "مطابقة التنفيذ للمخططات الهندسية والزمنية؟", hint: "قارن بين النسبة المخطط لها والنسبة المنفذة فعلياً على أرض الواقع." },
      { q: "جودة المواد المستخدمة ومعايير السلامة المهنية؟", hint: "تأكد من مطابقة المواد للمواصفات الفنية المعتمدة في وثيقة المشروع." }
    ]
  },
  "2": { 
    name: "تقرير تقييم التدريب", icon: "🎓", ref: "Kirkpatrick Model",
    questions: [
      { q: "قياس مستوى اكتساب المعرفة والمهارات (Learning)؟", hint: "استخدم نتائج الاختبارات القبلية والبعدية لتحديد نسبة الفائدة." },
      { q: "مدى ملاءمة المحتوى التدريبي للاحتياجات الوظيفية؟", hint: "هل المادة العلمية تعالج فجوات الأداء المرصودة لدى المتدربين؟" }
    ]
  },
  "3": { 
    name: "تقرير ختام المشروع", icon: "🏁", ref: "OECD-DAC Criteria",
    questions: [
      { q: "تقييم كفاءة تخصيص واستخدام الموارد (Efficiency)؟", hint: "هل تم تحقيق النتائج بأقل تكلفة ممكنة وفي الوقت المحدد؟" },
      { q: "الأثر المباشر وغير المباشر على الفئة المستهدفة (Impact)؟", hint: "رصد التغييرات النوعية التي طرأت على حياة المستفيدين بعد المشروع." }
    ]
  },
  "4": { 
    name: "تقرير الامتثال", icon: "⚖️", ref: "ISO 37301 Compliance",
    questions: [
      { q: "مدى الالتزام بالسياسات المالية والإجراءات المنظمة؟", hint: "فحص الدورة المستندية ومطابقتها للائحة النظام الأساسي." },
      { q: "رصد الثغرات الرقابية ومخاطر عدم الامتثال؟", hint: "تحديد النقاط التي قد تؤدي إلى مساءلة قانونية أو هدر مالي." }
    ]
  },
  "5": { 
    name: "تقرير الجودة", icon: "✅", ref: "Total Quality Management (TQM)",
    questions: [
      { q: "تحليل مؤشرات الأداء الرئيسية (KPIs) للجودة؟", hint: "قياس نسبة الانحراف عن المعايير المعيارية للخدمة أو المنتج." },
      { q: "مستوى رضا المستفيد النهائي من الخدمة المقدمة؟", hint: "نتائج الاستبيانات والمقابلات المباشرة مع متلقي الخدمة." }
    ]
  },
  "6": { 
    name: "تقرير الاستدامة", icon: "🌿", ref: "Global Reporting Initiative (GRI)",
    questions: [
      { q: "مدى قدرة المشروع على الاستمرار ذاتياً بعد التمويل؟", hint: "تحليل مصادر الدخل البديلة أو الشراكات المحلية الداعمة." },
      { q: "الأثر البيئي والاجتماعي طويل الأمد للمبادرة؟", hint: "رصد المساهمة في أهداف التنمية المستدامة ذات الصلة." }
    ]
  },
  "7": { 
    name: "تقرير المسح القبلي", icon: "📊", ref: "Results-Based Management (RBM)",
    questions: [
      { q: "تحديد خط الأساس (Baseline) للمؤشرات الاستراتيجية؟", hint: "جمع البيانات الكمية والنوعية قبل بدء أي تدخل ميداني." },
      { q: "تحليل سياق المخاطر والتحديات المتوقعة؟", hint: "دراسة البيئة المحيطة (سياسياً، اقتصادياً، واجتماعياً)." }
    ]
  },
  "8": { 
    name: "تقرير الجرد", icon: "📦", ref: "General Auditing Standards",
    questions: [
      { q: "مطابقة الموجودات الفعلية بالسجلات الدفترية؟", hint: "رصد أي عجز أو زيادة في الأصول الثابتة أو المتداولة." },
      { q: "تقييم الحالة الفنية للأصول ومدى صلاحيتها؟", hint: "تحديد الأصول التي تحتاج إلى إهلاك أو صيانة أو استبدال." }
    ]
  }
};

export default function SovereignScientificFinal() {
  const [activeTab, setActiveTab] = useState('platform');
  const [activeType, setActiveType] = useState("3");

  const currentPath = fullScientificMethodology[activeType];

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", textAlign: "right", paddingBottom: "100px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر التنفيذي بالفخامة المطلوبة */}
      <div style={{ background: "linear-gradient(135deg, #0a192f 0%, #1a365d 100%)", color: "white", padding: "50px 20px", textAlign: "center", borderBottom: "6px solid #d4af37", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
        <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 900 }}>🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37", marginTop: "12px", fontWeight: 700, fontSize: "16px" }}>نظام الأتمتة المنهجية للتقارير الدولية</p>
      </div>

      <div style={{ maxWidth: "750px", margin: "-30px auto 20px auto", padding: "0 20px" }}>
        
        {activeTab === 'platform' && (
          <>
            {/* اختيار المسار الاستراتيجي */}
            <div style={{ background: "white", borderRadius: "15px", padding: "25px", marginBottom: "25px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", border: "1px solid #e1e8ed" }}>
              <label style={{ color: "#0a192f", fontWeight: 900, fontSize: "14px", display: "block", marginBottom: "12px" }}>📍 حدد المسار المنهجي للتقرير:</label>
              <select 
                style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "2px solid #f1f2f6", fontSize: "16px", fontFamily: "inherit", fontWeight: 700, cursor: "pointer" }}
                value={activeType} 
                onChange={(e) => setActiveType(e.target.value)}
              >
                {Object.entries(fullScientificMethodology).map(([id, cfg]) => (
                  <option key={id} value={id}>{cfg.icon} {cfg.name}</option>
                ))}
              </select>
              <div style={{ marginTop: "15px", padding: "10px", background: "#fff9e6", borderRadius: "8px", borderRight: "5px solid #d4af37", fontSize: "13px" }}>
                <b>المرجع العلمي:</b> {currentPath.ref}
              </div>
            </div>

            {/* النموذج العلمي */}
            <div style={{ background: "white", borderRadius: "15px", padding: "30px", borderTop: "10px solid #0a192f", boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}>
              <h2 style={{ color: "#0a192f", fontWeight: 900, fontSize: "22px", marginBottom: "30px", borderBottom: "2px solid #f1f2f6", paddingBottom: "15px" }}>
                {currentPath.icon} {currentPath.name}
              </h2>

              {currentPath.questions.map((item, i) => (
                <div key={i} style={{ marginBottom: "35px" }}>
                  <label style={{ fontWeight: 900, color: "#0a192f", display: "block", fontSize: "17px", marginBottom: "8px" }}>
                    {i + 1}. {item.q}
                  </label>
                  {/* المثال الاستشاري تحت السؤال مباشرة وثابت */}
                  <div style={{ color: "#7f8c8d", fontSize: "13px", marginBottom: "12px", background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px dashed #ced4da" }}>
                    <b>💡 مثال استشاري:</b> {item.hint}
                  </div>
                  <textarea 
                    style={{ width: "100%", padding: "18px", borderRadius: "12px", border: "2px solid #eee", fontSize: "16px", fontFamily: "inherit", boxSizing: "border-box", minHeight: "120px" }}
                    placeholder="ادخل البيانات الميدانية هنا..."
                  ></textarea>
                </div>
              ))}

              <button style={{ backgroundColor: "#0a192f", color: "white", padding: "22px", borderRadius: "15px", width: "100%", fontWeight: 900, fontSize: "20px", border: "2px solid #d4af37", cursor: "pointer", transition: "0.3s" }}>
                توليد الوثيقة الاستراتيجية السيادية 📄
              </button>
            </div>
          </>
        )}
      </div>

      {/* نظام التنقل السفلي */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", background: "#0a192f", height: "85px", display: "flex", borderTop: "5px solid #d4af37", zIndex: 1000 }}>
        <button style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? '#d4af37' : 'white', fontWeight: 900, fontFamily: "inherit", fontSize: "16px" }} onClick={() => setActiveTab('platform')}>🏠 المنصة</button>
        <button style={{ flex: 1, border: "none", background: "none", color: activeTab === 'admin' ? '#d4af37' : 'white', fontWeight: 900, fontFamily: "inherit", fontSize: "16px" }} onClick={() => setActiveTab('admin')}>⚙️ الإدارة</button>
      </nav>
    </div>
  );
}
