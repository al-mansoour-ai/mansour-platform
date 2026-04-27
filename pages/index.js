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
    <div dir="rtl" className="min-h-screen bg-[#f1f2f6] font-['Cairo'] text-[#2d3436] pb-32">
      <Head>
        <title>منصة المنصور الاستراتيجية | الإصدار السيادي</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <style dangerouslySetInnerHTML={{__html: `
        body { background-color: #f1f2f6; margin: 0; padding: 0; }
        .executive-header { background: linear-gradient(135deg, #0a192f 0%, #152c4b 100%); color: #fff; padding: 50px 20px; text-align: center; border-bottom: 5px solid #d4af37; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .sovereign-card { background: #ffffff; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.05); border: 1px solid #dfe6e9; overflow: hidden; margin-bottom: 30px; }
        .card-header { background: #f8f9fa; border-bottom: 2px solid #f1f2f6; padding: 20px 30px; display: flex; align-items: center; justify-content: space-between; }
        .gold-border-top { border-top: 8px solid #d4af37; }
        .sovereign-input { width: 100%; padding: 18px; border: 2px solid #e9ecef; border-radius: 12px; background: #fcfcfc; font-family: 'Cairo'; font-size: 16px; margin-top: 10px; transition: all 0.3s; resize: vertical; }
        .sovereign-input:focus { border-color: #d4af37; background: #fff; outline: none; box-shadow: 0 0 15px rgba(212,175,55,0.1); }
        .btn-sovereign { background: #0a192f; color: #fff; padding: 22px; border-radius: 15px; width: 100%; font-weight: 900; font-size: 20px; cursor: pointer; transition: 0.4s; border: 2px solid #d4af37; text-transform: uppercase; letter-spacing: 1px; }
        .btn-sovereign:hover { background: #d4af37; color: #0a192f; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(212,175,55,0.3); }
        .plan-badge { background: #fff; border: 2px solid #dfe6e9; border-radius: 15px; padding: 15px; text-align: center; transition: 0.3s; }
        .plan-badge.active { border-color: #d4af37; transform: scale(1.05); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        .bottom-nav { position: fixed; bottom: 0; width: 100%; background: #0a192f; height: 85px; border-top: 4px solid #d4af37; display: flex; z-index: 1000; }
        .nav-item { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; opacity: 0.5; transition: 0.3s; cursor: pointer; font-weight: 700; }
        .nav-item.active { opacity: 1; color: #d4af37; background: rgba(255,255,255,0.05); }
      `}} />

      <header className="executive-header">
        <h1 className="text-4xl font-black mb-4 tracking-tight">🏛️ منصة المنصور الاستراتيجية</h1>
        <p className="text-[#d4af37] text-xl font-bold opacity-90">نظام أتمتة التقارير الدولية وفق المنهجيات العالمية</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        
        {/* قسم الباقات المتطور */}
        <section className="grid grid-cols-3 gap-6 mb-10">
          <div className="plan-badge">
            <h4 className="text-[#0a192f] font-black">مجانية</h4>
            <div className="text-2xl font-black text-gray-400">0$</div>
            <p className="text-xs font-bold text-gray-400 mt-2">1 تقرير/شهر</p>
          </div>
          <div className="plan-badge active">
            <h4 className="text-[#0a192f] font-black">احترافية</h4>
            <div className="text-2xl font-black text-[#0a192f]">50$</div>
            <p className="text-xs font-bold text-[#d4af37] mt-2">10 تقارير/شهر</p>
          </div>
          <div className="plan-badge">
            <h4 className="text-[#0a192f] font-black">مؤسسية</h4>
            <div className="text-2xl font-black text-gray-400">200$</div>
            <p className="text-xs font-bold text-gray-400 mt-2">غير محدود</p>
          </div>
        </section>

        {activeTab === 'platform' && (
          <div className="space-y-10">
            {/* اختيار المسار الاستراتيجي */}
            <div className="sovereign-card">
              <div className="card-header">
                <span className="font-black text-[#0a192f] text-lg">📍 اختيار المسار الاستراتيجي الدقيق</span>
                <span className="text-[#d4af37] font-black text-sm uppercase">8 مسارات دولية</span>
              </div>
              <div className="p-8">
                <select 
                  className="sovereign-input !mt-0 !bg-white cursor-pointer"
                  value={activeType}
                  onChange={(e) => setActiveType(e.target.value)}
                >
                  {Object.entries(reportConfig).map(([id, cfg]) => (
                    <option key={id} value={id}>{cfg.icon} {cfg.name}</option>
                  ))}
                </select>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border-r-4 border-[#d4af37]">
                  <p className="text-sm text-gray-600 leading-relaxed font-bold">وصف المنهجية: {reportConfig[activeType].desc}</p>
                </div>
              </div>
            </div>

            {/* نموذج الإدخال السيادي */}
            <div className="sovereign-card gold-border-top">
              <div className="card-header !bg-white">
                <span className="font-black text-[#0a192f] text-xl">📝 مدخلات {reportConfig[activeType].name}</span>
                <span className="bg-[#0a192f] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest">
                  {reportConfig[activeType].questions} سؤالاً
                </span>
              </div>
              <div className="p-10 space-y-10">
                {[...Array(reportConfig[activeType].questions)].map((_, i) => (
                  <div key={i} className="relative group">
                    <label className="block text-lg font-black text-[#0a192f] mb-4 transition-colors group-focus-within:text-[#d4af37]">
                      {i + 1}. بُعد التحقيق الاستراتيجي رقم {i + 1}:
                    </label>
                    <textarea 
                      className="sovereign-input"
                      placeholder="يرجى إدراج البيانات الميدانية والوقائع الفنية بدقة استشارية..."
                      rows="4"
                    />
                    <div className="absolute top-0 left-0 text-[60px] font-black text-gray-50 opacity-10 pointer-events-none select-none">
                      0{i+1}
                    </div>
                  </div>
                ))}

                <div className="pt-6">
                  <button 
                    className="btn-sovereign shadow-2xl"
                    onClick={() => alert("جاري الاتصال بمحرك tRPC لتوليد الوثيقة السيادية...")}
                  >
                    توليد وحفظ الوثيقة الاستراتيجية 📄
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-6 font-bold uppercase tracking-widest">
                    تم التطوير وفق معايير المنظمات الدولية (INGOs)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="sovereign-card p-20 text-center">
            <h2 className="text-3xl font-black text-[#0a192f] mb-6 tracking-tight">إدارة التمكين والاشتراكات السيادية</h2>
            <p className="text-gray-500 text-lg font-bold mb-10 leading-relaxed">
              يمكنك ترقية حسابك الآن إلى الباقة المؤسسية للحصول على وصول كامل لجميع المسارات وتحليلات الذكاء الاصطناعي المتقدمة.
            </p>
            <button className="btn-sovereign max-w-sm mx-auto">ترقية العضوية الآن</button>
          </div>
        )}
      </main>

      <nav className="bottom-nav">
        <div onClick={() => setActiveTab('platform')} className={`nav-item ${activeTab === 'platform' ? 'active' : ''}`}>
          <span className="text-2xl mb-1">🏠</span>
          <span>المنصة</span>
        </div>
        <div onClick={() => setActiveTab('packages')} className={`nav-item ${activeTab === 'packages' ? 'active' : ''}`}>
          <span className="text-2xl mb-1">💳</span>
          <span>الباقات</span>
        </div>
        <div onClick={() => setActiveTab('admin')} className={`nav-item ${activeTab === 'admin' ? 'active' : ''}`}>
          <span className="text-2xl mb-1">⚙️</span>
          <span>الإدارة</span>
        </div>
      </nav>
    </div>
  );
}
