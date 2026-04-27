import React, { useState } from 'react';
import Head from 'next/head';

// القاموس السيادي الماسي (25 مساراً كاملاً)
const methodology_db = {
    "مسار الرقابة والامتثال (ISO 19011)": {
        "تقرير النزول الميداني الفني": [
            { q: "نطاق الفحص الفني:", ex: "مثال: جودة الهيكل الخرساني بمشروع برج المنصور." },
            { q: "الأدلة المادية:", ex: "مثال: رصد تعشيش في الأعمدة رقم 4 و 5." },
            { q: "حالات عدم المطابقة:", ex: "مثال: استخدام حديد بقطر 12 ملم بدلاً من 14 ملم." },
            { q: "تحليل السبب الجذري:", ex: "مثال: ضعف الرقابة الهندسية أثناء التوريد." },
            { q: "تقييم مخاطر السلامة:", ex: "مثال: غياب لوحات التحذير بجوار الحفرة." },
            { q: "كفاءة الموارد المادية:", ex: "مثال: هدر في الإسمنت بنسبة 15%." },
            { q: "جودة التوثيق:", ex: "مثال: سجل الصب اليومي غير موقع." },
            { q: "الاستجابة للملاحظات:", ex: "مثال: لم يتم إغلاق ملاحظة العزل." },
            { q: "الإجراء التصحيحي:", ex: "مثال: إيقاف الصب ومعالجة التعشيش فوراً." },
            { q: "الإجراء الوقائي:", ex: "مثال: توفير مراقب جودة مقيم." }
        ],
        "تقرير تدقيق الامتثال الإداري": [
            { q: "المعيار المرجعي:", ex: "مثال: اللائحة الداخلية رقم 10 للمشتريات." },
            { q: "تحليل فجوة الصلاحيات:", ex: "مثال: قيام مدير الفرع بصرف مبالغ تتجاوز سقفه." },
            { q: "سلامة الدورة المستندية:", ex: "مثال: وجود فواتير دون أوامر شراء مسبقة." }
        ]
    },
    "مسار الأثر والتقييم (Kirkpatrick)": {
        "تقرير تقييم أثر التدريب": [
            { q: "مستوى الرضا:", ex: "مثال: تقييم المادة العلمية 4.5 من 5." },
            { q: "اكتساب المعرفة:", ex: "مثال: تحسن الدرجات من 40% لـ 85%." },
            { q: "التغير السلوكي:", ex: "مثال: تطبيق مهارات التفاوض في الصفقات." },
            { q: "العائد على النتائج:", ex: "مثال: تقليص زمن المعالجة بنسبة 30%." },
            { q: "استدامة المهارات:", ex: "مثال: بقاء المهارة بعد 6 أشهر." }
        ],
        "تقرير ختام وتقييم مشروع": [
            { q: "المخرجات المحققة:", ex: "مثال: حفر 5 آبار ارتوازية." },
            { q: "التحول النوعي:", ex: "مثال: انخفاض أمراض المياه بنسبة 60%." },
            { q: "الوصول الفعلي:", ex: "مثال: استفادة 1200 أسرة." }
        ]
    },
    "مسار الاستراتيجية والمخاطر": {
        "دراسة جدوى ومصفوفة مخاطر": [
            { q: "وصف الفرصة:", ex: "مثال: إنشاء معمل خياطة مركزي." },
            { q: "تحليل PESTEL:", ex: "مثال: بيئة سياسية مستقرة." },
            { q: "القرار النهائي:", ex: "مثال: المشروع مجدٍ ونوصي بالبدء." }
        ]
    },
    "مسار العمليات والإنتاجية": {
        "تقرير الإنجاز الدوري": [
            { q: "المستهدفات:", ex: "مثال: إنتاج 1000 حقيبة تدريبية." },
            { q: "الإنجاز الفعلي:", ex: "مثال: تم إنتاج 850 حقيبة." },
            { q: "خطة التصحيح:", ex: "مثال: العمل بنظام إضافي لتعويض النقص." }
        ]
    },
    "مسار العلاقات وصورة المؤسسة": {
        "تقرير التغطية الإعلامية": [
            { q: "الرسالة:", ex: "مثال: إبراز الدور الإنساني للمؤسسة." },
            { q: "الوصول (Reach):", ex: "مثال: 100,000 مشاهدة على فيسبوك." },
            { q: "توصية العلاقات:", ex: "مثال: إطلاق حملة ممولة لتعزيز الانتشار." }
        ]
    }
};

