import React, { useState } from 'react';
import Head from 'next/head';

// القاموس المنهجي المحدث: 25 مساراً × 10 أبعاد لكل مسار
const methodology_db = {
    "1. مسار الرقابة والامتثال (ISO 19011)": {
        "تقرير النزول الميداني الفني": [
            { q: "نطاق الفحص الفني (المكان، الزمان، الهدف):", m: "ISO 17020" },
            { q: "المنهجية المتبعة في الفحص والرصد:", m: "Audit Methodology" },
            { q: "الأدلة المادية والوقائع المرصودة ميدانياً:", m: "Physical Evidence" },
            { q: "تحليل الانحرافات عن المواصفات الهندسية:", m: "Technical Variance" },
            { q: "تقييم مخاطر السلامة الإنشائية/الفنية:", m: "Risk Matrix" },
            { q: "تحليل كفاءة الموارد المادية المستخدمة:", m: "Resource Efficiency" },
            { q: "رصد الامتثال للمعايير القانونية والبيئية:", m: "Legal Compliance" },
            { q: "تحليل السبب الجذري لأي خلل مرصود:", m: "RCA Analysis" },
            { q: "الإجراءات التصحيحية العاجلة المطلوبة:", e: "Corrective Action" },
            { q: "التوصية السيادية النهائية للموقع:", e: "Executive Advice" }
        ],
        "تدقيق الامتثال الإداري": [
            { q: "تحديد اللوائح والسياسات المرجعية للتدقيق:", m: "Policy Framework" },
            { q: "منهجية اختيار العينات المستندية:", m: "Sampling Tech" },
            { q: "نتائج فحص الدورة المستندية والصلاحيات:", m: "Process Audit" },
            { q: "تحديد فجوات الامتثال الإداري (إن وجدت):", m: "Gap Identification" },
            { q: "أثر عدم الامتثال على سمعة/قانونية الجهة:", m: "Impact Assessment" },
            { q: "تقييم نظام الرقابة الداخلية الحالي:", m: "Internal Control" },
            { q: "تحليل الشفافية والمساءلة في الإجراءات:", m: "Transparency" },
            { q: "رصد حالات تضارب المصالح أو التجاوزات:", m: "Conflict of Interest" },
            { q: "مقترحات معالجة الخلل الإداري:", e: "Administrative Cure" },
            { q: "الرأي الاستشاري النهائي في مستوى الحوكمة:", e: "Sovereign Opinion" }
        ],
        // ... سيتم تطبيق الـ 10 أبعاد على بقية الفروع الـ 23 بنفس الصرامة ...
    },
    // ... بقية المسارات الـ 5 الأساسية ...
};

