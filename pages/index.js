import React, { useState } from 'react';
import Head from 'next/head';

const methodology_db = {
    "1. مسار الرقابة والامتثال (ISO 19011)": {
        "تقرير النزول الميداني الفني": [
            { q: "نطاق الفحص الفني (المكان والهدف):", ex: "مثال: مشروع مدرسة المنصور - فحص القواعد." },
            { q: "مطابقة التنفيذ للمخططات الهندسية:", ex: "مثال: تم صب الأعمدة وفق المخطط الإنشائي." },
            { q: "الأدلة المادية والوقائع المرصودة:", ex: "مثال: وجود شروخ شعرية في الصبة السقفية." },
            { q: "تحليل جودة المواد المستخدمة:", ex: "مثال: حديد التسليح مطابق للمواصفات الفنية." },
            { q: "تقييم مخاطر السلامة الميدانية:", ex: "مثال: غياب سياج الحماية حول منطقة الحفر." },
            { q: "كفاءة استخدام الموارد والحد من الهدر:", ex: "مثال: هدر في مادة الإسمنت بنسبة 10%." },
            { q: "الالتزام بالمعايير القانونية والبيئية:", ex: "مثال: لا يوجد تصريح بيئي للتخلص من المخلفات." },
            { q: "تحليل السبب الجذري للخلل المرصود:", ex: "مثال: ضعف الرقابة الهندسية أثناء الصب." },
            { q: "الإجراءات التصحيحية العاجلة:", ex: "مثال: إيقاف العمل ومعالجة الشروخ فوراً." },
            { q: "التوصية السيادية النهائية:", ex: "مثال: نوصي باستبدال مقاول الباطن لضعف الجودة." }
        ],
        "تدقيق الامتثال الإداري والمالي": [
            { q: "المعيار المرجعي للمراجعة:", ex: "مثال: اللائحة المالية رقم 5 لعام 2024." },
            { q: "سلامة الدورة المستندية والارشفة:", ex: "مثال: نقص في سندات القبض لشهري يونيو ويوليو." },
            { q: "تحليل فجوة الصلاحيات الإدارية:", ex: "مثال: المدير المالي وقع على صرف يتجاوز سقفه." },
            { q: "مدى الالتزام بسياسات المشتريات:", ex: "مثال: شراء مباشر بدون 3 عروض أسعار." },
            { q: "مستوى الشفافية في التقارير المرفوعة:", ex: "مثال: التقارير الشهرية لا تظهر المصاريف النثرية." },
            { q: "تحليل كفاءة إدارة النفقات:", ex: "مثال: ارتفاع مصاريف الضيافة بنسبة 40%." },
            { q: "رصد حالات تضارب المصالح:", ex: "مثال: المورد الحالي له صلة قرابة مع أحد المدراء." },
            { q: "تقييم نظام الرقابة الداخلية:", ex: "مثال: ضعف في نظام الرقابة على العهد المالية." },
            { q: "المخاطر القانونية والمالية المترتبة:", ex: "مثال: غرامة محتملة لعدم سداد الضرائب في موعدها." },
            { q: "توصيات تعزيز الحوكمة والامتثال:", ex: "مثال: تحديث لائحة المشتريات وتفعيل التدقيق الداخلي." }
        ],
        "تقرير فحص الأصول والجرد": [
            { q: "نطاق الجرد (المخازن/المكاتب):", ex: "مثال: جرد مخازن التجهيزات الطبية بفرع عدن." },
            { q: "مطابقة الرصيد الدفتري مع الفعلي:", ex: "مثال: وجود عجز 5 أجهزة لابتوب عن المسجل." },
            { q: "تقييم الحالة الفنية للأصول:", ex: "مثال: 20% من الأثاث المكتبي تالف وغير صالح." },
            { q: "كفاءة نظام التكويد والتوسيم:", ex: "مثال: الأصول المشتراة حديثاً لم يتم ترقيمها." },
            { q: "مستوى الأمان وحماية الأصول:", ex: "مثال: المخزن يفتقر لوسائل إطفاء الحريق الحديثة." },
            { q: "تحليل معدل دوران المخزون:", ex: "مثال: تراكم مواد منتهية الصلاحية منذ 6 أشهر." },
            { q: "سلامة إجراءات الاستلام والصرف:", ex: "مثال: الصرف يتم بدون نموذج طلب معتمد." },
            { q: "مسؤولية العهد الشخصية والمؤسسية:", ex: "مثال: عهد الموظفين المستقيلين لم يتم إخلاءها." },
            { q: "التوصيات الخاصة بالتخلص من التوالف:", ex: "مثال: بيع الأثاث التالف في مزاد علني." },
            { q: "خطة تحسين كفاءة إدارة الأصول:", ex: "مثال: تفعيل نظام الباركود للأصول الثابتة." }
        ],
        "تقرير رقابة الجودة (QA/QC)": [
            { q: "توصيف الخدمة/المنتج الخاضع للفحص:", ex: "مثال: الحقيبة التدريبية لبرنامج القيادة." },
            { q: "المواصفات القياسية المطلوبة:", ex: "مثال: مطابقة معايير المؤسسة العامة للتدريب." },
            { q: "نتائج اختبارات الفحص النوعي:", ex: "مثال: المحتوى العلمي يحتاج تحديث بنسبة 30%." },
            { q: "معدل العيوب أو الانحرافات المرصودة:", ex: "مثال: أخطاء إملائية في 15 صفحة من المادة." },
            { q: "أثر الانحراف على رضا العميل/المتدرب:", ex: "مثال: ضعف ثقة المتدربين في دقة المعلومات." },
            { q: "كفاءة عمليات التصحيح السابقة:", ex: "مثال: لم يتم تعديل الملاحظات المرفوعة الأسبوع الماضي." },
            { q: "تحليل كفاءة فريق العمل في الجودة:", ex: "مثال: المراجع الفني لم يدقق المصادر العلمية." },
            { q: "المعدات/الأدوات المستخدمة في القياس:", ex: "مثال: استخدام نماذج تقييم غير معتمدة." },
            { q: "الإجراءات الوقائية لمنع تكرار الخطأ:", ex: "مثال: تعيين مدقق لغوي مستقل للمواد." },
            { q: "الخلاصة التنفيذية لمستوى الجودة:", ex: "مثال: الجودة متوسطة ولا نوصي بالنشر قبل التعديل." }
        ],
        "تقرير السلامة والصحة المهنية (HSE)": [
            { q: "تحديد المخاطر والتهديدات المرصودة:", ex: "مثال: كابلات كهربائية مكشوفة في قاعة التدريب." },
            { q: "مدى توفر وسائل الحماية الشخصية:", ex: "مثال: عدم ارتداء خوذ السلامة في الموقع الإنشائي." },
            { q: "جاهزية أنظمة الإنذار والإطفاء:", ex: "مثال: طفايات الحريق منتهية الصلاحية." },
            { q: "تقييم نظافة وترتيب بيئة العمل:", ex: "مثال: تراكم مخلفات البناء في ممرات الطوارئ." },
            { q: "الوعي الوقائي لدى الموظفين/العمال:", ex: "مثال: 50% من العمال لا يعرفون خطة الإخلاء." },
            { q: "الامتثال للتشريعات البيئية المحلية:", ex: "مثال: يتم حرق النفايات خلف المبنى." },
            { q: "سجل الإصابات والحوادث الوشيكة:", ex: "مثال: سقوط عامل من السلم الأسبوع الماضي." },
            { q: "كفاءة الإضاءة والتهوية في الموقع:", ex: "مثال: تهوية سيئة في مخزن المواد الكيميائية." },
            { q: "خطة الطوارئ وسيناريوهات الإخلاء:", ex: "مثال: مخرج الطوارئ مغلق بسلاسل حديدية." },
            { q: "التوصيات العاجلة لحماية الأرواح:", ex: "مثال: تغيير الكابلات وتفعيل الإنذار فوراً." }
        ]
    },
    "2. مسار الأثر والتقييم (Kirkpatrick)": {
        "تقرير تقييم أثر التدريب": [
            { q: "مستوى رضا المتدربين عن البرنامج:", ex: "مثال: تقييم الرضا 9/10 (ممتاز)." },
            { q: "مدى تحقيق الأهداف المعرفية (L2):", ex: "مثال: تحسن في الاختبار القبلي/البعدي بنسبة 45%." },
            { q: "التغير الملحوظ في السلوك الوظيفي (L3):", ex: "مثال: الموظف أصبح يستخدم نظام الأتمتة بدقة." },
            { q: "أثر التدريب على نتائج المؤسسة (L4):", ex: "مثال: تقليص زمن معالجة الطلبات بنسبة 20%." },
            { q: "حساب العائد المالي التقريبي (ROI):", ex: "مثال: توفير 5,000$ شهرياً من الهدر." },
            { q: "كفاءة المادة التدريبية والوسائل:", ex: "مثال: التمارين العملية كانت أكثر فاعلية من النظري." },
            { q: "أداء المدرب والقدرة على النقل المعرفي:", ex: "مثال: المدرب متمكن ولكن الوقت كان ضيقاً." },
            { q: "العوائق التي منعت تطبيق المهارات:", ex: "مثال: عدم توفر الصلاحيات التقنية للموظف." },
            { q: "الاستدامة المعرفية المتوقعة للأفراد:", ex: "مثال: المتدربون يحتاجون جلسة متابعة بعد شهر." },
            { q: "خطة التطوير المقترحة للمرحلة القادمة:", ex: "مثال: إطلاق المستوى المتقدم من نفس البرنامج." }
        ],
        // ... (سيتم ملء بقية الفروع الـ 25 بنفس النمط الصارم في الكود) ...
    }
};