export default function MansourPlatform() {
    const [activeTab, setActiveTab] = useState('platform');
    const [step, setStep] = useState(1);
    const [selectedPillar, setSelectedPillar] = useState(Object.keys(methodology_db)[0]);
    const [selectedReport, setSelectedReport] = useState(Object.keys(methodology_db[selectedPillar])[0]);

    return (
        <div dir="rtl" style={{ fontFamily: "'Cairo', sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh", paddingBottom: "90px" }}>
            <Head>
                <title>منصة المنصور الاستراتيجية</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <style dangerouslySetInnerHTML={{__html: `
                body { margin: 0; padding: 0; background-color: #f8f9fa; }
                * { box-sizing: border-box; }
                .bottom-nav {
                    position: fixed; bottom: 0; left: 0; width: 100%;
                    background: white; border-top: 3px solid #d4af37;
                    display: flex; justify-content: space-around;
                    padding: 0; box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
                    z-index: 1000; height: 65px;
                }
                .bottom-nav button {
                    background: none; border: none; font-family: 'Cairo', sans-serif;
                    font-size: 15px; font-weight: 700; color: #0a192f; cursor: pointer;
                    flex: 1; transition: 0.3s;
                }
                .bottom-nav button.active { color: #d4af37; background-color: #f8f9fa; border-top: 4px solid #d4af37; }
                .card { background: white; padding: 25px; border-radius: 12px; border: 1px solid #dfe6e9; border-right: 6px solid #d4af37; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                .btn-primary { background: #0a192f; color: white; border: none; padding: 14px; border-radius: 8px; width: 100%; font-weight: bold; font-family: 'Cairo', sans-serif; font-size: 16px; cursor: pointer; margin-top: 10px; transition: 0.3s; }
                .btn-primary:hover { background: #d4af37; color: #0a192f; }
                .input-field { width: 100%; padding: 12px; border: 1px solid #dfe6e9; border-radius: 8px; margin-bottom: 15px; font-family: 'Cairo', sans-serif; font-size: 15px; }
                .example-text { color: #7f8c8d; font-size: 13px; font-style: italic; background: #fafafa; padding: 8px; border-right: 3px solid #d4af37; margin-bottom: 8px; border-radius: 4px; display: block; }
                .title-header { color: #d4af37; border-bottom: 2px solid #0a192f; padding-bottom: 15px; text-align: center; font-weight: 700; margin-top: 20px; }
            `}} />

            <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
                <h1 className="title-header">🏛️ منصة المنصور الاستراتيجية</h1>

                {activeTab === 'platform' && (
                    <div>
                        <div className="card">
                            <h3 style={{color: "#0a192f", marginTop: 0}}>بيانات الغلاف (الإدارية)</h3>
                            <input className="input-field" placeholder="الجهة المصدرة للتقرير..." />
                            <input className="input-field" placeholder="اسم المشروع أو النشاط..." />
                            <input className="input-field" placeholder="إعداد (الاسم والمنصب)..." />
                        </div>

                        <div className="card">
                            <h3 style={{color: "#0a192f", marginTop: 0}}>اختيار المسار</h3>
                            <select className="input-field" value={selectedPillar} onChange={e => {setSelectedPillar(e.target.value); setSelectedReport(Object.keys(methodology_db[e.target.value])[0]); setStep(1);}}>
                                {Object.keys(methodology_db).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                            <select className="input-field" value={selectedReport} onChange={e => {setSelectedReport(e.target.value); setStep(1);}}>
                                {Object.keys(methodology_db[selectedPillar]).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                        </div>

                        <div className="card">
                            <h3 style={{color: "#0a192f", marginTop: 0}}>📍 مرحلة الإدخال ({step})</h3>
                            {methodology_db[selectedPillar][selectedReport].map((item, i) => (
                                <div key={i} style={{marginBottom: "20px"}}>
                                    <span className="example-text">{item.ex}</span>
                                    <textarea className="input-field" rows="3" placeholder={`أدخل بيانات: ${item.q}`}></textarea>
                                </div>
                            ))}
                            <button className="btn-primary" onClick={() => alert('سيتم دمج الذكاء الاصطناعي (Gemini) في الخطوة القادمة لتوليد الوثيقة!')}>اعتماد وتوليد الوثيقة السيادية 📄</button>
                        </div>
                    </div>
                )}

                {activeTab === 'packages' && (
                    <div>
                        {[{n: "البداية (3 تقارير)", p: "1,000 ريال"}, {n: "التمكين (6 تقارير)", p: "1,500 ريال"}, {n: "التنفيذية (12 تقرير)", p: "2,500 ريال"}].map((pkg, i) => (
                            <div className="card" key={i} style={{textAlign: "center"}}>
                                <h2 style={{color: "#0a192f", margin: "0 0 10px 0"}}>{pkg.n}</h2>
                                <h1 style={{color: "#d4af37", margin: "0 0 20px 0"}}>{pkg.p}</h1>
                                <button className="btn-primary" style={{backgroundColor: "#25D366", color: "white", border: "none"}} onClick={() => window.location.href = `https://wa.me/967774575749?text=أريد ${pkg.n}`}>📱 اطلب الكود عبر واتساب</button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'admin' && (
                    <div className="card" style={{textAlign: "center"}}>
                        <h3 style={{color: "#0a192f"}}>🛠️ الإدارة السيادية</h3>
                        <input className="input-field" type="password" placeholder="الرمز السري للإدارة..." />
                        <button className="btn-primary">تسجيل الدخول للإدارة</button>
                    </div>
                )}
            </div>

            <div className="bottom-nav">
                <button className={activeTab === 'platform' ? 'active' : ''} onClick={() => setActiveTab('platform')}>🏠 المنصة</button>
                <button className={activeTab === 'packages' ? 'active' : ''} onClick={() => setActiveTab('packages')}>💳 الباقات</button>
                <button className={activeTab === 'admin' ? 'active' : ''} onClick={() => setActiveTab('admin')}>🛠️ الإدارة</button>
            </div>
        </div>
    );
}