export default function MansourSovereignV2() {
    const [activeTab, setActiveTab] = useState('platform');
    const [selectedPillar, setSelectedPillar] = useState(Object.keys(methodology_db)[0]);
    const [selectedReport, setSelectedReport] = useState(Object.keys(methodology_db[selectedPillar]) ? Object.keys(methodology_db[selectedPillar])[0] : "");

    return (
        <div dir="rtl" style={{ fontFamily: "'Cairo', sans-serif", backgroundColor: "#050505", minHeight: "100vh", paddingBottom: "100px", color: "#fff" }}>
            <Head>
                <title>منصة المنصور | النظام السيادي العالمي</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>

            <style dangerouslySetInnerHTML={{__html: `
                body { margin: 0; background-color: #050505; }
                .executive-card { background: #0f0f0f; padding: 25px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #1a1a1a; border-right: 8px solid #d4af37; }
                .input-sovereign { width: 100%; padding: 15px; border: 1px solid #222; border-radius: 8px; background: #000; color: #fff; margin-bottom: 20px; font-family: 'Cairo'; font-size: 15px; }
                .input-sovereign:focus { border-color: #d4af37; outline: none; }
                .bottom-nav { position: fixed; bottom: 0; left: 0; width: 100%; background: #000; border-top: 4px solid #d4af37; display: flex; height: 85px; z-index: 1000; }
                .bottom-nav button { flex: 1; background: none; border: none; color: #666; font-family: 'Cairo'; font-weight: 900; cursor: pointer; transition: 0.3s; }
                .bottom-nav button.active { color: #d4af37; background: #0a0a0a; }
                .btn-gold { background: linear-gradient(45deg, #d4af37, #b8860b); color: #000; border: none; padding: 20px; border-radius: 8px; width: 100%; font-weight: 900; font-size: 18px; cursor: pointer; }
                .dim-label { font-size: 11px; color: #d4af37; font-weight: 900; display: block; margin-bottom: 8px; text-transform: uppercase; }
            `}} />

            <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
                <header style={{ textAlign: "center", padding: "40px 0" }}>
                    <h1 style={{ color: "#d4af37", margin: 0, fontSize: "32px", fontWeight: "900" }}>🏛️ منصة المنصور الاستراتيجية</h1>
                    <div style={{ width: "50px", height: "3px", background: "#d4af37", margin: "15px auto" }}></div>
                    <p style={{ color: "#888", fontSize: "16px" }}>نظام صناعة التقارير السيادية وفق المعايير الدولية</p>
                </header>

                {activeTab === 'platform' && (
                    <>
                        <div className="executive-card">
                            <label className="dim-label">المسار الاستراتيجي:</label>
                            <select className="input-sovereign" value={selectedPillar} onChange={e => {setSelectedPillar(e.target.value); setSelectedReport(Object.keys(methodology_db[e.target.value])[0]);}}>
                                {Object.keys(methodology_db).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                            
                            <label className="dim-label">الفرع المنهجي:</label>
                            <select className="input-sovereign" value={selectedReport} onChange={e => setSelectedReport(e.target.value)}>
                                {Object.keys(methodology_db[selectedPillar]).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                        </div>

                        <div className="executive-card">
                            <h3 style={{ color: "#d4af37", marginTop: 0 }}>📍 مرحلة الاستقصاء المنهجي (10 أبعاد)</h3>
                            {methodology_db[selectedPillar][selectedReport] ? methodology_db[selectedPillar][selectedReport].map((item, i) => (
                                <div key={i}>
                                    <label style={{ display: "block", marginBottom: "10px", fontWeight: "700" }}>{i+1}. {item.q}</label>
                                    <span className="dim-label">المنهجية: {item.m || item.e}</span>
                                    <textarea className="input-sovereign" rows="4" placeholder="أدخل البيانات التفصيلية هنا..."></textarea>
                                </div>
                            )) : <p>جاري تحميل الأبعاد...</p>}
                            <button className="btn-gold">اعتماد وتوليد الوثيقة السيادية 📄</button>
                        </div>
                    </>
                )}

                {activeTab === 'packages' && (
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ color: "#d4af37", marginBottom: "30px" }}>💳 نظام تفعيل الباقات الماسية</h2>
                        {[
                            { n: "باقة البداية", p: "1,000 ريال", d: "3 تقارير استراتيجية" },
                            { n: "باقة التمكين", p: "1,500 ريال", d: "6 تقارير استراتيجية" },
                            { n: "الباقة التنفيذية", p: "2,500 ريال", d: "12 تقرير سيادي" }
                        ].map((pkg, i) => (
                            <div key={i} style={{ background: "#111", padding: "30px", borderRadius: "15px", border: "1px solid #d4af37", marginBottom: "20px" }}>
                                <h3 style={{ color: "#d4af37", margin: 0 }}>{pkg.n}</h3>
                                <h1 style={{ fontSize: "40px", margin: "15px 0" }}>{pkg.p}</h1>
                                <p style={{ color: "#888" }}>{pkg.d}</p>
                                <button className="btn-gold" style={{ padding: "12px" }} onClick={() => window.location.href=`https://wa.me/967774575749?text=أريد تفعيل ${pkg.n}`}>تفعيل عبر واتساب</button>
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
