import React, { useState } from 'react';
import Head from 'next/head';

// توزيع الأسئلة الـ 97 بدقة منهجية حسب طلبك
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

export default function SovereignPlatform() {
  const [activeTab, setActiveTab] = useState('platform');
  const [activeType, setActiveType] = useState("1");

  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f9fa] font-['Cairo'] text-[#2d3436] pb-24">
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر السيادي بالألوان الأصلية (كحلي وذهبي) */}
      <header style={{ backgroundColor: "#0a192f" }} className="text-white p-8 text-center border-b-4 border-[#d4af37]">
        <h1 className="text-3xl font-black mb-2">🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37" }} className="font-bold">نظام أتمتة التقارير الدولية بالذكاء الاصطناعي</p>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        {activeTab === 'platform' && (
          <div className="space-y-8">
            {/* عرض الباقات السيادية */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white border-2 border-gray-200 rounded-lg text-center opacity-60">
                <h4 className="font-bold text-[#0a192f]">مجانية</h4>
                <div className="text-xl font-black">0$</div>
                <p className="text-xs">1 تقرير/شهر</p>
              </div>
              <div style={{ borderColor: "#d4af37" }} className="p-4 bg-white border-2 rounded-lg text-center scale-105 shadow-md">
                <h4 className="font-bold text-[#0a192f]">احترافية</h4>
                <div className="text-xl font-black">50$</div>
                <p className="text-xs font-bold text-gray-500">10 تقارير/شهر</p>
              </div>
              <div className="p-4 bg-white border-2 border-gray-200 rounded-lg text-center opacity-60">
                <h4 className="font-bold text-[#0a192f]">مؤسسية</h4>
                <div className="text-xl font-black">200$</div>
                <p className="text-xs">غير محدود</p>
              </div>
            </div>

            {/* اختيار نوع التقرير من الـ 8 أنواع */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfe6e9]">
              <h3 className="text-[#0a192f] font-black mb-4">📍 اختر نوع التقرير الاستراتيجي:</h3>
              <select 
                style={{ border: "2px solid #dfe6e9" }}
                className="w-full p-4 rounded-lg outline-none focus:border-[#d4af37]"
                value={activeType}
                onChange={(e) => setActiveType(e.target.value)}
              >
                {Object.entries(reportConfig).map(([id, cfg]) => (
                  <option key={id} value={id}>{cfg.icon} {cfg.name}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-2">وصف: {reportConfig[activeType].desc}</p>
            </div>

            {/* نموذج الأسئلة الديناميكي (يظهر 10-15 سؤالاً حسب النوع) */}
            <div style={{ borderTop: "8px solid #d4af37" }} className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-black text-[#0a192f] mb-6">
                مدخلات {reportConfig[activeType].name} ({reportConfig[activeType].questions} سؤالاً)
              </h3>
              
              {[...Array(reportConfig[activeType].questions)].map((_, i) => (
                <div key={i} className="mb-6">
                  <label className="block font-bold text-[#0a192f] mb-2">{i + 1}. بُعد التحقيق الاستراتيجي {i + 1}:</label>
                  <textarea 
                    style={{ borderRight: "4px solid #0a192f" }}
                    className="w-full p-4 bg-[#f1f2f6] rounded outline-none focus:border-[#d4af37]"
                    placeholder="أدخل البيانات الميدانية هنا..."
                    rows="3"
                  />
                </div>
              ))}

              <button 
                style={{ backgroundColor: "#0a192f" }}
                className="w-full text-white py-5 rounded-xl font-black text-xl hover:bg-[#d4af37] hover:text-[#0a192f] transition-all shadow-lg"
                onClick={() => alert("سيتم إرسال البيانات إلى محرك tRPC للحفظ وتوليد التقرير...")}
              >
                توليد وحفظ التقرير السيادي 📄
              </button>
            </div>
          </div>
        )}

        {/* واجهة الباقات والاشتراكات */}
        {activeTab === 'packages' && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-black text-[#0a192f] mb-4">إدارة العضوية والتمكين السيادي</h2>
            <p className="text-gray-500">هنا يمكنك ترقية حسابك للحصول على تقارير غير محدودة بـ 200$ شهرياً.</p>
          </div>
        )}
      </main>

      {/* شريط التنقل السفلي الثابت (UX الاحترافي) */}
      <nav style={{ backgroundColor: "#0a192f", borderTop: "4px solid #d4af37" }} className="fixed bottom-0 w-full flex h-20 shadow-2xl z-50">
        <button onClick={() => setActiveTab('platform')} className={`flex-1 font-bold ${activeTab === 'platform' ? 'text-[#d4af37]' : 'text-white opacity-60'}`}>🏠 المنصة</button>
        <button onClick={() => setActiveTab('packages')} className={`flex-1 font-bold ${activeTab === 'packages' ? 'text-[#d4af37]' : 'text-white opacity-60'}`}>💳 الباقات</button>
        <button onClick={() => setActiveTab('admin')} className={`flex-1 font-bold ${activeTab === 'admin' ? 'text-[#d4af37]' : 'text-white opacity-60'}`}>⚙️ الإدارة</button>
      </nav>
    </div>
  );
}