export default function MansourFinalPlatform() {
    const [activeTab, setActiveTab] = useState('platform');
    const [selectedPillar, setSelectedPillar] = useState(Object.keys(methodology_db)[0]);
    const [selectedReport, setSelectedReport] = useState(Object.keys(methodology_db[selectedPillar])[0]);

    return (
        <div dir="rtl" style={{ fontFamily: "'Cairo', sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh", paddingBottom: "100px", color: "#2d3436" }}>
            <Head>
                <title>منصة المنصور الاستراتيجية</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>

            <style dangerouslySetInnerHTML={{__html: `
                body { margin: 0; background-color: #f8f9fa; }
                .executive-card { background: #fff; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #dfe6e9; border-top: 5px solid #d4af37; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                .sovereign-input { width: 100%; padding: 14px; border: 1px solid #ced4da; border-radius: 8px; background: #fff; color: #2d3436; margin-bottom: 15px; font-family: 'Cairo'; font-size: 15px; }
                .sovereign-input:focus { border-color: #0a192f; outline: none; box-shadow: 0 0 0 3px rgba(10,25,47,0.1); }
                .bottom-nav { position: fixed; bottom: 0; left: 0; width: 100%; background: #0a192f; display: flex; height: 75px; z-index: 1000; box-shadow: 0 -2px 10px rgba(0,0,0,0.1); }
                .bottom-nav button { flex: 1; background: none; border: none; color: #fff; font-family: 'Cairo'; font-weight: 700; cursor: pointer; transition: 0.3s; opacity: 0.7; }
                .bottom-nav button.active { opacity: 1; border-top: 4px solid #d4af37; color: #d4af37; }
                .btn-primary-sovereign { background: #0a192f; color: #fff; border: none; padding: 18px; border-radius: 8px; width: 100%; font-weight: 900; font-size: 17px; cursor: pointer; transition: 0.3s; }
                .btn-primary-sovereign:hover { background: #d4af37; color: #0a192f; }
                .gold-text { color: #d4af37; font-weight: 900; }
                .example-box { font-size: 13px; color: #636e72; background: #f1f2f6; padding: 10px; border-right: 4px solid #0a192f; border-radius: 4px; margin-bottom: 8px; }
                .package-card { background: #fff; padding: 30px; border-radius: 15px; border: 1px solid #dfe6e9; text-align: center; margin-bottom: 25px; transition: 0.3s; }
                .package-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); border-color: #d4af37; }
            `}} />

            <div style={{ padding: "20px", maxWidth: "650px", margin: "0 auto" }}>
                <header style={{ textAlign: "center", padding: "30px 0" }}>
                    <h1 style={{ color: "#0a192f", margin: 0, fontWeight: "900" }}>🏛️ منصة المنصور الاستراتيجية</h1>
                    <p style={{ color: "#d4af37", fontWeight: "700", marginTop: "10px" }}>نظام التحليل الاستراتيجي وأتمتة التقارير الدولية</p>
                </header>

                {activeTab === 'platform' && (
                    <>
                        <div className="executive-card">
                            <h4 className="gold-text" style={{ marginTop: 0 }}>📋 اختيار مسار التقرير</h4>
                            <label style={{ fontSize: "12px", color: "#636e72" }}>المسار الاستراتيجي:</label>
                            <select className="sovereign-input" value={selectedPillar} onChange={e => {setSelectedPillar(e.target.value); setSelectedReport(Object.keys(methodology_db[e.target.value])[0]);}}>
                                {Object.keys(methodology_db).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                            
                            <label style={{ fontSize: "12px", color: "#636e72" }}>الفرع التخصصي:</label>
                            <select className="sovereign-input" value={selectedReport} onChange={e => setSelectedReport(e.target.value)}>
                                {methodology_db[selectedPillar] && Object.keys(methodology_db[selectedPillar]).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                        </div>

                        <div className="executive-card">
                            <h4 className="gold-text" style={{ marginTop: 0 }}>📍 استكمال أبعاد التقرير (10 أبعاد)</h4>
                            {methodology_db[selectedPillar][selectedReport] ? methodology_db[selectedPillar][selectedReport].map((item, i) => (
                                <div key={i} style={{ marginBottom: "20px" }}>
                                    <label style={{ fontWeight: "700", display: "block", marginBottom: "8px" }}>{i+1}. {item.q}</label>
                                    <div className="example-box">{item.ex}</div>
                                    <textarea className="sovereign-input" rows="4" placeholder="يرجى كتابة التفاصيل المرصودة هنا..."></textarea>
                                </div>
                            )) : <p>برجاء اختيار المسار والفرع...</p>}
                            <button className="btn-primary-sovereign" onClick={() => alert("جاري الاتصال بمحرك Gemini لتحويل هذه البيانات إلى تقرير دولي معتمد...")}>توليد التقرير السيادي المعتمد 📄</button>
                        </div>
                    </>
                )}

                {activeTab === 'packages' && (
                    <div style={{ paddingBottom: "50px" }}>
                        <h2 style={{ textAlign: "center", color: "#0a192f", marginBottom: "30px" }}>💳 اشتراكات المنصة السيادية</h2>
                        {[
                            { name: "الباقة المجانية", price: "0$", desc: "3 تقارير شهرياً - أنواع محدودة", color: "#dfe6e9" },
                            { name: "الباقة الاحترافية", price: "29$/شهر", desc: "50 تقرير - جميع الأنواع - دعم AI", color: "#0a192f" },
                            { name: "باقة المؤسسات", price: "99$/شهر", desc: "تقارير غير محدودة - دعم الأولوية", color: "#d4af37" }
                        ].map((pkg, i) => (
                            <div className="package-card" key={i}>
                                <h2 style={{ color: pkg.color === "#dfe6e9" ? "#2d3436" : pkg.color, margin: 0 }}>{pkg.name}</h2>
                                <h1 style={{ fontSize: "35px", margin: "15px 0" }}>{pkg.price}</h1>
                                <p style={{ color: "#636e72", marginBottom: "25px" }}>{pkg.desc}</p>
                                <button className="btn-primary-sovereign" style={{ background: pkg.color === "#dfe6e9" ? "#0a192f" : pkg.color }} onClick={() => window.location.href = `https://wa.me/967774575749?text=أريد الاشتراك في ${pkg.name}`}>اشترك الآن</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <nav className="bottom-nav">
                <button className={activeTab === 'platform' ? 'active' : ''} onClick={() => setActiveTab('platform')}>🏠 المنصة</button>
                <button className={activeTab === 'packages' ? 'active' : ''} onClick={() => setActiveTab('packages')}>💳 الباقات</button>
                <button className={activeTab === 'admin' ? 'active' : ''} onClick={() => setActiveTab('admin')}>🛠️ الإدارة</button>
            </nav>
        </div>
    );
}
